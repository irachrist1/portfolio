import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
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
  const kitPosts = await fetchKitRecentPosts(12);

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col">
      <Navigation />
      <div className="px-6 pt-28 mx-auto space-y-12 max-w-7xl lg:px-8 md:pt-24 lg:pt-32 pb-16 flex-grow">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
            Writing
          </h1>
          <p className="text-xl text-zinc-400">
            Practical essays on AI workflows, product strategy, and what actually
            works in implementation.
          </p>
        </div>

        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">
              Rwanda&apos;s Tech Insider
            </h2>
            <p className="text-zinc-400 mb-6">
              Weekly practical insights on AI systems, workflows, and execution.
            </p>
            <Link
              href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
              target="_blank"
              className="inline-block px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
            >
              Subscribe on LinkedIn &rarr;
            </Link>
          </div>
        </Card>

        <section className="space-y-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-2xl font-bold text-zinc-100">Newsletter Archive</h2>
            <span className="text-xs text-zinc-500">
              Past issues remain on Kit + LinkedIn
            </span>
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

          {kitPosts.length > 0 && (
            <div className="space-y-3">
              {kitPosts.map((post) => (
                <Card key={post.id}>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 group"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 mb-2">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        Kit
                      </span>
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-zinc-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-zinc-100">Published Articles</h2>
            <span className="text-xs text-zinc-500">
              {publishedArticles.length} live
            </span>
          </div>

          {publishedArticles.length === 0 ? (
            <Card>
              <div className="p-6 text-sm text-zinc-400">
                No articles are published yet. Use the publish commands to release
                #48, #49, and #50.
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              {publishedArticles.map((article) => (
                <Card key={article.slug}>
                  <Link
                    href={`/writing/${article.slug}`}
                    className="block group"
                  >
                    <div className="relative h-52 w-full overflow-hidden border-b border-zinc-800/70">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority={article.id === publishedArticles[0]?.id}
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                        <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          Issue #{article.id}
                        </span>
                        {article.publishedAt && (
                          <span>
                            {new Date(article.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed">
                        {article.previewText}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {article.tags.map((tag) => (
                          <span
                            key={`${article.slug}-${tag}`}
                            className="text-[11px] uppercase tracking-wide text-zinc-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors pt-2 inline-flex items-center gap-1.5">
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
      </div>

      <Footer />
    </div>
  );
}
