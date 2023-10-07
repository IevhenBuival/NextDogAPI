import { SearchBar } from "@/components/searchbar/SearchBar";
import styles from "./layout.module.scss";
import { SubNavBar } from "@/components/subnavbar/SubNavBar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const flex = (
    <div className={`${styles.sub_container}`}>
      <SubNavBar />
      <div className={`${styles.content}`}>
        <div className={`${styles.box}`}>{children}</div>
      </div>
    </div>
  );

  return (
    <div className={`${styles.container} `}>
      <SearchBar />
      <div className={`${styles.grid_container}`}>
        <div className={`${styles.box1}`}>
          <SubNavBar />
        </div>
        {children}
      </div>
    </div>
  );
}
