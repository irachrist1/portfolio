type ProjectLike = {
  slug: string;
};

type RepositoryLike = {
  projectSlug: string;
  projectTitle: string;
  githubRepo: string;
};

type CurrentLike = {
  id: string;
  date: string;
  projectSlug: string;
  lastUpdated: string;
};

type TimelineLike = {
  id: string;
  date: string;
  projectSlug: string;
  type: "release" | "update";
  link?: string;
};

type ValidateInput = {
  projects: ProjectLike[];
  repositories: RepositoryLike[];
  currentWork: CurrentLike[];
  timelineEntries: TimelineLike[];
};

const ALLOWED_NON_PROJECT_SLUGS = new Set(["writing"]);

function isValidDate(dateValue: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return false;
  }

  const parsed = new Date(dateValue);
  return !Number.isNaN(parsed.getTime());
}

export function assertChangelogIntegrity({
  projects,
  repositories,
  currentWork,
  timelineEntries,
}: ValidateInput): void {
  const knownProjectSlugs = new Set(projects.map((project) => project.slug));

  const allIds = new Set<string>();
  const assertUniqueId = (id: string, source: string) => {
    if (allIds.has(id)) {
      throw new Error(`[changelog] Duplicate id '${id}' found in ${source}.`);
    }
    allIds.add(id);
  };

  for (const repo of repositories) {
    if (!knownProjectSlugs.has(repo.projectSlug)) {
      throw new Error(
        `[changelog] Repository mapping '${repo.projectSlug}' is missing in projects data.`
      );
    }

    if (!repo.githubRepo.includes("/")) {
      throw new Error(
        `[changelog] Repository mapping '${repo.projectSlug}' has invalid githubRepo '${repo.githubRepo}'.`
      );
    }
  }

  for (const entry of currentWork) {
    assertUniqueId(entry.id, "currentWork");

    if (!isValidDate(entry.date)) {
      throw new Error(
        `[changelog] Current entry '${entry.id}' has invalid date '${entry.date}'.`
      );
    }

    if (!isValidDate(entry.lastUpdated)) {
      throw new Error(
        `[changelog] Current entry '${entry.id}' has invalid lastUpdated '${entry.lastUpdated}'.`
      );
    }

    if (!knownProjectSlugs.has(entry.projectSlug)) {
      throw new Error(
        `[changelog] Current entry '${entry.id}' references unknown projectSlug '${entry.projectSlug}'.`
      );
    }
  }

  for (const entry of timelineEntries) {
    assertUniqueId(entry.id, "timelineEntries");

    if (!isValidDate(entry.date)) {
      throw new Error(
        `[changelog] Timeline entry '${entry.id}' has invalid date '${entry.date}'.`
      );
    }

    const isKnownSlug =
      knownProjectSlugs.has(entry.projectSlug) ||
      ALLOWED_NON_PROJECT_SLUGS.has(entry.projectSlug);

    if (!isKnownSlug) {
      throw new Error(
        `[changelog] Timeline entry '${entry.id}' references unknown projectSlug '${entry.projectSlug}'.`
      );
    }

    if (entry.type === "update" && !knownProjectSlugs.has(entry.projectSlug)) {
      throw new Error(
        `[changelog] Update entry '${entry.id}' must target a real project slug, got '${entry.projectSlug}'.`
      );
    }

    if (entry.link?.startsWith("/projects/")) {
      const linkSlug = entry.link.replace("/projects/", "").split("/")[0];
      if (!knownProjectSlugs.has(linkSlug)) {
        throw new Error(
          `[changelog] Timeline entry '${entry.id}' links to missing project route '${entry.link}'.`
        );
      }
    }
  }
}
