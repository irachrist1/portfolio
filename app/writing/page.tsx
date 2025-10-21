import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const articles = [
	{
		title: "The State of AI in 2025",
		description: "Market overview cutting through both AI hype and fear-mongering with real analysis.",
		topics: [
			"Current state of AI adoption across sectors",
			"Real business applications with measurable ROI",
			"Common failure points in AI implementation",
			"Predictions for the next 12 months",
			"Specific technologies worth watching"
		],
		reception: "First article published to firm's website and LinkedIn. Set the foundation for the series.",
		views: "Part of 1,500+ total series views"
	},
	{
		title: "AI Adoption Across Sectors",
		description: "Different industries need different AI approaches. Here's the breakdown.",
		topics: [
			"Manufacturing: Predictive maintenance and quality control",
			"Finance: Fraud detection and risk assessment",
			"Healthcare: Diagnostic support and patient triage",
			"Retail: Personalization and inventory optimization",
			"Government: Policy analysis and service delivery"
		],
		reception: "200+ views in first week. Demonstrated sector-specific expertise.",
		views: "200+ views in first week"
	},
	{
		title: "Getting Started with AI: A Practical Guide for SMEs",
		description: "Most AI resources target enterprises. SMEs need different advice.",
		topics: [
			"How to assess if you're ready for AI",
			"Starting with narrow use cases, not broad transformation",
			"Build vs. buy decisions for smaller budgets",
			"Finding and evaluating AI vendors",
			"Measuring success in the first 90 days"
		],
		reception: "Most-shared article in the series. Hit a nerve with SME owners.",
		views: "Most-shared in series"
	},
	{
		title: "Measuring AI ROI: Metrics That Matter for African Businesses",
		description: "Standard AI ROI metrics assume American/European contexts. Africa is different.",
		topics: [
			"Why traditional ROI calculations miss the mark in Africa",
			"Metrics that account for infrastructure constraints",
			"Calculating value in time savings, not just revenue",
			"How to present AI ROI to skeptical stakeholders",
			"Real examples from African implementations"
		],
		reception: "Shared by 15+ industry leaders on LinkedIn. Cited in local tech discussions.",
		views: "Shared by 15+ industry leaders"
	},
	{
		title: "Building Your First AI: A Step-by-Step Implementation Guide",
		description: "Stop talking about AI. Start building it.",
		topics: [
			"Choosing your first AI project (with decision framework)",
			"Setting up your technical environment",
			"Working with LangChain and open-source models",
			"Building a basic RAG system",
			"Testing, iterating, and improving accuracy",
			"Moving from prototype to production"
		],
		reception: "Completed the series with strong engagement. 50+ newsletter signups requesting more content.",
		views: "50+ newsletter signups"
	}
];

export const dynamic = "force-static";

