import React from "react";
import styles from "./filterbox.module.scss";

import { Select } from "../UI/Select/Select";
import { TBreedsList } from "@/types/dropdownItem";
import { Button } from "../UI/Button/Button";
import IconUpdate from "../howeredIcons/update";

interface IFiltersBox {
  breeds: TBreedsList[];
}
export default function FiltersBox({ breeds }: IFiltersBox) {
  const sortDropbox = [
    { searchParam: "rand", itemText: "Random" },
    { searchParam: "asc", itemText: "Asc" },
    { searchParam: "Disc", itemText: "Discrice" },
  ];

  const typeDropbox = [
    { searchParam: "All", itemText: "All" },
    { searchParam: "static", itemText: "static" },
    { searchParam: "animated", itemText: "animeted" },
  ];

  const breedsDropbox = breeds.map((el) => {
    return {
      searchParam: el.name,
      itemText: el.name,
    };
  });

  const limitDropbox = [
    { searchParam: "5", itemText: "5 items per pagell" },
    { searchParam: "10", itemText: "10 items per page" },
    { searchParam: "15", itemText: "15 items per page" },
    { searchParam: "20", itemText: "20 items per page" },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.cell}>
        <Select
          paramName="sort"
          valueList={sortDropbox}
          label="ORDER"
          color="primary"
        />
      </div>
      <div className={styles.cell}>
        <Select
          paramName="type"
          valueList={typeDropbox}
          label="TYPE"
          color="primary"
        />
      </div>
      <div className={styles.cell}>
        <Select
          paramName="breeds"
          valueList={breedsDropbox}
          label="BREEDS"
          color="primary"
        />
      </div>
      <div className={`${styles.cell} ${styles.flexcell}`}>
        <Select
          paramName="limit"
          valueList={limitDropbox}
          label="LIMIT"
          color="primary"
        />

        <Button type="small" href="/" nomargin>
          <IconUpdate />
        </Button>
      </div>
    </section>
  );
}
