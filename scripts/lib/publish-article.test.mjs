import test from "node:test";
import assert from "node:assert/strict";
import {
  assertSourceHasSlug,
  parsePublishArgs,
  toKigaliStartIso,
  updateArticlePublicationInSource,
} from "./publish-article.mjs";

const fixtureSource = `
const RAW_ARTICLES = [
  {
    id: "48",
    slug: "48-before-we-get-started",
    published: false,
    publishedAt: null,
  },
  {
    id: "49",
    slug: "49-these-two-tools",
    published: true,
    publishedAt: "2026-03-01T00:00:00.000Z",
  },
];
`;

test("parsePublishArgs parses required and optional params", () => {
  const args = parsePublishArgs([
    "--slug=48-before-we-get-started",
    "--publish-date=2026-03-01",
    "--branch=main",
    "--remote=origin",
    "--dry-run",
  ]);

  assert.equal(args.slug, "48-before-we-get-started");
  assert.equal(args.publishDate, "2026-03-01");
  assert.equal(args.branch, "main");
  assert.equal(args.remote, "origin");
  assert.equal(args.dryRun, true);
});

test("toKigaliStartIso validates and converts date", () => {
  const iso = toKigaliStartIso("2026-03-01");
  assert.match(iso, /^2026-02-28T22:00:00\.000Z$/);
});

test("assertSourceHasSlug fails for unknown slug", () => {
  assert.throws(
    () => assertSourceHasSlug(fixtureSource, "missing-slug"),
    /does not exist/
  );
});

test("updateArticlePublicationInSource publishes draft article", () => {
  const updated = updateArticlePublicationInSource(
    fixtureSource,
    "48-before-we-get-started",
    "2026-02-28T22:00:00.000Z"
  );

  assert.match(updated, /slug:\s*"48-before-we-get-started"[\s\S]*published:\s*true/);
  assert.match(updated, /publishedAt:\s*"2026-02-28T22:00:00.000Z"/);
});

test("updateArticlePublicationInSource rejects already published article", () => {
  assert.throws(
    () =>
      updateArticlePublicationInSource(
        fixtureSource,
        "49-these-two-tools",
        "2026-02-28T22:00:00.000Z"
      ),
    /already published/
  );
});
