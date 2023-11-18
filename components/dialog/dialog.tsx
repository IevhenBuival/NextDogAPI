"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./dialog.module.scss";
import { assertIsNode } from "../../utils/assertIsNode";

import DialogTitle from "./dialogTitle";

interface IDialog {
  children: React.ReactNode;
}
export default function Dialog({ children }: IDialog) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const showDialog = searchParams.get("uploading");

  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    const dialog = dialogRef.current;
    if (showDialog === "y") {
      dialog.showModal();
      dialog.addEventListener("click", (e) => {
        assertIsNode(e.target);
        if (e.target?.nodeName === "DIALOG") {
          handleClose();
        }
      });
    } else {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDialog]);

  const closePath = () => {
    const params = new URLSearchParams(searchParams);
    params.set("uploading", "n");
    return "gallery/?" + params.toString();
  };

  const handleClose = () => {
    dialogRef.current?.close();
    router.replace(closePath());
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog aria-modal ref={dialogRef} className={styles.dialog}>
        <div className={styles.wrapper}>
          <DialogTitle href={closePath()} />
          {children}
        </div>
      </dialog>
    ) : null;

  return dialog;
}
