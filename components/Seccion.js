const SeccionPortafolio = ({ id, clase, children }) => {
    return (
        <div id={id} className={clase}>
            {children}
        </div>
    );
}

export default SeccionPortafolio;