import styles from '../styles/Home.module.css'

const BackGroundPage = ({ children }) => {

    return (
        <div className={styles.grandiente}>
            {children}
        </div>
    );
}

export default BackGroundPage;