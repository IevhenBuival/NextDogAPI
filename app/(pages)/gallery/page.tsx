import { fetchData } from "@/services/api.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs Gallery",
  description: "Dogs Gallery",
};

export default async function Gallery() {
  const dogs = await fetchData(
    "images/search?format=json&limit=10&order=RAND",
    "GET"
  );
  return <div>{JSON.stringify(dogs, null, 4)}</div>;
}
