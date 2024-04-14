import React from "react";
import styles from "./breedsactionpanel.module.scss";
import { Select } from "../UI/Select/Select";

import { TSearchParams } from "../../types/searchParams";
import { breeds } from "@/services/breesds.service";

import SelectsBreed from "./selectsBreed";
import { Button } from "../UI/Button/Button";

import IconOrderDown from "../Icons/down";
import IconOrderUp from "../Icons/up";
//import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IBreedsActionPanel {
  searchParams: TSearchParams;
}
export default function BreedsActionPanel({
  searchParams,
}: IBreedsActionPanel) {
  const breedsDropbox = breeds.map((el) => {
    return {
      searchParam: el.id,
      itemText: el.name,
    };
  });
  breedsDropbox.unshift({ searchParam: "none", itemText: "None" });

  /* const clientSearchParams = useSearchParams();
  const pathName = usePathname();
  const Router = useRouter();
  breedsDropbox.unshift({ searchParam: "none", itemText: "All breeds" });
  const filterCallback = (name: string, value: string) => {
    const params = new URLSearchParams(clientSearchParams);

    params.set("name", value);

    Router.replace(`${pathName}?${params}`);
  };*/
  const filterCallback = (name: string, value: string) => {};
  const currentBreed = searchParams.breed as string;
  return (
    <div className={styles.flex_right}>
      <SelectsBreed items={breedsDropbox} />
      <Button
        type="small"
        href={
          "breeds/?" +
          new URLSearchParams({
            ...searchParams,
            order: "up",
          }).toString()
        }
        nomargin
        pending={false}
      >
        <IconOrderUp />
      </Button>
      <Button
        type="small"
        href={
          "breeds/?" +
          new URLSearchParams({
            ...searchParams,
            order: "down",
          }).toString()
        }
        nomargin
        pending={false}
      >
        <IconOrderDown />
      </Button>
    </div>
  );
}
