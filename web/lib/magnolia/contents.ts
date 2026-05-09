import {
  getMagnoliaBaseUrl,
  getMagnoliaFootersEndpoint,
  getMagnoliaPagePrefix,
  getMagnoliaPagesEndpoint,
  getMagnoliaTemplateAnnotationsEndpoint,
} from "./env";

async function getPage(path: string): Promise<PageType> {
  const url = `${getMagnoliaBaseUrl()}${getMagnoliaPagesEndpoint()}${getMagnoliaPagePrefix()}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch page at ${url}`);
  }

  return await res.json();
}

async function getTemplateAnnotations(
  path: string,
): Promise<TemplateAnnotationsType> {
  const url = `${getMagnoliaBaseUrl()}${getMagnoliaTemplateAnnotationsEndpoint()}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch template annotations at ${url}`);
  }

  return await res.json();
}

async function getFooter(path: string): Promise<FooterType> {
  const url = `${getMagnoliaBaseUrl()}${getMagnoliaFootersEndpoint()}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch footer at ${url}`);
  }

  return await res.json();
}

export { getPage, getTemplateAnnotations, getFooter };
