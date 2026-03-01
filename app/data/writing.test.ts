import test from "node:test";
import assert from "node:assert/strict";
import {
  buildReadWithAIFullPrompt,
  buildReadWithAIPrompt,
  getArticleBySlug,
  getPublishedArticles,
  writingArticles,
} from "./writing";

test("writing data has unique ids and slugs", () => {
  const ids = writingArticles.map((article) => article.id);
  const slugs = writingArticles.map((article) => article.slug);

  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("writing data includes required SEO fields and ordered schedule", () => {
  const orders = writingArticles.map((article) => article.scheduledOrder);
  const sorted = [...orders].sort((a, b) => a - b);

  assert.deepEqual(orders, sorted);
  assert.equal(new Set(orders).size, orders.length);

  for (const article of writingArticles) {
    assert.equal(Boolean(article.seo.metaTitle), true);
    assert.equal(Boolean(article.seo.metaDescription), true);
    assert.equal(article.seo.canonicalPath.startsWith("/writing/"), true);
    assert.equal(article.coverImage.startsWith("/"), true);
  }
});

test("published article helpers hide unpublished entries by default", () => {
  const published = getPublishedArticles();
  assert.equal(Array.isArray(published), true);
  assert.equal(
    published.every((article) => article.published === true),
    true
  );

  const firstPublished = writingArticles.find((article) => article.published);
  if (firstPublished) {
    const visibleByDefault = getArticleBySlug(firstPublished.slug);
    assert.equal(Boolean(visibleByDefault), true);
  } else {
    assert.equal(published.length, 0);
  }

  const firstDraft = writingArticles.find((article) => !article.published);
  if (!firstDraft) {
    return;
  }

  const hiddenDraft = getArticleBySlug(firstDraft.slug);
  assert.equal(hiddenDraft, undefined);

  const visibleDraft = getArticleBySlug(firstDraft.slug, {
    includeUnpublished: true,
  });
  assert.equal(Boolean(visibleDraft), true);
});

test("buildReadWithAIPrompt includes execution-focused checklist", () => {
  const article = writingArticles[0];
  const prompt = buildReadWithAIPrompt(article);
  const fullPrompt = buildReadWithAIFullPrompt(article);

  assert.match(prompt, /7 bullets max/);
  assert.match(prompt, /5-day action plan/);
  assert.match(prompt, /Article title:/);
  assert.match(prompt, /Article URL:/);
  assert.match(prompt, /Article excerpt:/);
  assert.match(prompt, /Summary focus:/);
  assert.match(prompt, /Application focus:/);
  assert.match(fullPrompt, /Full article text:/);
});
