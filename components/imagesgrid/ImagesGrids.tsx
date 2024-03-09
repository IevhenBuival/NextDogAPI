import { TDogItem } from "@/types/dogApiTypes";
import styles from "./imagesGrids.module.scss";
import Image from "next/image";
import FavouriteIcon from "../favouriteicon/FavouriteIcon";
import addBlurDataUrl from "@/lib/blurDataUrl";
import BreedHoverButton from "../breedhoverbutton/breedHoverButton";

interface IImagesGrid {
  dogs: TDogItem[];
}

const ImagesGrids = async ({ dogs }: IImagesGrid) => {
  // const useSearchParams = useSearchParams();
  const getPacks = async () => {
    const packCount = dogs.length / 5 - ((dogs.length / 5) % 1);
    const packs: TDogItem[][] = [];
    const dogswithblur = await addBlurDataUrl(dogs);

    for (let i = 0; i < packCount; i++) {
      packs.push(dogswithblur.slice(i * 5, i * 5 + 5));
    }

    if (packCount === 0) packs.push(dogs);
    return packs;
  };
  const dogpack = await getPacks();

  const styleByIndex = (index: number, pack: number) => {
    if (pack % 2 !== 1) {
      if (index === 0) return styles.img1;
      if (index === 1) return styles.img2;
      if (index === 2) return styles.img3;
      if (index === 3) return styles.img4;
      if (index === 4) return styles.img5;
    } else {
      if (index === 0) return styles.reverse_img1;
      if (index === 1) return styles.reverse_img2;
      if (index === 2) return styles.reverse_img3;
      if (index === 3) return styles.reverse_img4;
      if (index === 4) return styles.reverse_img5;
    }

    return "";
  };

  return (
    <section>
      {dogpack.map((pack, index) => (
        <div key={index}>
          <div className={styles.flex}>
            <div className={styles.container}>
              {pack.map((dog, ind) => (
                <div
                  key={dog.id}
                  className={`${styles.img} ${styleByIndex(ind, index)}`}
                >
                  <div className={styles.item}>
                    <Image
                      className={styles.image}
                      src={dog.url}
                      placeholder="blur"
                      blurDataURL={dog.urlblur}
                      fill
                      sizes="100%"
                      alt={dog.url}
                      priority={false}
                      loading="lazy"
                    />

                    <div
                      className={`${styles.hover} ${
                        dog.breed && styles.bottom
                      }`}
                    >
                      {dog.breed ? (
                        <BreedHoverButton breed={dog.breed} />
                      ) : (
                        <FavouriteIcon id={dog.id} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImagesGrids;
