# Social Preview Image Guide

## Overview
When you share your portfolio link on social media (LinkedIn, X/Twitter, Facebook, etc.), a preview card with an image appears. This guide explains how to change that image.

---

## Current Setup

### Global (Homepage & Default)
- **Image:** `public/og.png`
- **URL:** `https://christian-tonny.vercel.app/og.png`
- **Config:** `app/layout.tsx`

### Writing Page
- **Image:** `public/og-writing.png`
- **URL:** `https://christian-tonny.vercel.app/og-writing.png`
- **Config:** `app/writing/page.tsx`

**Recommended Size:** 1200 x 630 pixels (1.91:1 ratio)

---

## How Page-Specific Metadata Works

Next.js uses a **hierarchy system** for metadata:
1. `app/layout.tsx` - Global defaults (applies to all pages)
2. `app/[page]/page.tsx` - Page-specific overrides

When you add `export const metadata` in a page file, it **overrides** the global metadata for that specific page.

### Example: Writing Page Metadata

```tsx
// app/writing/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Christian Tonny",
  description: "Essays on product development, AI, and building in public.",
  openGraph: {
    title: "Two Things Every App Needs | Christian Tonny",
    description: "AI is making the barrier to building software nearly zero...",
    url: "https://christian-tonny.vercel.app/writing",
    images: [
      {
        url: "https://christian-tonny.vercel.app/og-writing.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Things Every App Needs | Christian Tonny",
    images: ["https://christian-tonny.vercel.app/og-writing.png"],
  },
};
```

---

## Adding a New Page-Specific Preview

### Step 1: Create the Image
- Save as `public/og-[pagename].png`
- Size: 1200 x 630 pixels

### Step 2: Add Metadata to the Page

```tsx
// app/[yourpage]/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Christian Tonny",
  description: "Page description for search engines.",
  openGraph: {
    title: "Social Media Title",
    description: "Description that appears in social previews.",
    url: "https://christian-tonny.vercel.app/yourpage",
    images: [
      {
        url: "https://christian-tonny.vercel.app/og-yourpage.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title",
    images: ["https://christian-tonny.vercel.app/og-yourpage.png"],
  },
};

// Rest of your page component...
export default function YourPage() { ... }
```

### Step 3: Deploy & Clear Cache
```bash
git add .
git commit -m "Add page-specific social preview"
git push
vercel --prod --yes
```

Then use the cache-clearing tools (see below).

---

## File Structure

```
public/
├── og.png              # Homepage/default preview
├── og-writing.png      # Writing page preview
├── og-projects.png     # (future) Projects page preview
└── favicon.png         # Browser tab icon

app/
├── layout.tsx          # Global metadata (default for all pages)
├── writing/
│   └── page.tsx        # Writing-specific metadata
├── projects/
│   └── page.tsx        # Add metadata here for projects preview
└── ...
```

---

## Changing an Existing Image

### For Homepage (global default)
1. Replace `public/og.png`
2. Deploy and clear cache

### For Writing Page
1. Replace `public/og-writing.png`
2. Deploy and clear cache

### For Any Other Page
1. Replace the corresponding `public/og-[pagename].png`
2. If the page doesn't have custom metadata yet, add it (see above)
3. Deploy and clear cache

---

## Global Configuration Reference

**File:** `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://christian-tonny.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://christian-tonny.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://christian-tonny.vercel.app/og.png"],
  },
};
```

### If You Change the Domain
Update ALL occurrences of the URL in:
- `app/layout.tsx` (global)
- `app/writing/page.tsx` (and any other page with custom metadata)

---

## Cache Clearing Tools

| Platform | Debug Tool |
|----------|-----------|
| LinkedIn | https://www.linkedin.com/post-inspector/ |
| X/Twitter | https://cards-dev.twitter.com/validator |
| Facebook | https://developers.facebook.com/tools/debug/ |

### How to Use
1. Paste your URL
2. Click "Inspect" / "Debug" / "Preview"
3. This forces the platform to re-fetch your metadata

---

## Troubleshooting

### Wrong image showing
- Make sure the correct image URL is in the page's metadata
- Use the cache-clearing tools above
- Wait up to 24 hours for full propagation

### Image not showing at all
- Verify the image is accessible by visiting the URL directly
- Check that the URL uses `https://` not `http://`
- Ensure the image is under 1MB

### Page showing global image instead of custom
- Ensure you exported `metadata` (not just declared it)
- Check for typos in the image URL
- Rebuild and redeploy

---

*Last updated: January 5, 2026*
