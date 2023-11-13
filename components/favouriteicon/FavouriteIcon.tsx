import { TFavourite } from "@/types/dogApiTypes";
import IconFavoriteFill from "../Icons/favoritefill";
import IconFavorite from "../Icons/favorite";
import { GetFavorites } from "@/actions/addFavourite";

interface StateButtonProps {
  id: string;
}
export default async function FavouriteIcon({ id }: StateButtonProps) {
  const favorite = await GetFavorites(id, "fav");
  console.log("rander", favorite);

  return <>{favorite ? <IconFavoriteFill /> : <IconFavorite />}</>;
}
