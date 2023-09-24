import Image from "next/image";
import styles from "./home.module.scss";

const img = (
  <Image
    src="/vercel.svg"
    alt="Vercel Logo"
    className={styles.vercelLogo}
    width={100}
    height={24}
    priority
  />
);
export default function Home() {
  return (
    <div className={`${styles.container} ${styles.container_colored}`}>
      <div className={`${styles.main_bg} `}>
        <div className={`${styles.content}`}>
          <div className={`${styles.box}`}></div>
        </div>
      </div>
    </div>
  );
}
