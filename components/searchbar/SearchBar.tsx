import Image from "next/image";
import { Button } from "../UI/Button/Button";
import styles from "./search_bar.module.scss";

export function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.input_grp}>
        <input
          className={styles.input}
          placeholder="Search for breeds by name"
        ></input>
        <Button type="small" href="/">
          <Image
            src="/search-20.svg"
            alt="search icon"
            width={20}
            height={20}
            priority
          />
        </Button>
      </div>
      <Button type="big" href="/likes">
        <Image
          src="/like-30.svg"
          alt="like icon"
          width={30}
          height={30}
          priority
        />
      </Button>
      <Button type="big" href="/favourites">
        <Image
          src="/fav-30.svg"
          alt="favorite icon"
          width={30}
          height={30}
          priority
        />
      </Button>
      <Button type="big" href="/dislikes">
        <Image
          src="/dislike-30.svg"
          alt="dislike icon"
          width={30}
          height={30}
          priority
        />
      </Button>
    </div>
  );
}
