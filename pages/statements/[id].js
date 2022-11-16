import LinkCard from "../../components/LinkCard";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";

export default function Statement(props) {
  const { statement } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: statement.title }}
        />

      {typeof statement.description === 'string' ? (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: statement.description }}
        />
      ) : (
        statement.description?.map((paragraph, index) => (
          <p
            key={index}
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))
      )}

        {statement.verses?.map((verse, index) => (
          <blockquote className={styles.blockquote} key={verse.id}>
            <strong>{verse.ref}</strong>
            <br />
            { typeof verse.text === 'string' ? (
            <span dangerouslySetInnerHTML={{ __html: verse.text }} />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: verse.text.join('<br />') }} />
            )}
          </blockquote>
        ))}

        <div className={styles.grid}>
          <LinkCard back={statement.back} />

          {statement.links?.map((link, index) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const host = context.req.headers.host;
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const url = `${protocol}://${host}/api/statements/${id}`;

  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      statement: data,
    },
  };
}
