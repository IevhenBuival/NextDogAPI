"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface ClickWrapperProps {
  callback: (path: string) => void;
  children: React.ReactNode;
}
export default function ClickWrapper({
  children,
  callback,
}: ClickWrapperProps) {
  const [state, setState] = useState(false);
  const path = usePathname();
  const changeFavourite = () => {
    setState(!state);
    callback(path);
  };

  return <div onClick={changeFavourite}>{children}</div>;
}
