import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import styles from "../layout.module.scss";
import IconUpload from "@/components/howeredIcons/upload";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.flex_right}>
        <Button type="secondary" href="">
          <IconUpload />

          <p> UPLOAD</p>
        </Button>
      </div>
      <div className={`${styles.box2}`}>{children}</div>
    </>
  );
}
