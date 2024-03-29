"use client";

import style from "./subnavbar.module.scss";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "../UI/Button/Button";
import { getRootFromUrl } from "@/utils/getRootFromUrl";

import IconBack from "../Icons/back";

export function SubNavBar() {
  const root = getRootFromUrl(usePathname()).root;
  const router = useRouter();
  return (
    <div className={`${style.subNav}`}>
      <div className={`${style.leftGrp}`}>
        <div onClick={() => router.back()}>
          <Button href="" type="small" pending={false}>
            <IconBack />
          </Button>
        </div>
        <Button type="primary" href="" pending={false}>
          <p>{root}</p>
        </Button>
      </div>
    </div>
  );
}
