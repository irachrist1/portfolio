import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import {
  assertSourceHasSlug,
  updateArticlePublicationInSource,
} from "./publish-article.mjs";

test("publish source helpers work against real writing source", async () => {
  const source = await readFile(resolve("app/data/writing.ts"), "utf8");
  const knownSlugs = [
    "48-before-we-get-started",
    "49-these-two-tools",
    "50-state-of-ai-2026",
  ];

  for (const slug of knownSlugs) {
    assert.doesNotThrow(() => assertSourceHasSlug(source, slug));
  }

  const getArticleSlice = (content, slug) => {
    const start = content.indexOf(`slug: "${slug}"`);
    if (start === -1) {
      return null;
    }

    const end = content.indexOf("\n  },", start);
    if (end === -1) {
      return content.slice(start);
    }

    return content.slice(start, end);
  };

  const pickDraftSlug = (content) =>
    knownSlugs.find((slug) => /published:\s*false/.test(getArticleSlice(content, slug) ?? ""));

  const forceDraft = (content, slug) => {
    const articleSlice = getArticleSlice(content, slug);
    if (!articleSlice) {
      return content;
    }

    const updatedSlice = articleSlice.replace(/published:\s*true/, "published: false");
    if (updatedSlice === articleSlice) {
      return content;
    }

    return content.replace(articleSlice, updatedSlice);
  };

  const targetSlug = pickDraftSlug(source) ?? knownSlugs[0];
  const sourceForUpdate = pickDraftSlug(source) ? source : forceDraft(source, targetSlug);

  const publishedAtIso = "2026-02-28T22:00:00.000Z";
  const updated = updateArticlePublicationInSource(
    sourceForUpdate,
    targetSlug,
    publishedAtIso
  );

  assert.match(
    updated,
    new RegExp(`slug:\\s*"${targetSlug}"[\\s\\S]*?published:\\s*true`)
  );
  assert.match(
    updated,
    new RegExp(`slug:\\s*"${targetSlug}"[\\s\\S]*?publishedAt:\\s*"${publishedAtIso}"`)
  );
});
