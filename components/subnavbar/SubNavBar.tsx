"use client";

import style from "./subnavbar.module.scss";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "../UI/Button/Button";
import { getRootFromUrl } from "@/utils/getRootFromUrl";
import Image from "next/image";

export function SubNavBar() {
  const root = getRootFromUrl(usePathname()).root;
  const router = useRouter();
  return (
    <div className={`${style.subNav}`}>
      <div className={`${style.leftGrp}`}>
        <div onClick={() => router.back()}>
          <Button href="" type="small">
            <Image
              src="/back-20.svg"
              alt="back arrow"
              width={20}
              height={20}
              priority
            />
          </Button>
        </div>
        <Button type="primary" href="">
          <p>{root}</p>
        </Button>
      </div>
    </div>
  );
}
/*
{root === "GALLERY" && (
  <div className={`${style.rightGrp}`}>
    <Button type="secondary" callback={() => {}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
          fill="#FF868E"
        />
      </svg>
      <p>UPLOAD</p>
    </Button>
  </div>
)}*/
