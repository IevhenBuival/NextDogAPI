const uploadFile = async (
  url: string,
  revalidate: number = 60,
  _: null | string,
  file?: File
) => {
  if (!file)
    throw new Error("Lost file to send, just reload page and try again");
  const formData = new FormData();
  formData.set("sended", file);
  const rez = await fetch(url, { method: "POST", body: formData });
};

export default uploadFile;
