"use client";
import React, { useTransition } from "react";
import styles from "./filterbox.module.scss";

import { Select } from "../UI/Select/Select";
import { TBreedsList } from "@/types/dropdownItem";
import { Button } from "../UI/Button/Button";
import IconUpdate from "../Icons/update";
import { TSearchParams } from "@/types/searchParams";

import { useFilterData, setFilterData } from "../../app/store/store";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

interface IFiltersBox {
  breeds: TBreedsList[];
  searchParams: TSearchParams;
}

export default function FiltersBox({ breeds, searchParams }: IFiltersBox) {
  const [isPending, startTransition] = useTransition();
  const clientSearchParams = useSearchParams();
  const pathName = usePathname();
  const Router = useRouter();
  const filterData = useFilterData();
  const dispatch = useDispatch();
  const sortDropbox = [
    { searchParam: "RANDOM", itemText: "Random" },
    { searchParam: "ASC", itemText: "Asc" },
    { searchParam: "DESC", itemText: "Desc" },
  ];

  const typeDropbox = [
    { searchParam: "all", itemText: "All" },
    { searchParam: "static", itemText: "Static" },
    { searchParam: "animated", itemText: "Animated" },
  ];

  const breedsDropbox = breeds.map((el) => {
    return {
      searchParam: el.id,
      itemText: el.name,
    };
  });

  breedsDropbox.unshift({ searchParam: "none", itemText: "None" });

  const limitDropbox = [
    { searchParam: "5", itemText: "5 items per page" },
    { searchParam: "10", itemText: "10 items per page" },
    { searchParam: "15", itemText: "15 items per page" },
    { searchParam: "20", itemText: "20 items per page" },
  ];

  const filtersState: TSearchParams = {
    sort:
      (searchParams?.sort as string) ||
      filterData.sort ||
      sortDropbox[0].searchParam,
    type:
      (searchParams?.type as string) ||
      filterData.type ||
      typeDropbox[0].searchParam,
    breeds:
      (searchParams?.breed as string) ||
      filterData.breed ||
      breedsDropbox[0].searchParam,
    limit:
      (searchParams?.limit as string) ||
      filterData.limit ||
      limitDropbox[0].searchParam,
  };

  const filterCallback = async (name: string, value: string) => {
    dispatch(setFilterData({ name, value }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.cell}>
        <Select
          paramName="sort"
          valueList={sortDropbox}
          label="ORDER"
          color="primary"
          currentValue={filtersState.sort as string}
          callback={filterCallback}
        />
      </div>
      <div className={styles.cell}>
        <Select
          paramName="type"
          valueList={typeDropbox}
          label="TYPE"
          color="primary"
          currentValue={filtersState.type as string}
          callback={filterCallback}
        />
      </div>
      <div className={styles.cell}>
        <Select
          paramName="breed"
          valueList={breedsDropbox}
          label="BREEDS"
          color="primary"
          currentValue={filtersState.breeds as string}
          callback={filterCallback}
        />
      </div>
      <div className={`${styles.cell} ${styles.flexcell}`}>
        <Select
          paramName="limit"
          valueList={limitDropbox}
          label="LIMIT"
          color="primary"
          currentValue={filtersState.limit as string}
          callback={filterCallback}
        />
        <div
          aria-disabled={isPending}
          onClick={() => {
            startTransition(() => {
              const params = new URLSearchParams(clientSearchParams);
              filterData.limit
                ? params.set("limit", filterData.limit)
                : params.set("limit", "5");
              params.set("breed", filterData.breed);
              params.set("sort", filterData.sort);
              params.set("type", filterData.type);
              Router.replace(`${pathName}?${params}`);
            });
          }}
        >
          <Button
            type="small"
            //   href={`?${new URLSearchParams({
            //    breeds: "none",
            //})}`}
            href=""
            nomargin
            pending={isPending}
          >
            <IconUpdate />
          </Button>
        </div>
      </div>
    </section>
  );
}
