import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";
import { Markdown } from "@/app/components/markdown";
import { ArticleCover } from "@/app/components/writing/ArticleCover";
import { ReadWithAIButtons } from "@/app/components/writing/ReadWithAIButtons";
import {
  buildReadWithAIPrompt,
  getAbsoluteArticleUrl,
  getArticleBySlug,
  getPublishedArticles,
  WRITING_SITE_URL,
} from "@/app/data/writing";

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

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
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
      images: [imageUrl],
      creator: "@irachrist01",
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
  const readPrompt = buildReadWithAIPrompt(article);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seo.metaDescription,
    image: `${WRITING_SITE_URL}${article.seo.ogImage}`,
    datePublished: article.publishedAt,
    author: {
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
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col">
      <Navigation />

      <main className="px-6 pt-28 mx-auto space-y-8 max-w-4xl lg:px-8 md:pt-24 lg:pt-32 pb-16 flex-grow w-full">
        <header className="space-y-4">
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

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-zinc-400">{article.subtitle}</p>
          )}

          <p className="text-zinc-400 leading-relaxed">{article.previewText}</p>
        </header>

        <ArticleCover
          id={article.id}
          title={article.title}
          subtitle={article.subtitle}
        />

        <section className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 md:p-6">
          <div className="mb-2 text-sm font-medium text-zinc-300">Read with AI</div>
          <ReadWithAIButtons prompt={readPrompt} />
        </section>

        <article className="rounded-xl border border-zinc-800/80 bg-zinc-900/20 p-5 md:p-8">
          <Markdown content={article.contentMarkdown} />
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Footer />
    </div>
  );
}
