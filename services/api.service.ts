import postProvider from "./post.provider";
import getProvider from "./get.provider";
import deleteProvider from "./delete.provider";
import uploadFile from "./upload.provider";

const fetchActions = {
  GET: getProvider,
  POST: postProvider,
  DELETE: deleteProvider,
  UPLOAD: uploadFile,
};

type keyOfFetchActions = keyof typeof fetchActions;

export const fetchData = async (
  url: string,
  method: string,
  input: string = "",
  file?: (File & FormData) | undefined,
  revalidate = 60
) => {
  try {
    const data = await fetchActions[method as keyOfFetchActions](
      url,
      revalidate,
      input,
      file
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected error: " + JSON.stringify(error));
  }
};
