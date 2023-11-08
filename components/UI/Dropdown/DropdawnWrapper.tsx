"use client";
import { useState } from "react";
import styles from "./dropdown.module.scss";
import Image from "next/image";

interface IDropdownWrapper {
  children: string;
  label: string;
  currentValue: string;
}
export function DropdownWrapper({
  children,
  label,
  currentValue,
}: IDropdownWrapper) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.field}>
        <div className={styles.field} onClick={() => setIsOpen((val) => !val)}>
          <span> {currentValue}</span>
          <span>
            <Image
              src="/dropdown-12.svg"
              alt="dropdown-12"
              className={styles.img}
              width={12}
              height={12}
              priority
            />
          </span>
        </div>
        {isOpen && children}
      </div>
    </div>
  );
}
