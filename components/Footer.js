import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Copyright{" "}
        <Link href="/">
          <a>YourAfter.Life</a>
        </Link>{" "}
        &copy; {new Date().getFullYear()}
        <br />
        <br />
        <br />
        <small>
          Scripture quotations marked CSB have been taken from the Christian
          Standard Bible®, <br />
          Copyright © 2017 by Holman Bible Publishers. Used by permission.{" "}
          <br />
          Christian Standard Bible® and CSB® are federally registered trademarks
          of Holman Bible Publishers.
        </small>
      </div>
    </footer>
  );
}
