import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import styles from "../layout.module.scss";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.flex_right}>
        <Button type="secondary" href="">
          <Image
            className={styles.mr}
            src="/upload-16.svg"
            alt="search icon"
            width={16}
            height={16}
            priority
          />
          <p> UPLOAD</p>
        </Button>
      </div>
      <div className={`${styles.box2}`}>{children}</div>
    </>
  );
}
