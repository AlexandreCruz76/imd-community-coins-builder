import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>IMD Community Coins Builder</title>
        <meta name="description" content="Builder para lançamento de tokens no protocolo IMD Community Coins" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          IMD Community Coins Builder
        </h1>

        <p className={styles.description}>
          Construa e lance tokens no protocolo IMD Community Coins
        </p>

        <div className={styles.grid}>
          <a href="https://communitycoins.imd.fun/docs" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Documentação &rarr;</h2>
            <p>Leia a documentação completa do protocolo IMD Community Coins.</p>
          </a>

          <a href="/launch" className={styles.card}>
            <h2>Lançar Token &rarr;</h2>
            <p>Siga o passo a passo para lançar seu token no protocolo.</p>
          </a>

          <a href="/agents" className={styles.card}>
            <h2>Agentes &rarr;</h2>
            <p>Conheça os agentes do builder e seus prompts.</p>
          </a>

          <a href="/contracts" className={styles.card}>
            <h2>Contratos &rarr;</h2>
            <p>Veja os contratos e endereços importantes do protocolo.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by IMD Community
        </a>
      </footer>
    </div>
  )
}

export default Home
