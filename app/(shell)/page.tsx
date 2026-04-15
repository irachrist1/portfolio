import { getPublishedArticles } from "@/app/data/writing";
import { projects } from "@/app/data/projects";
import { HomeInteractive } from "./HomeInteractive";

export const dynamic = "force-static";

const FEATURED_SLUGS = ["daylens", "sync-blogs", "ocr-extractor", "contentflow"];

export default function HomePage() {
  const recentArticles = getPublishedArticles()
    .slice(0, 4)
    .map((a) => ({
      title: a.title,
      slug: a.slug,
      publishedAt: a.publishedAt,
    }));

  const featuredProjects = FEATURED_SLUGS.flatMap((slug) => {
    const p = projects.find((x) => x.slug === slug);
    return p
      ? [{ title: p.title, slug: p.slug, tagline: p.tagline ?? "" }]
      : [];
  }).slice(0, 4);

  return (
    <HomeInteractive
      recentArticles={recentArticles}
      featuredProjects={featuredProjects}
    />
  );
}
