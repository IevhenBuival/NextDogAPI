import Link from "next/link";
import styles from "./button.module.scss";

interface IButton {
  type: string;
  href: string;
  children: React.ReactNode;
  nomargin?: boolean;
  activated?: boolean;
}
export function Button({ type, href, children, nomargin, activated }: IButton) {
  const styleForType = {
    small: styles.btn40,
    big: styles.btn60,
    primary: styles.primary,
    secondary: styles.secondary,
  };
  type ObjectKey = keyof typeof styleForType;

  return (
    <Link
      href={href}
      className={`${styleForType[type as ObjectKey]} ${
        nomargin ? styles.m_none : ""
      } ${activated ? styles.active : ""}`}
    >
      {children}
    </Link>
  );
}
