import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { projects, categories } from "@/app/data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export default function ProjectsPage() {
  // Group projects by category
  const projectsByCategory = categories
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      ...category,
      projects: projects.filter((p) => p.category === category.id),
    }))
    .filter((cat) => cat.projects.length > 0);

  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-12 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-zinc-400">
            From personal productivity tools to government intelligence platforms — here's what I've been building.
          </p>

          {/* GitHub Links */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="https://github.com/irachrist1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              irachrist1
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="https://github.com/ChristianTonny?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 text-sm font-medium text-white bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              ChristianTonny
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Category Sections */}
        {projectsByCategory.map((category) => (
          <section key={category.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-baseline gap-4">
              <h2 className="text-xl font-semibold text-zinc-100">
                {category.name}
              </h2>
              <span className="text-sm text-zinc-500">
                {category.description}
              </span>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

type ProjectCardProps = {
  project: typeof projects[0];
};

function ProjectCard({ project }: ProjectCardProps) {
  const hasExternalUrl = project.externalUrl || project.links?.find(l => l.label === "Live Demo");
  const liveUrl = project.externalUrl || project.links?.find(l => l.label === "Live Demo")?.href;
  const githubUrl = project.links?.find(l => l.label === "GitHub")?.href;

  return (
    <Card>
      <article className="relative h-full p-6 flex flex-col">
        {/* Date Badge */}
        {project.date && (
          <span className="text-xs text-zinc-500 mb-2">
            {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
              new Date(project.date)
            )}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-3">
          {/* View Details - White Button */}
          <Link
            href={`/projects/${project.slug}`}
            className="px-3 py-1.5 text-sm font-medium bg-white text-zinc-900 rounded-md hover:bg-zinc-200 transition-all duration-200 flex items-center gap-1.5"
          >
            Details
            <ArrowRight className="w-3 h-3" />
          </Link>

          {/* GitHub - Black Button */}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium bg-zinc-900 text-white border border-zinc-700 rounded-md hover:bg-zinc-800 transition-all duration-200 flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              Repo
            </Link>
          )}

          {/* Live Demo */}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1"
            >
              Live
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}
        </div>
      </article>
    </Card>
  );
}
