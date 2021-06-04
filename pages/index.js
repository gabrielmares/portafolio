import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Encabezado from '../components/Header'
import BackGroundPage from '../components/BackGroundDefault'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio, Gabriel Mares</title>
        <meta name="description" content="Portfolio diseñado con NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Encabezado />
        <BackGroundPage />
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
