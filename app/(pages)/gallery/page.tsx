import { fetchData } from "@/services/api.service";
import { Metadata } from "next";
import FiltersBox from "../../../components/filtersbox/FiltersBox";
import { TBreedItem, TDogItem } from "@/types/dogApiTypes";
import { TSearchParams } from "@/types/searchParams";
import { TBreedsList } from "@/types/dropdownItem";
import ImagesGrids from "@/components/imagesgrid/ImagesGrids";

export const metadata: Metadata = {
  title: "Dogs Gallery",
  description: "Dogs Gallery",
};

export default async function Gallery({
  searchParams,
}: {
  searchParams: TSearchParams;
}) {
  const compileReqest = (breeds: string): string => {
    const limit = (searchParams.limit || "5") as string;
    const order = searchParams.sort ? "&&order=" + searchParams.sort : "";
    const breed =
      searchParams.breed && searchParams.breed !== "none"
        ? "&&breed_ids=" + searchParams.breed
        : breeds === ""
        ? ""
        : "&&breed_ids=" + breeds;
    let mime_types = "";
    if (searchParams.type === "static") mime_types = "&&mime_types=jpg,png";
    if (searchParams.type === "animated") mime_types = "&&mime_types=gif";
    return (
      "images/search?format=json&&has_breeds=true&&limit=" +
      limit +
      order +
      mime_types +
      breed
    );
  };

  const getDogs = async () => {
    if (searchParams.search) {
      const searchedbreeds: TBreedItem[] = await fetchData(
        "breeds/search?&q=" + (searchParams.search as string),
        "GET"
      );
      const searchs = searchedbreeds
        .reduce((acc, val) => acc + "," + val.id, "")
        .slice(1);
      //https://api.thedogapi.com/v1/breeds/search?&q=American
      console.log(compileReqest(searchs));

      return await fetchData(compileReqest(searchs), "GET");
    } else {
      console.log(compileReqest(""));

      return await fetchData(compileReqest(""), "GET");
    }
  };
  const getDogsURL = async () => {
    if (searchParams.search) {
      const searchedbreeds: TBreedItem[] = await fetchData(
        "breeds/search?&q=" + (searchParams.search as string),
        "GET"
      );
      const searchs = searchedbreeds
        .reduce((acc, val) => acc + "," + val.id, "")
        .slice(1);
      //https://api.thedogapi.com/v1/breeds/search?&q=American
      console.log(compileReqest(searchs));

      return compileReqest(searchs);
    } else {
      console.log(compileReqest(""));

      return compileReqest("");
    }
  };
  const dogs: TDogItem[] = await getDogs();

  const breeds: TBreedsList[] = [...(await fetchData("breeds/", "GET"))].map(
    (el) => ({ name: el.name, id: el.id })
  );

  return (
    <>
      <FiltersBox breeds={breeds} searchParams={searchParams} />
      {"+" + (await getDogsURL())}
      <ImagesGrids dogs={dogs} />
    </>
  );
}
