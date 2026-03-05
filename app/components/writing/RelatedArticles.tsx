import Link from "next/link";
import { getPublishedArticles } from "@/app/data/writing";
import {
  getArticleCategory,
  type WritingCategory,
} from "@/app/data/writing-categories";

type Props = {
  currentSlug: string;
};

function getRelatedArticles(currentSlug: string, max = 3) {
  const articles = getPublishedArticles();
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return [];

  const currentCategory = getArticleCategory(current.tags);
  const others = articles.filter((a) => a.slug !== currentSlug);

  // Score by: same category (3 pts) + shared tags (1 pt each)
  const scored = others.map((article) => {
    let score = 0;
    if (currentCategory) {
      const articleCategory = getArticleCategory(article.tags);
      if (articleCategory?.id === currentCategory.id) score += 3;
    }
    score += article.tags.filter((t) => current.tags.includes(t)).length;
    return { article, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((s) => s.article);
}

export function RelatedArticles({ currentSlug }: Props) {
  const related = getRelatedArticles(currentSlug);
  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-[#e8e8ed] dark:border-zinc-800">
      <h2 className="text-sm font-semibold text-[#86868b] dark:text-zinc-500 uppercase tracking-wider mb-6">
        Related Articles
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((article) => {
          const category = getArticleCategory(article.tags);
          return (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group block p-4 rounded-xl border border-[#e8e8ed] dark:border-zinc-800 hover:border-[#d2d2d7] dark:hover:border-zinc-700 bg-[#fafafa] dark:bg-zinc-900/30 hover:bg-[#f5f5f7] dark:hover:bg-zinc-900/50 transition-all duration-200"
            >
              <div className="space-y-2">
                {category && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#86868b] dark:text-zinc-500">
                    {category.label}
                  </span>
                )}
                <h3 className="text-sm font-medium text-[#1d1d1f] dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-[#86868b] dark:text-zinc-500 line-clamp-2">
                  {article.previewText}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
