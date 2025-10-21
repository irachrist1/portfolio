# Portfolio Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository name: `portfolio`
4. Description: `Christian Iradukunda - Software Engineer & AI Implementation Consultant Portfolio`
5. Make it **Public** (required for free Vercel deployment)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Push to GitHub

```bash
# Update the remote URL (replace YOUR_USERNAME with your GitHub username)
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your `portfolio` repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click "Deploy"
6. Wait 2-3 minutes for deployment
7. Your portfolio will be live at `https://your-project-name.vercel.app`

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `christiantonny.dev`)
4. Follow DNS configuration instructions

## 🔧 Alternative Deployment Options

### Netlify
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### GitHub Pages (Static Export)
```bash
# Add to package.json scripts
"export": "next build && next export"

# Build for static hosting
npm run export
# Upload 'out' folder to GitHub Pages
```

## 📋 Pre-Deployment Checklist

- [ ] All pages load locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Contact information updated in `app/contact/page.tsx`
- [ ] Social links updated in `app/contact/page.tsx`
- [ ] Custom domain configured (if applicable)

## 🎯 Post-Deployment

1. **Test all pages**:
   - Homepage: `/`
   - Projects: `/projects`
   - About: `/about`
   - Skills: `/skills`
   - Writing: `/writing`
   - Contact: `/contact`
   - Individual projects: `/projects/nisr-ai-platform`, etc.

2. **Performance check**:
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Verify mobile responsiveness

3. **SEO verification**:
   - Check meta tags
   - Verify Open Graph images
   - Test social sharing

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Import Errors
- Verify all import paths use `@/` prefix
- Check `tsconfig.json` path mapping
- Ensure all files exist in correct locations

### Vercel Deployment Issues
- Check build logs in Vercel dashboard
- Verify Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`

## 📊 Performance Optimizations

The portfolio is already optimized for:
- ✅ Static generation (no server-side rendering)
- ✅ Minimal dependencies (no Contentlayer/Redis)
- ✅ Optimized images and fonts
- ✅ Mobile-first responsive design
- ✅ Fast loading with Framer Motion animations

## 🔄 Updates and Maintenance

To update the portfolio:
1. Edit content in `app/data/projects.ts`
2. Update pages in `app/` directory
3. Commit and push to GitHub
4. Vercel auto-deploys on push to main branch

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

---

**Live Portfolio**: Your portfolio will be available at your Vercel URL once deployed!
