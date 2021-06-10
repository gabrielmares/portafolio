import { useEffect, useState } from 'react';
import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'


const Encabezado = () => {
    const [estilo, setEstilo] = useState()
    const { height } = useWindow()

    useEffect(() => {
        const estilosEncabezado = (height * 2.5 >= window.innerHeight) ? styles.conGradiente : styles.encabezado
        setEstilo(estilosEncabezado)
    }, [height])


    const scrollSmooth = (id) => {
        const reference = document.getElementById(id)
        window.scrollTo({
            top: reference.offsetTop,
            behavior: 'smooth'
        })
    }


    return (
        <nav className={estilo}>
            <span className={styles.title}>Gabriel Mares</span>
            <ul className={styles.enlaces}>
                <a onClick={() => scrollSmooth('about')}>About</a>
                <a onClick={() => scrollSmooth('projects')} > Projects</a>
                <a onClick={() => scrollSmooth('contact')}> Contact</a>
            </ul>
        </nav>
    );
}

export default Encabezado;