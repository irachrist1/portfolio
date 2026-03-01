import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site-url";
import { getPublishedArticles } from "./data/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/projects",
    "/skills",
    "/changelog",
    "/writing",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const writingEntries: MetadataRoute.Sitemap = getPublishedArticles().map(
    (article) => ({
      url: `${SITE_URL}${article.seo.canonicalPath}`,
      lastModified: article.publishedAt ? new Date(article.publishedAt) : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticEntries, ...writingEntries];
}
