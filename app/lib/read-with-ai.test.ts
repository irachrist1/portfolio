import test from "node:test";
import assert from "node:assert/strict";
import { buildReadWithAIUrl, getReadWithAIProviders } from "./read-with-ai";

test("provider list is stable and unique", () => {
  const providers = getReadWithAIProviders();
  const names = providers.map((entry) => entry.provider);

  assert.deepEqual(names, ["chatgpt", "claude", "perplexity"]);
  assert.equal(new Set(names).size, providers.length);
});

test("provider URL builders preserve encoded prompt", () => {
  const prompt = "Summarize this article and give 5 action steps.";

  for (const item of getReadWithAIProviders()) {
    const url = buildReadWithAIUrl(item.provider, prompt);
    assert.equal(url.includes(encodeURIComponent(prompt)), true);
    assert.match(url, /^https:\/\//);
  }
});
