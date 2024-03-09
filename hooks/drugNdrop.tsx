"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";

const useDragNdrop = () => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<FileList>();
  const [error, setError] = useState<String>("");
  const [src, setSrc] = useState<string>(""); //| null

  //const [loading, setLoading] = useState<boolean>(false);
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
    setError("");
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files);
      setResult(false);
      loadPreview(e.target.files[0]);
    }
  }

  async function handleSubmitFile() {
    if (files?.length === 0 || files === undefined) {
      // no file has been submitted
    } else {
      // write submit logic here
      // setLoading(true);
      console.log("res");
      try {
        console.log("res0");
        //const res = await fetchData("images/upload", "UPLOAD", "", files[0]);
        setResult(true);
        setFiles(undefined);
        //   console.log("res2", res);
      } catch (e) {
        console.log("error", e);
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError(JSON.stringify(e));
        }
      } finally {
        // setLoading(false);

        console.log("res3");
      }
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
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.click();
    }
  }
  return {
    dragActive,
    inputRef,
    files,
    error,
    previewSrc: src,
    setDragActive,
    openFileExplorer,
    setFiles,
    handlers: {
      handleChange,
      handleDrop,
      handleDragEnter,
      handleDragOver,
      handleDragLeave,
    },
  };
};

export default useDragNdrop;
