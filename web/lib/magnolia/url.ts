import { getMagnoliaPagePrefix } from "./env";

const getRelativePath = (path: string): string => {
  if (!path) return path;
  return path.replace(getMagnoliaPagePrefix(), "") || "/";
};

export { getRelativePath };
