import Head from "next/head";
import { Inter } from 'next/font/google';
import styles from "./page.module.css";

export default function Home() {
  return(
    <>
      <Head>
        <title>Dešbord</title>
        <meta name="description" content="Dešbord" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
