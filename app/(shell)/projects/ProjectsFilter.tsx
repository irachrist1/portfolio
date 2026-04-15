"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import type { Project, ProjectCategory } from "@/app/data/projects";

type Props = {
  projects: Project[];
  categories: ProjectCategory[];
  weeklyCommitCounts: Record<string, number>;
};

const CATEGORY_FILTERS = [
  { id: "personal", label: "Apps" },
  { id: "career", label: "Career" },
  { id: "andersen", label: "Work" },
  { id: "analytics", label: "Analytics" },
  { id: "community", label: "Community" },
];

function ProjectsFilterInner({ projects, categories }: Props) {
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

  return (
    <div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
      {/* Header */}
      <div className="mb-8">
        {activeCategory ? (
          <>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-3 h-3" />
              All projects
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
              {activeCategory.name}
            </h1>
          </>
        ) : (
          <div className="flex items-baseline justify-between flex-wrap gap-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
              Projects
            </h1>
            <div className="flex gap-4 flex-wrap">
              {CATEGORY_FILTERS.map((f) => (
                <Link
                  key={f.id}
                  href={`/projects?category=${f.id}`}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {f.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project sections */}
      <div className="space-y-10">
        {projectsByCategory.map((cat) => (
          <section key={cat.id}>
            {!activeCategory && (
              <h2 className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest mb-3">
                {cat.name}
              </h2>
            )}

            <div className="space-y-1">
              {cat.projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-3 border-b border-zinc-800/40 hover:border-zinc-700 transition-colors"
                >
                  <div className="min-w-0">
                    <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">
                      {project.title}
                    </span>
                    {project.tagline && (
                      <span className="ml-2 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                        {project.tagline}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
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
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            Projects
          </h1>
        </div>
      }
    >
      <ProjectsFilterInner {...props} />
    </Suspense>
  );
}
