"use client";

import IconFavoriteFill from "../Icons/favoritefill";
import IconFavorite from "../Icons/favorite";
import { GetFavorites, changeFavourite } from "@/actions/addFavourite";
import { Button } from "../UI/Button/Button";

import React, { useEffect, useState } from "react";
import ClickWrapper from "../UI/Button/ClickWrapper";
interface StateButtonProps {
  id: string;
}

export default function FavouriteIcon({ id }: StateButtonProps) {
  //const favorite =  GetFavorites(id, "fav");
  //console.log("rander", favorite);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const init = async () => {
      setFlag(!!(await GetFavorites(id)));
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ClickWrapper
      callback={async () => {
        setFlag((e) => !e);
        const res = await changeFavourite(id);
        if (res !== flag) setFlag(res);
      }}
    >
      <Button type="small" href="" nomargin>
        {flag ? <IconFavoriteFill /> : <IconFavorite />}
      </Button>
    </ClickWrapper>
  );
}
