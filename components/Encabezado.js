import { useEffect, useState } from 'react';
import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'


const Encabezado = () => {
    const [estilo, setEstilo] = useState()
    const [activa, setActiva] = useState('about')
    const { height, width } = useWindow()

    useEffect(() => {
        const estilosEncabezado = (height * 1.4 >= window.innerHeight && width <= 600 || height * 1.2 >= window.innerHeight && width > 600) ? styles.conGradiente : styles.encabezado
        setEstilo(estilosEncabezado)
    }, [height])


    const scrollSmooth = (id) => {
        setActiva(id)
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
                <a
                    name='about'
                    onClick={(e) => scrollSmooth(e.target.name)}
                >
                    About
                </a>
                <a
                    name='projects'
                    onClick={(e) => scrollSmooth(e.target.name)}
                    className={`${activa === 'projects' ? styles.activo : ''}`}
                >
                    Projects
                </a>
                <a
                    name='contact'
                    onClick={(e) => scrollSmooth(e.target.name)}
                    className={`${activa === 'contact' ? styles.activo : ''}`}
                >
                    Contact
                </a>
            </ul>
        </nav>
    );
}

export default Encabezado;