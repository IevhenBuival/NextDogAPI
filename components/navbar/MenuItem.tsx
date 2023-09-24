"use client";

import Link from "next/link";
import style from "./menuitem.module.scss";
import { usePathname } from "next/navigation";

interface IMenuItem {
  item: { title: string; url: string };
}

export function MenuItem({ item }: IMenuItem) {
  const path = usePathname();

  const styleByTitle = (title: string) => {
    if (title === "BREEDS") return style.BREEDS;
    if (title === "GALLERY") return style.GALLERY;
    if (title === "VOTING") return style.VOTING;
    return "";
  };

  const active = path.search(item.title.toLocaleLowerCase()) > 0 ? true : false;

  return (
    <Link className={`${style.item}`} href={item.url}>
      <div
        className={`${style.box} ${styleByTitle(item.title)} ${
          active ? style.active_box : ""
        }`}
      ></div>

      <button
        className={`${style.button} ${
          active ? style.active_button : style.button_color
        }`}
      >
        {item.title}
      </button>
    </Link>
  );
}
