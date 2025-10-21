import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { Header } from "./header";
import { Markdown } from "@/app/components/markdown";
import "./mdx.css";

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

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto max-w-4xl space-y-6">
        <Markdown content={project.body} />
      </article>
    </div>
  );
}
