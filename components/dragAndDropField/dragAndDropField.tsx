"use client";

import React, { ChangeEvent, DragEvent, useRef, useState } from "react";
import styles from "./dndfield.module.scss";
import ClickWrapper from "../UI/Button/ClickWrapper";
import { Button } from "../UI/Button/Button";
import Image from "next/image";
import IconLoading from "../Icons/loading";
import Message from "../UI/Message/Message";
import { assertIsString } from "@/utils/assertIsString";
import MessageBox from "../UI/MessageBox/MessageBox";

export default function DragAndDropField() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  //const inputRef = useRef<any>(null);

  const [files, setFiles] = useState<FileList>();
  const [error, setError] = useState<String>("");
  const [src, setSrc] = useState<string | null>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);

  const loadPreview = (file: File) => {
    if (!file.type.match("image.*")) {
      setError("File is not image. Image only please....");
    } else {
      var reader = new FileReader();
      reader.onload = (function (theFile: File) {
        return function (e: ProgressEvent<FileReader>) {
          // Render thumbnail.
          if (e.target !== null) setSrc(e.target.result as string);
          else setError("Cant read data from " + theFile.name);
        };
      })(file);
      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }
  };
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files);

      loadPreview(e.target.files[0]);
    }
  }

  function handleSubmitFile(e: any) {
    if (files?.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
      setLoading(true);
      //  setError("error test");
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(e.dataTransfer.files);
      loadPreview(e.dataTransfer.files[0]);
    }
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: DragEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={`${
          dragActive ? styles.active_dnd_color : styles.dnd_color
        } ${styles.dndbox}`}
      >
        <form
          className={styles.imagebox}
          onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        >
          <input
            placeholder=""
            className={styles.hidden}
            ref={inputRef}
            type="file"
            multiple={false}
            onChange={handleChange}
            accept="image/*"
          />
          {files?.length ? (
            !!src && (
              <Image
                className={styles.image}
                src={src}
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
      </div>
      <div>
        {files ? (
          <Message message={assertIsString(files?.item(0)?.name)} />
        ) : (
          <Message message="No file selected" />
        )}
      </div>
      {files &&
        !error &&
        (loading ? (
          <Button type="foto" href={""} activated>
            <span className={styles.row}>
              <IconLoading />
              <p className={styles.uploadtext}>UPLOADING</p>
            </span>
          </Button>
        ) : (
          <ClickWrapper callback={handleSubmitFile}>
            <Button type="foto" href={""}>
              <span className={styles.row}>
                <p className={styles.uploadtext}>UPLOAD PHOTO</p>
              </span>
            </Button>
          </ClickWrapper>
        ))}
      {error && <MessageBox message={error} type="error" />}

      {result && !error && (
        <MessageBox
          message="Thanks for the Upload - Dog found!"
          type="success"
        />
      )}
    </div>
  );
}
