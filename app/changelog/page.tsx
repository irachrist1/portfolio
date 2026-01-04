import { Navigation } from "../components/nav";
import { CurrentWork } from "../components/changelog/CurrentWork";
import { Timeline } from "../components/changelog/Timeline";
import { currentWork, timelineEntries } from "../data/changelog";

export const metadata = {
  title: "Changelog | Christian Tonny",
  description:
    "What I'm building now, major releases, and project updates. A timeline of shipping.",
};

export default function ChangelogPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-12 max-w-4xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Changelog
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">
            What I'm building now, major releases, and project updates. Real
            work, documented.
          </p>
        </header>

        <div className="w-full h-px bg-zinc-800" />

        {/* Currently Building - Hero Section */}
        <CurrentWork entries={currentWork} />

        {/* Main Timeline */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-2">
              Timeline
            </h2>
            <p className="text-sm text-zinc-500">
              Major releases and version updates, newest first
            </p>
          </div>

          <Timeline entries={timelineEntries} />
        </section>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="text-center space-y-4">
            <p className="text-zinc-400">
              Explore the full portfolio or get in touch
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/projects"
                className="px-6 py-3 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-200 transition-colors duration-200"
              >
                View All Projects
              </a>
              <a
                href="/contact"
                className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
