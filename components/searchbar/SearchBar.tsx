"use client";

import { Button } from "../UI/Button/Button";
import styles from "./search_bar.module.scss";
import IconSearch from "../howeredIcons/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import IconLike from "../howeredIcons/like";
import IconFavorite from "../howeredIcons/favorite";
import IconDislike from "../howeredIcons/dislike";
import { setSearch, setSearchInput, useSearchInput } from "@/app/store/store";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchInput = useSearchInput();

  const dispatch = useDispatch();

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

  const getCurrent = () => {
    if (!searchParams.get("search")) return searchInput.input;
    if (searchParams.get("search") === searchInput.searched)
      return searchInput.input;
    return searchParams.get("search");
  };
  const currentValue = getCurrent() || "";
  /*
    ? searchInput
    : searchParams.get("search") || "";
*/
  return (
    <div className={styles.container}>
      <div className={styles.input_grp}>
        <input
          className={styles.input}
          value={currentValue}
          placeholder="Search for breeds by name"
          onChange={(e) => {
            dispatch(setSearch(searchParams.get("search") || ""));
            return dispatch(setSearchInput(e.target.value));
          }}
        ></input>
        <div onClick={() => handleChange(currentValue)}>
          <Button type="small" href="">
            <IconSearch />
          </Button>
        </div>
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
