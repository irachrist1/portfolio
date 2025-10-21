import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

export const dynamic = "force-static";

export default function SkillsPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-16 max-w-6xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
				{/* Hero Section */}
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
						Skills & Expertise
					</h1>
					<p className="text-xl text-zinc-400 mb-4">
						What I Can Actually Do (With Proof)
					</p>
					<p className="text-base text-zinc-500">
						Every skill listed here is backed by real projects and measurable outcomes.
					</p>
				</div>

				{/* AI & Machine Learning */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">AI & Machine Learning</h2>
					<Card>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I Know</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Python (LangChain, NumPy, Pandas)</li>
										<li>• Retrieval-Augmented Generation (RAG) architecture</li>
										<li>• Vector databases (for semantic search)</li>
										<li>• Natural Language Processing</li>
										<li>• Model evaluation and accuracy testing</li>
										<li>• FastAPI for AI system backends</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I've Built</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• AI-powered intelligence platform (90% accuracy)</li>
										<li>• Custom RAG systems for document querying</li>
										<li>• AI readiness assessment tools</li>
										<li>• Automated content processing pipelines</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> NISR project, AI consulting tools, published implementation guides
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* Full-Stack Development */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Full-Stack Development</h2>
					<Card>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I Know</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Frontend: React, JavaScript, TypeScript, HTML, CSS</li>
										<li>• Backend: Python, FastAPI, SQL</li>
										<li>• Databases: PostgreSQL, Vector databases</li>
										<li>• Web Performance: Optimization, lazy loading, caching</li>
										<li>• API Design: RESTful architecture, documentation</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I've Built</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• React interfaces for AI platforms</li>
										<li>• ERP customizations with Python and XML</li>
										<li>• Website performance improvements (25% faster)</li>
										<li>• Custom dashboards for business metrics</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> NISR frontend, company website optimization, Odoo customizations
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* Enterprise Systems */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Enterprise Systems</h2>
					<Card>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I Know</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Odoo ERP (module development, workflow automation)</li>
										<li>• Microsoft 365 (Administration, SharePoint, Security)</li>
										<li>• System Integration (APIs, data pipelines)</li>
										<li>• Workflow Automation (eliminating repetitive tasks)</li>
										<li>• Business Process Optimization</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I've Built</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Custom ERP workflows (40% faster approvals)</li>
										<li>• Automated financial reporting (10+ hours saved monthly)</li>
										<li>• SharePoint restructuring (60% better findability)</li>
										<li>• User provisioning systems</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> Odoo customizations, M365 optimization, documented time savings
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* Infrastructure & Security */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Infrastructure & Security</h2>
					<Card>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I Know</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Network Administration (topology, switches, firewalls)</li>
										<li>• Cybersecurity (IDS, vulnerability assessment, incident response)</li>
										<li>• Access Management (MFA, conditional access policies)</li>
										<li>• Backup & Disaster Recovery</li>
										<li>• System Monitoring and Performance Analysis</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I've Implemented</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Zero-downtime infrastructure upgrades</li>
										<li>• MFA with 100% adoption rate</li>
										<li>• Intrusion Detection Systems</li>
										<li>• Disaster recovery plans (4-hour RTO)</li>
										<li>• Phishing prevention and response</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> 50+ employees secured, 99.9% uptime, zero breaches
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* Business & Consulting Skills */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Business & Consulting</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-zinc-200 mb-4">Strategy & Analysis</h3>
								<ul className="space-y-2 text-zinc-400 text-sm">
									<li>• AI readiness assessments</li>
									<li>• Business process mapping and optimization</li>
									<li>• ROI modeling and financial analysis</li>
									<li>• Requirements gathering from stakeholders</li>
									<li>• Phased implementation roadmaps</li>
								</ul>
								<div className="mt-4 pt-4 border-t border-zinc-700">
									<p className="text-xs text-zinc-500">
										<span className="font-semibold text-zinc-300">Proof:</span> $120K in generated leads, client workshops, published ROI frameworks
									</p>
								</div>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-zinc-200 mb-4">Communication & Content</h3>
								<ul className="space-y-2 text-zinc-400 text-sm">
									<li>• Technical writing for business audiences</li>
									<li>• Thought leadership content</li>
									<li>• Training and presentation delivery</li>
									<li>• Workshop facilitation</li>
									<li>• Stakeholder communication</li>
								</ul>
								<div className="mt-4 pt-4 border-t border-zinc-700">
									<p className="text-xs text-zinc-500">
										<span className="font-semibold text-zinc-300">Proof:</span> Published articles (1,500+ views), trained employees, workshop conversions
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>

				{/* Marketing & Operations */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Marketing & Operations</h2>
					<Card>
						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I Do</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Digital marketing campaign management</li>
										<li>• Content strategy and calendar planning</li>
										<li>• Social media marketing (LinkedIn focus)</li>
										<li>• Website optimization for conversion</li>
										<li>• Lead generation and qualification</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">Campaigns I've Run</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• LinkedIn ads (15% conversion rate)</li>
										<li>• Content marketing (50+ newsletter signups)</li>
										<li>• Social media strategy (2K+ impressions)</li>
										<li>• Website performance optimization</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> Measurable conversion rates, documented engagement metrics
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* The Difference */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">The Difference</h2>
						<div className="space-y-4 text-zinc-400 leading-relaxed max-w-3xl mx-auto">
							<p className="text-center text-lg">
								Most portfolios list skills without proof.<br />
								<span className="text-zinc-100 font-semibold">I list proof without needing to list skills.</span>
							</p>
							<div className="space-y-3 mt-8">
								<p>
									When I say <span className="text-zinc-300 font-semibold">"Python,"</span> I don't mean I took a course.<br />
									I mean I built an AI platform that government officials use.
								</p>
								<p>
									When I say <span className="text-zinc-300 font-semibold">"consulting,"</span> I don't mean I gave advice.<br />
									I mean I generated $120,000 in qualified business.
								</p>
								<p>
									When I say <span className="text-zinc-300 font-semibold">"cybersecurity,"</span> I don't mean I read about best practices.<br />
									I mean I prevented an actual breach and secured 50 employees.
								</p>
							</div>
							<p className="text-center text-lg font-semibold text-zinc-100 mt-8">
								That's the difference: Facts, not fluff.
							</p>
						</div>
					</div>
				</Card>

				{/* Certifications & Learning */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Professional Development</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-zinc-200 mb-4">Completed Courses</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• Python for Data Analysis (Coursera)</li>
									<li>• LangChain Fundamentals</li>
									<li>• AWS Cloud Practitioner</li>
									<li>• Enterprise AI Architecture (AWS Webinar)</li>
								</ul>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-zinc-200 mb-4">Skills Mastered During Term</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• AI/ML implementation (LangChain, RAG systems)</li>
									<li>• React frontend development</li>
									<li>• Odoo ERP customization</li>
									<li>• Cybersecurity incident response</li>
									<li>• Workshop facilitation</li>
									<li>• Technical proposal writing</li>
								</ul>
							</div>
						</Card>
					</div>
				</div>

				{/* CTA */}
				<div className="text-center pt-8">
					<p className="text-zinc-400 mb-6">
						Want to see these skills in action?
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link
							href="/projects"
							className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
						>
							View My Projects
						</Link>
						<Link
							href="/contact"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							Work Together
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


