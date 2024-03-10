import { TBreedItem } from "@/types/dogApiTypes";
import { Button } from "../UI/Button/Button";
import styles from "./breedHoverButton.module.scss";
type BreedHoverButtonProps = {
  breed: TBreedItem;
};
export default function BreedHoverButton({ breed }: BreedHoverButtonProps) {
  //const favorite =  GetFavorites(id, "fav");
  //console.log("rander", favorite);
  // const [flag, setFlag] = useState(true);
  /*  useEffect(() => {
      const init = async () => {
        setFlag(!!(await GetFavorites(id)));
      };
      init();*/
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, []);
  return (
    <div className={styles.wrapper}>
      <Button
        type="breeds"
        href={"breeds/" + breed.id}
        nomargin
        pending={false}
      >
        <p className={styles.text}>{breed.name}</p>
      </Button>
    </div>
  );
}
