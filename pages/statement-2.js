import Head from 'next/head'
import Link from 'next/link'
import { goBack, goStatement } from '../lib/ga'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Yes! And... no...
        </h1>

        <p className={styles.description}>
          There is also a judgement day which is coming:
        </p>

        <blockquote className={styles.blockquote}>
          <strong>Hebrews 9:27 (CSB)</strong>
          <br />
          And just as it is appointed for people to die once—and after this, judgment—
        </blockquote>

        <div className={styles.grid} onClick={goBack}>
          <Link href="/statement-1"><a className={styles.card}>
            <span><small>Click here<br /> to go back</small></span>
          </a>
          </Link>
          <Link href="/statement-3"><a className={styles.card} onClick={e => goStatement('statement-3')}>
            <h2>Pfft!</h2>
            <p>I won&apos;t face judgement, right? I am a good person!</p>

            <br />
            <span><small>Click here to continue</small></span>
          </a>

          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Copyright <Link href="/"><a>YourAfter.Life</a></Link> &copy; {new Date().getFullYear()}
          <br />
          <br />
          <br />
          <small>
            Scripture quotations marked CSB have been taken from the Christian Standard Bible®, <br />
            Copyright © 2017 by Holman Bible Publishers. Used by permission. <br />
            Christian Standard Bible® and CSB® are federally registered trademarks of Holman Bible Publishers.
          </small>
        </div>
      </footer>
    </div>
  )
}
