import { MAGNOLIA_BASE_URL } from "./contents";

export function getAssetUrl(jcrId: string) {
  if (!jcrId.startsWith("jcr:")) {
    jcrId = "jcr:" + jcrId;
  }

  return `${MAGNOLIA_BASE_URL}/dam/${jcrId}`;
}
