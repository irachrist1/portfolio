import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { summarizeWeeklyActivity, truncateCommitMessage } from "./lib/weekly-activity.mjs";

function parseArgs(argv) {
  const args = {
    days: 7,
    check: false,
    output: "app/data/weekly-activity.generated.json",
  };

  for (const arg of argv) {
    if (arg === "--check") {
      args.check = true;
      continue;
    }

    if (arg.startsWith("--days=")) {
      const parsed = Number(arg.split("=")[1]);
      if (!Number.isInteger(parsed) || parsed <= 0) {
        throw new Error(`Invalid --days value: '${arg}'`);
      }
      args.days = parsed;
      continue;
    }

    if (arg.startsWith("--output=")) {
      args.output = arg.split("=")[1];
      continue;
    }

    throw new Error(`Unknown argument '${arg}'.`);
  }

  return args;
}

async function readRepositories() {
  const repositoriesPath = resolve("app/data/repositories.json");
  const file = await readFile(repositoriesPath, "utf8");
  return JSON.parse(file);
}

async function fetchCommitsForRepo(repo, sinceIso, token) {
  const url = `https://api.github.com/repos/${repo}/commits?since=${encodeURIComponent(sinceIso)}&per_page=50`;

  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-weekly-activity-generator",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status}: ${text.slice(0, 180)}`);
  }

  const payload = await response.json();

  return payload.map((commit) => ({
    sha: commit.sha.slice(0, 7),
    message: truncateCommitMessage(commit.commit.message),
    url: commit.html_url,
    committedAt: commit.commit.author.date,
  }));
}

async function fetchAllCommits(repositories, sinceIso, token) {
  const commitMap = {};

  await Promise.all(
    repositories.map(async (project) => {
      try {
        const commits = await fetchCommitsForRepo(project.githubRepo, sinceIso, token);
        commitMap[project.githubRepo] = { commits, error: null };
      } catch (error) {
        commitMap[project.githubRepo] = {
          commits: [],
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    })
  );

  return commitMap;
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function normalizeForCheck(payload) {
  return {
    ...payload,
    generatedAt: "__IGNORED__",
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const now = new Date();
  const since = new Date(now);
  since.setDate(now.getDate() - args.days);

  const repositories = await readRepositories();
  const token = process.env.GITHUB_TOKEN || process.env.GH_ACTIVITY_TOKEN || "";
  const commitMap = await fetchAllCommits(repositories, since.toISOString(), token);

  const outputPayload = summarizeWeeklyActivity(repositories, commitMap, {
    generatedAt: now.toISOString(),
    windowDays: args.days,
  });

  const outputPath = resolve(args.output);
  const nextOutput = stableJson(outputPayload);

  if (args.check) {
    const existingOutput = await readFile(outputPath, "utf8");
    const existingPayload = JSON.parse(existingOutput);
    const generatedPayload = JSON.parse(nextOutput);

    const normalizedExisting = stableJson(normalizeForCheck(existingPayload));
    const normalizedGenerated = stableJson(normalizeForCheck(generatedPayload));

    if (normalizedExisting !== normalizedGenerated) {
      throw new Error(
        `Weekly activity data is outdated. Run: node scripts/generate-weekly-activity.mjs --days=${args.days}`
      );
    }

    console.log("Weekly activity data is up to date.");
    return;
  }

  await writeFile(outputPath, nextOutput, "utf8");
  console.log(`Wrote weekly activity data to ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
