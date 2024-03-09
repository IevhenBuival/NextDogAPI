"use client";
import styles from "./uploadform.module.scss";
import ImgInput from "../imgInput/imgInput";

import { useFormState } from "react-dom";
import { IUploadState } from "@/types/uploadState";
import { uploadFileAction } from "@/actions/formActions";
import { useEffect } from "react";
import useDragNdrop from "@/hooks/drugNdrop";
import UploadFileButton from "../uploadButtom/uploadFileButton";
import Message from "../UI/Message/Message";
import MessageBox from "../UI/MessageBox/MessageBox";
import { assertIsString } from "@/utils/assertIsString";
import DNDForm from "./dndForm";

const UploadForm = () => {
  const initialState: IUploadState = {
    error: false,
    result: false,
    message: "",
  };

  const [state, formAction] = useFormState(uploadFileAction, initialState);
  const {
    dragActive,
    inputRef,
    files,
    previewSrc,
    handlers,
    error,
    setFiles,
    openFileExplorer,
  } = useDragNdrop();

  useEffect(() => {
    if (state.result !== state.error) setFiles(undefined);
  }, [setFiles, state.result, state.error]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${
          state.error
            ? styles.error_dnd_color
            : dragActive
            ? styles.active_dnd_color
            : styles.dnd_color
        } ${styles.dndbox}`}
      >
        <DNDForm
          files={files}
          previewSrc={previewSrc}
          inputRef={inputRef}
          handleDragEnter={handlers.handleDragEnter}
          handleDrop={handlers.handleDrop}
          handleDragLeave={handlers.handleDragLeave}
          handleDragOver={handlers.handleDragOver}
          handleChange={handlers.handleChange}
          openFileExplorer={openFileExplorer}
          formAction={formAction}
        />
      </div>
      <div>
        {files ? (
          <Message message={assertIsString(files?.item(0)?.name)} />
        ) : (
          <Message message="No file selected" />
        )}
      </div>
      {files && !error && (
        <UploadFileButton files={files} formAction={formAction} />
      )}
      {files === undefined && state.message !== "" && (
        <MessageBox
          message={error ? error : state.message}
          type={error || state.error ? "error" : "success"}
        />
      )}
    </div>
  );
};

export default UploadForm;
