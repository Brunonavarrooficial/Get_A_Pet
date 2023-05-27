import { useState } from 'react'
import useFlashMessage from '../../../hooks/useFlashMessage'

import { useNavigate } from 'react-router-dom'

import api from '../../../utils/api'

import styles from './AddPet.module.css'
import PetForm from '../../form/PetForm'

export default function AddPet() {
    return (
        <section className={styles.addpet_header}>
            <div>
                <h1>Cadastre um Pet</h1>
                <p>Depois ele ficará disponivel para adoção</p>
            </div>
            <PetForm btnText={'Cadastrar Pet'} />
        </section>
    )
}