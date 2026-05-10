function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getBooleanEnv(name: string): boolean {
  return process.env[name]?.trim().toLowerCase() === "true";
}

const MGNL_BASE = getBooleanEnv("MGNL_IS_PREVIEW")
  ? getRequiredEnv("MGNL_BASE_AUTHOR")
  : getRequiredEnv("MGNL_BASE_PUBLIC");

const MGNL_URL = getRequiredEnv("MGNL_HOST") + MGNL_BASE;

export const environments = {
  mgnlSitePath: getRequiredEnv("MGNL_SITE_PATH"),
  mgnlLanguages: getRequiredEnv("MGNL_LANGUAGES").split(" ") || ["en"],
  mgnlAssets: MGNL_URL + getRequiredEnv("MGNL_API_ASSETS"),
  mgnlTemplates: MGNL_URL + getRequiredEnv("MGNL_API_TEMPLATES"),
  mgnlPages: MGNL_URL + getRequiredEnv("MGNL_API_PAGES"),
  mgnlFooters: MGNL_URL + getRequiredEnv("MGNL_API_FOOTERS"),
};
