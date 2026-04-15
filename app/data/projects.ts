export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  externalUrl?: string;
  date?: string;
  links?: ProjectLink[];
  body: string;
  screenshots?: string[];
  tagline?: string;
  appUrl?: string;
  platforms?: string[];
};

export type ProjectCategory = {
  id: string;
  name: string;
  description: string;
  order: number;
};

export const categories: ProjectCategory[] = [
  {
    id: "learning",
    name: "Learning & Development",
    description: "Current learning activities and skill development",
    order: 0
  },
  {
    id: "personal",
    name: "Personal Apps",
    description: "Tools built for personal productivity and insights",
    order: 1
  },
  {
    id: "career",
    name: "Career & Education",
    description: "Platforms for career discovery and skill development",
    order: 2
  },
  {
    id: "andersen",
    name: "Andersen Work",
    description: "Professional projects at Andersen Rwanda",
    order: 3
  },
  {
    id: "community",
    name: "Competition & Community",
    description: "Hackathon tracking and community platforms",
    order: 4
  },
  {
    id: "analytics",
    name: "Rwanda Analytics",
    description: "Data intelligence tools for Rwanda's development",
    order: 5
  },
  {
    id: "reports",
    name: "Reports & Research",
    description: "Technical reports and research documentation",
    order: 6
  },
];

