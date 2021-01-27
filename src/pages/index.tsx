import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard</h1>

        <div className={styles.grid}>
          <Link href="/organization-list">
            <a className={styles.card}>
              <h3>Organizations &rarr;</h3>
              <p>Find an organization.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
