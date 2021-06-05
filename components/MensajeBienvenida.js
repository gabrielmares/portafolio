import { useEffect, useState} from 'react'
import { useWindow } from '../hook/useWindow';
import styles from '../styles/Home.module.css'

const Bienvenida = () => {
    const [ancho, setAncho ]= useState(0)
    const { height } = useWindow();
    
    useEffect(() => {
            setAncho(window.innerWidth)
    }, [])
    if ((height > 305 && ancho>600) || (height>265 && height<426)) return null    
    return (
        <div className={styles.textoBienvenida} style={{ top: height }}>
            <span className={styles.welcome}>Welcome</span>
            <div className={styles.submensaje}>
                {
                    (height <= 295 ) &&
                (<h4>I'm Gabriel Mares, Software Development and</h4>)
                }
                {
                    (height <=280 ) &&
                    (<h4>this is my personal site, here you can find </h4>)
                }
                {
                    (height <= 265) &&
                    (<h4>repositories and demos about my jobs</h4>)
                }
            </div>
        </div>
    );
}

export default Bienvenida;