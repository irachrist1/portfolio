# Writing Automation Playbook

This runbook defines the exact workflow for adding and publishing writing updates on the portfolio with minimal follow-up.

## Paste-Ready Command Brief

Use the block below as your default instruction to the agent:

```text
Execute the Writing Automation Playbook for this batch.

Inputs:
- Article list with issue IDs, titles, slugs, publish order, and full markdown bodies
- Image mapping (cover assets and inline assets)
- Publish intent (draft-only or publish-now)

Required outcomes:
1) Add/update articles in app/data/writing.ts
2) Keep cover banners generated from ArticleCover theme logic (do not use uploaded images as card covers)
3) Keep uploaded images inside article body where relevant
4) Verify Read with AI buttons:
   - short URL prefill prompt
   - full prompt copied to clipboard including article text
5) Validate AI indexing assets:
   - /robots.txt
   - /sitemap.xml
   - /llms.txt
6) Run npm test and npm run build
7) If publish-now: run npm run publish:<id> in issue order
8) Push to main and verify Vercel production deployment
9) Report final URLs, commit SHAs, and any blockers
```

## Operating Rules

1. Never use uploaded cover files as listing-page or article-header covers.  
Generated cover theme only.

2. Uploaded media belongs in article body content unless explicitly requested otherwise.

3. Preserve all legacy published writing unless explicitly told to remove.

4. Publish order must follow issue sequence even for same-day batches.

5. All writing updates must pass tests and build before publish commands.

## Cover Design Logic

The cover system is deterministic and seed-driven:

- Seed: `${article.id}:${article.title}`
- Output: mesh variant + hue set + saturation/lightness + opacity controls
- Guarantees:
  - deterministic render per article
  - high probability uniqueness across articles
  - bounded saturation/lightness to avoid visual overload

Implementation references:

- `app/components/writing/ArticleCover.tsx`
- `app/lib/article-cover-theme.ts`
- `app/lib/article-cover-theme.test.ts`

## Read-With-AI Failsafe Standard

Buttons must do both:

1. Open provider with short prefill prompt (URL-safe length)
2. Copy full prompt (including article text) to clipboard

If provider fetch fails, user can paste the copied full prompt and continue.

Implementation references:

- `app/components/writing/ReadWithAIButtons.tsx`
- `app/lib/read-with-ai.ts`
- `app/data/writing.ts` (`buildReadWithAIPrompt`, `buildReadWithAIFullPrompt`)

## AI Crawlability Standard

Ensure all are available in production:

- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

Implementation references:

- `app/robots.ts`
- `app/sitemap.ts`
- `app/llms.txt/route.ts`
- `app/lib/site-url.ts`

## Deployment and Validation Checklist

1. `npm test`
2. `npm run build`
3. `git push origin main`
4. `vercel --prod` (if manual production sync required)
5. Validate live:
   - `/writing`
   - each `/writing/[slug]`
   - one click per Read with AI provider
   - `/robots.txt`, `/sitemap.xml`, `/llms.txt`

## Rollback

If production issue occurs:

1. Revert the offending commit on `main`
2. Push revert commit
3. Confirm Vercel redeploy
4. Re-run validation checklist
