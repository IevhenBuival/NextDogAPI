import { Button } from "@/components/UI/Button/Button";
import ImagesGrids from "@/components/imagesgrid/ImagesGrids";
import { fetchData } from "@/services/api.service";
import { TBreedItem, TDogItem } from "@/types/dogApiTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs Breeds",
  description: "Breeds",
};

export default async function Breeds() {
  //const breeds: TBreedItem[] = await fetchData("breeds", "GET");

  const getBreedsDogs = async (): Promise<TDogItem[]> => {
    const breeds: TBreedItem[] = await fetchData(
      "breeds?limit=10&page=0",
      "GET"
    );
    const rez = Promise.all(
      breeds.map(async (el) => {
        const dog: TDogItem = await fetchData(
          "images/" + el.reference_image_id,
          "GET"
        );
        return { ...dog, breed: el };
      })
    );
    //  console.log("+", await rez);
    return rez;
  };

  const dogs = await getBreedsDogs();
  return (
    <div>
      {
        // JSON.stringify(breeds, null, 4)
        //
        /*  <div className={styles.flex_right}>
        <Button
          type="secondary"
          href={
            "gallery/?" +
            new URLSearchParams({
              ...searchParams,
              uploading: "y",
            }).toString()
          }
          pending={false}
        >
          <IconUpload />

          <p> UPLOAD</p>
        </Button>
      </div>
      <div className={`${styles.box2}`}>
        <FiltersBox breeds={breeds} searchParams={searchParams} />
              
        </div> */
      }
      <ImagesGrids dogs={dogs} />
    </div>
  );
}
