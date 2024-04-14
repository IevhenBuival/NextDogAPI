import { TBreedsList } from "@/types/dropdownItem";
import { fetchData } from "./api.service";

export const breeds: TBreedsList[] = [
  ...(await fetchData("breeds/", "GET")),
].map((el) => ({ name: el.name, id: el.id }));
