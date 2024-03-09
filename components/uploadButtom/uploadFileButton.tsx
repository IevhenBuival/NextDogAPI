"use client";

import { useFormStatus } from "react-dom";

import { Button } from "../UI/Button/Button";
import styles from "./uploadButtom.module.scss";
import IconLoading from "../Icons/loading";
import React, { useEffect, useState, useTransition } from "react";

interface IUploadFileButton {
  files: FileList;
  formAction: (payload: FormData) => void;
}
export default function UploadFileButton({
  files,
  formAction,
}: IUploadFileButton) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className={styles.button}
      tabIndex={-1}
      type="submit"
      form="fileUploadForm"
      onClick={() => {
        startTransition(() => {
          const file = files[0];
          const formData = new FormData();
          formData.append("file", file);
          formAction(formData);
        });
      }}
      aria-disabled={isPending}
      disabled={isPending}
    >
      <Button type="foto" href={""} activated={!isPending} pending={isPending}>
        <span className={styles.row}>
          {isPending && <IconLoading />}
          <p className={styles.uploadtext}>
            {isPending ? "UPLOADING" : "UPLOAD PHOTO"}
          </p>
        </span>
      </Button>
    </button>
  );
}
