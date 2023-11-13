import { TDogItem } from "@/types/dogApiTypes";
import styles from "./imagesGrids.module.scss";
import Image from "next/image";
import { Button } from "../UI/Button/Button";

import ClickWrapper from "../UI/Button/ClickWrapper";
import { changeFavourite } from "@/actions/addFavourite";
import FavouriteIcon from "../favouriteicon/FavouriteIcon";

interface IImagesGrid {
  dogs: TDogItem[];
}
const ImagesGrids = ({ dogs }: IImagesGrid) => {
  // const useSearchParams = useSearchParams();
  const getPacks = () => {
    const packCount = dogs.length / 5 - ((dogs.length / 5) % 1);
    const packs: TDogItem[][] = [];

    for (let i = 0; i < packCount; i++) {
      packs.push(dogs.slice(i * 5, i * 5 + 5));
    }

    if (packCount === 0) packs.push(dogs);
    return packs;
  };
  const dogpack = getPacks();

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
                      fill
                      sizes="100%"
                      alt={dog.url}
                      priority={false}
                      loading="lazy"
                    />
                    <div className={styles.hover}>
                      <ClickWrapper
                        callback={async (path) => {
                          "use server";
                          return await changeFavourite(dog.id, "fav");
                        }}
                      >
                        <Button type="small" href="" nomargin>
                          <FavouriteIcon id={dog.id} />
                        </Button>
                      </ClickWrapper>
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
