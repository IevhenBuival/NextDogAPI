"use client";
import React from "react";
import styles from "./select.module.scss";
import { TDropdownItem } from "../../../types/dropdownItem";

type TColor = "primary" | "secondary";
type TSize = "container1fr" | "container";

interface ISelect {
  paramName: string;
  valueList: TDropdownItem[];
  label: string;
  color: TColor;
  currentValue: string;
  callback: (name: string, value: string) => void;
  size: TSize;
}

export function Select({
  paramName,
  valueList,
  label,
  color,
  currentValue,
  callback,
  size = "container",
}: ISelect) {
  return (
    <div className={`${styles[size]}`}>
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
