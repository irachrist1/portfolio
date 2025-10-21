import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-16 max-w-5xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
				{/* Hero Section */}
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
						About Me
					</h1>
					<p className="text-xl text-zinc-400">
						Software engineer and AI consultant building technology that serves people who need it most.
					</p>
				</div>

				{/* Who I Work With */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6">
							Who I Work With
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">I'm for organizations that:</h3>
								<ul className="space-y-3 text-zinc-400">
									<li>• Want AI implementation, not AI hype</li>
									<li>• Need technical expertise paired with business acumen</li>
									<li>• Value measurable outcomes over impressive demos</li>
									<li>• Seek consultants who can both strategize and execute</li>
									<li>• Understand that the best technology serves human purposes</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">I'm not for organizations that:</h3>
								<ul className="space-y-3 text-zinc-400">
									<li>• Want someone to just "maintain systems"</li>
									<li>• Prefer theoretical discussions to shipped products</li>
									<li>• Hire for hours logged instead of value created</li>
									<li>• Separate technical work from business strategy</li>
								</ul>
							</div>
						</div>
					</div>
				</Card>

				{/* Origin Story */}
				<div className="space-y-8">
					<div>
						<h2 className="text-3xl font-bold text-zinc-100 mb-6">The Origin Story</h2>
						<div className="space-y-4 text-zinc-400 leading-relaxed">
							<p>
								I grew up watching friends struggle with education.
							</p>
							<p>
								Not because they weren't smart. Not because they didn't work hard. But because they lacked access to the resources that make success possible: reliable internet, quality textbooks, experienced tutors, exam preparation materials.
							</p>
							<p>
								Many of my brightest friends never made it past high school. Not due to lack of potential, but due to lack of access.
							</p>
							<p className="text-zinc-300 font-semibold">
								That's when I decided: If I'm going to build technology, it has to serve people who need it most.
							</p>
						</div>
					</div>

					{/* Education */}
					<Card>
						<div className="p-8">
							<h2 className="text-2xl font-bold text-zinc-100 mb-4">The Education</h2>
							<p className="text-lg text-zinc-300 mb-4">African Leadership University | Software Engineering</p>
							<div className="space-y-4 text-zinc-400 leading-relaxed">
								<p>
									ALU isn't a traditional university. It's designed to create problem-solvers, not just degree-holders.
								</p>
								<p>
									Instead of spending four years in classrooms, we spend terms working on real problems with real organizations.
								</p>
								<p>
									This portfolio represents one term: Seven weeks at Andersen Rwanda, where I wasn't just an intern—I was a full member of the team, shipping products, generating revenue, and solving actual business problems.
								</p>
							</div>
						</div>
					</Card>

					{/* The Unusual Combination */}
					<div>
						<h2 className="text-3xl font-bold text-zinc-100 mb-6">The Unusual Combination</h2>
						<div className="space-y-4 text-zinc-400 leading-relaxed">
							<p>
								Most software engineers can't consult.<br />
								Most consultants can't code.
							</p>
							<p className="text-zinc-300 font-semibold">
								I do both because I've had to.
							</p>
							<p>
								At Andersen Rwanda, I needed to:
							</p>
							<ul className="space-y-2 ml-6">
								<li>• Build an AI platform (software engineering)</li>
								<li>• Sell AI services to clients (consulting)</li>
								<li>• Optimize ERP systems (enterprise software)</li>
								<li>• Secure networks (infrastructure)</li>
								<li>• Create marketing content (digital marketing)</li>
							</ul>
							<p>
								This forced me to develop an unusual skill set: deep technical expertise combined with business acumen.
							</p>
							<div className="space-y-2 text-zinc-300">
								<p>I can explain RAG systems to a CTO.</p>
								<p>I can explain ROI to a CFO.</p>
								<p>I can explain everything to a CEO who doesn't care about the technology, only the results.</p>
							</div>
						</div>
					</div>
				</div>

				{/* The Mission */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">The Mission</h2>
						<p className="text-lg text-zinc-300 mb-6 text-center font-semibold">
							Here's what drives me:
						</p>
						<div className="space-y-4 text-zinc-400 leading-relaxed max-w-3xl mx-auto">
							<p>
								By 2030, I want to have built an offline-capable, exam-focused learning platform that helps rural students across Sub-Saharan Africa pass their national exams.
							</p>
							<p>
								Not just videos and articles—those exist.<br />
								But a complete system that:
							</p>
							<ul className="space-y-2 ml-6">
								<li>• Works without reliable internet</li>
								<li>• Focuses specifically on national exam curricula</li>
								<li>• Connects students with volunteer tutors</li>
								<li>• Provides practice exams and instant feedback</li>
								<li>• Tracks progress and adapts to learning needs</li>
							</ul>
							<p className="text-zinc-300 font-semibold">
								Why exams specifically? Because in most of Africa, your national exam score determines your entire future.
							</p>
							<p>
								One test determines whether you get into university, whether you can pursue your dreams, whether you escape poverty.
							</p>
							<p>
								Rich students have tutors, prep materials, and multiple attempts.<br />
								Poor students have one shot and few resources.
							</p>
							<p className="text-zinc-100 font-bold text-xl text-center mt-6">
								I'm going to change that.
							</p>
						</div>
					</div>
				</Card>

				{/* The Philosophy */}
				<div className="space-y-8">
					<h2 className="text-3xl font-bold text-zinc-100 mb-6">The Philosophy</h2>
					<p className="text-lg text-zinc-300 mb-6">I believe in three things:</p>
					
					<div className="grid md:grid-cols-3 gap-6">
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-bold text-zinc-100 mb-4">1. Technology Should Serve People</h3>
								<p className="text-zinc-400 leading-relaxed">
									The best technology is often invisible. It just works. I don't build AI because it's trendy. I build it because it solves problems.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-bold text-zinc-100 mb-4">2. Business Value Beats Complexity</h3>
								<p className="text-zinc-400 leading-relaxed">
									Any engineer can make something complicated. Great engineers make things simple enough that non-technical people can use them.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-xl font-bold text-zinc-100 mb-4">3. African Problems Need African Solutions</h3>
								<p className="text-zinc-400 leading-relaxed">
									Most technology is built for Silicon Valley. African solutions must account for limited internet, unreliable power, and budget constraints.
								</p>
							</div>
						</Card>
					</div>
				</div>

				{/* The Track Record */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">The Track Record</h2>
					<p className="text-zinc-400 text-center mb-8">In seven weeks at Andersen Rwanda, I:</p>
					
					<div className="grid md:grid-cols-2 gap-8">
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-200 mb-4">Built</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• Rwanda's first AI-powered government intelligence platform</li>
									<li>• AI consulting service line (tools, frameworks, content)</li>
									<li>• Automated financial reporting system</li>
									<li>• Network infrastructure with 99.9% uptime</li>
								</ul>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-200 mb-4">Generated</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• $120,000 in qualified business leads</li>
									<li>• 1,500+ article views</li>
									<li>• 50+ newsletter signups</li>
									<li>• 2,000+ social media impressions</li>
								</ul>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-200 mb-4">Improved</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• Website performance by 25%</li>
									<li>• Approval workflow speed by 40%</li>
									<li>• Document findability by 60%</li>
									<li>• Security posture (100% MFA adoption)</li>
								</ul>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-200 mb-4">Trained</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• 12 employees on new systems</li>
									<li>• 2 junior developers on AI best practices</li>
									<li>• 5 prospective clients on AI strategy</li>
								</ul>
							</div>
						</Card>
					</div>
					<p className="text-zinc-500 text-center mt-8 italic">
						Not bad for a 22-year-old in his first "real" job.
					</p>
				</div>

				{/* Why This Matters to You */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Why This Matters to You</h2>
						
						<div className="space-y-8">
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">If you're hiring, here's what you get:</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>1. <span className="text-zinc-300">Someone who ships</span> - Not just talks about it</li>
									<li>2. <span className="text-zinc-300">Someone who measures</span> - Every project has quantified impact</li>
									<li>3. <span className="text-zinc-300">Someone who sells</span> - Can both build and explain the value</li>
									<li>4. <span className="text-zinc-300">Someone who cares</span> - Driven by mission, not just money</li>
									<li>5. <span className="text-zinc-300">Someone who learns fast</span> - Mastered LangChain, RAG, and AWS in weeks</li>
								</ul>
							</div>
							
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">If you're a potential client, here's what you get:</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>1. <span className="text-zinc-300">Technical depth</span> - I can actually build what I propose</li>
									<li>2. <span className="text-zinc-300">Business focus</span> - I start with your problems, not my solutions</li>
									<li>3. <span className="text-zinc-300">Proven methods</span> - Assessment frameworks tested with real clients</li>
									<li>4. <span className="text-zinc-300">African context</span> - I understand your specific challenges</li>
									<li>5. <span className="text-zinc-300">Clear communication</span> - I explain technology without jargon</li>
								</ul>
							</div>
						</div>
					</div>
				</Card>

				{/* Closing Quote */}
				<div className="text-center py-8">
					<p className="text-xl text-zinc-400 mb-4">
						"I do not regard advertising as entertainment or an art form, but as a medium of information."
					</p>
					<p className="text-sm text-zinc-500">— David Ogilvy</p>
					<p className="text-zinc-300 mt-6">
						I feel the same way about portfolios. This isn't here to entertain you.<br />
						It's here to inform you about what I can do, what I've done, and what I will do.
					</p>
				</div>

				{/* CTA */}
				<div className="text-center">
					<Link
						href="/contact"
						className="inline-block px-8 py-4 text-base font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
					>
						Let's Talk
					</Link>
				</div>
			</div>
		</div>
	);
}


