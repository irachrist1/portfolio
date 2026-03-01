import test from "node:test";
import assert from "node:assert/strict";
import { parseKitWindowProps } from "./writing-archive";

test("parseKitWindowProps extracts recent posts payload", () => {
  const html = `
  <html><head></head><body>
    <script>window.props = {"recentPosts":[{"id":1,"title":"#1 Hello","url":"https://example.com/1","introContent":"Test intro","publishedAt":"2026-03-01T00:00:00.000Z"}]};</script>
  </body></html>`;

  const parsed = parseKitWindowProps(html);
  assert.equal(Boolean(parsed), true);
  assert.equal(parsed?.recentPosts?.length, 1);
  assert.equal(parsed?.recentPosts?.[0].title, "#1 Hello");
});

test("parseKitWindowProps handles payloads without trailing semicolon", () => {
  const html = `
  <html><head></head><body>
    <script>window.props = {"recentPosts":[{"id":2,"title":"#2 Hello","url":"https://example.com/2","introContent":"Test; intro","publishedAt":"2026-03-02T00:00:00.000Z"}]}</script>
  </body></html>`;

  const parsed = parseKitWindowProps(html);
  assert.equal(Boolean(parsed), true);
  assert.equal(parsed?.recentPosts?.length, 1);
  assert.equal(parsed?.recentPosts?.[0].id, 2);
});

test("parseKitWindowProps returns null for malformed input", () => {
  const html = `<html><body><script>window.props = {not-json};</script></body></html>`;
  const parsed = parseKitWindowProps(html);
  assert.equal(parsed, null);
});
