import Link from "next/link";
import { weeklyActivity } from "@/app/data/weekly-activity";

export function WeeklyActivity() {
  const activeProjects = weeklyActivity.projects.filter((project) => project.commitCount > 0);
  const hasErrors = weeklyActivity.projects.some((project) => project.error);
  const generatedAt = new Date(weeklyActivity.generatedAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-zinc-100 mb-2">Weekly Git Activity</h2>
        <p className="text-sm text-zinc-500">
          Auto-generated from tracked repositories every week.
          {" "}
          Last sync: {generatedAt}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Commits (last {weeklyActivity.windowDays} days)</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{weeklyActivity.totals.commits}</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Active projects</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{weeklyActivity.totals.activeProjects}</p>
        </div>
      </div>

      {activeProjects.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-sm text-zinc-400">
          No tracked commits in the current window.
          {hasErrors ? " Some repositories could not be fetched this run." : ""}
        </div>
      ) : (
        <div className="space-y-3">
          {activeProjects.map((project) => (
            <article key={project.projectSlug} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
              <div className="flex items-center justify-between gap-3 mb-3">
                <Link
                  href={`/projects/${project.projectSlug}`}
                  className="text-sm font-medium text-zinc-200 hover:text-white"
                >
                  {project.projectTitle}
                </Link>
                <span className="text-xs text-emerald-400 font-medium">
                  {project.commitCount} commit{project.commitCount === 1 ? "" : "s"}
                </span>
              </div>

              <ul className="space-y-1.5">
                {project.recentCommits.slice(0, 2).map((commit) => (
                  <li key={commit.sha} className="text-sm text-zinc-400">
                    <a
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-200 transition-colors"
                    >
                      {commit.sha} - {commit.message}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
