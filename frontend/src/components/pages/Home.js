import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import api from "../../utils/api"

import styles from './Home.module.css'

export default function Home() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        api.get('/pets').then((response) => {
            setPets(response.data.pets)
            console.log(pets)
        })
    }, [])

    return (
        <section>
            <h1>Home</h1>
        </section>
    )
}