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

  assert.doesNotThrow(() => assertSourceHasSlug(source, "48-before-we-get-started"));
  assert.doesNotThrow(() => assertSourceHasSlug(source, "49-these-two-tools"));
  assert.doesNotThrow(() => assertSourceHasSlug(source, "50-state-of-ai-2026"));

  const updated = updateArticlePublicationInSource(
    source,
    "48-before-we-get-started",
    "2026-02-28T22:00:00.000Z"
  );

  assert.match(updated, /slug:\s*"48-before-we-get-started"[\s\S]*?published:\s*true/);
});
