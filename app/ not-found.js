import Link from "next/link";
import styles from "./404.module.scss";
export default function Error404() {
  return (
    <>
      <h1 className={styles.error}>Error 404:</h1>
      <p className={styles.message}>
        Pleace <Link href={"/"}>go to Home Page</Link>
      </p>
    </>
  );
}
