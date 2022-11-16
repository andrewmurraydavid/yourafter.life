import LinkCard from "../components/LinkCard";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Statement() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hmm... Not found...</h1>

        <div className={styles.grid}>
          <LinkCard back="/" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
