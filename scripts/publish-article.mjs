import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import {
  assertSourceHasSlug,
  getKigaliTodayDateString,
  parsePublishArgs,
  toKigaliStartIso,
  updateArticlePublicationInSource,
} from "./lib/publish-article.mjs";

const WRITING_DATA_FILE = resolve("app/data/writing.ts");

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    ...options,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(" ")}`);
  }
}

function runCommandCapture(command, args) {
  const result = spawnSync(command, args, {
    stdio: ["ignore", "pipe", "pipe"],
    encoding: "utf8",
  });

  if (result.status !== 0) {
    const stderr = result.stderr?.trim();
    throw new Error(
      `Command failed: ${command} ${args.join(" ")} ${stderr ? `\n${stderr}` : ""}`
    );
  }

  return result.stdout.trim();
}

function assertTrackedWorktreeClean() {
  const output = runCommandCapture("git", [
    "status",
    "--porcelain",
    "--untracked-files=no",
  ]);

  if (output.length > 0) {
    throw new Error(
      "Refusing to publish: tracked working tree is dirty. Commit or stash changes first."
    );
  }
}

async function main() {
  const args = parsePublishArgs(process.argv.slice(2));

  const publishDate = args.publishDate || getKigaliTodayDateString();
  const publishedAtIso = toKigaliStartIso(publishDate);

  assertTrackedWorktreeClean();

  const source = await readFile(WRITING_DATA_FILE, "utf8");
  assertSourceHasSlug(source, args.slug);

  const updatedSource = updateArticlePublicationInSource(
    source,
    args.slug,
    publishedAtIso
  );

  await writeFile(WRITING_DATA_FILE, updatedSource, "utf8");

  if (args.dryRun) {
    console.log(
      `[dry-run] Would publish '${args.slug}' at ${publishedAtIso} and push to ${args.remote}/${args.branch}.`
    );
    return;
  }

  runCommand("npm", ["test"]);
  runCommand("npm", ["run", "build"]);

  runCommand("git", ["add", "app/data/writing.ts"]);
  runCommand("git", ["commit", "-m", `publish(writing): ${args.slug}`]);
  runCommand("git", ["push", args.remote, args.branch]);

  const sha = runCommandCapture("git", ["rev-parse", "--short", "HEAD"]);

  console.log("\nPublish complete.");
  console.log(`Article: ${args.slug}`);
  console.log(`Published at (Africa/Kigali): ${publishDate} 00:00`);
  console.log(`Commit: ${sha}`);
  console.log(
    "Vercel should deploy from the pushed commit automatically because this repository is connected to your domain."
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
