import Dialog from "@/components/dialog/dialog";
import DragAndDropField from "@/components/dragAndDropField/dragAndDropField";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <DragAndDropField />
      </Dialog>
      {children}
    </>
  );
}
