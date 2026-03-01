import test from "node:test";
import assert from "node:assert/strict";
import { summarizeWeeklyActivity, truncateCommitMessage } from "./weekly-activity.mjs";

test("truncateCommitMessage keeps first line and clips long content", () => {
  const longMessage = "feat: this is a very long commit title that exceeds a conservative maximum length for cards and should be clipped\n\nextra details";
  const result = truncateCommitMessage(longMessage, 60);

  assert.equal(result.includes("\n"), false);
  assert.equal(result.endsWith("…"), true);
  assert.equal(result.length <= 60, true);
});

test("summarizeWeeklyActivity aggregates totals and keeps active projects first", () => {
  const repositories = [
    { projectSlug: "portfolio", projectTitle: "Portfolio", githubRepo: "acme/portfolio" },
    { projectSlug: "mnotes", projectTitle: "MNotes", githubRepo: "acme/mnotes" },
  ];

  const commitMap = {
    "acme/portfolio": {
      commits: [
        {
          sha: "a1b2c3d",
          message: "feat: add changelog",
          url: "https://github.com/acme/portfolio/commit/a1b2c3d",
          committedAt: "2026-02-27T10:00:00.000Z",
        },
      ],
      error: null,
    },
    "acme/mnotes": {
      commits: [],
      error: null,
    },
  };

  const summary = summarizeWeeklyActivity(repositories, commitMap, {
    generatedAt: "2026-02-27T12:00:00.000Z",
    windowDays: 7,
  });

  assert.equal(summary.totals.commits, 1);
  assert.equal(summary.totals.activeProjects, 1);
  assert.equal(summary.projects[0].projectSlug, "portfolio");
  assert.equal(summary.projects[0].commitCount, 1);
  assert.equal(summary.projects[1].projectSlug, "mnotes");
  assert.equal(summary.projects[1].commitCount, 0);
});

test("summarizeWeeklyActivity preserves repo error state", () => {
  const repositories = [
    { projectSlug: "portfolio", projectTitle: "Portfolio", githubRepo: "acme/portfolio" },
  ];

  const summary = summarizeWeeklyActivity(
    repositories,
    {
      "acme/portfolio": {
        commits: [],
        error: "GitHub API 403",
      },
    },
    {
      generatedAt: "2026-02-27T12:00:00.000Z",
      windowDays: 7,
    }
  );

  assert.equal(summary.projects[0].error, "GitHub API 403");
  assert.equal(summary.projects[0].commitCount, 0);
});
