"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ClickWrapper from "../UI/Button/ClickWrapper";
import { Button } from "../UI/Button/Button";

import styles from "./dialog.module.scss";

interface DialogProps {
  file: string;
  onClose: () => void;
  onSend: () => void;
  children: React.ReactNode;
}

export default function Dialog({
  file,
  onClose,
  onSend,
  children,
}: DialogProps) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("uploading");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog ref={dialogRef}>
        <div className={styles.wrapper}>
          <div className={styles.dialog}>
            <header>
              <h2>Upload a .jpg or .png Cat Image</h2>
              <h3>
                Any uploads must comply with the{" "}
                <span className={styles.pink}>upload guidelines</span> or face
                deletion.
              </h3>
            </header>
            <main>
              <p>
                <span className={styles.black}>Drag here</span> your file or{" "}
                <span className={styles.black}>Click here</span> to upload
              </p>
            </main>
            <footer>
              <p>No file selected</p>
              <ClickWrapper
                callback={function (path: string): void {
                  throw new Error("Function not implemented.");
                }}
              >
                <Button type={"Primary"} href={""}>
                  UPLOAD PHOTO
                </Button>
              </ClickWrapper>
              <div></div>
            </footer>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
