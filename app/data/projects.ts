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
    slug: "mnotes",
    title: "MNotes",
    description: "Personal AI assistant dashboard for entrepreneurs. Track income streams, ideas, mentorship, and get AI-powered business insights, all from one place.",
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
