import { fetchData } from "@/services/api.service";
import { Metadata } from "next";

type TProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: TProps): Promise<Metadata> {
  return {
    title: "breed " + id,
  };
}

export default async function Breed({ params: { id } }: TProps) {
  const breeds = await fetchData("breeds/" + id, "GET");
  return <div>{JSON.stringify(breeds, null, 4)}</div>;
}
