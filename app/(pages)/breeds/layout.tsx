import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import styles from "../layout.module.scss";

export default function BreedsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div></div>
      <div className={`${styles.box2}`}>{children}</div>
    </>
  );
}
