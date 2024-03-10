import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";
import styles from "../layout.module.scss";
import BreedsActionPanel from "@/components/breedsactionpanel/breedsActionPanel";
import { headers } from "next/headers";
import { getRootFromUrl } from "@/utils/getRootFromUrl";

type TProps = {
  params: {
    id: string;
  };
};
export default function BreedsLayout({
  children,
  props,
}: {
  children: React.ReactNode;
  props: TProps;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";
  const host = headersList.get("host") || "";
  const rez = pathname.slice(pathname.search(host));
  const pagepath = getRootFromUrl(rez).page;
  const pathname1 = headersList.get("next-url");

  return (
    <>
      <div>
        <div>{JSON.stringify(props)}</div>

        {pagepath === "breeds" ? <BreedsActionPanel /> : <div>breed id</div>}
      </div>
      <div className={`${styles.box2}`}>{children}</div>
    </>
  );
}
