"use client";
import React from "react";
import styles from "./select.module.scss";
import { TDropdownItem } from "../../../types/dropdownItem";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type TColor = "primary" | "secondary";

interface ISelect {
  paramName: string;
  valueList: TDropdownItem[];
  label: string;
  color: TColor;
}

export function Select({ paramName, valueList, label, color }: ISelect) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setSearchParam(value: string) {
    const params = new URLSearchParams(searchParams);
    params.set(paramName as string, value);
    router.replace(`${pathname}?${params}`);
  }

  const currentValue =
    searchParams.get(paramName as string) || (valueList[0].itemText as string); //[sort || "sort"];

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <select
        defaultValue={currentValue}
        className={`${styles[color]} ${styles.select}`}
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
      >
        {valueList.map((el) => {
          return (
            <option key={el.itemText} value={el.searchParam}>
              {el.itemText}
            </option>
          );
        })}
      </select>
    </div>
  );
}
