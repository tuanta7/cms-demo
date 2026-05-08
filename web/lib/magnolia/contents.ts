export const MAGNOLIA_BASE_URL = "http://localhost:8080/magnoliaPublic";
export const PAGE_PREFIX = "/manutd-api";

const PAGES_ENDPOINT = "/.rest/delivery/v1/pages";
const TEMPLATE_ANNOTATIONS_ENDPOINT = "/.rest/template-annotations/v1";
const FOOTERS_ENDPOINT = "/.rest/delivery/v1/footers";

async function getPage(path: string): Promise<PageType> {
  const url = `${MAGNOLIA_BASE_URL}${PAGES_ENDPOINT}${PAGE_PREFIX}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch page at ${url}`);
  }

  return await res.json();
}

async function getTemplateAnnotations(
  path: string,
): Promise<TemplateAnnotationsType> {
  const url = `${MAGNOLIA_BASE_URL}${TEMPLATE_ANNOTATIONS_ENDPOINT}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch template annotations at ${url}`);
  }

  return await res.json();
}

async function getFooter(): Promise<FooterType> {
  const url = `${MAGNOLIA_BASE_URL}${FOOTERS_ENDPOINT}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch footer at ${url}`);
  }

  return await res.json();
}

export { getPage, getTemplateAnnotations, getFooter };
