"use client";
import React from "react";
import styles from "./dropdown.module.scss";
import Link from "next/link";
import Image from "next/image";
//import { TSearchParsams } from "../../../types/searchParams";
import { TDropdownItem } from "../../../types/dropdownItem";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface IDropdown {
  paramName: string;
  valueList: TDropdownItem[];
  label: string;
}
export function Dropdown({ paramName, valueList, label }: IDropdown) {
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
  /*
  const manual = (
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
  const newLink = (props: { href: string; children: React.ReactNode }) => {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  };
  */
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <select
        defaultValue={currentValue}
        className={styles.select}
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
      >
        {valueList.map((el) => {
          return (
            <option key={el.itemText} value={el.itemText}>
              {el.itemText}
            </option>
          );
        })}
      </select>
    </div>
  );
}
