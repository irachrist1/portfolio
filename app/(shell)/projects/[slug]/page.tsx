import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { Markdown } from "@/app/components/markdown";
import { LearningDashboard } from "@/app/components/learning/LearningDashboard";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const dynamic = "force-static";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const isLearningPage = slug === "learning";

  return (
    <div className="px-6 py-10 mx-auto max-w-4xl lg:px-8">
      {/* Project header */}
      <div className="mb-8 xl:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span aria-hidden="true">←</span>
          <span>Back to projects</span>
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          {project.description}
        </p>

        {project.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <Link
                target="_blank"
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        ) : null}
      </header>

      <article>
        {isLearningPage ? (
          <LearningDashboard />
        ) : (
          <Markdown content={project.body} />
        )}
      </article>
    </div>
  );
}
