import { weeklyActivity } from "@/app/data/weekly-activity";

export function WeeklyActivity() {
  const activeProjects = weeklyActivity.projects.filter((p) => p.commitCount > 0);
  const maxCommits = Math.max(...activeProjects.map((p) => p.commitCount), 1);
  const total = weeklyActivity.totals.commits;
  const windowDays = weeklyActivity.windowDays;

  if (activeProjects.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">
          {windowDays}d activity
        </span>
        <span className="text-xs text-zinc-600 font-mono">
          {total} commit{total === 1 ? "" : "s"}
        </span>
      </div>

      <div className="space-y-2.5">
        {activeProjects.map((project) => {
          const pct = (project.commitCount / maxCommits) * 100;
          return (
            <div key={project.projectSlug} className="flex items-center gap-3">
              <span className="text-xs text-zinc-500 w-28 shrink-0 truncate">
                {project.projectTitle}
              </span>
              <div className="flex-1 h-px bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-600 rounded-full transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs text-zinc-600 font-mono w-4 text-right shrink-0">
                {project.commitCount}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
