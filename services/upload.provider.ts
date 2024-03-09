const uploadFile = async (
  url: string,
  revalidate: number = 60,
  _: null | string,
  file?: FormData
) => {
  if (!file)
    throw new Error("Lost file to send, just reload page and try again");
  console.log("sending....");
  ///const formData = new FormData();
  // formData.set("file", file);
  const options: RequestInit = {
    mode: "cors",
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "multipart/form-data",
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    body: file,
    // next: { revalidate: revalidate },
  };
  console.log(process.env.NEXT_PUBLIC_API_URL + url);
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options);
  console.log("responce:", res);
  if (res.ok) return await res.json();
  throw new Error("No Dog found - try a different one");
};

export default uploadFile;
