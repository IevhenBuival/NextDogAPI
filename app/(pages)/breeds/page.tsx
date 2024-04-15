import BreedsActionPanel from "@/components/breedsactionpanel/breedsActionPanel";
import ImagesGrids from "@/components/imagesgrid/ImagesGrids";
import { fetchData } from "@/services/api.service";
import { TBreedItem, TDogItem } from "@/types/dogApiTypes";
import { Metadata } from "next";
import styles from "@/app/(pages)/layout.module.scss";
import { TSearchParams } from "@/types/searchParams";
import { breeds } from "../../../services/breesds.service";

export const metadata: Metadata = {
  title: "Dogs Breeds",
  description: "Breeds",
};

export default async function Breeds({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const ifNeedName = () => {
    if (searchParams.search && searchParams.search !== "") return true;
    return false;
  };
  const isSearchBreed = () => {
    if (searchParams.breed !== undefined && searchParams.breed !== "none")
      return true;
    return false;
  };
  const getBreedsData = (allbreeds: TBreedItem[]) => {
    const revers = searchParams.order === "desc" ? false : true;
    allbreeds.sort((a, b) => {
      const arr = [a.name, b.name];
      arr.sort();
      if ((arr[0] = a.name)) return revers ? 1 : -1;
      return revers ? -1 : 1;
    });

    let rez = [];
    let counter = 0;
    const limit =
      searchParams.limit === undefined
        ? 5
        : Number(searchParams.limit as string);

    //allbreeds.forEach((el) => {
    let next = 0;

    while (next < allbreeds.length) {
      const el = allbreeds[next];
      next++;
      if (counter > limit) return rez;

      let pushing = false;
      if (!ifNeedName() && !isSearchBreed()) pushing = true;

      if (
        isSearchBreed() &&
        Number(el.id) === Number(searchParams.breed as string)
      )
        pushing = ifNeedName() ? false : true;
      if (
        ifNeedName() &&
        el.name
          .toLowerCase()
          .search((searchParams.search as string).toLowerCase()) >= 0
      )
        pushing = true;

      if (pushing) {
        rez.push(el);
        counter++;
      }
    }

    return rez;
  };

  const getBreedsDogs = async (): Promise<TDogItem[]> => {
    // search?q=air&attach_image=1
    const allbreeds: TBreedItem[] = await fetchData(`breeds/`, "GET");
    const breeds = getBreedsData([...allbreeds]);

    //if (searchParams.breeds === "none") undefined
    //order down
    //limit

    /*
    const breeds: TBreedItem[] = await (searchParams.search === undefined
      ? fetchData("breeds/?limit=15&page=0", "GET")
      : fetchData(
          `breeds/search?q=${searchParams.search}&attach_image=1`,
          "GET"
        ));*/

    const breedsdog = Promise.all(
      breeds.map(async (el) => {
        const dog: TDogItem = await fetchData(
          "images/" + el.reference_image_id,
          "GET"
        );
        return { ...dog, breed: el };
      })
    );

    return breedsdog;
  };

  const dogs = await getBreedsDogs();
  return (
    <>
      <BreedsActionPanel searchParams={searchParams} />
      <div className={`${styles.box2}`}>
        <ImagesGrids dogs={dogs} />
      </div>
    </>
  );
}
