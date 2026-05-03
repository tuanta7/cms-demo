export const MAGNOLIA_BASE_URL = "http://localhost:8080/magnoliaPublic";
export const PAGE_PREFIX = "/manutd";

const PAGES_ENDPOINT = "/.rest/delivery/v1/pages";
const FOOTERS_ENDPOINT = "/.rest/delivery/v1/footers";

async function getPage(path: string) {
  const url = `${MAGNOLIA_BASE_URL}${PAGES_ENDPOINT}${PAGE_PREFIX}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch page at ${url}`);
  }

  return await res.json();
}

async function getFooter() {
  const url = `${MAGNOLIA_BASE_URL}${FOOTERS_ENDPOINT}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch footer at ${url}`);
  }

  return await res.json();
}

export { getPage, getFooter };
