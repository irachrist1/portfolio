import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
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
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-12 max-w-7xl lg:px-8 md:pt-24 lg:pt-32 pb-16 flex-grow">
        {/* Header */}
        <header className="space-y-4 max-w-4xl">
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

      </div>
      
      <Footer />
    </div>
  );
}
