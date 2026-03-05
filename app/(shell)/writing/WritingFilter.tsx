"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
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

  // Category-filtered view — clean, focused
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
                      day: "numeric",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-zinc-500 py-8 text-center">
            No articles in this category yet.
          </p>
        )}

        {/* Suggest similar topics */}
        {otherCategories.length > 0 && (
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-xs text-zinc-500 mb-3">Explore other topics</p>
            <div className="flex flex-wrap gap-2">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/writing?category=${cat.id}`}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
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

  // Main writing page — all articles + newsletter CTA
  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-3">
          {title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Thoughts on AI implementation, technology trends, and building
          products that work.
        </p>
      </div>

      {/* Newsletter CTA */}
      <div className="mb-12 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="text-xl font-bold text-zinc-100 mb-2">
          Rwanda&apos;s Tech Insider
        </h2>
        <p className="text-zinc-400 text-sm mb-4">
          Weekly practical insights on AI systems, workflows, and execution.
        </p>
        <Link
          href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors"
        >
          Subscribe on LinkedIn
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Category pills — mobile only */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 lg:hidden">
        {writingCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/writing?category=${cat.id}`}
            className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Article list */}
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
                    day: "numeric",
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
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-3">
              Writing
            </h1>
          </div>
        </div>
      }
    >
      <WritingFilterInner articles={articles} />
    </Suspense>
  );
}
