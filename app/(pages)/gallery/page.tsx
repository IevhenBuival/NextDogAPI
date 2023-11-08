import { fetchData } from "@/services/api.service";
import { Metadata } from "next";
import FiltersBox from "../../../components/filtersbox/FiltersBox";

export const metadata: Metadata = {
  title: "Dogs Gallery",
  description: "Dogs Gallery",
};

export default async function Gallery() {
  const dogs = await fetchData(
    "images/search?format=json&limit=10&order=RAND",
    "GET"
  );
  interface breeds {
    name: string;
  }
  const breeds: breeds[] = [...(await fetchData("breeds/", "GET"))].map(
    (el) => ({ name: el.name })
  );

  return (
    <>
      <FiltersBox breeds={breeds} />

      {JSON.stringify(dogs, null, 4)}
    </>
  );
}
