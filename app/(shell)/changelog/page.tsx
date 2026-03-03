import { CurrentWork } from "../../components/changelog/CurrentWork";
import { Timeline } from "../../components/changelog/Timeline";
import { WeeklyActivity } from "../../components/changelog/WeeklyActivity";
import { currentWork, timelineEntries } from "../../data/changelog";

export const metadata = {
  title: "Changelog | Christian Tonny",
  description:
    "What I'm building now, major releases, and project updates. A timeline of shipping.",
};

export default function ChangelogPage() {
  return (
    <div className="px-6 py-10 mx-auto space-y-12 max-w-4xl lg:px-8">
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

      {/* Auto-generated weekly activity from tracked repositories */}
      <WeeklyActivity />

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
  );
}
