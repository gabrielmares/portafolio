import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'


const Encabezado = () => {
    const { height } = useWindow()
    const estilosEncabezado = (height * 1.2 >= window.innerHeight ) ? styles.conGradiente : styles.encabezado
    console.log(height)
    return (
        <nav className={estilosEncabezado} >
            <span className={styles.title}>GABRIEL MARES</span>
            <ul className={styles.enlaces}>
                <a>About</a>
                <a>Proyects</a>
                <a>Contact</a>
            </ul>
        </nav>
    );
}

export default Encabezado;