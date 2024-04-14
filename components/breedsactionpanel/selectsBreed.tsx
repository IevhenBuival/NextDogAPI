"use client";

import React from "react";
import { Select } from "../UI/Select/Select";
import { TDropdownItem } from "@/types/dropdownItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ISelectsBreed {
  items: TDropdownItem[];
}

export default function SelectsBreed({ items }: ISelectsBreed) {
  const clSearchParams = useSearchParams();
  const pathName = usePathname();
  const Router = useRouter();
  const limitDropbox = [
    { searchParam: "5", itemText: "limit 5" },
    { searchParam: "10", itemText: "limit 10" },
    { searchParam: "15", itemText: "limit 15" },
    { searchParam: "20", itemText: "limit 20" },
  ];
  const handleClick = (key: string, val: string) => {
    const params = new URLSearchParams(clSearchParams);
    params.set(key, val);
    Router.replace(`${pathName}?${params}`);
  };
  return (
    <>
      <Select
        paramName="breed"
        valueList={items}
        label=""
        color="primary"
        currentValue={(clSearchParams.get("breed") as string) || "none"}
        callback={handleClick}
      />
      <Select
        paramName="limit"
        valueList={limitDropbox}
        label=""
        color="primary"
        currentValue={(clSearchParams.get("limit") as string) || "5"}
        callback={handleClick}
      />
    </>
  );
}
