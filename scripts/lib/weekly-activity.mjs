const DEFAULT_COMMIT_PREVIEW = 3;

export function truncateCommitMessage(message, maxLength = 110) {
  const firstLine = message.split("\n")[0].trim();
  if (firstLine.length <= maxLength) {
    return firstLine;
  }
  return `${firstLine.slice(0, maxLength - 1)}…`;
}

export function summarizeProjectActivity(project, commits, previewCount = DEFAULT_COMMIT_PREVIEW) {
  const sorted = [...commits].sort(
    (a, b) => new Date(b.committedAt).getTime() - new Date(a.committedAt).getTime()
  );

  return {
    projectSlug: project.projectSlug,
    projectTitle: project.projectTitle,
    githubRepo: project.githubRepo,
    commitCount: sorted.length,
    lastCommitAt: sorted[0]?.committedAt ?? null,
    lastCommitUrl: sorted[0]?.url ?? null,
    recentCommits: sorted.slice(0, previewCount),
    error: null,
  };
}

export function summarizeWeeklyActivity(projects, commitMap, {
  generatedAt,
  windowDays,
}) {
  const summaries = projects.map((project) => {
    const bucket = commitMap[project.githubRepo];

    if (bucket?.error) {
      return {
        projectSlug: project.projectSlug,
        projectTitle: project.projectTitle,
        githubRepo: project.githubRepo,
        commitCount: 0,
        lastCommitAt: null,
        lastCommitUrl: null,
        recentCommits: [],
        error: bucket.error,
      };
    }

    return summarizeProjectActivity(project, bucket?.commits ?? []);
  });

  const sortedProjects = summaries.sort((a, b) => {
    if (b.commitCount !== a.commitCount) {
      return b.commitCount - a.commitCount;
    }

    if (!a.lastCommitAt || !b.lastCommitAt) {
      return a.projectTitle.localeCompare(b.projectTitle);
    }

    return new Date(b.lastCommitAt).getTime() - new Date(a.lastCommitAt).getTime();
  });

  const totalCommits = sortedProjects.reduce(
    (sum, project) => sum + project.commitCount,
    0
  );

  const activeProjects = sortedProjects.filter(
    (project) => project.commitCount > 0
  ).length;

  return {
    generatedAt,
    windowDays,
    totals: {
      commits: totalCommits,
      activeProjects,
    },
    projects: sortedProjects,
  };
}
