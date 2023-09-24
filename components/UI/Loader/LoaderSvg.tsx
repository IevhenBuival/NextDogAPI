import React from "react";
import styles from "./loader.module.scss";
import Image from "next/image";

export function LoaderSvg() {
  return (
    <div className={styles.svg}>
      <Image
        src="/loader.svg"
        alt="loader icon"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
