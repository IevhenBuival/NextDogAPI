import React, { ChangeEvent, DragEvent } from "react";
import styles from "./dndForm.module.scss";
import Image from "next/image";

interface IDNDForm {
  files: FileList | undefined;
  previewSrc: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleDragEnter: (e: DragEvent<HTMLFormElement>) => void;
  handleDrop: (e: DragEvent<Element>) => void;
  handleDragLeave: (e: DragEvent<Element>) => void;
  handleDragOver: (e: DragEvent<Element>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  openFileExplorer: () => void;
  formAction: (payload: FormData) => void;
}

export default function DNDForm({
  previewSrc,
  files,
  inputRef,
  handleDragEnter,
  handleDrop,
  handleDragLeave,
  handleDragOver,
  handleChange,
  openFileExplorer,
  formAction,
}: IDNDForm) {
  return (
    <form
      id="fileUploadForm"
      className={styles.imagebox}
      onDragEnter={handleDragEnter}
      //  onSubmit={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      action={formAction}
      // method="POST"
    >
      <input
        placeholder=""
        className={styles.hidden}
        ref={inputRef}
        name="file"
        type="file"
        multiple={false}
        onChange={handleChange}
        accept="image/*"
      />
      {files?.length ? (
        !!previewSrc && (
          <Image
            className={styles.image}
            src={previewSrc}
            alt={files?.item(0)?.name || "no item"}
            fill
            sizes="100%"
          />
        )
      ) : (
        <p onClick={openFileExplorer}>
          <span className={styles.black}>Drag here</span> your file or{" "}
          <span className={styles.black}>Click here</span> to upload
        </p>
      )}
    </form>
  );
}
