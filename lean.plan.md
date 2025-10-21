# Lean Static Portfolio Refactor

## Step 1 – Stabilize Content Source

- Rewrite `content/projects/ai-consulting.mdx`, `enterprise-infrastructure.mdx`, and `nisr-ai-platform.mdx` front‑matter so `published: true` is parsed as a boolean (no stray `\r` values).
- If we continue with Contentlayer temporarily, regenerate `.contentlayer/` to confirm the warnings disappear.

## Step 2 – Remove Dynamic/Remote Dependencies

- Explain and then remove the original Upstash Redis integration (leftover from the template’s pageview counter) so all data is local.
- Update `package.json` to drop `@upstash/redis` and any related telemetry packages, and delete helper files that referenced Redis.

## Step 3 – Simplify Data Flow (Phase Out Contentlayer)

- Replace the Contentlayer + MDX setup with a plain TypeScript data module (`app/data/projects.ts`) holding project summaries and case-study copy.
- Update project pages to import from the data module, then delete `contentlayer.config.js` and the `content/` directory.

## Step 4 – Preserve Visual Polish While Optimizing

- Keep signature visual elements (e.g., `Particles` background) but audit them for performance (lazy mount, reduce intensity on mobile, etc.).
- Ensure each page exports `dynamic = "force-static"` or uses Static Rendering helpers so Next.js outputs pure static HTML while retaining the standout UI.

## Step 5 – Polish Metadata & Fonts

- Swap `@next/font` usage for the built-in `next/font` API in `app/layout.tsx` and add `metadataBase` to silence warnings.
- Audit global styles (`global.css`) to ensure minimal CSS and fast rendering.

## Step 6 – Clean Up Artifacts & Document Changes

- Remove the `.contentlayer` artifacts and update the README to reflect the new static architecture and build instructions.
- Verify the site builds (`npm run build`) and runs (`npm run dev`) without warnings, then summarize remaining TODOs (if any).
