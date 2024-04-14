import styles from "./home.module.scss";

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
