import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Encabezado from '../components/Header'
import BackGroundPage from '../components/BackGroundDefault'
import Bienvenida from '../components/MensajeBienvenida'
import { useWindow } from '../hook/useWindow'

export default function Home() {

  const { height } = useWindow();

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
          <div className={styles.contenedor} style={{ marginTop: height }}>
            <Bienvenida />
          </div>
        </BackGroundPage>


        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>
        <div><h2>mensajes</h2></div>

      </main>


    </div>
  )
}
