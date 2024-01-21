import React from "react";
import style from "./messagebox.module.scss";
import Image from "next/image";
interface IMessageBox {
  message: String;
  type: "success" | "error";
}
export default function MessageBox({ message, type }: IMessageBox) {
  return (
    <div className={style.container}>
      {type === "success" ? (
        <Image src=".\vector-stroke.svg" alt="vector" width="20" height="20" />
      ) : (
        <Image src=".\deny-stroke.svg" alt="deny" width="20" height="20" />
      )}
      <div className={style.text}>{message}</div>
    </div>
  );
}