export default function WritingPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-16 max-w-5xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
				{/* Hero Section */}
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
						Thought Leadership
					</h1>
					<p className="text-xl text-zinc-400 mb-4">
						The Articles That Built Authority
					</p>
					<p className="text-base text-zinc-500">
						Technical content that builds trust, demonstrates expertise, and generates business.
					</p>
				</div>

				{/* Series Overview */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6 text-center">
							The AI Implementation Series
						</h2>
						<p className="text-zinc-400 text-center mb-8">
							Published on Company Blog & LinkedIn | September-October 2025
						</p>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">Quantitative Results</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• 1,500+ total views across all articles</li>
									<li>• 50+ newsletter signups</li>
									<li>• 150+ social media engagements</li>
									<li>• Shared by 15+ industry leaders</li>
									<li>• 2K+ social media impressions from related posts</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-zinc-200 mb-4">Qualitative Results</h3>
								<ul className="space-y-2 text-zinc-400">
									<li>• Positioned Andersen as AI thought leader in Rwanda</li>
									<li>• Generated inbound inquiries for consulting services</li>
									<li>• Built credibility for client workshops</li>
									<li>• Created reusable content for sales process</li>
									<li>• Demonstrated expertise to prospective employers</li>
								</ul>
							</div>
						</div>
					</div>
				</Card>

				{/* Articles */}
				<div className="space-y-8">
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Published Articles</h2>
					{articles.map((article, index) => (
						<Card key={index}>
							<div className="p-6 md:p-8">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-2xl font-bold text-zinc-100 mb-2">
											{index + 1}. {article.title}
										</h3>
										<p className="text-zinc-400 italic">{article.description}</p>
									</div>
								</div>
								
								<div className="space-y-4 mt-6">
									<div>
										<h4 className="text-sm font-semibold text-zinc-300 mb-2">What I Covered:</h4>
										<ul className="space-y-1 text-sm text-zinc-400">
											{article.topics.map((topic, i) => (
												<li key={i}>• {topic}</li>
											))}
										</ul>
									</div>
									
									<div className="pt-4 border-t border-zinc-700">
										<p className="text-sm text-zinc-500">
											<span className="font-semibold text-zinc-300">Reception:</span> {article.reception}
										</p>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Why It Worked */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Why This Content Works</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">1. Experience, Not Theory</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									Every article referenced real projects I'd worked on. No generic advice.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">2. African Context</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									Most AI content assumes unlimited bandwidth and large budgets. I wrote for the reality of African businesses.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">3. Specificity</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									Not "AI can help your business." Instead: "Here's exactly how to build a RAG system."
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">4. Addressed Skepticism</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									AI hype is everywhere. I acknowledged the failures and gave honest assessments.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">5. Actionable Steps</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									Each article ended with concrete next steps readers could take immediately.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<h3 className="text-lg font-bold text-zinc-100 mb-3">6. Respected the Audience</h3>
								<p className="text-zinc-400 text-sm leading-relaxed">
									Didn't dumb down AI. Made it accessible through clear explanation and real examples.
								</p>
							</div>
						</Card>
					</div>
				</div>

				{/* The Ogilvy Connection */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6 text-center">
							The Ogilvy Connection
						</h2>
						<div className="max-w-3xl mx-auto space-y-4 text-zinc-400">
							<p className="text-center text-lg italic">
								"The consumer is not a moron. She's your wife."<br />
								<span className="text-sm text-zinc-500">— David Ogilvy</span>
							</p>
							<p className="text-center">
								Translation: Don't talk down to your audience. Give them the full story.
							</p>
							<p className="text-center text-zinc-300">
								That's what I did. I didn't dumb down AI. I made it accessible through clear explanation, 
								real examples, and honest assessment.
							</p>
							<p className="text-center font-semibold text-zinc-100 text-lg mt-6">
								The result? Content that builds trust, demonstrates expertise, and generates business.
							</p>
						</div>
					</div>
				</Card>

				{/* Writing Philosophy */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8 text-center">My Writing Philosophy</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<Card>
							<div className="p-6 text-center">
								<div className="text-4xl mb-4">📊</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-3">Data-Driven</h3>
								<p className="text-zinc-400 text-sm">
									Every claim backed by numbers. Every argument supported by evidence.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6 text-center">
								<div className="text-4xl mb-4">🎯</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-3">Practical</h3>
								<p className="text-zinc-400 text-sm">
									No theory without application. Readers leave with actions to take.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6 text-center">
								<div className="text-4xl mb-4">🌍</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-3">Contextual</h3>
								<p className="text-zinc-400 text-sm">
									Written for African businesses facing real constraints and opportunities.
								</p>
							</div>
						</Card>
					</div>
				</div>

				{/* Impact Summary */}
				<Card>
					<div className="p-8 md:p-12 text-center">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6">
							From Writing to Business Impact
						</h2>
						<p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
							This content series didn't just generate views. It generated qualified business opportunities, 
							positioned the firm as a thought leader, and created reusable assets for the sales process.
						</p>
						<div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
							<div>
								<p className="text-3xl font-bold text-zinc-100 mb-2">$120K</p>
								<p className="text-sm text-zinc-500">In Qualified Leads</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-zinc-100 mb-2">15%</p>
								<p className="text-sm text-zinc-500">Conversion Rate</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-zinc-100 mb-2">15+</p>
								<p className="text-sm text-zinc-500">Industry Leaders Sharing</p>
							</div>
						</div>
						<p className="text-zinc-300 mt-8 italic">
							This is what happens when technical expertise meets business communication skills.
						</p>
					</div>
				</Card>

				{/* CTA */}
				<div className="text-center pt-8">
					<p className="text-zinc-400 mb-6">
						Want similar thought leadership for your organization?
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link
							href="/contact"
							className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
						>
							Let's Discuss
						</Link>
						<Link
							href="/projects/ai-consulting"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							See Full AI Consulting Case Study
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


