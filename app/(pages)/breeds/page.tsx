import { fetchData } from "@/services/api.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs Breeds",
  description: "Breeds",
};

export default async function Breeds() {
  const breeds = await fetchData("breeds", "GET");
  return <div>{JSON.stringify(breeds, null, 4)}</div>;
}
