import styles from '../styles/Home.module.css'

const Bienvenida = () => {
    return (
        <div className={styles.textoBienvenida}>
            <span className={styles.welcome}>Welcome!</span>
            <div className={styles.submensaje}>
                <h4>I'm Gabriel Mares, Frontend development
                and this is my personal site, here you can
                find repositories and demos about my jobs. {' '}
                At the bottom you will find my
                social networks and my resume. Also, if you want to
                be in touch with me, feel free to do so. </h4>
            </div>
        </div>
    );
}

export default Bienvenida;