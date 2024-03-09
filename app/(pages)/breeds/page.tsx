import { Button } from "@/components/UI/Button/Button";
import { fetchData } from "@/services/api.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs Breeds",
  description: "Breeds",
};

export default async function Breeds() {
  const breeds = await fetchData("breeds", "GET");
  return (
    <div>
      {
        //JSON.stringify(breeds, null, 4)
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
        <ImagesGrids dogs={breeds} />
        </div> */
      }
    </div>
  );
}
