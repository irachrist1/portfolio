import activity from "./weekly-activity.generated.json";

export type WeeklyActivityCommit = {
  sha: string;
  message: string;
  url: string;
  committedAt: string;
};

export type WeeklyActivityProject = {
  projectSlug: string;
  projectTitle: string;
  githubRepo: string;
  commitCount: number;
  lastCommitAt: string | null;
  lastCommitUrl: string | null;
  recentCommits: WeeklyActivityCommit[];
  error: string | null;
};

export type WeeklyActivity = {
  generatedAt: string;
  windowDays: number;
  totals: {
    commits: number;
    activeProjects: number;
  };
  projects: WeeklyActivityProject[];
};

export const weeklyActivity = activity as WeeklyActivity;

export function getWeeklyCommitCountByProject() {
  const byProject: Record<string, number> = {};

  for (const project of weeklyActivity.projects) {
    byProject[project.projectSlug] = project.commitCount;
  }

  return byProject;
}
