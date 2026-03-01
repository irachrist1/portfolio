<div align="center">
    <a href="https://christiantonny.dev"><h1 align="center">Christian Iradukunda Portfolio</h1></a>

Professional portfolio website for Christian Iradukunda - Software Engineer & AI Implementation Consultant building technology that generates measurable business impact.

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and deployable to your preferred host.

</div>

<br/>

## About This Portfolio

This portfolio showcases:

- **$120K in qualified leads** generated through AI consulting
- **90% accuracy** AI platform for Rwanda's government intelligence
- **50+ employees** secured with enterprise infrastructure improvements
- **1,500+ views** on published thought leadership articles

### Pages Included

- **Homepage**: Compelling hero section with key metrics and featured projects
- **Projects**: Three detailed case studies (NISR AI Platform, AI Consulting Practice, Enterprise Infrastructure)
- **About**: Origin story, mission, philosophy, and professional track record
- **Skills**: Categorized technical and business skills with proof points
- **Writing**: Published articles and thought leadership content
- **Contact**: Multiple engagement options with clear process outline

## Technology Stack

- **Framework**: Next.js 13 App Router (fully static output)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion for hero visuals
- **Icons**: Lucide React
- **Typography**: Built-in `next/font`

## Quick Start

### Running Locally

```sh-session
git clone https://github.com/irachrist1/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` to see the portfolio.

### Deploy to Vercel (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/irachrist1/portfolio)

Or follow the detailed [Deployment Guide](./DEPLOYMENT.md) for step-by-step instructions.

## Production Build

```sh-session
npm run build
npm start
```

## Tests

```sh-session
npm test
```

## Weekly Activity Data

Weekly commit activity is generated from tracked repos and committed to:
- `app/data/weekly-activity.generated.json`

Generate locally:

```sh-session
npm run activity:generate
```

## Deployment

1. Push to GitHub (or your preferred git host)
2. Connect the repository to Vercel or Netlify
3. Deploy — the site renders completely static pages

## Project Structure Highlights

```
app/
  components/
    markdown.tsx        // Lightweight markdown renderer
    particles.tsx       // Hero visual effect
  projects/
    [slug]/page.tsx     // Static case study pages
  data/
    projects.ts         // Structured project copy
```

## Customization Notes

- **Contact Info**: Update `app/contact/page.tsx` with your real email and LinkedIn URL
- **Project Content**: Edit `app/data/projects.ts` to modify case studies
- **Visual Effects**: Customize `app/components/particles.tsx` and `global.css`
- **Branding**: Update metadata in `app/layout.tsx` for SEO and social sharing

## Documentation

- 📖 [Deployment Guide](./DEPLOYMENT.md) - Step-by-step deployment instructions
- 🎨 [Portfolio Guide](./PORTFOLIO_GUIDE.md) - Content structure and customization
- 🚀 [Lean Plan](./lean.plan.md) - Technical refactoring details

## License

See [LICENSE](./LICENSE) for more information.

---

Built with ❤️ by Christian Iradukunda
