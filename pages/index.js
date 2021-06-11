import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Encabezado from '../components/Encabezado'
import BackGroundPage from '../components/FondoPrincipal'
import Bienvenida from '../components/MensajeBienvenida'
import Dispositivo from '../components/Dispositivo'
import { useEffect } from 'react'
import { useWindow } from '../hook/useWindow'

export default function Home() {
  const { height } = useWindow()

  useEffect(() => {
    const posicionAcerca = document.getElementById('about').offsetTop;
    const posicionProyectos = document.getElementById('projects').offsetTop;
    

  }, [height])
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio, Gabriel Mares</title>
        <meta name="description" content="Portfolio diseñado con NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Encabezado />
        <BackGroundPage>
          <div id='about' className={styles.contenedor}>
            <Bienvenida />
            <Dispositivo />
          </div>
        </BackGroundPage>


        <div id='projects' className={styles.bloqueProyectos}>
          <img
            src='/underConstruction.png'
            alt='Pagina en construccion'
            className={styles.bajoConstruccion}
          />
        </div>
        <div id='contact' className={styles.redes}>
          <span>Lista de redes sociales disponibles</span>
        </div>
      </main>




    </div>
  )
}
