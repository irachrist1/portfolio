import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { Header } from "./header";
import { Markdown } from "@/app/components/markdown";
import { Footer } from "@/app/components/footer";
import { LearningDashboard } from "@/app/components/learning/LearningDashboard";

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

  // Special rendering for learning project
  const isLearningPage = slug === "learning";

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto max-w-4xl flex-grow">
        {isLearningPage ? (
          <LearningDashboard />
        ) : (
          <Markdown content={project.body} />
        )}
      </article>
      <Footer />
    </div>
  );
}
