import { useState } from 'react'

import styles from './Form.module.css'

import Input from './Input'
import Select from './Select'

export default function PetForm({ handleSubmit, petData, btnText }) {
    const [pet, setPet] = useState(petData || {})
    const [preview, setPreview] = useState([])
    const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado']

    function onFileChange(e) {
        setPreview(Array.from(e.target.files))
        setPet({ ...pet, images: [...e.target.files] })
    }
    function handleColor(e) {
        setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text })
    }
    function handleChange(e) {
        setPet({ ...pet, [e.target.name]: e.target.value })
    }
    function submit(e) {
        e.preventDefault()
        handleSubmit(pet)
    }

    return (
        <form onSubmit={submit} className={styles.form_container}>
            <div className={styles.preview_pet_images}>
                {preview.length > 0
                    ? preview.map((image, index) => (
                        <img
                            src={URL.createObjectURL(image)}
                            alt={pet.name}
                            key={`${pet.name}+${index}`}
                        />
                    )) :
                    pet.images && pet.images.map((image, index) => (
                        <img
                            src={`${process.env.REACT_APP_API}images/pets/${image}`}
                            alt={pet.name}
                            key={`${pet.name}+${index}`}
                        />
                    ))
                }
            </div>
            <Input
                text={'Imagens do Pet'}
                type={'file'}
                name={'images'}
                handleOnChange={onFileChange}
                multiple={true}
            />
            <Input
                text={'Nome do Pet'}
                type={'text'}
                name={'name'}
                placeholder={'Digite o nome'}
                handleOnChange={handleChange}
                value={pet.name || ''}
            />
            <Input
                text={'Idade do Pet'}
                type={'number'}
                name={'age'}
                placeholder={'Digite a idade'}
                handleOnChange={handleChange}
                value={pet.age || ''}
            />
            <Input
                text={'Peso do Pet'}
                type={'number'}
                name={'weight'}
                placeholder={'Digite o peso'}
                handleOnChange={handleChange}
                value={pet.weight || ''}
            />
            <Select
                text={'Selecione a cor'}
                name={'color'}
                options={colors}
                handleOnChange={handleColor}
                value={pet.color || ''}
            />
            <input type='submit' value={btnText} />
        </form>
    )
}