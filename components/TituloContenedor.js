import styles from '../styles/Home.module.css'

const ContactoTexto = ({ texto }) => {
    return (
        <span className={styles.contactoTexto}>{texto}</span>
    );
}

export default ContactoTexto;