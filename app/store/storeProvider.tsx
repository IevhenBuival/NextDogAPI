"use client";
import { type FilterData } from "@/types/StateDataTypes";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { createStore } from "./store";

export default function StoreProvider({
  //filterData,
  children,
}: {
  // filterData: FilterData;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) storeRef.current = createStore();
  return <Provider store={storeRef.current}>{children}</Provider>;
}
