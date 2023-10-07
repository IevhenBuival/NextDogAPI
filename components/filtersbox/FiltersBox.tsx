import React from "react";
import styles from "./filterbox.module.scss";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { TSearchParsams } from "@/types/searchParams";

interface IFilterBox {
  searchParams: TSearchParsams;
}

export default function FiltersBox({ searchParams }: IFilterBox) {
  const sortDropdox = [
    { searchParam: "rand", itemText: "Random" },
    { searchParam: "asc", itemText: "Asc" },
    { searchParam: "Disc", itemText: "Discrice" },
  ];
  const typeDropdox = [
    { searchParam: "All", itemText: "All" },
    { searchParam: "static", itemText: "static" },
    { searchParam: "animated", itemText: "animeted" },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.cell}>
        <Dropdown
          searchParams={searchParams}
          paramName="sort"
          valueList={sortDropdox}
          label="ORDER"
        />
      </div>
      <div className={styles.cell}>
        <Dropdown
          searchParams={searchParams}
          paramName="type"
          valueList={typeDropdox}
          label="TYPE"
        />
      </div>
    </section>
  );
}
