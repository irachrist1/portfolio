# GEO (Generative Engine Optimization) Notes

Last updated: 2026-03-01

## What GEO Means in Practice

GEO is optimization for AI-generated answers (not only classic ranked links).
The objective is to increase the chance that your page is cited, linked, and used as evidence in assistant responses.

## Evidence Snapshot

1. GEO was formalized in research and reported measurable visibility lift in generative responses.
   - Source: https://arxiv.org/abs/2311.09735

2. Google states AI features (AI Overviews / AI Mode) use core SEO fundamentals; no separate hidden checklist.
   - Source: https://developers.google.com/search/docs/appearance/ai-features

3. OpenAI exposes crawler separation:
   - `OAI-SearchBot` for search discovery
   - `GPTBot` for training crawl
   - `ChatGPT-User` for user-triggered fetch
   - Source: https://platform.openai.com/docs/bots/

4. Anthropic exposes crawler separation:
   - `ClaudeBot` (training-related crawl)
   - `Claude-User` (user-triggered fetch)
   - `Claude-SearchBot` (search indexing)
   - Source: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler

5. Perplexity publishes crawler behavior and robots controls for `PerplexityBot`.
   - Source: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

## Implementation Priorities (High ROI)

1. Keep pages crawlable and indexable.
   - Ensure `robots.txt` allows desired bots.
   - Avoid `noindex` on pages you want cited.
   - Keep canonical URLs stable (avoid redirect chains where possible).

2. Make pages easy to parse.
   - Clear heading hierarchy (`h1` then semantic sections).
   - Concise summary near the top.
   - Structured metadata (Open Graph, Twitter, JSON-LD).

3. Increase citation-worthiness.
   - Include concrete claims with sources.
   - Publish date and author identity.
   - Distinct point of view and practical steps (not generic copy).

4. Improve retrieval reliability.
   - Keep dedicated article URLs (already done at `/writing/[slug]`).
   - Add and maintain sitemap.
   - Use short, unambiguous slugs and titles.

5. Add AI-friendly discovery artifacts.
   - `/llms.txt` can help assistants quickly find key URLs.
   - Treat `llms.txt` as supplemental, not a guaranteed ranking signal.
   - Proposal reference: https://llmstxt.org/

## llms.txt Position

`llms.txt` is useful as a practical index for assistants and toolchains, but it is not a formally adopted universal standard across all major platforms.

Use it as a low-cost helper file while prioritizing proven fundamentals:
- crawlability
- indexability
- structured metadata
- high-quality source-backed content

## Portfolio-Specific Checklist

Before publishing each article batch:

1. Verify canonical links resolve to production domain.
2. Verify `/robots.txt`, `/sitemap.xml`, `/llms.txt` are reachable.
3. Verify article has:
   - publish date
   - author in JSON-LD
   - descriptive summary
   - source links for key claims
4. Verify Read-with-AI fallback copies full context prompt.
5. Validate with:
   - `npm test`
   - `npm run build`
