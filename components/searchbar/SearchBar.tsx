"use client";

import { Button } from "../UI/Button/Button";
import styles from "./search_bar.module.scss";
import IconSearch from "../howeredIcons/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IconLike from "../howeredIcons/like";
import IconFavorite from "../howeredIcons/favorite";
import IconDislike from "../howeredIcons/dislike";

export function SearchBar() {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const SearchInPathLike = () => {
    const like = path.search("likes".toLocaleLowerCase()) > 0 ? true : false;
    const dislike =
      path.search("dislikes".toLocaleLowerCase()) > 0 ? true : false;
    if (dislike) return false;
    return like;
  };

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    router.replace(`${path}?${params}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_grp}>
        <input
          className={styles.input}
          placeholder="Search for breeds by name"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <Button type="small" href="/gallery?search=test">
          <IconSearch />
        </Button>
      </div>
      <Button type="big" href="/likes" activated={SearchInPathLike()}>
        <IconLike />
      </Button>
      <Button
        type="big"
        href="/favourites"
        activated={
          path.search("favourites".toLocaleLowerCase()) > 0 ? true : false
        }
      >
        <IconFavorite />
      </Button>
      <Button
        type="big"
        href="/dislikes"
        activated={
          path.search("dislikes".toLocaleLowerCase()) > 0 ? true : false
        }
      >
        <IconDislike />
      </Button>
    </div>
  );
}
