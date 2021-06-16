import BotonConIcono from './BotonConIcono'
import styles from '../styles/Home.module.css'

const TarjetaProyecto = ({ proyecto }) => {
    const { nombre, descripcion, urlDemo, urlRepo, icono } = proyecto

    return (
        <div className={styles.tarjetaProyectos}>
            <span>{nombre}</span>
            <p>{descripcion}</p>
            <div>
                <BotonConIcono git url={urlRepo}  />
                <BotonConIcono url={urlDemo} icono={icono} />
            </div>
        </div>
    );
}

export default TarjetaProyecto;