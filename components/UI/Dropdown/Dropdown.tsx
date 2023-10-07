import React from "react";
import styles from "./dropdown.module.scss";
import Link from "next/link";
import Image from "next/image";
import { TSearchParsams } from "../../../types/searchParams";
import { TDropdownItem } from "../../../types/dropdownItem";

interface IDropdown {
  searchParams: TSearchParsams;
  paramName: string;
  valueList: TDropdownItem[];
  label: string;
}
export function Dropdown({
  searchParams,
  paramName,
  valueList,
  label,
}: IDropdown) {
  const currentValue =
    searchParams[paramName as string] || (valueList[0].itemText as string); //[sort || "sort"];

  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.field}>
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
        <ul className={styles.box}>
          {valueList.map((el) => {
            const searchFilter = { ...searchParams };
            searchFilter[paramName as string] = el.searchParam;
            const sort = searchFilter.sort as string;
            return (
              <li key={el.itemText}>
                <Link
                  href={`?${new URLSearchParams({
                    ...searchFilter,
                    sort: sort || "Rand",
                  })}`}
                >
                  {el.itemText}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
