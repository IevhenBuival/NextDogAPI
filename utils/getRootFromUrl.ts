export function getRootFromUrl(url: string) {
  const lenth = url.indexOf("/", 1) > 0 ? url.indexOf("/", 1) : url.length;
  const rout_root = url.slice(1, lenth).toUpperCase();
  return { root: rout_root };
}
