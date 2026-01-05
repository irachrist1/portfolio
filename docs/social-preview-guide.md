# Social Preview Image Guide

## Overview
When you share your portfolio link on social media (LinkedIn, X/Twitter, Facebook, etc.), a preview card with an image appears. This guide explains how to change that image.

---

## Current Setup

**Image Location:** `public/og.png`  
**Image URL:** `https://christian-tonny.vercel.app/og.png`  
**Recommended Size:** 1200 x 630 pixels (1.91:1 ratio)

---

## How to Change the Preview Image

### Step 1: Create Your New Image
- **Format:** PNG or JPG (PNG recommended for quality)
- **Size:** 1200 x 630 pixels (optimal for all platforms)
- **File size:** Keep under 1MB for fast loading

### Step 2: Replace the Image
```bash
# Simply replace the file at:
public/og.png
```

Or if you have a differently named file:
```bash
# Move your new image to public folder and rename it
mv your-new-image.png public/og.png
```

### Step 3: Deploy
```bash
git add .
git commit -m "Update social preview image"
git push
vercel --prod --yes
```

### Step 4: Clear Social Media Cache
After deploying, social platforms cache images. To see your new image:

**LinkedIn:**
1. Go to: https://www.linkedin.com/post-inspector/
2. Paste your URL and click "Inspect"
3. This forces LinkedIn to re-fetch the image

**X/Twitter:**
1. Go to: https://cards-dev.twitter.com/validator
2. Paste your URL and click "Preview card"

**Facebook:**
1. Go to: https://developers.facebook.com/tools/debug/
2. Paste your URL and click "Debug"
3. Click "Scrape Again" to refresh

---

## Configuration File

The metadata is configured in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ...
  metadataBase: new URL("https://christian-tonny.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://christian-tonny.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    // ...
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://christian-tonny.vercel.app/og.png"],
  },
  // ...
};
```

### If You Change the Domain
Update these URLs in `app/layout.tsx`:
- `metadataBase`
- `openGraph.url`
- `openGraph.images[0].url`
- `twitter.images[0]`

---

## Troubleshooting

### Image not showing on LinkedIn/X
1. Wait 2-5 minutes after deployment
2. Use the cache-clearing tools above
3. Verify image is accessible: visit `https://christian-tonny.vercel.app/og.png` directly

### Image looks blurry
- Ensure your source image is at least 1200x630 pixels
- Use PNG format for sharper text/graphics

### Wrong image showing
- Social platforms cache aggressively
- Use the debugging tools to force a refresh
- Sometimes takes up to 24 hours to fully propagate

---

## Quick Reference

| Platform | Debug Tool |
|----------|-----------|
| LinkedIn | https://www.linkedin.com/post-inspector/ |
| X/Twitter | https://cards-dev.twitter.com/validator |
| Facebook | https://developers.facebook.com/tools/debug/ |

---

*Last updated: January 5, 2026*
