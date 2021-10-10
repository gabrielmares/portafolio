import styles from '../styles/Home.module.css'

const Red = ({ red }) => {
    const { Icono, link, color, descripcion } = red

    return (
        <div style={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            margin: 15
        }}>
            <Icono
                className={styles.iconoRedes}
                style={{ color }}
                onClick={() => open(link)}
            />
            <label className={styles.linkPath}>
                {descripcion}
            </label>
        </div>
    );
}

export default Red;