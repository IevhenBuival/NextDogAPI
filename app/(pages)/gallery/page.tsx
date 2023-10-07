import { fetchData } from "@/services/api.service";
import { Metadata } from "next";
import FiltersBox from "../../../components/filtersbox/FiltersBox";
import { TSearchParsams } from "../../../types/searchParams";

export const metadata: Metadata = {
  title: "Dogs Gallery",
  description: "Dogs Gallery",
};

type TDropdown = {
  params: {};
  searchParams: TSearchParsams;
};
export default async function Gallery(props: TDropdown) {
  const dogs = await fetchData(
    "images/search?format=json&limit=10&order=RAND",
    "GET"
  );

  return (
    <>
      <FiltersBox searchParams={props.searchParams} />
      {JSON.stringify(props.searchParams, null, 4)}
      {JSON.stringify(dogs, null, 4)}
    </>
  );
}
