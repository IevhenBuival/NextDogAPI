import Link from "next/link";
import styles from "./button.module.scss";
import React from "react";

interface IButton {
  type: string;
  href: string;
  children: React.ReactNode;
  nomargin?: boolean;
  activated?: boolean;
  pending: boolean;
  tabindex?: number;
}
export function Button({
  type,
  href,
  children,
  nomargin,
  activated,
  pending = false,
}: IButton) {
  const styleForType = {
    small: styles.btn40,
    big: styles.btn60,
    primary: styles.primary,
    secondary: styles.secondary,
    upload: styles.upload,
    foto: styles.foto,
    breeds: styles.breeds,
  };
  type ObjectKey = keyof typeof styleForType;

  return (
    <>
      {pending ? (
        <div
          className={`${styleForType[type as ObjectKey]} ${
            nomargin ? styles.m_none : ""
          } ${activated ? styles.active : ""}`}
        >
          {children}
        </div>
      ) : (
        <Link
          href={href}
          tabIndex={-1}
          prefetch={false}
          className={`${styleForType[type as ObjectKey]} ${
            nomargin ? styles.m_none : ""
          } ${activated ? styles.active : ""}`}
          aria-disabled={pending}
        >
          {children}
        </Link>
      )}
    </>
  );
}