export const projects: Project[] = [
  // ===== LEARNING & DEVELOPMENT =====
  {
    slug: "learning",
    title: "Learning & Development",
    description: "Current learning activities: Building Flutter health app and taking R programming course on Coursera.",
    category: "learning",
    date: "2026-01-12",
    body: `## Current Learning Activities

Activities I'm currently learning and experimenting with as of January 2026.

---

## Flutter Health Application

### Overview
Building an all-in-one health tracking application using Flutter that combines features from MyFitnessPal and Whoop. This project serves as my introduction to mobile development with Flutter and Dart.

### Project Vision
Create a comprehensive health tracker that monitors:
- **Calendar Schedules** - Track daily routines and activities
- **Nutrition & Diet** - Log meals and monitor nutritional intake
- **Activity Recommendations** - Location-based suggestions for staying healthy

### Current Progress (20%)

**Completed:**
- Flutter development environment setup
- Understanding Flutter basics and widget system
- Research on state management patterns

**In Progress:**
- Designing app architecture and data models
- Planning calendar integration approach
- Researching nutrition database APIs

**Next Steps:**
- Build calendar integration for schedule tracking
- Implement nutrition and diet tracking features
- Create activity recommendation system with location services
- Learn state management (Provider/Riverpod)

### Tech Stack
- **Framework:** Flutter
- **Language:** Dart
- **Target Platforms:** iOS & Android

### Why This Project?
Mobile development is a crucial skill in today's tech landscape. By building a real-world health app, I'm learning:
- Cross-platform mobile development
- State management in Flutter
- Integration with device features (calendar, location)
- UI/UX design for mobile interfaces
- Working with external APIs

---

## R Programming Course

### Overview
Taking a structured R programming course on Coursera as part of my school curriculum. Focusing on statistical computing, data analysis, and visualization techniques.

### Course Focus
Developing skills in:
- **Statistical Computing** - Using R for data analysis
- **Data Visualization** - Creating meaningful charts and graphs
- **Analysis Techniques** - Applying statistical methods to real datasets

### Current Progress (30%)

**Completed:**
- Enrolled in Coursera R programming course
- Completed initial R syntax and data structures modules
- Set up RStudio development environment

**In Progress:**
- Working through data visualization modules
- Learning ggplot2 for advanced graphics
- Practicing with sample datasets

**Next Steps:**
- Complete data visualization modules
- Learn statistical analysis with R
- Apply R to school project requirements
- Master data manipulation with dplyr

### Tech Stack
- **Language:** R
- **IDE:** RStudio
- **Key Libraries:** ggplot2, dplyr, tidyverse

### Why This Course?
Data science and statistical analysis are foundational skills for making data-driven decisions. This course provides:
- Academic requirement fulfillment
- Practical data analysis skills
- Foundation for future machine learning work
- Experience with statistical computing

---

## Learning Philosophy

I believe in learning by building. Both these activities represent hands-on approaches to skill development:
- **Flutter Project** - Learning through practical application development
- **R Course** - Structured learning with academic rigor

This combination of project-based and course-based learning helps solidify concepts through both theory and practice.`
  },

  // ===== PERSONAL APPS =====
  {
    slug: "spcs",
    title: "SPCS Landing",
    description:
      "Premium landing page for SPCS — an IT services, technology consulting, and smart renovation firm in Kigali. Built with a bespoke dark/light design system, parallax hero, glassmorphism elements, and scroll-reveal animations.",
    tagline: "Technology that makes spaces work better.",
    category: "personal",
    date: "2026-03-30",
    platforms: ["Web"],
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/spcs-landing" },
      { label: "Live Site", href: "https://spcs-landing-kext649s9-irachrist1s-projects.vercel.app" },
    ],
    body: `## Overview

SPCS is a Kigali-based firm combining IT infrastructure, technology consulting, and smart renovation under one roof. This project is their public-facing landing page — designed and built from scratch to match the quality of their work.

## Design System

The site uses a fully custom design system with no third-party component libraries:

- **Palette** — Warm dark charcoal (\`#141210\`) for dark sections, bone white (\`#fcf9f8\`) for light sections, amber (\`#d4822a\`) as the single accent
- **Typography** — \`clamp()\`-based display scale (xl, lg, md, headline, label) with optical sizing and tight letter-spacing
- **Animations** — Staggered hero load sequence, IntersectionObserver scroll reveals, parallax hero image, marquee proof strip
- **Glassmorphism** — Disciplined use: nav dropdown (88% opacity dark glass + blur), floating stat card over images (5% white glass), nowhere else
- **Custom cursor** — 6px amber dot + lagged ring with lerp 0.12, expands on interactive elements

## Page Structure

Ten sections in deliberate dark/light alternation: hero → proof strip → feature pillars → signature differentiator → outcomes metrics → use case scenarios → process steps → closing CTA → footer.

## Key Sections

- **Hero** — Full-viewport, full-bleed architectural photography at 55% opacity with bottom-aligned text and parallax scroll
- **Feature Pillars** — Three service areas (IT, Consulting, Smart Renovation) as alternating image/text splits with a cinematic 21:9 final panel
- **Signature Section** — Dark section with grid overlay, two-column layout, floating glass stat card (same pattern used in SPCS-derived design system)
- **Metrics** — 4-column divider grid with amber accent numbers

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + bespoke CSS design system
- **Deployment:** Vercel`,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description: "This website. Built as a living project hub with weekly Git activity, changelog timeline, and structured project narratives.",
    tagline: "A living portfolio that tracks its own progress.",
    category: "personal",
    externalUrl: "https://christian-tonny.vercel.app",
    date: "2026-02-27",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/portfolio" },
      { label: "Live Demo", href: "https://christian-tonny.vercel.app" }
    ],
    body: `## Overview

This portfolio is designed as a living system, not a static brochure. It centralizes active work, release milestones, and project context into one place.

## Key Features

- **Weekly Git Activity** - Auto-generated commit summaries from tracked repositories
- **Changelog Timeline** - Releases and project updates with source links
- **Project Pages** - Structured narratives for each project with architecture and outcomes
- **Static-first Delivery** - Fast builds and predictable runtime behavior

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Automation:** GitHub Actions for weekly activity generation

## Why It Matters

The site now reflects weekly momentum automatically while preserving curated milestone storytelling.`
  },
  {
    slug: "daylens",
    title: "Daylens",
    description:
      "Privacy-first activity tracker for Mac and Windows. See exactly where your day goes — every app, every site, grouped into work blocks — then chat with your data using AI.",
    tagline: "Know where your time actually goes.",
    category: "personal",
    date: "2026-03-30",
    appUrl: "https://christian-tonny.dev/daylens",
    platforms: ["macOS", "Windows", "Web"],
    screenshots: [
      "/projects/daylens/today-view.png",
      "/projects/daylens/timeline-view.png",
      "/projects/daylens/insights-chat.png",
      "/projects/daylens/focus-session.png",
    ],
    links: [
      { label: "Open App", href: "https://christian-tonny.dev/daylens" },
      { label: "Mac — GitHub", href: "https://github.com/irachrist1/daylens" },
      { label: "Windows — GitHub", href: "https://github.com/irachrist1/daylens-windows" },
      { label: "Web — GitHub", href: "https://github.com/irachrist1/daylens-web" },
    ],
    body: `## What is Daylens?

Daylens is a family of apps that captures how you spend your time on desktop and in the browser, then helps you act on it with AI. Everything stays on your device by default. No account required. Fully open source.

Most time trackers tell you "you had Chrome open for 3 hours." Daylens tells you what you were actually doing in Chrome, which sites you visited, how often you switched between tasks, and when your focus blocks happened.

## How it works

1. **Tracks automatically** — Daylens runs in your menubar and watches which apps and browser tabs are in focus. No manual timers, no browser extensions needed.
2. **Groups into work blocks** — Raw app switches get grouped into meaningful work sessions. Instead of 200 individual events, you see "worked on the Q3 report from 5 PM to 7 PM."
3. **AI-powered insights** — Ask questions like "What was I working on at 3 PM?" or "What was my biggest distraction this week?" and get answers grounded in your actual activity data.
4. **Focus sessions** — Built-in Pomodoro timer with focus scoring. See how your focus compares across days.

## Key features

- **12+ browsers supported natively** — Safari, Chrome, Arc, Brave, Edge, Firefox, Zen, Opera, Vivaldi, and more. No extensions needed.
- **Daily and weekly reports** — AI-generated summaries with evidence tables showing exactly where time went.
- **Focus scoring** — Measures your daily focus percentage based on actual app-switching patterns.
- **Privacy controls** — All data stays local. Optional web sync only if you choose to enable it.
- **macOS widgets** — Quick stats on your lock screen and menu bar.

## Surface area

- **macOS** — Swift-native menubar app with activity capture, focus blocks, and AI chat over your timeline.
- **Windows** — Tauri-based desktop build with the same local-first philosophy.
- **Web** — Mobile-first dashboard for reviewing sessions and trends when you are away from the desk.

## Tech stack

- **macOS:** Swift 5.9, SwiftUI, GRDB (SQLite), Accessibility API
- **Windows:** Tauri, Rust-backed desktop shell
- **Web:** Next.js, Convex, React, Tailwind

## Why I built this

I kept finishing work days feeling like I only got 3 hours of real work done out of 9. But I couldn't tell where the other 6 hours went. Screen Time wasn't helpful. Nothing showed me the real story. So I built Daylens to answer that question for myself, and figured others might want the same thing.

Time is the one resource you cannot replenish. Daylens turns passive logging into something you can query, reason about, and improve — without trading privacy for insight.`
  },
  {
    slug: "sync-blogs",
    title: "Sync Blogs",
    description:
      "AI-assisted blogging platform with cross-platform content syndication — Node.js, Express 5, TypeScript.",
    tagline: "Write once, publish everywhere.",
    category: "personal",
    date: "2026-03-26",
    platforms: ["Web"],
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/sync-blogs" },
    ],
    body: `## Overview

Sync Blogs is a writing studio for publishing and syndicating content across channels. It pairs a traditional Express/TypeScript backend with AI-assisted drafting, review personas, and iterative editing workflows.

## Key Features

- **AI writing studio** — Draft and refine posts with structured review flows.
- **Auth and sessions** — Account-based access for a serious editor experience.
- **Content freshness** — Workflows that keep posts current as you iterate.

## Tech Stack

- **Runtime:** Node.js with **Express 5**
- **Language:** TypeScript end-to-end
- **Direction:** Next.js + Convex + Clerk + Tailwind migration plan in progress for a more productized web tier.

## Status

A **v2 rebuild** landed in March 2026 with a stronger editor surface and auth hardening. Ongoing work focuses on migration execution, mobile polish, and streaming task UX.`
  },
  {
    slug: "ocr-extractor",
    title: "OCR Extractor",
    description:
      "Collaborator project — document OCR pipeline with hardened tests and a refactored frontend action layer.",
    tagline: "Turn any document into structured data.",
    category: "personal",
    date: "2026-03-26",
    links: [
      { label: "GitHub", href: "https://github.com/kanmwangi2/ocr-extractor" },
    ],
    body: `## Overview

OCR Extractor is a project I contribute to as a collaborator. The focus is on reliable extraction of text from documents with a clean separation between backend processing and frontend controls.

## Recent Themes

- **Regression coverage** — pytest runs hardened to keep CI trustworthy.
- **Frontend bindings** — Action wiring refactored for predictable behavior under load.
- **Cleanup** — Removal of stale legacy references (e.g. old OCR engine paths) to reduce confusion.

## Role

Collaborate on architecture, tests, and frontend integration while keeping the product stable for end users.`
  },
  {
    slug: "mnotes",
    title: "MNotes",
    description: "Personal AI assistant dashboard for entrepreneurs. Track income streams, ideas, mentorship, and get AI-powered business insights, all from one place.",
    tagline: "Your business brain, always on.",
    category: "personal",
    externalUrl: "https://mnotes-omega.vercel.app/",
    date: "2026-02-12",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/mnotes" },
      { label: "Live Demo", href: "https://mnotes-omega.vercel.app/" }
    ],
    body: `## Overview

MNotes is a personal AI assistant dashboard for entrepreneurs. It combines income tracking, ideas pipeline, mentorship logs, and AI-powered business intelligence into a single, beautifully designed interface.

The vision: Phase 1 is a structured dashboard where you manually input data and get on-demand AI analysis. Phase 2 turns it into an autonomous assistant that connects to your calendar, email, and proactively nudges you with insights.

## Key Features

- **Income Stream Management** - Track revenue sources with growth rates, time investment, and efficiency metrics ($/hour)
- **Ideas Pipeline** - Capture and organize business ideas through stages: raw thought, researching, validating, developing, testing, launched
- **Mentorship Tracking** - Log sessions with action items, ratings, topics, and follow-up tracking
- **AI Insights** - Server-side AI analysis using OpenRouter or Google AI Studio. Persistent insights feed with priority and confidence scoring.
- **Analytics Dashboard** - Revenue by category, efficiency rankings, ideas funnel, mentorship overview, pending action items
- **Settings** - Choose AI provider, model, and API keys. Stored securely server-side.

## Design System

Premium design inspired by Vercel, Linear, Airbnb, and Apple:
- Sky blue gradient palette (#38bdf8 to #0ea5e9)
- Dot grid subtle background patterns
- Framer Motion animations: staggered card entrances, spring sidebar, animated stat numbers
- Dark mode first showcase
- Rounded cards with hover glow effects

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Convex (real-time database, server-side actions)
- **AI:** Convex actions calling OpenRouter or Google AI Studio (server-side, no client exposure)
- **Icons:** Lucide React
- **Toasts:** Sonner

## Architecture Decisions

- All AI calls happen server-side via Convex actions. API keys never touch the browser.
- Convex provides real-time reactivity. When data changes, the UI updates instantly.
- Server-side AI analysis generates structured JSON insights with title, body, action items, priority, and confidence.

## Status

Dashboard 85% complete. Landing page 95%. AI system 70% (server-side, persistent). Auth, tests, and deployment at 0%. Currently in active multi-agent development with three AI agents working in parallel.`
  },
  {
    slug: "momo-p",
    title: "MoMo Analytics",
    description: "MTN Mobile Money SMS transaction analysis dashboard with smart categorization, filtering, and data visualization.",
    tagline: "See exactly where every franc went.",
    category: "personal",
    date: "2025-11-15",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/momo-p" }
    ],
    body: `## Overview

Fullstack application that processes MTN Mobile Money SMS data (~1600+ messages) and presents insights through an interactive dashboard.

## Key Features

- **Smart Categorization** - Auto-categorize transactions (incoming, payments, transfers, bank deposits)
- **Interactive Dashboard** - Charts and visualizations for spending patterns
- **Advanced Filtering** - Search and filter by date, type, amount
- **Detailed Views** - Drill down into individual transactions
- **Export Capabilities** - Download reports in multiple formats

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, Flask
- **Database:** SQLite with optimized schema
- **Visualization:** Chart.js

## Processing Results

Successfully processes and categorizes 1600+ transaction messages with high accuracy.`
  },
  {
    slug: "beacon-skyway",
    title: "Beacon Skyway",
    description: "Comprehensive ground handling operations management system for African aviation with real-time tracking and analytics.",
    tagline: "Ground handling for African aviation, simplified.",
    category: "personal",
    externalUrl: "https://beacon-skyway.vercel.app/",
    date: "2025-11-20",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/beacon-skyway" },
      { label: "Live Demo", href: "https://beacon-skyway.vercel.app/" }
    ],
    body: `## Overview

BEACON Skyway transforms ground handling operations in African aviation through real-time coordination, automated workflows, and performance analytics.

## Key Features

- **Real-time Flight Dashboard** - Monitor active operations with live status
- **Automated Staff Assignment** - Intelligent scheduling based on availability
- **Incident Management** - Instant alerts and stakeholder notifications
- **Performance Analytics** - KPI tracking and optimization insights
- **Mobile-First Design** - Access from anywhere on the tarmac

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Target Market

African airlines and airports seeking operational efficiency improvements.`
  },

  // ===== CAREER & EDUCATION =====
  {
    slug: "opportunitymap",
    title: "OpportunityMap",
    description: "Career discovery platform helping Rwandan students understand themselves, explore 100+ careers, and connect with professional mentors.",
    tagline: "Find the career behind the title.",
    category: "career",
    externalUrl: "https://spark-six-omega.vercel.app",
    date: "2025-12-10",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/spark" },
      { label: "Live Demo", href: "https://spark-six-omega.vercel.app" }
    ],
    body: `## The Problem

75%+ of rural Rwandan students fail national exams — not because they lack content, but because they lack direction. Students study without understanding career applications.

## How It Works

1. **Understand Yourself** (20 min) - Take career assessments to discover your strengths
2. **Explore Careers** (5 min each) - Browse 100+ careers with videos, salaries, and requirements
3. **Connect with Mentors** (15 min) - Book video calls with working professionals

## Features Built

✅ Career Library with 100+ careers
✅ 15-question assessment flow with AI matching
✅ Mentor booking via Calendly
✅ Student dashboard with saved careers
✅ Mobile-optimized, offline-ready (PWA)

## Tech Stack

- **Frontend:** Next.js 14, React, TypeScript
- **Backend:** Convex (database, auth, real-time)
- **Styling:** Tailwind CSS (Neobrutalist design)
- **Deployment:** Vercel`
  },
  {
    slug: "skillsync",
    title: "SkillsSync",
    description: "Skills-to-Jobs matcher connecting users' skills to real job opportunities in Rwanda with AI-powered learning paths.",
    tagline: "Match what you know to work that exists.",
    category: "career",
    date: "2025-10-15",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/SkillSync" }
    ],
    body: `## Overview

SkillsSync bridges the gap between skills and employment by matching users with relevant job opportunities and providing personalized learning paths.

## Key Features

- **Skills Assessment** - Evaluate current skill levels
- **Job Matching** - AI-powered matching to real opportunities
- **Learning Paths** - Personalized recommendations for skill gaps
- **Rwanda Focus** - Tailored for the Rwandan job market

## Tech Stack

- TypeScript
- Modern web technologies

## Status

In active development with 3 contributors.`
  },

  // ===== ANDERSEN WORK =====
  {
    slug: "contentflow",
    title: "ContentFlow",
    description: "Content planning and management Kanban board with drag-drop, status tracking, and API integration for Andersen's content workflow.",
    tagline: "Content workflows that actually flow.",
    category: "andersen",
    externalUrl: "https://andersen-content-dashboard.vercel.app",
    date: "2025-11-01",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/andersen-content-dashboard" },
      { label: "Live Demo", href: "https://andersen-content-dashboard.vercel.app" }
    ],
    body: `## Overview

Visual content management application for planning, tracking, and managing content creation workflows at Andersen Rwanda.

## Key Features

- **Visual Kanban Board** - Drag content across workflow stages
- **CRUD Operations** - Create, edit, and delete content items
- **Status Tracking** - Inbox → Pending Review → Scheduled → Done
- **API Integration** - Backend data management
- **Real-time Updates** - Instant sync across users

## Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Font:** Geist (Vercel)
- **Deployment:** Vercel`
  },
  {
    slug: "ai-pages",
    title: "AI Pages",
    description: "Andersen readiness assessments and AI tools for website integration, helping teams evaluate AI adoption capabilities.",
    tagline: "Measure AI readiness before you build.",
    category: "andersen",
    date: "2025-10-01",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/AI-Pages" }
    ],
    body: `## Overview

Collection of AI-powered assessment pages and tools built for Andersen Rwanda's website and internal use.

## Key Features

- **Readiness Assessments** - Evaluate AI adoption readiness
- **Interactive Tools** - Client-facing AI utilities
- **Website Integration** - Seamlessly embedded components

## Purpose

Help Andersen's clients understand their AI readiness and identify opportunities for transformation.`
  },

  // ===== COMPETITION & COMMUNITY =====
  {
    slug: "trove",
    title: "Trove",
    description: "codeXtreme Hall of Fame platform displaying hackathon winners, tracking competitions, and celebrating community achievements.",
    tagline: "Where hackathon wins get their permanent home.",
    category: "community",
    date: "2025-11-10",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/winners.codextreme.io" }
    ],
    body: `## Overview

Platform to display winners and track everything from Hackathons, Buildathons, Power of Code, to community engagement and opportunities.

## Key Features

- **Competition Board** - Track all codeXtreme events
- **Hall of Fame** - Celebrate winners and achievements
- **Project Showcase** - Display winning projects with details
- **Responsive Design** - Works on all devices
- **Accessibility** - Semantic HTML and ARIA labels

## Design System

Neobrutalist design with:
- Bold 3px black borders
- Solid 4px/8px offset shadows
- Strong typography (900 weight, UPPERCASE)
- Brand colors: Purple, Blue, Green, Orange, Yellow

## Tech Stack

- **Frontend:** Next.js 14, TypeScript
- **Styling:** Tailwind CSS (custom neobrutalist system)
- **Data:** JSON-based (database-ready)`
  },

  // ===== RWANDA ANALYTICS =====
  {
    slug: "rgi",
    title: "RGI - Rwanda Government Intelligence",
    description: "AI-powered government intelligence platform transforming NISR data into instant policy insights for Rwanda's 23 ministries.",
    tagline: "Policy insights from Rwanda's own data.",
    category: "analytics",
    date: "2025-01-15",
    links: [
      { label: "GitHub", href: "https://github.com/ChristianTonny/rgi" }
    ],
    body: `## The Mission

Transform weeks of government decision-making into 30 seconds of AI-powered intelligence.

## The Problem

- 65+ NISR datasets scattered across portals
- 2-3 weeks to answer simple policy questions
- Policy briefs lost in email threads
- Investment opportunities missed

## Solution

**"Bloomberg Terminal + ChatGPT + Palantir"** for Rwanda's government.

## Key Features

- **Executive Dashboard** - Real-time budget tracking and KPIs
- **AI Assistant** - Natural language queries with NISR citations
- **Instant Briefs** - Generate policy reports in seconds
- **Institutional Memory** - Learn from past policy decisions
- **Investment Portal** - Connect verified opportunities

## Datasets Integrated

8+ official NISR datasets including EICV7, Labour Force Survey 2024, Census 2022, National Accounts, CFSVA, FinScope.

## Recognition

🏆 NISR 2025 Big Data Hackathon Finalist - Track 5 (Open Innovation)`
  },
  {
    slug: "rti",
    title: "RTI - Rwanda Tech Index",
    description: "Dashboard tracking industry evolution, market trends, business growth, and compliance scores for Rwanda's tech ecosystem.",
    tagline: "Track Rwanda's tech ecosystem in real time.",
    category: "analytics",
    externalUrl: "https://irachrist1.github.io/rti/",
    date: "2025-09-01",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/rti" },
      { label: "Live Demo", href: "https://irachrist1.github.io/rti/" }
    ],
    body: `## Overview

Investment intelligence dashboard helping investors decide whether to invest in Rwanda's tech sector.

## Key Metrics

- **Business Growth** - Track company growth trajectories
- **Market Share** - Analyze competitive landscape
- **Customer Growth** - Monitor user acquisition trends
- **Compliance Score** - Regulatory adherence ratings

## Features

- Interactive dashboards
- Subscription plans (Free, Premium, Enterprise)
- Regulatory AI Assistant
- Custom market insights
- Two-factor authentication

## Target Users

Investors and analysts evaluating Rwanda's tech market.`
  },
  {
    slug: "rwanda-tech-cluster",
    title: "Rwanda Tech Cluster",
    description: "Market share analysis tool tracking business performance and competitive positioning across Rwanda's technology sector.",
    tagline: "Map who is winning in Rwanda's tech market.",
    category: "analytics",
    date: "2025-08-15",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/rwanda-tech-cluster" }
    ],
    body: `## Overview

Analytical platform for tracking market share distribution among technology businesses operating in Rwanda.

## Purpose

Help stakeholders understand the competitive landscape of Rwanda's growing tech ecosystem.

## Key Features

- Market share visualization
- Business performance tracking
- Sector analysis
- Trend identification`
  },
  {
    slug: "sme-diagnostic",
    title: "SME Diagnostic Tool",
    description: "Assessment tool helping Rwandan SMEs evaluate business potential across 9 dimensions with personalized recommendations.",
    tagline: "Score your business across 9 dimensions.",
    category: "analytics",
    externalUrl: "https://irachrist1.github.io/sme/",
    date: "2025-07-01",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/sme" },
      { label: "Live Demo", href: "https://irachrist1.github.io/sme/" }
    ],
    body: `## Overview

Diagnostic tool helping Rwandan SMEs identify their current development stage and receive tailored growth recommendations.

## Assessment Dimensions

1. **Business Setup** - Legal structure, registration
2. **Finance** - Financial management practices
3. **Marketing** - Strategies and customer engagement
4. **Operations** - Efficiency and processes
5. **Human Resources** - Team management
6. **Innovation** - Adaptation and new ideas
7. **Financial Systems** - Investment readiness
8. **Market Access** - Value chain integration
9. **ESG Integration** - Environmental, social, governance

## How It Works

1. Answer comprehensive assessment questions
2. Receive overall score with dimension breakdown
3. Get personalized recommendations

## Created For

Andersen Rwanda - helping SMEs grow.`
  },

  // ===== REPORTS & RESEARCH =====
  {
    slug: "via",
    title: "VIA Report",
    description: "Technical report on establishing a technology system, documenting architecture decisions and implementation strategies.",
    tagline: "Architecture decisions, documented for the record.",
    category: "reports",
    date: "2025-06-01",
    links: [
      { label: "GitHub", href: "https://github.com/irachrist1/via" }
    ],
    body: `## Overview

Comprehensive technical report documenting the establishment of a technology system.

## Contents

- Architecture decisions
- Implementation strategies
- Technical specifications
- Deployment guidelines

## Purpose

Serve as reference documentation for technology system setup and maintenance.`
  },
];
