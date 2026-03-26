import Image from "next/image";
import Link from "next/link";
import { getPublishedArticles } from "@/app/data/writing";

export const dynamic = "force-static";

export default function HomePage() {
  const recentArticles = getPublishedArticles().slice(0, 3);

  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      {/* Hero intro — warm, personal, like Jeff Su's */}
      <div className="mb-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold text-zinc-100 mb-6">Hello</h1>
            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>
                I&apos;m Christian. I help businesses implement{" "}
                <span className="text-zinc-200 font-medium">AI solutions</span>{" "}
                that actually work — from readiness assessments to production
                systems.
              </p>
              <p>
                At{" "}
                <span className="text-zinc-200 font-medium">Andersen Rwanda</span>,
                I build automation tools for research, compliance, and market
                analysis. On the side, I&apos;m working on career mentoring tools
                for students in Africa.
              </p>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                About me
              </Link>
              <Link
                href="/changelog"
                className="px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Changelog
              </Link>
            </div>
          </div>

          <figure className="mx-auto shrink-0 sm:mx-0 sm:pt-1">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
              <Image
                src="/images/IMG_3139.png"
                alt="Christian Tonny"
                width={320}
                height={400}
                className="h-auto w-[min(100%,220px)] object-cover sm:w-[200px] md:w-[220px]"
                sizes="(max-width: 640px) 220px, 220px"
                priority
              />
            </div>
            <figcaption className="sr-only">Portrait</figcaption>
          </figure>
        </div>
      </div>

      {/* Recent writing */}
      {recentArticles.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
              Recent Writing
            </h2>
            <Link
              href="/writing"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-1">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="group flex items-baseline justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
              >
                <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">
                  {article.title}
                </span>
                <span className="text-xs text-zinc-600 flex-shrink-0">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                        }
                      )
                    : ""}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Featured projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-1">
          {[
            {
              title: "Sync Blogs",
              desc: "AI-assisted blogging with cross-platform syndication",
              href: "/projects/sync-blogs",
            },
            {
              title: "Daylens",
              desc: "Local-first AI time tracking — Mac, Windows, and web",
              href: "/projects/daylens",
            },
            {
              title: "OCR Extractor",
              desc: "Document OCR pipeline — tests and frontend integration",
              href: "/projects/ocr-extractor",
            },
          ].map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group flex items-start justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
            >
              <div>
                <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">
                  {project.title}
                </span>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
