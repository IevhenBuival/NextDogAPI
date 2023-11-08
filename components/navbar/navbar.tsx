import style from "./navbar.module.scss";

import LogoGroup from "../logo/LogoGroup";
import { MenuItem } from "./MenuItem";

const TheNavbar = () => {
  const items = [
    {
      title: "VOTING",
      url: "/voting",
    },
    {
      title: "BREEDS",
      url: "/breeds",
    },
    {
      title: "GALLERY",
      url: "/gallery",
    },
  ];

  return (
    <div className={`${style.nav}`}>
      <LogoGroup />
      <h2 className={`${style.title}`}>Hi!👋</h2>
      <p className={`${style.text}`}>Welcome to DoaApi on Next 13</p>
      <p className={`${style.text2}`}>Lets start using The Dog API</p>
      <div className={`${style.navbar}`}>
        {items.map((i) => (
          <MenuItem key={i.title} item={i} />
        ))}
      </div>
    </div>
  );
};

export { TheNavbar };
