import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "../../components/card";
import { ArticleCover } from "../../components/writing/ArticleCover";
import {
  getPublishedArticles,
  getWritingCollectionMetadata,
} from "@/app/data/writing";
import {
  fetchKitRecentPosts,
  getExternalArchiveRoots,
} from "@/app/data/writing-archive";

export const metadata: Metadata = getWritingCollectionMetadata();

export const dynamic = "force-static";

export default async function WritingPage() {
  const publishedArticles = getPublishedArticles();
  const archiveRoots = getExternalArchiveRoots();
  const kitPosts = await fetchKitRecentPosts(24);

  return (
    <div className="px-6 py-10 mx-auto space-y-16 max-w-4xl lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
          Writing
        </h1>
        <p className="text-xl text-zinc-400">
          Thoughts on AI implementation, technology trends, and business strategy.
        </p>
      </div>

      <Card>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-4">Rwanda&apos;s Tech Insider</h2>
          <p className="text-zinc-400 mb-6">
            Weekly practical insights on AI systems, workflows, and execution.
          </p>
          <Link
            href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
          >
            Subscribe on LinkedIn &rarr;
          </Link>
        </div>
      </Card>

      {/* Mobile article list (hidden on lg where middle column shows) */}
      <section className="space-y-4 xl:hidden">
        <h2 className="text-2xl font-bold text-zinc-100">Published Essays</h2>
        <div className="space-y-2">
          {publishedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="block p-4 rounded-lg border border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
            >
              <p className="text-sm font-medium text-zinc-200">{article.title}</p>
              {article.publishedAt && (
                <p className="text-xs text-zinc-500 mt-1">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Desktop: card grid for essays */}
      <section className="space-y-6 hidden xl:block">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-zinc-100">Published Essays</h2>
          <span className="text-xs text-zinc-500">{publishedArticles.length} live</span>
        </div>

        {publishedArticles.length === 0 ? (
          <Card>
            <div className="p-6 text-sm text-zinc-400">
              No local essays are published yet.
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {publishedArticles.map((article) => (
              <Card key={article.slug}>
                <Link href={`/writing/${article.slug}`} className="block h-full group">
                  <ArticleCover
                    id={article.id}
                    title={article.title}
                    subtitle={article.subtitle}
                    compact
                  />

                  <div className="p-5 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        Issue #{article.id}
                      </span>
                      {article.publishedAt ? (
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-sm text-zinc-400 line-clamp-4">{article.previewText}</p>

                    <div className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5">
                      Open article
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-zinc-100">Archive</h2>
          <span className="text-xs text-zinc-500">Past issues on Kit + LinkedIn</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={archiveRoots.kit}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors inline-flex items-center gap-2"
          >
            Open Full Kit Archive
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={archiveRoots.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-medium text-zinc-100 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors inline-flex items-center gap-2"
          >
            Open LinkedIn Newsletter
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {kitPosts.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {kitPosts.map((post) => (
              <Card key={post.id}>
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-5 space-y-3 group"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">Kit</span>
                    {post.publishedAt ? (
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors line-clamp-3">
                    {post.title}
                  </h3>

                  {post.excerpt ? (
                    <p className="text-sm text-zinc-400 line-clamp-4">{post.excerpt}</p>
                  ) : null}

                  <div className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5">
                    Open archive post
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <div className="p-6 text-sm text-zinc-400">
              Archive posts are unavailable right now. Use the archive links above.
            </div>
          </Card>
        )}
      </section>

      <section className="text-center">
        <h2 className="text-xl font-bold text-zinc-100 mb-6">Connect</h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="https://www.linkedin.com/in/irachrist1/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/irachrist01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
          >
            Twitter
          </Link>
          <Link
            href="https://medium.com/@irachrist1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
          >
            Medium
          </Link>
        </div>
      </section>
    </div>
  );
}
