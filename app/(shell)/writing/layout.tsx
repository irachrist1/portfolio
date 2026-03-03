import { getPublishedArticles } from "@/app/data/writing";
import { ThreeColumnShell } from "../components/ThreeColumnShell";
import {
  ContentList,
  type ContentListItem,
} from "../components/ContentList";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articles = getPublishedArticles();

  const items: ContentListItem[] = articles.map((article) => ({
    href: `/writing/${article.slug}`,
    title: article.title,
    date: article.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : undefined,
  }));

  return (
    <ThreeColumnShell
      middleColumn={<ContentList title="All Posts" items={items} />}
    >
      {children}
    </ThreeColumnShell>
  );
}
