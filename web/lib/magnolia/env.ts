function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getMagnoliaBaseUrl() {
  return getRequiredEnv("MAGNOLIA_BASE_URL");
}

export function getMagnoliaPagePrefix() {
  return getRequiredEnv("MAGNOLIA_PAGE_PREFIX");
}

export function getMagnoliaPagesEndpoint() {
  return getRequiredEnv("MAGNOLIA_PAGES_ENDPOINT");
}

export function getMagnoliaTemplateAnnotationsEndpoint() {
  return getRequiredEnv("MAGNOLIA_TEMPLATE_ANNOTATIONS_ENDPOINT");
}

export function getMagnoliaFootersEndpoint() {
  return getRequiredEnv("MAGNOLIA_FOOTERS_ENDPOINT");
}
