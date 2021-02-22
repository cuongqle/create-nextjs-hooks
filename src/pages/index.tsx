import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Nextjs Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/memo">
            <a className={styles.card}>
                <h3>Memo &rarr;</h3>
                <p>Help to understand React memo vs useMemo hook.</p>
            </a>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="/organizations">
              <a className={styles.card}>
                  <h3>Custom hook &rarr;</h3>
                  <p>Example of custom hook to fetch data.</p>
              </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
