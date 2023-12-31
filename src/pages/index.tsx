import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import PageCreator from '@/components/nav/pagecreator/pagecreator';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Tesla Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageCreator />
      </main>
    </>
  )
}
