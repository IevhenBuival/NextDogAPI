export function getRootFromUrl(url: string) {
  const lenth = url.indexOf("/", 1) > 0 ? url.indexOf("/", 1) : url.length;
  const rout_root = url.slice(1, lenth).toUpperCase();

  console.log(url);
  const page = url.slice(lenth + 1);
  console.log(rout_root);
  console.log(page);
  return { root: rout_root, page };
}
