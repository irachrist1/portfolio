import { Card } from "../../components/card";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Code2,
  Palette,
} from "lucide-react";

export const dynamic = "force-static";

const categories = [
  {
    title: "AI platforms",
    description: "Models, APIs, and retrieval",
    icon: Bot,
    accent: "from-violet-500/15 to-transparent",
    items: [
      "Claude API",
      "Azure AI",
      "OpenAI",
      "Vectara RAG",
      "NotebookLM",
    ],
  },
  {
    title: "Automation",
    description: "Orchestration & copilots",
    icon: Workflow,
    accent: "from-sky-500/15 to-transparent",
    items: [
      "Microsoft Copilot Studio",
      "Power Automate",
      "n8n",
      "Zapier",
      "Make.com",
    ],
  },
  {
    title: "Development",
    description: "Frontend to backend",
    icon: Code2,
    accent: "from-emerald-500/15 to-transparent",
    items: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Convex",
      "Odoo ERP",
    ],
  },
  {
    title: "Design & content",
    description: "Visual craft & narrative",
    icon: Palette,
    accent: "from-amber-500/15 to-transparent",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Content strategy",
      "Digital marketing",
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="px-6 py-10 mx-auto max-w-6xl lg:px-8">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
          Tech Stack & Tools
        </h1>
        <p className="text-xl text-zinc-400">
          Technologies I use to build AI solutions and software systems
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Card key={cat.title}>
              <div
                className={`relative h-full p-6 bg-gradient-to-br ${cat.accent} border-zinc-800/80`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-600/80 bg-zinc-900/60 text-zinc-200">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-zinc-100 leading-tight">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-zinc-500 mt-0.5">{cat.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-zinc-700/90 bg-zinc-900/50 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center pt-14">
        <p className="text-zinc-500 text-sm mb-6">
          Want to see these in production?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
          >
            Work Together
          </Link>
        </div>
      </div>
    </div>
  );
}
