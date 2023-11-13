"use server";

import { fetchData } from "@/services/api.service";
import { TFavourite } from "@/types/dogApiTypes";
import { revalidateTag } from "next/cache";

export const GetFavorites = async (dogid: string, tag: string = "fav") => {
  const favoritResponse = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "favourites/?image_id=" + dogid,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { tags: ["fav"] },
    }
  );
  console.log("get", tag + dogid);
  if (favoritResponse.ok) {
    const fav: TFavourite[] = await favoritResponse.json();
    return fav.length > 0 ? fav[0].id : undefined;
  }
  throw Error(
    "GET favourite request failed. Status:" + favoritResponse.status + " ."
  );
};

export const addFavourite = async (id: string, path: string) => {
  const body = {
    image_id: id,
  };

  await fetchData("favourites", "POST", JSON.stringify(body));
  console.log("post", path + id);
  revalidateTag("fav");
};
export const deleteFavourite = async (
  delid: string,
  id: string,
  path: string
) => {
  const body = {
    image_id: id,
  };

  await fetchData("favourites/" + delid, "DELETE", JSON.stringify(body));
  console.log("del", path + id);
  revalidateTag("fav");
};

export const changeFavourite = async (id: string, path: string) => {
  const delid = await GetFavorites(id, "forget");
  if (delid) {
    await deleteFavourite(delid, id, "fav");
    console.log("delete");
  } else {
    await addFavourite(id, "fav");
    console.log("add");
  }
  await GetFavorites(id, "fav");
};
