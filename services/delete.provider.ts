const deleteProvider = async (
  url: string,
  revalidate: number = 60,
  _: null | string,
  file?: File | undefined
) => {
  try {
    const options: RequestInit = {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { revalidate: revalidate },
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + url,
      options
    );
    if (!response.ok) new Error("Error deleting");
    return response.json();
  } catch (error) {
    throw new Error("Deleting fail.");
  }
};

export default deleteProvider;
