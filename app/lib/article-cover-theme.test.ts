import test from "node:test";
import assert from "node:assert/strict";
import { buildArticleCoverTheme } from "./article-cover-theme";
import { writingArticles } from "@/app/data/writing";

test("article cover themes are deterministic", () => {
  const seed = "50:State of AI 2026: What Actually Works";
  const first = buildArticleCoverTheme(seed);
  const second = buildArticleCoverTheme(seed);

  assert.equal(first.fingerprint, second.fingerprint);
  assert.equal(first.meshVariant, second.meshVariant);
});

test("published writing covers have unique fingerprints", () => {
  const fingerprints = writingArticles
    .filter((article) => article.published)
    .map((article) =>
      buildArticleCoverTheme(`${article.id}:${article.title}`).fingerprint
    );

  assert.equal(new Set(fingerprints).size, fingerprints.length);
});
