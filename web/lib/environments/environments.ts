function getRequiredEnv(name: string, rawValue: string | undefined): string {
  const value = rawValue?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getBooleanEnv(rawValue: string | undefined): boolean {
  return rawValue?.trim().toLowerCase() === "true";
}

const IS_PREVIEW = getBooleanEnv(process.env.NEXT_PUBLIC_MGNL_IS_PREVIEW);

const MGNL_HOST = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_HOST",
  process.env.NEXT_PUBLIC_MGNL_HOST,
);

const MGNL_BASE = IS_PREVIEW
  ? getRequiredEnv(
      "NEXT_PUBLIC_MGNL_BASE_AUTHOR",
      process.env.NEXT_PUBLIC_MGNL_BASE_AUTHOR,
    )
  : getRequiredEnv(
      "NEXT_PUBLIC_MGNL_BASE_PUBLIC",
      process.env.NEXT_PUBLIC_MGNL_BASE_PUBLIC,
    );

const MGNL_URL = `${MGNL_HOST}${MGNL_BASE}`;

const MGNL_SITE_PATH = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_SITE_PATH",
  process.env.NEXT_PUBLIC_MGNL_SITE_PATH,
);

const MGNL_LANGUAGES = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_LANGUAGES",
  process.env.NEXT_PUBLIC_MGNL_LANGUAGES,
);

const MGNL_API_ASSETS = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_API_ASSETS",
  process.env.NEXT_PUBLIC_MGNL_API_ASSETS,
);

const MGNL_API_TEMPLATES = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_API_TEMPLATES",
  process.env.NEXT_PUBLIC_MGNL_API_TEMPLATES,
);

const MGNL_API_PAGES = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_API_PAGES",
  process.env.NEXT_PUBLIC_MGNL_API_PAGES,
);

const MGNL_API_FOOTERS = getRequiredEnv(
  "NEXT_PUBLIC_MGNL_API_FOOTERS",
  process.env.NEXT_PUBLIC_MGNL_API_FOOTERS,
);

export const environments = {
  mgnlSitePath: MGNL_SITE_PATH,
  mgnlLanguages: MGNL_LANGUAGES.split(" "),
  mgnlAssets: `${MGNL_URL}${MGNL_API_ASSETS}`,
  mgnlTemplates: `${MGNL_URL}${MGNL_API_TEMPLATES}`,
  mgnlPages: `${MGNL_URL}${MGNL_API_PAGES}`,
  mgnlFooters: `${MGNL_URL}${MGNL_API_FOOTERS}`,
};
