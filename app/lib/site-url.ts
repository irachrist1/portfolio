const FALLBACK_SITE_URL = "https://christian-tonny.dev";

function normalizeSiteUrl(raw: string): string {
  const withProtocol = raw.startsWith("http://") || raw.startsWith("https://")
    ? raw
    : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
}

export function resolveSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!envUrl) {
    return FALLBACK_SITE_URL;
  }

  return normalizeSiteUrl(envUrl);
}

export const SITE_URL = resolveSiteUrl();
