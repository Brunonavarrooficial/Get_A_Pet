import { useState, useContext } from "react"
import Input from '../../form/Input'

import styles from '../../form/Form.module.css'

import { Context } from "../../../context/UserContext"
import { Link } from "react-router-dom"

export default function Login() {
    const [user, setUser] = useState({})
    const { login } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(user)

    }

    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input text={'E-mail'} type={'email'} name={'email'} placeholder={'Digite o seu E-mail'} handleOnChange={handleChange} />
                <Input text={'Senha'} type={'password'} name={'password'} placeholder={'Digite a sua Senha'} handleOnChange={handleChange} />
                <input type="submit" value={'Entrar'} />
            </form>
            <p>
                não tem conta? <Link to={'/register'}>Clique aqui</Link>
            </p>
        </section>
    )
}