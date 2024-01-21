const getProvider = async (
  url: string,
  revalidate: number,
  _: null | string,
  file?: File | undefined
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
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + url,
      options
    );
    if (response.ok) return await response.json();
    throw Error("GET request failed. Status:" + response.status + " .");
  }
};

export default getProvider;
