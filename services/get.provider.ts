const getProvider = async (
  url: string,
  revalidate: number,
  _: null | string
) => {
  {
    const options: RequestInit = {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { revalidate: 3600 },
    };
    const responce = await fetch(
      process.env.NEXT_PUBLIC_API_URL + url,
      options
    );
    if (responce.ok) return await responce.json();
    throw Error("GET request failed. Status:" + responce.status + " .");
  }
};

export default getProvider;
