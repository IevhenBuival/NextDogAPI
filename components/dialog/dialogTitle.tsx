import React from "react";
import { Button } from "../UI/Button/Button";
import IconCross from "../Icons/cross";
import styles from "./dialog.module.scss";
import Link from "next/link";

interface IDialogTitle {
  href: string;
}
export default function DialogTitle({ href }: IDialogTitle) {
  return (
    <section className={styles.headSection}>
      <div className={styles.exit}>
        <Button href={href} type="small" nomargin pending={false}>
          <IconCross />
        </Button>
      </div>
      <div className={styles.centredFlex}>
        <h2 className={styles.h2}>Upload a .jpg or .png Dog Image</h2>
        <h3 className={styles.h3}>
          Any uploads must comply with the{" "}
          <span className={styles.pink}>
            <Link href="https://thedogapi.com/privacy">upload guidelines</Link>
          </span>{" "}
          or face deletion.
        </h3>
      </div>
    </section>
  );
}
