import Link from "next/link";
import styles from "../styles/Home.module.css";

import { goBack, goStatement } from "../lib/ga";

export default function LinkCard(props) {
  const { link, back } = props;

  if (back) {
    return (
      <Link href={back}>
        <a className={styles.card} onClick={goBack}>
          <span>
            <small>
              Click here
              <br /> to go back
            </small>
          </span>
        </a>
      </Link>
    );
  }

  return (
    <Link href={link.to}>
      <a className={styles.card} onClick={(e) => goStatement(link.to)}>
        <h2 dangerouslySetInnerHTML={{ __html: link.title }} />
        <p dangerouslySetInnerHTML={{ __html: link.subtitle }} />
        <br />
        {link.id !== "email" && (
          <span>
            <small>Click here to continue</small>
          </span>
        )}
      </a>
    </Link>
  );
}
