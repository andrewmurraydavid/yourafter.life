import Head from 'next/head'
import Link from 'next/link'
import { goBack, goStatement } from '../lib/ga'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Your actions will be judged!
        </h1>

        <p className={styles.description}>
          On that judgement day, God will judge everyone, except those <br />
          who&apos;s names are written in the Book of life.
        </p>

        <blockquote className={styles.blockquote}>

          <strong>Revelation 20:11–15 (CSB)</strong>
          <br />
          11 Then I saw a great white throne and one seated on it. Earth and heaven fled from his presence, and no place was found for them. <br />
          12 I also saw the dead, the great and the small, standing before the throne, and books were opened. Another book was opened, which is the Book of life, and the dead were judged according to their works by what was written in the books. <br />
          13 Then the sea gave up the dead that were in it, and death and Hades gave up the dead that were in them; each one was judged according to their works. <br />
          14 Death and Hades were thrown into the lake of fire. This is the second death, the lake of fire. <br />
          15 And anyone whose name was not found written in the Book of life was thrown into the lake of fire.<br />
        </blockquote>


        <div className={styles.grid}>
          <Link href="/statement-2"><a className={styles.card} onClick={goBack}>
            <span><small>Click here<br /> to go back</small></span>
          </a>
          </Link>
          <Link href="/statement-4"><a className={styles.card} onClick={goStatement('statement-4')}>
            <h2>Book of life?!</h2>
            <p>How do I get my name there?</p>

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
