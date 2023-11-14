import { getPlaiceholder } from "plaiceholder";
import { TDogItem } from "../types/dogApiTypes";

async function getBase64(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to load " + url);
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (e) {
    console.log(e);
  }
}

export default async function addBlurDataUrl(
  dogs: TDogItem[]
): Promise<TDogItem[]> {
  const Base64Promises = dogs.map((dog) => getBase64(dog.url));
  const Base64Results = await Promise.all(Base64Promises);
  const dogsWithBlur = dogs.map((dog, i) => {
    dog.urlblur = Base64Results[i] as string;
    return dog;
  });
  return dogsWithBlur;
}
