import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { event, goBack } from '../lib/ga'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    event('finished', {
      event_category: 'navigation',
      event_label: 'finished'
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Believe! And repent!
        </h1>

        <p className={styles.description}>
          All God wants is for us to believe in Him and to repent.
          <br />
        </p>

        <blockquote className={styles.blockquote}>
          <strong>Mark 1:15 (CSB)</strong>
          <br />
          The time is fulfilled, and the kingdom of God has come near. Repent and believe the good news!
        </blockquote>

        <blockquote className={styles.blockquote}>
          <strong>John 5:24 (CSB)</strong>
          <br />
          Truly I tell you, anyone who hears my word and believes him who sent me has eternal life and will not come under judgment but has passed from death to life.
        </blockquote>

        <blockquote className={styles.blockquote}>
          <strong>Romans 10:9–13 (CSB)</strong>
          <br />
          9 If you confess with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. <br />
          10 One believes with the heart, resulting in righteousness, and one confesses with the mouth, resulting in salvation. <br />
          11 For the Scripture says, Everyone who believes on him will not be put to shame, <br />
          12 since there is no distinction between Jew and Greek, because the same Lord of all richly blesses all who call on him. <br />
          13 For everyone who calls on the name of the Lord will be saved.<br />
        </blockquote>


        <div className={styles.grid}>
          <Link href="/statement-4"><a className={styles.card} onClick={goBack}>
            <span><small>Click here<br /> to go back</small></span>
          </a>
          </Link>
          <div className={styles.card}>
            <h2>Do you want to talk?</h2>
            <p>Feel free to email me at <br />
              <a target="_blank" href="mailto:contact@yourafter.life" rel="noreferrer">contact@yourafter.life</a>
            </p>
          </div>
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
