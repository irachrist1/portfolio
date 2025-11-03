import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
return (
<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
<Navigation />
<div className="px-6 pt-20 mx-auto space-y-16 max-w-5xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
<div className="max-w-3xl mx-auto text-center">
<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
About
</h1>
<p className="text-xl text-zinc-400">
Building things. Writing about technology. Learning by doing.
</p>
</div>

<div className="space-y-8">
<div>
<h2 className="text-3xl font-bold text-zinc-100 mb-6">What I Do Now</h2>
<div className="space-y-6 text-zinc-300 leading-relaxed">
<p>
I work at <span className="text-zinc-100 font-semibold">Andersen in Rwanda</span> as a Digital Operations Associate. My day involves managing IT infrastructure, customizing Odoo ERP systems, handling Microsoft 365 administration, building data analytics dashboards, running digital marketing campaigns, and developing an AI advisory practice.
</p>
<p>
I also co-founded <span className="text-zinc-100 font-semibold">SPCS Tech Solutions</span> to help companies become tech-mature through comprehensive IT support.
</p>
</div>
</div>
</div>

<Card>
<div className="p-8">
<h2 className="text-2xl font-bold text-zinc-100 mb-4">Education</h2>
<div className="space-y-4">
<div>
<p className="text-lg text-zinc-200 font-semibold">BSc Software Engineering</p>
<p className="text-zinc-400">African Leadership University, Kigali</p>
</div>
<div className="mt-6">
<p className="text-lg text-zinc-200 font-semibold">High School</p>
<p className="text-zinc-400">Graduated Bulinga TSS (2023)</p>
</div>
</div>
</div>
</Card>

<div>
<h2 className="text-3xl font-bold text-zinc-100 mb-6">What I Write About</h2>
<div className="space-y-4 text-zinc-300 leading-relaxed">
<p>
I publish a newsletter called Rwanda's Tech Insider covering technology trends, AI breakthroughs, and business insights.
</p>
<div className="pt-4">
<Link href="/writing" className="text-zinc-100 hover:text-white transition-colors">
Read my writing 
</Link>
</div>
</div>
</div>

<div className="text-center pt-8">
<Link href="/contact" className="inline-block px-8 py-4 text-base font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200">
Get In Touch
</Link>
</div>
</div>
</div>
);
}
