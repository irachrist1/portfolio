"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import {
  writingCategories,
  filterArticlesByCategory,
} from "@/app/data/writing-categories";

type Article = {
  slug: string;
  title: string;
  publishedAt?: string | null;
  tags: string[];
};

function WritingFilterInner({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const activeCategory = category
    ? writingCategories.find((c) => c.id === category)
    : undefined;

  const filtered = category
    ? filterArticlesByCategory(articles, category)
    : articles;

  const otherCategories = writingCategories.filter((c) => c.id !== category);

  const title = activeCategory ? activeCategory.label : "Writing";

  // Category-filtered view
  if (activeCategory) {
    return (
      <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
        <div className="mb-8">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-3 h-3" />
            All articles
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            {title}
          </h1>
        </div>

        <div className="space-y-1">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group flex items-baseline justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
            >
              <span className="text-sm text-zinc-200 group-hover:text-white transition-colors leading-snug">
                {article.title}
              </span>
              <span className="text-xs text-zinc-600 flex-shrink-0">
                {article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-zinc-500 py-8">
            No articles in this category yet.
          </p>
        )}

        {otherCategories.length > 0 && (
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex flex-wrap gap-3">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/writing?category=${cat.id}`}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Main writing page
  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      <div className="flex items-baseline justify-between mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          Writing
        </h1>
        <div className="flex gap-4">
          {writingCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/writing?category=${cat.id}`}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-1">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group flex items-baseline justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
          >
            <span className="text-sm text-zinc-200 group-hover:text-white transition-colors leading-snug">
              {article.title}
            </span>
            <span className="text-xs text-zinc-600 flex-shrink-0">
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WritingFilter({ articles }: { articles: Article[] }) {
  return (
    <Suspense
      fallback={
        <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            Writing
          </h1>
        </div>
      }
    >
      <WritingFilterInner articles={articles} />
    </Suspense>
  );
}
