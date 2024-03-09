import React from "react";
import Dialog from "../../../components/dialog/dialog";
import ServerUploadForm from "@/components/fileuploadform/uploadForm";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dialog>
        <ServerUploadForm />
      </Dialog>
      {children}
    </>
  );
}
