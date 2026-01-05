import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";

export const dynamic = "force-static";

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col">
      <Navigation />
      <div className="px-6 pt-28 mx-auto space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32 pb-16 flex-grow">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
            Tech Stack & Tools
          </h1>
          <p className="text-xl text-zinc-400">
            Technologies I use to build AI solutions and software systems
          </p>
        </div>

        {/* AI & Automation */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8">AI & Automation</h2>
          <Card>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">AI Platforms</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Claude API</li>
                    <li>• Azure AI</li>
                    <li>• OpenAI</li>
                    <li>• Vectara RAG</li>
                    <li>• NotebookLM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">Automation Tools</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Microsoft Copilot Studio</li>
                    <li>• Power Automate</li>
                    <li>• n8n</li>
                    <li>• Zapier</li>
                    <li>• Make.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Development */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8">Development</h2>
          <Card>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">Frontend</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Next.js</li>
                    <li>• React</li>
                    <li>• JavaScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">Backend & Database</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Python</li>
                    <li>• Convex</li>
                    <li>• Odoo ERP</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Design & Content */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8">Design & Content</h2>
          <Card>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">Design Tools</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Figma</li>
                    <li>• Adobe Photoshop</li>
                    <li>• Adobe Illustrator</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-200 mb-4">Content</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Content strategy</li>
                    <li>• Digital marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-zinc-400 mb-6">
            Want to see these skills in action?
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
      
      <Footer />
    </div>
  );
}
