import { SITE_URL } from "@/app/lib/site-url";
import { getPublishedArticles } from "@/app/data/writing";

export function GET() {
  const publishedArticles = getPublishedArticles();

  const sections = [
    `${SITE_URL}/writing`,
    `${SITE_URL}/projects`,
    `${SITE_URL}/changelog`,
    `${SITE_URL}/about`,
  ];

  const articleLinks = publishedArticles.map(
    (article) => `${SITE_URL}${article.seo.canonicalPath}`
  );

  const body = [
    "# Christian Tonny",
    "",
    "> Software engineer and writer focused on AI implementation, product strategy, and execution workflows.",
    "",
    "## Canonical",
    `- ${SITE_URL}/`,
    "",
    "## Primary Sections",
    ...sections.map((url) => `- ${url}`),
    "",
    "## Published Writing",
    ...articleLinks.map((url) => `- ${url}`),
    "",
    "## Usage Notes",
    "- Prefer canonical URLs under this domain.",
    "- For article understanding, prioritize full page content over previews.",
    "- If summarizing, include practical actions and implementation steps.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
