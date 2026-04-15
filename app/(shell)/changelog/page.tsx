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
    <div className="px-6 py-10 mx-auto max-w-2xl lg:px-8 space-y-10">
      <CurrentWork entries={currentWork} />
      <WeeklyActivity />
      <Timeline entries={timelineEntries} />
    </div>
  );
}
