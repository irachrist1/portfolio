import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/app/components/markdown";
import { ArticleCover } from "@/app/components/writing/ArticleCover";
import { ReadWithAIButtons } from "@/app/components/writing/ReadWithAIButtons";
import {
  buildReadWithAIFullPrompt,
  buildReadWithAIPrompt,
  getAbsoluteArticleUrl,
  getArticleBySlug,
  getPublishedArticles,
  WRITING_SITE_URL,
} from "@/app/data/writing";
import { RelatedArticles } from "@/app/components/writing/RelatedArticles";

export const dynamic = "force-static";
export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, { includeUnpublished: true });

  if (!article || !article.published) {
    return {
      title: "Writing | Christian Tonny",
      description: "Article not found.",
    };
  }

  const canonicalUrl = getAbsoluteArticleUrl(article);
  const imageUrl = `${WRITING_SITE_URL}${article.seo.ogImage}`;
  const twitterImageUrl = `${WRITING_SITE_URL}${article.seo.twitterImage}`;
  const keywords = Array.from(
    new Set([
      ...article.tags,
      "AI workflows",
      "AI productivity",
      "AI newsletter",
      "Christian Tonny",
    ])
  );

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords,
    authors: [{ name: "Christian Tonny Iradukunda", url: WRITING_SITE_URL }],
    creator: "Christian Tonny Iradukunda",
    publisher: "Christian Tonny",
    category: "Technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      url: canonicalUrl,
      siteName: "Christian Tonny",
      type: "article",
      publishedTime: article.publishedAt ?? undefined,
      tags: article.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: [twitterImageUrl],
      creator: "@irachrist01",
      site: "@irachrist01",
    },
  };
}

export default async function WritingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, { includeUnpublished: true });

  if (!article || !article.published) {
    notFound();
  }

  const articleUrl = getAbsoluteArticleUrl(article);
  const readPrefillPrompt = buildReadWithAIPrompt(article);
  const readFullPrompt = buildReadWithAIFullPrompt(article);
  const normalizedIssueLabel = `issue #${article.id}`.toLowerCase();
  const normalizedSubtitle = article.subtitle?.trim().toLowerCase();
  const subtitleToRender =
    normalizedSubtitle && normalizedSubtitle !== normalizedIssueLabel
      ? article.subtitle
      : undefined;
  const wordCount = article.contentMarkdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[*_`>#~-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seo.metaDescription,
    url: articleUrl,
    image: `${WRITING_SITE_URL}${article.seo.ogImage}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    articleSection: "Writing",
    keywords: article.tags.join(", "),
    wordCount,
    author: {
      "@type": "Person",
      name: "Christian Tonny Iradukunda",
      url: WRITING_SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Christian Tonny Iradukunda",
      url: WRITING_SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <>
      <main className="px-6 py-10 mx-auto space-y-8 max-w-4xl lg:px-8 w-full">
        <div className="mb-2">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to writing</span>
          </Link>
        </div>

        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">Issue #{article.id}</span>
            {article.publishedAt && (
              <span>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
        </header>

        <ArticleCover
          id={article.id}
          title={article.title}
          subtitle={article.subtitle}
        />

        <section className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 md:p-6">
          <div className="mb-2 text-sm font-medium text-zinc-300">Read with AI</div>
          <ReadWithAIButtons
            prefillPrompt={readPrefillPrompt}
            fullPrompt={readFullPrompt}
          />
        </section>

        <article className="rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-5 md:p-8">
          <Markdown content={article.contentMarkdown} />
        </article>

        <RelatedArticles currentSlug={slug} />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
