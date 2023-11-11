"use client";
import React from "react";
import styles from "./select.module.scss";
import { TDropdownItem } from "../../../types/dropdownItem";

type TColor = "primary" | "secondary";

interface ISelect {
  paramName: string;
  valueList: TDropdownItem[];
  label: string;
  color: TColor;
  currentValue: string;
  callback: (name: string, value: string) => void;
}

export function Select({
  paramName,
  valueList,
  label,
  color,
  currentValue,
  callback,
}: ISelect) {
  function setSearchParam(value: string) {
    /*const params = new URLSearchParams(searchParams);
    params.set(paramName as string, value);
    router.replace(`${pathname}?${params}`);
    params.set("flag", "noupdate");
    router.push(`${pathname}?${params}`);*/
  }

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <select
        name={paramName}
        defaultValue={currentValue}
        className={`${styles[color]} ${styles.select}`}
        onChange={(e) => {
          callback(paramName, e.target.value);
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
