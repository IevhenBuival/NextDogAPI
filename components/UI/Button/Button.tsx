import Link from "next/link";
import styles from "./button.module.scss";
interface IButton {
  type: string;
  href: string;
  children: React.ReactNode;
}
export function Button({ type, href, children }: IButton) {
  const styleForType = {
    small: styles.btn40,
    big: styles.btn60,
    primary: styles.primary,
    secondary: styles.secondary,
  };
  type ObjectKey = keyof typeof styleForType;

  return (
    <Link href={href} className={styleForType[type as ObjectKey]}>
      {children}
    </Link>
  );
}
