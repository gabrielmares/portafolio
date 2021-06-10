import styles from '../styles/Home.module.css'

const Bienvenida = () => {
    return (
        <div className={styles.textoBienvenida}>
            <span className={styles.welcome}>Welcome!</span>
            <div className={styles.submensaje}>
                <h4>I'm Gabriel Mares, Software Development
                and this is my personal site, here you can
                find repositories and demos about my jobs. {' '}
                Even, at the bottom you can find my resume
                 and my social network's</h4>
            </div>
        </div>
    );
}

export default Bienvenida;

// About Me

//  If you want to be in touch with me, feel free to do on my LinkedIn
