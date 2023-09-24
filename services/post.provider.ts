const postProvider = async (
  url: string,
  revalidate: number = 60,
  bodydata = null
) => {
  const options: RequestInit = {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    next: { revalidate: revalidate },
  };
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, options);

  if (res.status === 200) return await res.json();
  throw Error("POST request failed. Status:" + res.status + " .");
};

export default postProvider;
