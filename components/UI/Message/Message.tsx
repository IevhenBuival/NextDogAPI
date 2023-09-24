import React from "react";
import style from "./message.module.scss";
interface IMessage {
  message: string;
}
export default function Message({ message }: IMessage) {
  return (
    <div className={style.container}>
      <div className={style.text}>{message}</div>
    </div>
  );
}
