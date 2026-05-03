import { PAGE_PREFIX } from "./contents";

const getRelativePath = (path: string): string => {
  if (!path) return path;
  return path.replace(PAGE_PREFIX, "") || "/";
};

export { getRelativePath };
