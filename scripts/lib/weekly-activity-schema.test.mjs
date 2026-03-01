import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

async function readJson(path) {
  const content = await readFile(resolve(path), "utf8");
  return JSON.parse(content);
}

test("generated weekly activity covers every tracked repository", async () => {
  const repositories = await readJson("app/data/repositories.json");
  const generated = await readJson("app/data/weekly-activity.generated.json");

  assert.equal(Array.isArray(generated.projects), true);
  assert.equal(generated.projects.length, repositories.length);

  const expectedRepos = new Set(repositories.map((repo) => repo.githubRepo));
  for (const project of generated.projects) {
    assert.equal(expectedRepos.has(project.githubRepo), true);
    assert.equal(typeof project.commitCount, "number");
    assert.equal(Array.isArray(project.recentCommits), true);
  }
});
