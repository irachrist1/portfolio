"use client";
import { Mail, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { Card } from "../../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:info@spcstech.com",
		label: "Email",
		handle: "info@spcstech.com",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/irachrist1/",
		label: "LinkedIn",
		handle: "Christian Tonny",
	},
	{
		icon: <MapPin size={20} />,
		href: "#location",
		label: "Location",
		handle: "Kigali, Rwanda",
	},
];

export const dynamic = "force-static";

export default function ContactPage() {
	return (
		<div className="px-6 py-10 mx-auto max-w-4xl lg:px-8">
			{/* Hero Section */}
			<div className="max-w-3xl mb-16">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
					Let's Work Together
				</h1>
				<p className="text-xl text-zinc-400">
					Open to conversations about AI implementation, software engineering roles, speaking opportunities,
					and collaborations in educational technology.
				</p>
			</div>

			{/* Contact Cards */}
			<div className="grid w-full grid-cols-1 gap-8 mx-auto mb-16 sm:grid-cols-3 lg:gap-16">
				{socials.map((s, index) => (
					<Card key={index}>
						<Link
							href={s.href}
							target={s.label !== "Location" ? "_blank" : undefined}
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{s.icon}
							</span>
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display text-center">
									{s.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{s.label}
								</span>
							</div>
						</Link>
					</Card>
				))}
			</div>

			{/* What I'm Open To */}
			<div className="space-y-12 max-w-5xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-zinc-100 mb-12">
						What I'm Open To
					</h2>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<Card>
						<div className="p-6">
							<h3 className="text-xl font-bold text-zinc-100 mb-4">1. AI Implementation Projects</h3>
							<p className="text-zinc-400 text-sm mb-4 leading-relaxed">
								If you're a business that wants to implement AI but doesn't know where to start, I can help.
								I don't just build—I assess, strategize, and execute complete implementations.
							</p>
							<p className="text-xs text-zinc-500 font-semibold mb-2">Ideal projects:</p>
							<ul className="space-y-1 text-xs text-zinc-500">
								<li>• Custom RAG systems for document/data querying</li>
								<li>• AI readiness assessments and roadmaps</li>
								<li>• Prototype development to validate concepts</li>
								<li>• Training and knowledge transfer for your team</li>
							</ul>
						</div>
					</Card>

					<Card>
						<div className="p-6">
							<h3 className="text-xl font-bold text-zinc-100 mb-4">2. Full-Stack Development</h3>
							<p className="text-zinc-400 text-sm mb-4 leading-relaxed">
								If you need someone who can build complete systems from database to frontend, I can help.
							</p>
							<p className="text-xs text-zinc-500 font-semibold mb-2">Ideal projects:</p>
							<ul className="space-y-1 text-xs text-zinc-500">
								<li>• React-based web applications</li>
								<li>• FastAPI backend development</li>
								<li>• Enterprise system integrations</li>
								<li>• Performance optimization projects</li>
							</ul>
						</div>
					</Card>

					<Card>
						<div className="p-6">
							<h3 className="text-xl font-bold text-zinc-100 mb-4">3. Technology Consulting</h3>
							<p className="text-zinc-400 text-sm mb-4 leading-relaxed">
								If you're looking for strategic guidance on technology decisions, I can help.
							</p>
							<p className="text-xs text-zinc-500 font-semibold mb-2">Ideal projects:</p>
							<ul className="space-y-1 text-xs text-zinc-500">
								<li>• ERP selection and implementation</li>
								<li>• Digital transformation roadmaps</li>
								<li>• Cybersecurity assessments</li>
								<li>• Infrastructure architecture reviews</li>
							</ul>
						</div>
					</Card>

					<Card>
						<div className="p-6">
							<h3 className="text-xl font-bold text-zinc-100 mb-4">4. Speaking & Workshops</h3>
							<p className="text-zinc-400 text-sm mb-4 leading-relaxed">
								If you want someone to speak at your event or facilitate workshops on AI implementation, I'm interested.
							</p>
							<p className="text-xs text-zinc-500 font-semibold mb-2">Topics I can cover:</p>
							<ul className="space-y-1 text-xs text-zinc-500">
								<li>• AI implementation for businesses</li>
								<li>• Building your first AI system</li>
								<li>• Technology strategy for African contexts</li>
								<li>• Career development in technology</li>
							</ul>
						</div>
					</Card>
				</div>

				<Card>
					<div className="p-8 text-center">
						<h3 className="text-xl font-bold text-zinc-100 mb-4">5. Educational Technology Projects</h3>
						<p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
							If you're working on technology to improve education access in Africa, I definitely want to talk.
							This is my passion project. If you're building in this space—whether for-profit or nonprofit—I'd
							love to explore collaboration.
						</p>
					</div>
				</Card>
			</div>

			{/* How I Work */}
			<div className="mt-16 max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">How I Work</h2>
				<Card>
					<div className="p-8">
						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-3">Engagement Models I Prefer:</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• <span className="text-zinc-300">Project-based:</span> Defined scope, clear deliverables, fixed timeline</li>
									<li>• <span className="text-zinc-300">Retainer:</span> Ongoing support and development (minimum 10 hours/month)</li>
									<li>• <span className="text-zinc-300">Equity:</span> For early-stage startups aligned with my mission</li>
								</ul>
							</div>
							<div className="pt-6 border-t border-zinc-700">
								<h3 className="text-lg font-semibold text-zinc-200 mb-3">My Process:</h3>
								<ol className="space-y-3 text-zinc-400">
									<li>1. <span className="text-zinc-300">Discovery Call</span> (30 minutes, free) - Understand your problem and assess fit</li>
									<li>2. <span className="text-zinc-300">Proposal</span> (1 week) - Detailed scope, timeline, cost breakdown, success criteria</li>
									<li>3. <span className="text-zinc-300">Kickoff</span> (Week 1) - Finalize requirements, set up communication</li>
									<li>4. <span className="text-zinc-300">Execution</span> (Varies) - Regular updates, milestone reviews, iterative feedback</li>
									<li>5. <span className="text-zinc-300">Delivery & Handover</span> - Complete documentation, training, support transition</li>
								</ol>
							</div>
						</div>
					</div>
				</Card>
			</div>

			{/* What I Need From You */}
			<div className="mt-16 max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">What I Need From You</h2>
				<Card>
					<div className="p-8">
						<p className="text-zinc-400 mb-6">To work effectively, I need:</p>
						<ul className="space-y-4 text-zinc-400">
							<li>
								<span className="font-semibold text-zinc-300">1. Clear Business Objectives</span><br />
								<span className="text-sm">"Make it work with AI" isn't a goal. "Reduce customer support response time by 50%" is.</span>
							</li>
							<li>
								<span className="font-semibold text-zinc-300">2. Access to Stakeholders</span><br />
								<span className="text-sm">I need to talk to the people who will use what I build.</span>
							</li>
							<li>
								<span className="font-semibold text-zinc-300">3. Realistic Timelines</span><br />
								<span className="text-sm">Good work takes time. I can work fast, but not magically fast.</span>
							</li>
							<li>
								<span className="font-semibold text-zinc-300">4. Decision-Making Authority</span><br />
								<span className="text-sm">If you need three layers of approval for minor changes, we'll both be frustrated.</span>
							</li>
							<li>
								<span className="font-semibold text-zinc-300">5. Measurement Criteria</span><br />
								<span className="text-sm">How will we know if this succeeded? Define it upfront.</span>
							</li>
						</ul>
					</div>
				</Card>
			</div>

			{/* FAQ */}
			<div className="mt-16 max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">Frequently Asked Questions</h2>
				<div className="space-y-4">
					<Card>
						<div className="p-6">
							<h3 className="text-lg font-semibold text-zinc-200 mb-2">What's your rate?</h3>
							<p className="text-zinc-400 text-sm">
								It depends on the project. For consulting: $75-150/hour depending on scope. For projects:
								I prefer fixed-fee based on deliverables. For equity: Let's talk about the opportunity.
							</p>
						</div>
					</Card>
					<Card>
						<div className="p-6">
							<h3 className="text-lg font-semibold text-zinc-200 mb-2">Are you available for full-time employment?</h3>
							<p className="text-zinc-400 text-sm">
								Potentially, for the right opportunity. I'm particularly interested in roles that combine
								technical work with business impact, and anything related to educational technology in Africa.
							</p>
						</div>
					</Card>
					<Card>
						<div className="p-6">
							<h3 className="text-lg font-semibold text-zinc-200 mb-2">Can you work remotely?</h3>
							<p className="text-zinc-400 text-sm">
								Yes. I've effectively collaborated across time zones and prefer asynchronous communication for most work.
							</p>
						</div>
					</Card>
					<Card>
						<div className="p-6">
							<h3 className="text-lg font-semibold text-zinc-200 mb-2">What's your availability?</h3>
							<p className="text-zinc-400 text-sm">
								Currently accepting projects starting from November 2025. For urgent needs, let's discuss.
							</p>
						</div>
					</Card>
				</div>
			</div>

			{/* Final CTA */}
			<div className="mt-16 text-center">
				<Card>
					<div className="p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6">Ready to Get Started?</h2>
						<p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
							When you reach out, please include: brief description of your project/opportunity,
							timeline and budget (if applicable), and why you think we'd be a good fit.
						</p>
						<p className="text-sm text-zinc-500 mb-6">
							Response time: I aim to respond to all inquiries within 48 hours.
						</p>
						<Link
							href="mailto:info@spcstech.com"
							className="inline-block px-8 py-4 text-base font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
						>
							Send Me an Email
						</Link>
					</div>
				</Card>
			</div>

			{/* Closing Quote */}
			<div className="mt-16 text-center max-w-3xl mx-auto">
				<p className="text-xl text-zinc-400 mb-4 italic">
					"If it doesn't sell, it isn't creative."<br />
					<span className="text-sm text-zinc-500">— David Ogilvy</span>
				</p>
				<p className="text-lg text-zinc-300 mt-6">
					I say: "If it doesn't work, it isn't technology."
				</p>
				<p className="text-zinc-400 mt-4">
					If that's what you need, let's talk.
				</p>
			</div>
		</div>
	);
}
