"use server";

import { IUploadState } from "@/types/uploadState";
import axios from "axios";

export const uploadFileAction = async (
  prevState: IUploadState,
  formData: FormData
) => {
  "use server";
  const imgfile = formData.get("file") as File;

  const newformData = new FormData();
  //const fileField = document.querySelector('input[type="file"]');

  newformData.append("file", imgfile);

  //const res = await fetchData("images/upload", "UPLOAD", "", formData);
  const options: RequestInit = {
    //  mode: "cors", 'Accept': 'application/json',
    method: "POST",
    // cache: "no-cache",
    headers: {
      //   "Content-Type": "multipart/form-data; boundary=3180229",
      "Content-Type": "multipart/form-data; boundary=3180229",
      Accept: "*/*",
      //  live_DYbmRiuJePbFS47DFV1qPQmVUFmSbktx29Vd2hIpbm74DCnzQPwibDNeWffk7e5J
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "User-Agent": "PostmanRuntime/7.36.3",
      "Postman-Token": "eb5c6f00-830a-49d0-89ef-764c43572303",
      Host: "api.thedogapi.com",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      "Content-Length": "3209213",
    },
    body: newformData,
    // next: { revalidate: revalidate },
  };
  const url = "images/upload";
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL + url}`,
      newformData,
      {
        headers: {
          //   "Content-Type": "multipart/form-data; boundary=3180229",
          "Content-Type": "multipart/form-data",
          //; boundary=3180229",
          Accept: "*/*",
          //  live_DYbmRiuJePbFS47DFV1qPQmVUFmSbktx29Vd2hIpbm74DCnzQPwibDNeWffk7e5J
          "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
          //     "User-Agent": "PostmanRuntime/7.36.3",
          //    "Postman-Token": "eb5c6f00-830a-49d0-89ef-764c43572303",
          Host: "api.thedogapi.com",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
          //    "Content-Length": "3209213",
        },
      }
    );
    console.log(response);
    //   return response;
    return {
      error: false,
      result: true,
      message: "Thanks for the Upload - Dog found!",
    };
  } catch (error) {
    return {
      error: true,
      result: false,
      message: JSON.stringify(error),
    };
  }
};

export const formAction = async (formData: FormData) => {
  const file = formData.get("file");
  console.log(file);
  // await uploadFile(formData);
};
