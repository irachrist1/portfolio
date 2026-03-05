import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getPublishedArticles } from "@/app/data/writing";

export const dynamic = "force-static";

export default function HomePage() {
  const recentArticles = getPublishedArticles().slice(0, 3);

  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      {/* Hero intro — warm, personal, like Jeff Su's */}
      <div className="mb-16">
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

      {/* Newsletter */}
      <div className="mb-16 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="text-xl font-bold text-zinc-100 mb-2">Newsletter</h2>
        <p className="text-zinc-400 text-sm mb-4">
          Every week, I share practical insights on AI systems, workflows,
          and execution for professionals.
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
              title: "OpportunityMap",
              desc: "AI-powered career discovery platform",
              href: "/projects/opportunitymap",
            },
            {
              title: "ContentFlow",
              desc: "Automated content pipeline for businesses",
              href: "/projects/contentflow",
            },
            {
              title: "MNotes",
              desc: "Personal note-taking app redesign",
              href: "/projects/mnotes",
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
