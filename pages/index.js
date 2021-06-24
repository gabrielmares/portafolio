import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Encabezado from '../components/Encabezado'
import BackGroundPage from '../components/FondoPrincipal'
import Bienvenida from '../components/MensajeBienvenida'
import Dispositivo from '../components/Dispositivo'
import TarjetaProyecto from '../components/TarjetaProyecto'
import Proyectos, { redes } from '../projects'
import ContactoTexto from '../components/Contacto'
import Red from '../components/ContactoRedes'

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
        <BackGroundPage>
          <div id='about' className={styles.contenedor}>
            <Bienvenida />
            <Dispositivo />
          </div>
        </BackGroundPage>


        <div id='projects' className={styles.bloqueProyectos}>
          {Proyectos.map((proyecto) => (
            <TarjetaProyecto
              key={proyecto.nombreAlterno}
              proyecto={proyecto}
            />
          ))}
        </div>
        <div id='contact' className={styles.redes}>
          <ContactoTexto />
          <div className={styles.contenedorRedes}>
            {redes.map((red) => (
              <Red
                key={red.link}
                red={red}
              />
            ))}
          </div>
        </div>
      </main>




    </div>
  )
}
