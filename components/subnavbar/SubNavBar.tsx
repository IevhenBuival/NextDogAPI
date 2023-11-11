"use client";

import style from "./subnavbar.module.scss";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "../UI/Button/Button";
import { getRootFromUrl } from "@/utils/getRootFromUrl";

import IconBack from "../howeredIcons/back";

export function SubNavBar() {
  const root = getRootFromUrl(usePathname()).root;
  const router = useRouter();
  return (
    <div className={`${style.subNav}`}>
      <div className={`${style.leftGrp}`}>
        <div onClick={() => router.back()}>
          <Button href="" type="small">
            <IconBack />
          </Button>
        </div>
        <Button type="primary" href="">
          <p>{root}</p>
        </Button>
      </div>
    </div>
  );
}
