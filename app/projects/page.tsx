import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { projects } from "@/app/data/projects";

export const dynamic = "force-static";

export default function ProjectsPage() {
  const featuredSlug = "erp-integration-system";
  const secondarySlugs = ["website-performance-optimization", "it-infrastructure-management"];

  const featured = projects.find((project) => project.slug === featuredSlug)!;
  const secondary = secondarySlugs
    .map((slug) => projects.find((project) => project.slug === slug)!)
    .filter(Boolean);
  const rest = projects.filter(
    (project) => project.slug !== featuredSlug && !secondarySlugs.includes(project.slug),
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Real work from managing IT infrastructure, building integrations, and optimizing systems at Andersen Rwanda and SPCS Tech Solutions.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>Case Study</span>
                    )}
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {secondary.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <article className="p-4 md:p-8">
                    <div className="flex justify-between gap-2 items-center">
                      <span className="text-xs duration-1000 text-zinc-200">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                              new Date(project.date),
                            )}
                          </time>
                        ) : (
                          <span>Case Study</span>
                        )}
                      </span>
                    </div>
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {project.title}
                    </h2>
                    <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {project.description}
                    </p>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {rest.length ? (
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            {rest.map((project) => (
              <Card key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <article className="p-4 md:p-8">
                    <span className="text-xs text-zinc-200">
                      {project.date ? (
                        <time dateTime={new Date(project.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                            new Date(project.date),
                          )}
                        </time>
                      ) : (
                        <span>Case Study</span>
                      )}
                    </span>
                    <h3 className="mt-4 text-xl font-medium text-zinc-200 group-hover:text-white font-display">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
                      {project.description}
                    </p>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
