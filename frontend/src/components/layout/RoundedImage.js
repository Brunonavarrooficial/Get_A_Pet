import styles from './RoundedImage.module.css'

export default function RoundedImage({ src, alt, width }) {
    return (
        <img
            className={`${styles.rounded_image} ${styles[width]}`}
            alt={alt}
            src={src}
        />
    )
}