import { fetchData } from "./api.service";

export const BreedsService = {
  async getAll() {
    const data = await fetchData("breeds", "GET");
    return data;
  },

  async get(id: string) {
    const responce = await fetch(this.baseUrl + "breeds/" + id, {
      next: { revalidate: 600 },
    });
    if (!responce.ok) throw new Error("Cant resive breeds data");

    return responce.json();
  },
};
