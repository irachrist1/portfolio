"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Github, ExternalLink, Monitor } from "lucide-react";
import type { Project, ProjectCategory } from "@/app/data/projects";

type Props = {
  projects: Project[];
  categories: ProjectCategory[];
  weeklyCommitCounts: Record<string, number>;
};

function ProjectsFilterInner({
  projects,
  categories,
  weeklyCommitCounts,
}: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const activeCategory = category
    ? categories.find((c) => c.id === category)
    : undefined;

  const projectsByCategory = categories
    .sort((a, b) => a.order - b.order)
    .filter((c) => !category || c.id === category)
    .map((cat) => ({
      ...cat,
      projects: projects.filter((p) => p.category === cat.id),
    }))
    .filter((cat) => cat.projects.length > 0);

  const title = activeCategory ? activeCategory.name : "Projects";

  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100 mb-2">
          {title}
        </h1>
        {!activeCategory && (
          <p className="text-base text-zinc-400 leading-relaxed">
            From personal productivity tools to government intelligence
            platforms.
          </p>
        )}
        {activeCategory && (
          <p className="text-sm text-zinc-500">{activeCategory.description}</p>
        )}

        {/* GitHub links */}
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link
            href="https://github.com/irachrist1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            irachrist1
          </Link>
          <Link
            href="https://github.com/ChristianTonny?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            ChristianTonny
          </Link>
        </div>
      </div>

      {/* Category pills — mobile only, matches sidebar nav */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1 -mx-1 px-1 lg:hidden scrollbar-hidden">
        {[
          { id: null, label: "All" },
          { id: "personal", label: "Apps" },
          { id: "career", label: "Growth" },
          { id: "community", label: "Community" },
          { id: "analytics", label: "Analytics" },
        ].map(({ id, label }) => {
          const isActive = id === null ? !category : category === id;
          return (
            <Link
              key={label}
              href={id ? `/projects?category=${id}` : "/projects"}
              className={`flex-shrink-0 px-4 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-800/70 text-zinc-400 hover:text-zinc-200 border border-zinc-700/50"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Project sections */}
      <div className="space-y-10">
        {projectsByCategory.map((cat) => (
          <section key={cat.id}>
            {!activeCategory && (
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                {cat.name}
              </h2>
            )}

            <div className="space-y-1">
              {cat.projects.map((project) => {
                const weeklyCommits =
                  weeklyCommitCounts[project.slug] ?? 0;
                const githubUrl = project.links?.find(
                  (l) => l.label === "GitHub" || l.href.includes("github.com")
                )?.href;
                const isFeatured = !!project.appUrl;

                if (isFeatured) {
                  return (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group block p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 hover:bg-zinc-900 transition-all mb-2"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                              {project.title}
                            </span>
                            {weeklyCommits > 0 && (
                              <span className="text-[10px] text-emerald-500 font-medium px-1.5 py-0.5 rounded-full bg-emerald-500/10">
                                {weeklyCommits} commits
                              </span>
                            )}
                          </div>
                          {project.tagline && (
                            <p className="text-sm text-zinc-400 mt-0.5">
                              {project.tagline}
                            </p>
                          )}
                          <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 flex-shrink-0 mt-1" />
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        {project.platforms?.map((p) => (
                          <span
                            key={p}
                            className="inline-flex items-center gap-1 text-[10px] text-zinc-500"
                          >
                            <Monitor className="w-2.5 h-2.5" />
                            {p}
                          </span>
                        ))}
                        {githubUrl && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500">
                            <Github className="w-2.5 h-2.5" />
                            Open Source
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group flex items-start justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">
                        {project.title}
                      </span>
                      <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {weeklyCommits > 0 && (
                        <span className="text-[10px] text-emerald-500 font-medium">
                          {weeklyCommits}c
                        </span>
                      )}
                      {githubUrl && (
                        <Github className="w-3 h-3 text-zinc-600" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function ProjectsFilter(props: Props) {
  return (
    <Suspense
      fallback={
        <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-3">
              Projects
            </h1>
          </div>
        </div>
      }
    >
      <ProjectsFilterInner {...props} />
    </Suspense>
  );
}
