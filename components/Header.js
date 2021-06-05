import { useEffect, useState } from 'react';
import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'


const Encabezado = () => {
    const [estilo, setEstilo] = useState()
    const { height } = useWindow()

    useEffect(() => {
        const estilosEncabezado = (height * 1.3 >= window.innerHeight) ? styles.conGradiente : styles.encabezado
        setEstilo(estilosEncabezado)
    }, [height])


    return (
        <nav className={estilo} >
            <h3 className={styles.title}>Gabriel Mares</h3>
            <ul className={styles.enlaces}>
                <a>About</a>
                <a>Proyects</a>
                <a>Contact</a>
            </ul>
        </nav>
    );
}

export default Encabezado;