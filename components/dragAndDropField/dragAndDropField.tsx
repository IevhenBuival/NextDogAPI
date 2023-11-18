"use client";

import React, { useRef, useState } from "react";
import styles from "./dndfield.module.scss";
import ClickWrapper from "../UI/Button/ClickWrapper";
import { Button } from "../UI/Button/Button";

export default function DragAndDropField() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<FileList>();

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);

      setFiles(e.target.files);
    }
  }

  function handleSubmitFile(e: any) {
    if (files?.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      //   for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
      //   setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      // }

      setFiles(e.target.files);
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  /*function removeFile(fileName: any, idx: any) {
    const newArr = [...files?.item];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }*/

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={`${
          dragActive ? styles.active_dnd_color : styles.dnd_color
        } ${styles.dndbox}`}
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
        <p className={styles.text} onClick={openFileExplorer}>
          <span className={styles.black}>Drag here</span> your file or{" "}
          <span className={styles.black}>Click here</span> to upload
        </p>
      </form>
      <div>
        {files?.length ? (
          <p>{files?.item(0)?.name}</p>
        ) : (
          <p>No file selected</p>
        )}
      </div>

      <ClickWrapper callback={handleSubmitFile}>
        <Button type={"primary"} href={""}>
          <span className={styles.buttontext}>UPLOAD PHOTO</span>
        </Button>
      </ClickWrapper>
    </div>
  );
}
