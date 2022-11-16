import Head from 'next/head'
import Link from 'next/link'
import { goBack, goStatement } from '../lib/ga'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          It&apos;s simple! Believe!
        </h1>

        <p className={styles.description}>
          Ugh... That word Christians like to use... <br />
          Let me explain!
        </p>
        <p className={styles.description}>
          The Bible states that <strong>God</strong> is the <strong>true</strong> God
          and that <strong>Jesus</strong> is the <strong>Son</strong> of God,
          yet <strong>Jesus</strong> is also <strong>the one true God</strong>.
        </p>

        <p className={styles.description}>
          The Bible also says that Jesus was perfect and sinless, and that he was born
          of the virgin Mary, He was not cursed with sin as those who come from human lineage.
        </p>

        <p className={styles.description}>
          The cost of sin is death, animal blood was used to <strong>cover</strong> the sin
          of man, but it could not clean man of it. Only perfect, sinless, divine blood, could
          wash mankind of sin.
        </p>

        <p className={styles.description}>
          Thus Jesus died on a cross, shedding His Blood on that tree (the cross) washing away
          the sin of mankind. Furthermore, Jesus was raised from the dead, conquering death
          showing His power as God, sovereign over all things.
        </p>

        <p className={styles.description}>
          But, to be written in the Book of life, there is <strong>one</strong> thing thing you must do!
        </p>

        <div className={styles.grid}>
          <Link href="/statement-3"><a className={styles.card} onClick={goBack}>
            <span><small>Click here<br /> to go back</small></span>
          </a>
          </Link>
          <Link href="/statement-5"><a className={styles.card} onClick={goStatement('statement-5')}>
            <h2>What must I do?</h2>
            <p className={styles.description}>I want to know!</p>

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
