import Footer from '../components/Footer'
import LinkCard from '../components/LinkCard'
import styles from '../styles/Home.module.css'

export default function Home({statement}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{__html: statement.title}} />

        <p className={styles.description} dangerouslySetInnerHTML={{__html: statement.description}} />

        <div className={styles.grid}>
          {statement.links.map((link, index) => (
            <LinkCard key={link.id} link={link} />
          ))} 
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host
  const protocol = host.startsWith('localhost') ? 'http' : 'https'
  const url = `${protocol}://${host}/api/statements/0`

  const data = await fetch(url).then(res => res.json())

  return {
    props: {
      statement: data
    },
  }
}