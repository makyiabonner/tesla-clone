import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Nav from '@/components/nav/nav'
import PageCreator from '@/components/nav/pagecreator/pagecreator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav/>
        <video className={`w-100 ${styles.video}`} autoPlay loop muted>
          <source src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4' type="video/mp4" />
        </video>
        <section className={styles.hero_section}>
          <div className='d-flex flex-column align-items-center'>
            <h1 className={styles.h1}>Experience Tesla</h1>
            <p className={styles.p}>Schedule a Demo Drive Today</p>
          </div>
          <button className={styles.page_light_button}>Demo Drive</button>
        </section>
        <PageCreator/>
      </main>
    </>
  )
}
