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
    slug: "nisr-ai-platform",
    title: "NISR AI Platform",
    description:
      "Rwanda's first AI-powered government intelligence platform enabling policymakers to query years of data in seconds with 90% accuracy.",
    date: "2025-09-15",
    body: `## The Challenge

Rwanda's National Institute of Statistics (NISR) maintains hundreds of reports, datasets, and policy documents. Government officials needed quick answers to complex questions:

- "What were agricultural yields in the Eastern Province over the last 5 years?"
- "Compare household income trends across all districts"
- "What factors correlate with improved education outcomes?"

The problem? These answers required reading through 600+ page PDFs, cross-referencing multiple datasets, and hours of manual analysis.

## The Solution

I led development of an AI-powered intelligence platform that:

1. **Centralizes all NISR datasets** into a unified system
2. **Uses RAG (Retrieval-Augmented Generation)** to understand natural language questions
3. **Searches through thousands of pages** in seconds
4. **Returns accurate answers** with source citations
5. **Presents findings** through an intuitive React interface

## Technical Details

### Technology Stack
- **Backend:** Python with LangChain for AI orchestration, FastAPI for API layer
- **AI System:** Custom RAG pipeline using vector databases for semantic search
- **Frontend:** React-based UI designed for non-technical government officials
- **Data Processing:** CSV to JSON parsers handling 50+ datasets
- **Accuracy:** 90% on complex policy questions (tested with 5 government officials)

### Implementation Timeline
- **Week 1:** Project kickoff, data architecture design
- **Week 2:** RAG system implementation, backend development
- **Week 3:** Frontend development, API integration
- **Week 4:** User testing, refinement, documentation

## The Results

### Quantifiable Impact
- **50+ government datasets** centralized
- **90% accuracy** on complex queries
- **Seconds vs. hours** for policy questions
- **Zero cost per query** (vs. human analyst time)

### Qualitative Impact
- First system of its kind in Rwanda
- Enables data-driven policy decisions
- Featured in ALU alumni spotlight
- Technical documentation enables future maintenance

## Why This Matters

This isn't just an impressive technical project. It's proof that I can:

- Take ambiguous requirements and create working systems
- Lead technical projects from concept to completion
- Build AI that solves real problems, not toy demos
- Deliver production-ready code, not prototypes
- Create systems that non-technical users actually use

## The Lesson

Good AI implementation isn't about having the fanciest models. It's about:

1. **Understanding the actual problem**
2. **Choosing the right technology** for the job
3. **Building interfaces people can use**
4. **Delivering accuracy that creates trust**
5. **Documenting everything** for sustainability` },
  {
    slug: "ai-consulting",
    title: "AI Consulting Practice",
    description:
      "Launched AI advisory service line at Andersen Rwanda, generating $120K in qualified leads through workshops, tools, and thought leadership.",
    date: "2025-10-01",
    body: `## The Situation

Andersen Rwanda is a respected business consulting firm. They saw demand for AI services but lacked:

- A structured AI readiness assessment process
- Tools to demonstrate value to prospective clients
- Thought leadership positioning in the market
- A proven methodology for client engagement

They needed someone who could both build the technical infrastructure **and** help sell it.

## What I Built

### 1. AI Readiness Assessment Framework
- Comprehensive evaluation covering data maturity, technical infrastructure, team capabilities
- Scoring system that benchmarks clients against industry standards
- Custom recommendations based on assessment results
- Phased implementation roadmaps with cost estimates

### 2. Interactive Assessment Tool
- Built using Python and Streamlit
- Generates custom AI roadmap reports
- Calculates estimated ROI for different use cases
- Professional PDF output for client presentations

### 3. Client Workshop Program
- 4-hour structured format covering AI fundamentals, use cases, and ROI
- Live demonstrations using the assessment tool
- Q&A addressing specific client concerns
- Follow-up consultation pipeline

### 4. Thought Leadership Content
- 3-part article series on AI implementation
- "Getting Started with AI: A Practical Guide for SMEs"
- "Measuring AI ROI: Metrics That Matter for African Businesses"
- "Building Your First AI: A Step-by-Step Implementation Guide"

## The Execution

### Phase 1: Tool Development (2 weeks)
- Researched AI readiness frameworks from Gartner, McKinsey, and Deloitte
- Adapted methodologies for African business context
- Built interactive Streamlit application
- Tested with internal stakeholders

### Phase 2: Content Marketing (3 weeks)
- Published articles on company blog and LinkedIn
- Coordinated social media promotion
- Engaged with comments and questions
- Built email newsletter list

### Phase 3: Client Engagement (2 weeks)
- Facilitated workshop for 5 prospective clients
- Demonstrated assessment tool in real-time
- Conducted individual consultations
- Generated proposals for qualified leads

## The Results

### Business Impact
- **$120,000 in qualified leads** generated
- **3 signed proposals** (pending final approval)
- **15% conversion rate** from inquiry to consultation
- **25 total inquiries** from marketing campaign

### Market Positioning
- Established Andersen as AI thought leader in Rwanda
- **1,500+ article views** across series
- Shared by **15+ industry leaders** on LinkedIn
- **50+ newsletter signups** from content

### Operational Assets
- Reusable assessment framework for all clients
- Proven workshop format for scalable delivery
- Library of case studies and use cases
- Technical documentation for tool maintenance

## Why This Works

**Most technical people can't sell.**  
**Most salespeople can't explain the technology.**  
**I do both.**

The AI consulting practice works because:

1. **The assessment tool creates immediate value** – Clients get a roadmap even before they hire us
2. **The articles build trust** – We demonstrate expertise publicly before asking for business
3. **The workshop format qualifies leads** – Only serious prospects invest 4 hours
4. **The ROI focus resonates** – African businesses need clear financial justification
5. **The execution proves capability** – If we can build our own AI tools, we can build yours

## The Bigger Lesson

Technology consulting isn't about selling technology.  
**It's about selling business outcomes.**

Every client conversation starts with: "What problem are you trying to solve?"  
Not: "Here are all the cool things AI can do."

This is why the practice generated $120K in a region where many companies are still skeptical of AI. We lead with their problems, not our solutions.` },
  {
    slug: "enterprise-infrastructure",
    title: "Enterprise Infrastructure",
    description:
      "Secured 50+ employees, upgraded critical systems, and achieved zero downtime through comprehensive network and cybersecurity improvements.",
    date: "2025-09-30",
    body: `## The Reality

Sexy projects get attention.  
Infrastructure work gets ignored.  
**Until something breaks.**

But here's the truth: No AI platform matters if your network is down. No consulting practice succeeds if client data gets breached. No digital marketing works if your website is slow.

This is why I spent significant time on the "boring" work that actually keeps businesses running.

## The Projects

### Network Infrastructure Upgrade
**Challenge:** Aging network switches needed firmware updates. Any downtime would impact 50+ employees and active client work.

**Solution:**
- Documented complete network topology
- Planned upgrade during maintenance window
- Tested rollback procedures
- Executed upgrade with zero business impact

**Result:** Updated infrastructure, improved stability, **zero downtime**

### Cybersecurity Hardening
**Challenge:** Basic security measures in place, but vulnerabilities identified during assessment.

**What I Implemented:**
- Multi-Factor Authentication (achieved **100% adoption**)
- Intrusion Detection System with custom alert rules
- Conditional access policies in Microsoft 365
- Email filtering to prevent phishing
- Security awareness training for staff

**Incident Response Example:**
When a phishing email reached employees, I:
1. Immediately investigated the scope
2. Implemented new filtering rules
3. Conducted staff training session
4. Documented the incident for future reference
5. Result: Zero data loss, prevented potential breach

**Result:** 50+ employees protected, measurably improved security posture

### Microsoft 365 Optimization
**Challenge:** Growing organization with increasing collaboration needs and document chaos.

**What I Did:**
- Optimized SharePoint structure and information architecture
- Implemented version control best practices for 200+ documents
- Configured automated workflows for common processes
- Trained team on new systems
- Created documentation for sustainable maintenance

**Result:** **60% improvement in document findability**, reduced time wasted searching for files

### Backup and Disaster Recovery
**Challenge:** Odoo ERP system critical to operations but no formal disaster recovery plan.

**What I Implemented:**
- Automated backup solution with daily increments
- Documented disaster recovery procedures
- Tested recovery process (validated **4-hour RTO**)
- Created runbooks for emergency scenarios

**Result:** Business continuity ensured, peace of mind for leadership

## Why This Matters

These projects don't make flashy portfolio pieces.  
But they represent something more important: **reliability.**

**Any consultant can build something new.**  
**Few can maintain something critical.**

When you hire me, you get someone who:
- Understands that **uptime is a feature**
- Plans for things going wrong
- Documents everything for sustainability
- Thinks about security from day one
- Balances innovation with stability

## The Philosophy

**"Move fast and break things" is a terrible motto for enterprise IT.**

Better motto: **"Ship new capabilities while keeping existing systems running."**

This is harder. This is less glamorous. This is what actually matters to businesses.

## Key Metrics

- **99.9% uptime** achieved on critical systems
- **100% MFA adoption** across organization
- **Zero security breaches** during tenure
- **13+ hours monthly** saved through automation
- **50+ employees** protected with enhanced security
- **Zero downtime** on infrastructure upgrades` },
];
