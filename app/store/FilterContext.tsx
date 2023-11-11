"use client";

import React, { createContext, useState } from "react";
import { FilterData } from "@/types/StateDataTypes";

const useFilterDataState = () =>
  useState<FilterData>({
    limit: "5",
    type: "all",
    breed: "none",
    sort: "rand",
  });

export const FilterDataStateContext = createContext<ReturnType<
  typeof useFilterDataState
> | null>(null);

export const useFilterData = () => {
  const filterData = React.useContext(FilterDataStateContext);
  if (!filterData)
    throw new Error("filterData must be used in the filterDataProvider! ");

  return filterData;
};

const FilterDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [FilterData, setFilterData] = useFilterDataState();
  return (
    <FilterDataStateContext.Provider value={[FilterData, setFilterData]}>
      {children}
    </FilterDataStateContext.Provider>
  );
};

export default FilterDataProvider;
