import React from 'react';
import { FaGithub, FaFileInvoiceDollar, FaRegCalendarAlt } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import styles from '../styles/Home.module.css'
const Icono = {
    aml: GiTakeMyMoney,
    requests: FaFileInvoiceDollar,
    social: FaRegCalendarAlt
}
const Boton = ({ git, url, icono }) => {
    const IconoBoton = Icono[icono] || FaGithub
    const TextoBoton = git ? 'Repo' : url.includes('netlify') ? 'Demo' : 'Project' //validar el texto en el boton, los demos se publican en Netlify
    return (
        <button className={git ? styles.gitBoton : styles.demo} onClick={() => open(url)}>
            <IconoBoton className={styles.iconoBoton} />
            <label className={styles.textoBoton}>{TextoBoton}</label>
        </button>
    );
}
export default Boton;