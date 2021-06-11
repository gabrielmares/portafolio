import { useEffect, useState } from 'react';
import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'


const Encabezado = () => {
    const [estilo, setEstilo] = useState()
    const [activa, setActiva] = useState('about')
    const [proyectos, setProyectos] = useState()
    const { height } = useWindow()
    useEffect(() => {
        // se detecta la posicion del componente projects, es el de en medio
        setProyectos(document.getElementById('projects').offsetTop)
        if (proyectos / 2 > height) {
            console.log('about')
            setActiva('about')
        }
        else if (proyectos * 1.45 < height) {
            setActiva('contact')
        }
        else setActiva('projects')
        // colocamos el cambio de estilo en el encabezado, cuando el componente projects a alcanzado el top
        const estilosEncabezado = (height > document.getElementById('projects').offsetTop - 80) ? styles.conGradiente : styles.encabezado
        setEstilo(estilosEncabezado)

    }, [height])

    // funcion que hace scroll hasta donde se encuenta el componente a poner en pantalla
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
                <a
                    name='about'
                    className={`${(activa === 'about') ? styles.activo : ''}`}
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