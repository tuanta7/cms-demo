import { MAGNOLIA_BASE_URL } from "./contents";

export function getAssetUrlFromPath(path: string) {
  return `${MAGNOLIA_BASE_URL}/dam/${path}`;
}

export function getAssetUrlFromId(jcrId: string) {
  if (!jcrId.startsWith("jcr:")) {
    jcrId = "jcr:" + jcrId;
  }

  return `${MAGNOLIA_BASE_URL}/dam/${jcrId}`;
}
