import postProvider from "./post.provider";
import getProvider from "./get.provider";
import deleteProvider from "./delete.provider";

const fetchActions = {
  GET: getProvider,
  POST: postProvider,
  DELETE: deleteProvider,
};

type keyOfFetchActions = keyof typeof fetchActions;

export const fetchData = async (
  url: string,
  method: string,
  input: string = "",
  revalidate = 60
) => {
  try {
    const data = await fetchActions[method as keyOfFetchActions](
      url,
      revalidate,
      input
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Unexpected error: " + JSON.stringify(error.message));
    }
    throw new Error("Unexpected error: " + JSON.stringify(error));
  }
};
