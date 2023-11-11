import { TDogItem } from "@/types/dogApiTypes";
import styles from "./imagesGrids.module.scss";
import Image from "next/image";
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
  /*
  <div className={`${styles.img1}`}>
  <div className={`${styles.cell} ${styles.img1}`}>
    <Image
      src={pack[0].url}
      fill
      loading="lazy"
      alt={pack[0].url}
    />
  </div>
</div>
<div className={`${styles.img1}`}>
  <div className={`${styles.cell} ${styles.img2}`}>
    <Image
      src={pack[1].url}
      width={300}
      height={300}
      alt={pack[1].url}
    />
  </div>
</div>
<div className={`${styles.img1}`}>
  <div className={`${styles.cell2} ${styles.img3}`}>
    <Image
      src={pack[1].url}
      width={300}
      height={300}
      alt={pack[1].url}
    />
  </div>
</div>
<div className={`${styles.img1}`}>
  <div className={`${styles.cell} ${styles.img4}`}>
    <Image
      src={pack[1].url}
      width={600}
      height={600}
      alt={pack[1].url}
    />
  </div>
</div>
<div className={`${styles.img1}`}>
  <div className={`${styles.cell1} ${styles.img5}`}>
    <Image
      src={pack[1].url}
      width={300}
      height={300}
      alt={pack[1].url}
    />
  </div>
</div>

*/
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
                      alt={dog.url}
                    />
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
