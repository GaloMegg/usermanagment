import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InfoRows from './components/InfoRows'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>User Managment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main>
  <InfoRows/>
</main>
    </div>
  )
}

export default Home
