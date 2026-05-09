import { getMagnoliaBaseUrl } from "./env";

export function getAssetUrl(path: string) {
  if (path.startsWith("/")) {
    return `${getMagnoliaBaseUrl()}/dam${path}`;
  }

  // path is a UUID
  if (!path.startsWith("jcr:")) {
    path = "jcr:" + path;
  }

  return `${getMagnoliaBaseUrl()}/dam/${path}`;
}
