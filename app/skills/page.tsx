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
										<li>• Python-based data processing pipelines</li>
										<li>• AI tools for internal advisory practice development</li>
										<li>• Automation scripts for workflow improvements</li>
										<li>• Data analysis and visualization tools</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> Developed AI advisory practice at Andersen, published newsletter articles on AI implementation
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
										<li>• React web applications and interfaces</li>
										<li>• ERP customizations with Python and XML (Odoo)</li>
										<li>• Website performance optimization</li>
										<li>• Custom integration scripts between systems</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> Company website optimization, Odoo ERP customizations, system integrations at Andersen
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
										<li>• Custom Odoo ERP workflows and automations</li>
										<li>• QuickBooks to Odoo integration system</li>
										<li>• SharePoint restructuring and optimization</li>
										<li>• PowerAutomate workflow automations</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> ERP integration projects, M365 administration, system automation at Andersen
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
										<li>• Network infrastructure maintenance and upgrades</li>
										<li>• Multi-Factor Authentication deployment</li>
										<li>• Security policy configuration</li>
										<li>• Backup and disaster recovery procedures</li>
										<li>• Phishing prevention and incident response</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> IT infrastructure management at Andersen, cybersecurity implementations, ongoing network administration
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
										<span className="font-semibold text-zinc-300">Proof:</span> AI advisory practice development at Andersen, business analysis work, system requirements gathering
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
										<span className="font-semibold text-zinc-300">Proof:</span> Rwanda's Tech Insider newsletter (7 editions), 49 Kit broadcasts, published LinkedIn articles
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
									<h3 className="text-xl font-semibold text-zinc-200 mb-4">What I've Done</h3>
									<ul className="space-y-2 text-zinc-400">
										<li>• Social media campaign management</li>
										<li>• Content creation and publishing</li>
										<li>• Newsletter publishing and distribution</li>
										<li>• Website optimization and maintenance</li>
									</ul>
								</div>
							</div>
							<div className="mt-6 pt-6 border-t border-zinc-700">
								<p className="text-sm text-zinc-500">
									<span className="font-semibold text-zinc-300">Proof:</span> Digital marketing work at Andersen, Rwanda's Tech Insider newsletter, company social media management
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
								Most portfolios list skills without context.<br />
								<span className="text-zinc-100 font-semibold">I show what I've actually built.</span>
							</p>
							<div className="space-y-3 mt-8">
								<p>
									When I say <span className="text-zinc-300 font-semibold">"Python,"</span> I don't mean I took a course.<br />
									I mean I built ERP integrations and automation tools used daily.
								</p>
								<p>
									When I say <span className="text-zinc-300 font-semibold">"IT infrastructure,"</span> I don't mean I set up a home network.<br />
									I mean I manage systems that businesses depend on every day.
								</p>
								<p>
									When I say <span className="text-zinc-300 font-semibold">"writing,"</span> I don't mean I have a blog.<br />
									I mean I published a newsletter for 7 editions and sent 49 broadcasts to real subscribers.
								</p>
							</div>
							<p className="text-center text-lg font-semibold text-zinc-100 mt-8">
								Real work over credentials.
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


