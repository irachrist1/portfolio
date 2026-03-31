import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { Markdown } from "@/app/components/markdown";
import { LearningDashboard } from "@/app/components/learning/LearningDashboard";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Monitor } from "lucide-react";

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
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const appLink = project.links?.find((l) => l.label === "Open App");
  const otherLinks = project.links?.filter((l) => l.label !== "Open App") ?? [];

  return (
    <div className="px-6 py-10 mx-auto max-w-4xl lg:px-8">
      {/* Back nav */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span aria-hidden="true">←</span>
          <span>Back to projects</span>
        </Link>
      </div>

      <header className="mb-10">
        {/* Title + tagline */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
          {project.title}
        </h1>
        {project.tagline && (
          <p className="mt-2 text-xl text-zinc-400 font-medium">
            {project.tagline}
          </p>
        )}
        <p className="mt-4 text-lg leading-8 text-zinc-300">
          {project.description}
        </p>

        {/* Platform badges */}
        {project.platforms && project.platforms.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/50"
              >
                <Monitor className="w-3 h-3" />
                {platform}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {appLink && (
            <Link
              href={appLink.href}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Open App
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
          {otherLinks.map((link) => (
            <Link
              target="_blank"
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
            >
              {link.href.includes("github.com") && (
                <Github className="w-3.5 h-3.5" />
              )}
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </header>

      {/* Screenshots gallery */}
      {hasScreenshots && (
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots!.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

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
