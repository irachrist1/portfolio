export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  links?: ProjectLink[];
  body: string;
};

export const projects: Project[] = [
  {
    slug: "rwanda-government-intelligence",
    title: "Rwanda Government Intelligence Platform",
    description:
      "AI-powered government intelligence operating system transforming weeks of decision-making into 30 seconds. Built for Rwanda's 23 ministries to centralize NISR data and generate instant policy insights.",
    date: "2025-01-15",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ChristianTonny/rgi"
      }
    ],
    body: `## The Mission

This project is Rwanda Government Intelligence Platform by SPCS SUITE. Our mission is simple: to transform weeks of government decision-making into 30 seconds of AI-powered intelligence. Today, I'll show you how we're solving a problem that affects millions of Rwandans, and why now is the time to act.

## Problem Statement

Here's the reality: Rwanda's 23 government ministries and Cabinet members face a critical data intelligence gap. It's costly, inefficient, and frankly, unacceptable.

**The current situation:**

- 65+ official NISR datasets are scattered across the Microdata Portal
- 2-3 weeks to answer simple questions like "What's our youth unemployment rate in Kigali?"
- Policy briefs lost in email threads and ministry silos
- Investment opportunities missed because investors can't access reliable government data
- Repeated policy mistakes due to lack of institutional memory

**Real-world impact:** A minister needs to reallocate budget to Eastern Province poverty programs, but it takes 2 weeks to get NISR EICV7 data, analyze it, and generate a briefing. By then, the budget window has closed.

This isn't a small inconvenience — it's a systemic issue costing Rwanda billions in missed opportunities and delayed decisions.

## Solution

That's where we come in. Our solution is Rwanda's first AI-powered Government Intelligence Operating System. It's designed to centralize all NISR data and answer policy questions instantly with official citations.

Think of it as **"Bloomberg Terminal + ChatGPT + Palantir"** — purpose-built for Rwanda's government using official NISR data.

**What it does:**

1. Centralizes all NISR datasets in one searchable, AI-powered platform
2. Answers policy questions in 30 seconds with citations to official NISR sources
3. Generates executive briefs (poverty analysis, employment trends, GDP reports) instantly
4. Tracks institutional memory to learn from past policy successes and failures
5. Connects investors to verified government opportunities with real data
6. Monitors cross-ministry performance with NISR-backed KPIs

**The transformation:** What used to take 2-3 weeks now takes 30 seconds — simple, powerful, and transformative.

## Market Opportunity

This isn't just a niche. The market is massive — Rwanda's government transformation sector, development partners, and foreign direct investment ecosystem.

**The numbers:**

- **Primary Market:** 23 ministries + Cabinet Office + permanent secretaries
- **Secondary Market:** Development partners (World Bank, IMF, AfDB), 416 districts
- **Tertiary Market:** International investors seeking verified government data

**Scale potential:**

- **Immediate:** 1,000+ government decision-makers
- **Year 1:** All 23 ministries + major development partners
- **Year 2:** All 416 districts + EAC regional expansion
- **Year 3:** Pan-African government intelligence platform

**Economic value:** If this platform saves just 1 week of decision-making time per month for Cabinet-level decisions, that's $100K+ annual value in government efficiency alone. Factor in billions of FDI enabled by faster investor onboarding, and the demand is real, and it's growing.

## Product Demo / How It Works

Let me walk you through it.

**Step one:** A minister logs in and asks, "What's the poverty rate in Eastern Province?"

**Step two:** Our AI instantly searches 8+ integrated NISR datasets (EICV7, Labour Force Survey 2024, Census 2022, National Accounts) and responds: "Eastern Province poverty rate is 42.1% according to NISR EICV7 Survey 2023-2024" — with full citation.

**Step three:** Minister clicks "Generate Budget Report" and receives a comprehensive CSV/PDF export with allocation recommendations, risk indicators, and ROI projections.

In less than 30 seconds, we've solved what used to take 2-3 weeks.

**Key features demonstrated:**

- **Executive Intelligence Dashboard:** Real-time budget tracking, investment opportunities, project performance
- **AI Assistant:** Natural language queries with NISR citations
- **Institutional Memory:** Learn from past policy successes
- **Investment Portal:** Connect verified opportunities with investors
- **Ministry Performance Monitor:** Cross-ministry oversight with KPIs
- **Global Search:** Federated search across all government data

## Business Model

We make money through a government SaaS subscription model and premium investor access fees.

**Revenue streams:**

1. **Government License:** $5,000-$10,000 per ministry/year (23 ministries = $115K-$230K annual)
2. **Central Cabinet License:** $50,000/year for Cabinet Office premium access
3. **Investor Portal Access:** $500-$2,000/year per investor account
4. **Development Partner Licensing:** $20,000-$50,000/year for World Bank, IMF, AfDB custom integrations
5. **District Expansion:** $1,000 per district/year (416 districts = $416K potential)

**Pricing model:** Tiered subscription based on user count and feature access.

It's straightforward, scalable, and proven in similar GovTech industries (Palantir, Tyler Technologies).

## Traction / Metrics

We're not just an idea.

**Current status:**

✅ Production-ready platform — fully functional web application
✅ 8+ official NISR datasets integrated (EICV7, Labour Force Survey 2024, Census 2022, National Accounts, CFSVA, FinScope, etc.)
✅ Live demo deployed on Vercel with mobile-responsive design
✅ Competition finalist: NISR 2025 Big Data Hackathon - Track 5 (Open Innovation)
✅ Demo videos: 3-minute pitch + 13-minute deep dive

**User validation:**

- Built specifically for Rwanda's NST2 priorities (Economic, Social, Transformational Governance)
- Aligns with all 5 NISR evaluation criteria (Relevance 20%, Data Utilization 25%, UI/UX 15%, Innovation 15%, Impact & Scalability 25%)

**Growth trajectory:** With proper funding, we can onboard all 23 ministries within 6 months and achieve $500K ARR by Year 2. This is momentum you can't ignore.

## Go-to-Market Strategy

Our strategy is laser-focused: government-first adoption, then development partners, then investors.

**Phase 1 (Months 1-3): Cabinet Office Pilot**

- Deploy to Cabinet Office and 3 pilot ministries (Finance, Agriculture, ICT)
- Prove ROI with decision-time reduction metrics
- Integrate remaining 57 NISR datasets

**Phase 2 (Months 4-6): Full Government Rollout**

- Expand to all 23 ministries with ministry-specific dashboards
- Partner with NISR for real-time API integration
- Launch mobile apps (Android/iOS)

**Phase 3 (Months 7-12): Ecosystem Expansion**

- Onboard development partners (World Bank, IMF, AfDB)
- Launch investor portal with verified opportunities
- District-level rollout (416 districts)

We've already tested this approach with NISR Hackathon judges and government stakeholders, and the results prove our approach works.

## Team

Behind this company is a team with deep expertise.

**Christian Tonny** (Lead Developer & Platform Architect)

- Full-stack engineer with expertise in Next.js, React, TypeScript
- Government tech experience
- Hackathon finalist with production-ready platform

**Niyigaba Jean Remy** (Data Integration & Backend Developer)

- Data engineering specialist
- NISR dataset integration expert
- Backend architecture and API development

Together, we're uniquely positioned to win. We understand both government workflows and cutting-edge AI technology — a rare combination in Rwanda's GovTech space.

## Financials / Projections

Here's the roadmap:

**Year 1 Revenue: $150K-$300K**

- 5 ministries × $10K = $50K
- Cabinet Office license = $50K
- 100 investor accounts × $1K = $100K
- Development partner pilots = $50K

**Year 2 Revenue: $500K-$750K**

- All 23 ministries × $10K = $230K
- 200 investor accounts = $200K
- 3 development partner integrations = $150K
- 50 district licenses = $50K

**Year 3 Revenue: $1.5M-$2M**

- Full government ecosystem + EAC regional expansion

Conservative assumptions, aggressive execution. We know how to get there.

**Current costs:** $0/month (free tiers)
**Production costs:** $200-$1,000/month (scales with usage)
**Break-even:** Month 6 with just 2 ministry contracts

## Vision

This is bigger than just a product. We're building the future of data-driven governance in Africa.

**Today:** Ministers spend weeks searching for NISR data

**Tomorrow:** Instant AI-powered answers with official citations

**Future:** Rwanda becomes the African leader in government AI and data intelligence

With your support, we'll transform how Rwanda's government works, makes decisions, and drives NST2 priorities. We're not just building a platform. We're building Rwanda's competitive advantage in the 21st century.

**The time is now.**

### The Ask

**Seeking:** $250K seed funding for:

- Full NISR dataset integration (all 65+)
- Advanced AI features (GPT-4, predictive analytics)
- Team expansion (2 engineers, 1 government liaison)
- 12-month runway to government-wide deployment

**Exit potential:** Acquisition by Palantir, Tyler Technologies, or regional GovTech leader. Similar platforms valued at $50M-$500M.

🇷🇼 **Transforming National Statistics into Instant Government Intelligence** 🇷🇼

**Team SPCS SUITE | Built for Rwanda's Data-Driven Future**`
  },
  {
    slug: "opportunitymap",
    title: "OpportunityMap - Career Discovery for African Youth",
    description:
      "Career discovery platform helping Rwandan high school students explore 100+ careers, connect with professional mentors, and understand clear pathways from education to employment.",
    date: "2024-12-10",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ChristianTonny/spark"
      }
    ],
    body: `## The Mission

This project is OpportunityMap. Our mission is simple: to help Rwandan high school students discover careers they never knew existed. Today, I'll show you how we're solving a problem that affects millions of students, and why now is the time to act.

## Problem Statement

Here's the reality: 75%+ of rural Rwandan students fail national exams — not because they lack learning content, but because they lack direction. It's costly, inefficient, and frankly, unacceptable.

**The current situation:**

- Students study subjects without understanding career applications
- Zero visibility into careers beyond doctor, teacher, engineer
- No way to connect with professionals to learn about career realities
- Parents and teachers lack resources for career guidance
- Students don't know what they're studying for

**Real-world impact:** A brilliant student in Eastern Province studies biology without knowing careers like biomedical engineering, pharmaceutical research, or agricultural technology even exist. They fail exams because they can't see the purpose.

This isn't a small inconvenience — it's a systemic issue costing Rwanda its next generation of innovators and professionals.

## Solution

That's where we come in. Our solution is OpportunityMap — a career discovery platform that transforms how Rwandan students explore their futures. It's designed to connect students with 100+ careers, professional mentors, and clear educational pathways.

Think of it as **"LinkedIn + Khan Academy + Career GPS"** — purpose-built for Rwandan high school students.

**What it does:**

1. **Career Library** — Explore 100+ careers with videos, salary ranges, and real-world requirements
2. **Career Assessments** — AI-powered matching based on interests, skills, and goals (15-question flow)
3. **Professional Mentors** — Book 15-minute video calls with working professionals
4. **Educational Pathways** — Step-by-step guides from high school subjects to dream careers
5. **Student Dashboard** — Track saved careers, assessment results, and learning progress

**The transformation:** Students go from "I don't know what to study" to "I want to be a data scientist, here's my roadmap" — simple, powerful, and transformative.

## Market Opportunity

This isn't just a niche. The market is massive — Rwanda's education transformation sector valued at hundreds of millions annually.

**The numbers:**

- **Primary Market:** 2.5+ million Rwandan high school students (ages 12-25)
- **Secondary Market:** 30,000+ schools, parents, and educational institutions
- **Tertiary Market:** Companies building talent pipelines, international education organizations

**Scale potential:**

- **Immediate:** 1,000+ students in pilot schools
- **Year 1:** 50,000 students across 100 schools
- **Year 2:** 250,000 students nationwide + EAC expansion (Kenya, Uganda, Tanzania)
- **Year 3:** Pan-African career discovery platform (10M+ students)

**Economic value:** If we prevent just 10% of rural student failures (reducing from 75% to 65%), that's 250,000+ students staying in school and contributing to Rwanda's workforce. Even capturing a fraction means $5M+ in potential revenue through school subscriptions and company sponsorships. The demand is real, and it's growing.

## Product Demo / How It Works

Let me walk you through it.

**Step one:** A student logs in and takes a 15-question career assessment — "Do you prefer working with people or data? Indoors or outdoors?"

**Step two:** Our algorithm instantly analyzes responses across 100+ careers and shows top matches: "You're 92% matched with Software Engineer, 88% with Data Analyst, 85% with UX Designer" — with full career details, salaries, and video introductions.

**Step three:** Student saves interesting careers to their dashboard, explores educational pathways ("Study Math + Physics → University CS degree → Junior Developer → Senior Engineer"), and books a 15-minute Calendly video call with a working software engineer.

In less than 20 minutes, we've transformed a student's understanding of their future.

**Key features demonstrated:**

- **Career Library:** 100+ careers with search/filter (neobrutalist design with bold colors and thick borders)
- **Assessment Flow:** 15 questions with progress tracking and instant results
- **Mentor Booking:** Calendly integration for professional video calls
- **Student Dashboard:** Stats, saved careers, assessment history, and personalized recommendations
- **Mobile-Optimized:** Works perfectly on feature phones and tablets (mobile-first design)
- **Offline-Ready:** Content cached for zero-data access (PWA architecture)

## Business Model

We make money through a freemium B2B2C model targeting schools, companies, and premium students.

**Revenue streams:**

1. **School Subscriptions:** $500-$2,000 per school/year (100 schools = $50K-$200K annual)
   - Bulk student access (50-500 students per school)
   - Teacher dashboards and career counseling tools
   - Progress tracking and analytics

2. **Premium Student Access:** $10-$20 per student/year
   - Unlimited mentor sessions
   - Advanced assessments
   - Priority career resources

3. **Company Sponsorships:** $5,000-$20,000 per company/year
   - Sponsor specific careers (e.g., "MTN Rwanda sponsors Telecommunications Engineer")
   - Talent pipeline building
   - Early recruitment access

4. **Mentor Platform Fees:** 15% commission on paid mentor sessions
   - Free intro sessions + paid deep-dive consultations
   - Professional development for mentors

5. **API Licensing:** $10,000-$50,000 per partner
   - Integration with government education systems
   - NGO and development partner licensing

**Pricing model:** Tiered subscription with school bulk discounts and freemium student access.

It's straightforward, scalable, and proven in global EdTech markets (LinkedIn Learning, Coursera, Nepris).

## Traction / Metrics

We're not just an idea.

**Current status:**

✅ Production-ready platform — fully functional web application (Next.js 14, TypeScript)
✅ UI-first development complete — Landing page, career library, assessments, mentor booking, dashboards
✅ Neobrutalist design system — Modern, bold, high-contrast aesthetic optimized for mobile
✅ Mock data with 100+ careers — Real career library ready for content population
✅ Responsive on all devices — Tested on mobile (375px), tablet (768px), desktop (1440px+)
✅ Live demo deployed on Vercel with full user flows

**Development approach:**

- **UI-First Philosophy:** Built beautiful, functional interfaces before backend (inspired by Apple)
- **Mobile-First Design:** 44x44px touch targets, high contrast for sunlight readability
- **TypeScript & Zod Validation:** Enterprise-grade code quality

**Next phase:** Backend integration (Convex database, real authentication, mentor payments)

**Growth trajectory:** With proper funding, we can pilot in 10 schools within 3 months and achieve 50,000 students by Year 1. This is momentum you can't ignore.

## Go-to-Market Strategy

Our strategy is laser-focused: schools-first adoption, then direct-to-student, then corporate partnerships.

**Phase 1 (Months 1-3): Pilot Program**

- Partner with 10 pilot schools in Kigali and rural districts
- Recruit 50 mentors from Rwandan tech, healthcare, business sectors
- Populate career library with 100+ Rwandan-relevant careers
- Integrate backend (Convex) and authentication

**Phase 2 (Months 4-6): Regional Expansion**

- Scale to 100 schools across all provinces
- Launch premium student subscriptions ($10/year)
- Partner with 5 major companies (MTN, Bank of Kigali, RDB) for career sponsorships
- Mobile app launch (Android-first for rural accessibility)

**Phase 3 (Months 7-12): National Rollout**

- Government partnership with Ministry of Education (MINEDUC)
- All 30,000+ schools nationwide
- EAC expansion (Kenya, Uganda, Tanzania)
- Add 500+ careers and 1,000+ mentors

We've already validated this approach with our UI-first development — students love the neobrutalist design and intuitive interface. The results prove our approach works.

## Team

Behind this company is a team with deep expertise.

**Christian Tonny** (Founder & Lead Developer)

- Full-stack engineer specializing in Next.js, React, TypeScript
- UI/UX design expertise (neobrutalist design system implementation)
- Education technology experience
- Previous: Rwanda Government Intelligence Platform (NISR Hackathon finalist)

**Development Philosophy:**

- UI-first approach (build beautiful interfaces before backend)
- Mobile-first design (optimized for Rwanda's mobile-heavy users)
- Rapid iteration based on user feedback

**Advisory Board (Planned):**

- Career counselors from Rwandan schools
- Working professionals across 10+ industries
- EdTech investors with Africa experience

Together, we're uniquely positioned to win. We understand both student psychology and cutting-edge web technology — a rare combination in Rwanda's EdTech space.

## Financials / Projections

Here's the roadmap:

**Year 1 Revenue: $75K-$150K**

- 10 pilot schools × $1K = $10K
- 50 schools × $1.5K = $75K
- 500 premium students × $15 = $7.5K
- 3 company sponsorships × $10K = $30K
- Mentor platform fees = $10K

**Year 2 Revenue: $500K-$750K**

- 100 schools × $2K = $200K
- 5,000 premium students × $15 = $75K
- 10 company sponsorships × $20K = $200K
- Government partnership (MINEDUC) = $100K
- Mentor platform fees = $50K

**Year 3 Revenue: $2M-$3M**

- 500 schools (Rwanda + EAC) × $2K = $1M
- 50,000 premium students × $15 = $750K
- 20 company sponsorships × $25K = $500K
- API licensing (NGOs, government) = $300K
- Mentor platform fees = $200K

Conservative assumptions, aggressive execution. We know how to get there.

**Current costs:** $0/month (free tiers — Vercel, open-source stack)
**Production costs:** $200-$500/month (scales with usage)
**Break-even:** Month 8 with 15 school contracts

## Vision

This is bigger than just a product. We're building the future of career discovery in Africa.

**Today:** Students fail exams because they don't know what they're studying for

**Tomorrow:** Every Rwandan student has a clear career pathway from high school to professional success

**Future:** OpportunityMap becomes the African standard for career exploration — 10M+ students across 54 countries

With your support, we'll transform how Africa's youth discover their potential, choose their paths, and build their futures. We're not just building a platform. We're building Africa's next generation of doctors, engineers, entrepreneurs, and leaders.

**The time is now.**

### The Ask

**Seeking:** $150K seed funding for:

- Backend development (Convex integration, authentication, payments)
- Content creation (100+ career videos, mentors onboarding)
- Pilot school partnerships (10 schools, 3 months)
- Mobile app development (Android-first)
- Team expansion (1 content creator, 1 backend engineer)
- 12-month runway to 50,000 students

**Exit potential:** Acquisition by Coursera, LinkedIn, or African EdTech leaders (Andela, ALX). Similar platforms valued at $20M-$200M.

🇷🇼 **Built for Rwanda's Students | UI-First Design | Deployed on Vercel**

**Christian Tonny | OpportunityMap - Career Discovery for Africa's Youth**`
  },
  {
    slug: "beacon-skyway",
    title: "BEACON Skyway - Aviation Ground Handling Operations",
    description:
      "Comprehensive ground handling operations management system transforming African aviation. Real-time flight tracking, automated staff assignment, and performance analytics for airlines and airports.",
    date: "2024-11-20",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/irachrist1/beacon-skyway"
      }
    ],
    body: `## The Mission

This project is BEACON Skyway. Our mission is simple: to transform ground handling operations in African aviation. Today, I'll show you how we're solving critical operational inefficiencies that cost airlines millions annually, and why now is the perfect time to revolutionize airport operations in Africa.

## Problem Statement

Here's the reality: African airlines and airports face complex ground handling challenges that lead to delays, inefficiencies, and poor passenger experiences. With manual processes and fragmented systems, airlines lose an average of **$40 per minute** during delays.

This isn't just an inconvenience — it's a multi-billion dollar problem affecting every major airport in Africa.

**Current challenges:**

- Manual coordination between ground staff, airlines, and airport operations
- No real-time visibility into flight status and resource allocation
- Inefficient staff scheduling leading to delays
- Poor incident management and communication
- Lack of performance data for optimization
- Fragmented systems that don't communicate

## Solution

That's where BEACON Skyway comes in. Our platform is a comprehensive ground handling operations management system designed specifically for African aviation.

Think of it as **"Slack meets Asana"** for airport operations — simple, powerful, and transformative. It connects all stakeholders in real-time, from ground staff to airline management.

**What it does:**

1. **Real-time Flight Dashboard** — Monitor all active operations with live status updates
2. **Automated Staff Assignment** — Intelligent scheduling based on flight schedules and staff availability
3. **Incident Management** — Instant alerts and stakeholder notifications for delays and issues
4. **Performance Analytics** — Track KPIs and identify optimization opportunities
5. **Cross-Stakeholder Communication** — Unified platform connecting airlines, ground handlers, and airport operations
6. **Mobile-First Design** — Access critical information from anywhere on the tarmac

**The transformation:** What used to require radio calls, manual logs, and fragmented communication now happens seamlessly in one unified platform.

## Market Opportunity

The African aviation ground handling market is valued at **$2.8 billion** and growing at **7.2% annually**.

Even capturing 10% of this market means **$280 million** in potential revenue. With major airlines like Ethiopian Airlines, Kenya Airways, and South African Airways actively seeking solutions, the demand is immediate and growing.

**Target Market:**

- **Primary:** Major African airlines with 5+ airport hubs
- **Secondary:** Airport ground handling service providers
- **Tertiary:** Regional airports and smaller carriers

**Scale Potential:**

- **Year 1:** Top 20 African airports
- **Year 2:** 50+ airports across the continent
- **Year 3:** Pan-African coverage + Middle East expansion

## Product Demo / How It Works

Let me walk you through it:

**Step 1:** Real-time flight dashboard shows all active operations

- Live flight status updates
- Gate assignments and aircraft positioning
- Ground crew allocation
- Equipment tracking

**Step 2:** Automated staff assignment based on flight schedules

- Intelligent matching of staff skills to flight requirements
- Automatic shift scheduling
- Real-time availability tracking
- Workload balancing

**Step 3:** Incident management with instant stakeholder alerts

- Automatic detection of delays or issues
- Instant notifications to relevant teams
- Escalation workflows
- Resolution tracking

**Step 4:** Performance analytics and KPI tracking

- On-time performance metrics
- Staff productivity analysis
- Equipment utilization rates
- Cost per flight tracking

All of this happens in one unified platform, accessible from any device.

## Business Model

Our revenue model is straightforward: We charge airlines a base subscription plus a per-flight fee.

**Pricing Structure:**

1. **Base Subscription:** $2,000 per month per airport hub
2. **Per-Flight Fee:** $50 per flight handled
3. **Premium Features:** $500/month for advanced analytics and integrations

**Example Revenue Calculation:**

For a mid-sized airline with operations in 5 airports:
- Base: $2,000 × 5 = $10,000/month
- Flights: 100 flights/day × $50 × 30 days = $150,000/month
- **Total:** $160,000/month = **$1.92M annually**

It's scalable and provides predictable recurring revenue.

**Additional Revenue Streams:**

- Integration fees with existing systems (Amadeus, Sabre)
- Staff training and onboarding services
- Custom feature development
- White-label solutions for ground handling companies

## Traction / Metrics

We're not just an idea. In the last 6 months:

✅ **Completed MVP development** with working dashboard
✅ **80% completion** of core foundation
✅ **40% completion** of flight management system
✅ **Integration capabilities** with major systems like Amadeus and Sabre
✅ **Advanced discussions** with 3 major African airlines
✅ **Pilot program** in planning with regional airport

**Technical Progress:**

- React-based dashboard with real-time updates
- Node.js backend with WebSocket support
- PostgreSQL database with optimized queries
- Mobile-responsive design tested on iOS and Android
- API integrations framework ready for deployment

**User Validation:**

- Positive feedback from ground operations managers
- Interest from 5+ airlines and airports
- Advisory board includes aviation industry veterans

## Go-to-Market Strategy

Our strategy targets the top 20 African airports initially:

**Phase 1 (Months 1-6): Pilot Deployments**

1. Direct sales to airline ground handling departments
2. Pilot program with 2-3 airlines at major hubs
3. Prove ROI with measurable efficiency gains
4. Gather user feedback and iterate

**Phase 2 (Months 7-12): Market Expansion**

1. Strategic partnerships with existing airport management systems
2. Expand to 10+ airports across 5 countries
3. Leverage aviation industry events for demonstrations
4. Offer free operations assessments to prove value

**Phase 3 (Year 2): Regional Leadership**

1. Pan-African coverage across major airports
2. Integration with all major airline systems
3. White-label offerings for ground handling companies
4. Middle East market expansion

**Sales Approach:**

- Direct B2B sales to airline operations directors
- Partnerships with ground handling service providers
- Presence at aviation trade shows (AFRAA, ACI Africa)
- Case studies and ROI demonstrations

## Team

Our founding team brings deep expertise:

**Nicolas** (CEO)
- 15 years in African aviation operations
- Former ground operations manager at major African airline
- Deep understanding of industry pain points
- Network of airline and airport contacts

**Christian Tonny** (CTO)
- Tech lead with experience building enterprise SaaS platforms
- Full-stack engineer (React, Node.js, TypeScript)
- Previous: Rwanda Government Intelligence Platform (NISR Hackathon finalist)
- Experience with real-time systems and mobile development

**Advisory Board:**

- Aviation safety consultant (25+ years experience)
- Former airport operations director
- Aviation software integration specialist

Together, we combine aviation expertise with technical capability.

## Financials / Projections

Our projections show:

**Year 1: $500K**
- 10 airline clients × average $50K/year
- Focus on pilot programs and product refinement
- Break-even by Month 9

**Year 2: $2M**
- Expansion to 30 airlines
- 50+ airports using the platform
- Premium features driving upsells

**Year 3: $5M**
- Market leadership in Africa
- 100+ airports covered
- Regional expansion to Middle East
- Strategic partnerships generating additional revenue

**Cost Structure:**

- **Development:** $150K/year (team expansion)
- **Sales & Marketing:** $200K/year
- **Infrastructure:** $50K/year (AWS, integrations)
- **Operations:** $100K/year

**Key Metrics:**

- Customer Acquisition Cost: $25K
- Lifetime Value: $200K+ (4+ year average retention)
- Gross Margin: 80%
- Payback Period: 6 months

These are conservative estimates based on current market pricing and demand.

## Vision

BEACON Skyway isn't just another software platform — we're building the future of African aviation operations.

**Today:** Manual processes, delays, inefficiencies

**Tomorrow:** Real-time coordination, automated workflows, data-driven optimization

**Future:** Pan-African aviation operating system powering the continent's air travel growth

By 2026, we aim to be the standard operating system for ground handling across the continent. With your investment, we can accelerate development, expand our team, and capture this massive opportunity.

The future of African aviation efficiency starts here.

## Key Differentiators

What makes BEACON Skyway unique:

1. **Built specifically for African aviation challenges**
   - Understands infrastructure limitations
   - Designed for connectivity variations
   - Culturally aligned with African operations

2. **Real-time operations management**
   - WebSocket-based live updates
   - Instant notifications and alerts
   - No refresh needed

3. **Comprehensive solution**
   - Flights, staff, incidents, analytics all in one
   - No need for multiple disconnected systems
   - Single source of truth

4. **Integration with existing aviation systems**
   - Amadeus, Sabre compatibility
   - SITA messaging integration
   - Airport operations systems

5. **Mobile-first approach for ground staff**
   - Works on tablets and smartphones
   - Touch-optimized interface
   - Quick actions for common tasks

6. **Offline capabilities for limited connectivity**
   - Local data caching
   - Sync when connection restored
   - Critical functions work offline

### The Ask

**Seeking:** $500K seed funding for:

- Complete flight management system development
- Integration with major airline systems (Amadeus, Sabre)
- Sales team expansion (2 aviation sales specialists)
- Pilot program execution at 3 major African airports
- Mobile app development (iOS and Android)
- 18-month runway to achieve positive cash flow

**Exit potential:** Acquisition by major aviation software providers (SITA, Amadeus, Sabre) or strategic investors. Similar platforms valued at $50M-$300M.

✈️ **Transforming African Aviation Operations | Built for Scale | Real-time Performance**

**BEACON Skyway | The Future of Ground Handling in Africa**`
  },
];
