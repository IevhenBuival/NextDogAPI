"use client";
import React, { ChangeEvent } from "react";
export default function ImgInput() {
  const loadPreview = (file: File) => {
    if (!file.type.match("image.*")) {
      // setError("File is not image. Image only please....");
    } else {
      var reader = new FileReader();
      reader.onload = (function (theFile: File) {
        return function (e: ProgressEvent<FileReader>) {
          // Render thumbnail.
          //    if (e.target !== null) setSrc(e.target.result as string);
          //  else setError("Cant read data from " + theFile.name);
        };
      })(file);
      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    //  setError("");
    if (e.target.files && e.target.files[0]) {
      //   setFiles(e.target.files);
      //   setResult(false);
      loadPreview(e.target.files[0]);
    }
  }

  return (
    <div>
      <input
        name="file"
        type="file"
        multiple={false}
        onChange={handleChange}
        accept="image/*"
      />
    </div>
  );
}
