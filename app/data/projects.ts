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
    slug: "erp-integration-system",
    title: "ERP Integration System",
    description:
      "Built custom integrations between QuickBooks, Odoo ERP, and PowerAutomate to eliminate manual data entry and improve workflow efficiency at Andersen Rwanda.",
    date: "2024-11-15",
    body: `## The Problem

At Andersen Rwanda, we had three separate systems that didn't talk to each other:

- **QuickBooks** for financial data
- **Odoo ERP** for operations and project management
- **PowerAutomate** for workflow automation

Every month, staff spent hours manually transferring data between systems. Invoice data from QuickBooks had to be manually entered into Odoo. Project updates from Odoo needed manual export to financial reports. Human error was inevitable.

## What I Built

I developed a custom integration system that:

1. **Connects QuickBooks to Odoo** using Python and their respective APIs
2. **Automates data synchronization** for invoices, clients, and projects
3. **Uses PowerAutomate** to trigger workflows based on ERP events
4. **Handles error cases** with logging and notifications
5. **Runs on a schedule** with monitoring for failures

## Technical Implementation

### Technology Stack
- **Python** for data transformation and API integration
- **Odoo XML/Python** for ERP customization
- **PowerAutomate** for workflow orchestration
- **Microsoft 365** for notifications and reporting

### Key Features
- Bi-directional sync between QuickBooks and Odoo
- Automated invoice creation from project milestones
- Real-time notifications when sync fails
- Admin dashboard for monitoring integration health
- Comprehensive error logs for troubleshooting

### Development Process
- Week 1: API exploration and data mapping
- Week 2: Python integration scripts
- Week 3: Odoo customizations and PowerAutomate flows
- Week 4: Testing, deployment, and documentation

## The Results

### Time Savings
- Eliminated manual data entry previously taking staff hours each week
- Reduced month-end close process time
- Removed duplicate data entry errors

### Reliability
- Automated daily synchronization
- Error notification system for quick resolution
- Full audit trail of all data transfers

### Business Impact
- Finance team can focus on analysis instead of data entry
- Real-time visibility into project profitability
- Improved data accuracy across systems

## Lessons Learned

**Integration work isn't glamorous, but it's essential.** Businesses run on connected systems. Understanding multiple platforms and making them work together creates real value.

**Error handling matters more than the happy path.** Most of my development time went into handling edge cases and failures gracefully. That's what makes integration reliable.

**Documentation enables sustainability.** I won't maintain this forever. Writing clear documentation means the team can troubleshoot and extend the system after I'm gone.`  },
  {
    slug: "website-performance-optimization",
    title: "Website Performance Optimization",
    description:
      "Optimized company website performance through technical improvements, reducing load times and improving user experience for Andersen Rwanda's digital presence.",
    date: "2024-10-20",
    body: `## The Situation

Andersen Rwanda's website was slow. Pages took several seconds to load. Images were unoptimized. The site wasn't mobile-friendly. This wasn't just a technical problem—it was a business problem. Slow websites lose clients.

## What I Did

### Performance Audit
- Ran Lighthouse, GTmetrix, and PageSpeed Insights
- Identified bottlenecks: large images, unminified CSS/JS, no caching
- Documented baseline metrics for comparison

### Technical Improvements
- **Image Optimization:** Compressed and converted images to WebP format, reducing file sizes significantly
- **Code Minification:** Minified CSS and JavaScript files
- **Caching Implementation:** Configured browser caching and CDN integration
- **Mobile Responsiveness:** Fixed layout issues on mobile devices
- **Database Queries:** Optimized slow WordPress database queries

### WordPress-Specific Optimizations
- Removed unused plugins slowing down the site
- Configured caching plugin (WP Rocket)
- Implemented lazy loading for images
- Optimized theme code for performance

## The Results

### Performance Metrics
- Reduced average page load time
- Improved mobile usability scores
- Better Core Web Vitals ratings

### Business Impact
- Improved user experience for potential clients
- Better SEO rankings due to performance improvements
- Reduced bounce rates on key landing pages

## Why This Matters

**First impressions happen in milliseconds.** A slow website signals unprofessionalism. Speed is a feature. It's the first thing users experience, even if they don't consciously notice it.

**Technical debt accumulates silently.** Websites slow down over time as content grows and plugins pile up. Regular maintenance prevents degradation.

## The Process

Good optimization isn't about applying random fixes. It's about:

1. **Measuring first:** Establish baseline metrics
2. **Identifying bottlenecks:** Find the actual problems
3. **Prioritizing impact:** Fix high-impact issues first
4. **Testing changes:** Verify improvements with data
5. **Documenting work:** Enable future maintenance

This is how you ship work that actually improves businesses.` },
  {
    slug: "it-infrastructure-management",
    title: "IT Infrastructure Management",
    description:
      "Managed comprehensive IT infrastructure including Office 365, Google Workspace, cybersecurity, and network administration for growing organization.",
    date: "2024-09-30",
    body: `## What I Do

As Digital Operations Associate at Andersen Rwanda, I manage the IT infrastructure that keeps the organization running. This includes:

### Microsoft 365 Administration
- User account management and licensing
- SharePoint configuration and optimization
- Security and compliance configuration
- Email administration and support
- Troubleshooting technical issues

### Network Administration
- Network configuration and maintenance
- Monitoring network performance
- Implementing security best practices
- Managing VPN and remote access
- Coordinating with ISPs for connectivity issues

### Cybersecurity
- Implementing Multi-Factor Authentication
- Configuring security policies
- Conducting security awareness training
- Incident response and investigation
- Regular security audits

### Technical Support
- Supporting staff with technical issues
- Hardware and software troubleshooting
- Onboarding new employees with technology setup
- Creating documentation and training materials
- Maintaining IT inventory

## The Reality of Infrastructure Work

**It's not glamorous.** There's no viral demo. No impressive metrics to share. Infrastructure work is invisible when it works correctly.

But it's essential. Without reliable IT infrastructure:
- Staff can't access critical systems
- Security breaches become likely
- Productivity drops significantly
- Business operations suffer

## My Approach

### Proactive Maintenance
I don't wait for things to break. Regular audits, monitoring, and preventive maintenance catch issues before they impact users.

### Documentation
Everything gets documented. Procedures, configurations, troubleshooting steps. This enables sustainability and knowledge transfer.

### Security First
Security isn't an afterthought. It's built into every decision, from user permissions to network configuration.

### User Focus
Technical solutions only work if people can actually use them. I prioritize user experience in all IT decisions.

## Skills Developed

This role has taught me:
- How to manage complex systems with many interdependencies
- How to balance security with usability
- How to prioritize when multiple issues demand attention
- How to communicate technical concepts to non-technical stakeholders
- How to think about reliability and sustainability

**Infrastructure work teaches patience, attention to detail, and systems thinking.** These skills apply to all technology work, not just IT administration.`  },
];
