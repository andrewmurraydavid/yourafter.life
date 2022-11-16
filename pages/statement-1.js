import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { goBack, goStatement } from '../lib/ga'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Good news!
        </h1>

        <p className={styles.description}>
          It turns out there is an after life! <br />
          Here is what God says about after life:
        </p>

        <blockquote className={styles.blockquote}>
          <strong>1 John 2:25 (CSB)</strong>
          <br />
          And this is the promise that he himself made to us: eternal life.
        </blockquote>

        <div className={styles.grid}>
          <Link href="/"><a className={styles.card} onClick={goBack}>
            <span><small>Click here<br /> to go back</small></span>
          </a>
          </Link>
          <Link href="/statement-2"><a className={styles.card} onClick={e => goStatement('statement-2')}>
            <h2>Great!</h2>
            <p>So I have eternal life, right?</p>
            <br />
            <span><small>Click here to continue</small></span>
          </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
