import { Button } from "@/components/UI/Button/Button";
import Image from "next/image";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={``}>
        <Button type="secondary" href="">
          <Image
            src="/upload-16.svg"
            alt="search icon"
            width={16}
            height={16}
            priority
          />
          <p>UPLOAD</p>
        </Button>
      </div>
      {children}
    </>
  );
}
