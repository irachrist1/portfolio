import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";

export const dynamic = "force-static";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Writing", href: "/writing" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        <div className="z-10 max-w-4xl mx-auto text-center mt-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-100 leading-tight mb-6 px-4">
            Christian Tonny
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-6 max-w-2xl mx-auto">
            Software Engineer & Writer exploring how AI transforms business
          </p>
          <p className="text-base md:text-lg text-zinc-500">
            Building things. Writing about technology.
          </p>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        {/* Brief About */}
        <div className="my-16 max-w-3xl mx-auto text-center animate-fade-in px-6">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            I work at Andersen in Rwanda managing IT infrastructure, ERP systems, and cybersecurity. I'm also building an AI advisory practice to help businesses implement AI effectively.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Co-founded SPCS Tech Solutions to provide comprehensive IT support to companies becoming tech-mature.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            I write about AI, technology trends, and founder stories. Learning by building.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/writing"
              className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
            >
              Read My Writing
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
            >
              More About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Writing */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
              Featured Writing
            </h2>
            <Link
              href="/writing"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              View All Articles &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Link href="https://www.linkedin.com/pulse/when-everything-automated-christian-tonny-iradukunda-jcpyc/" target="_blank" className="block p-6 group">
                <div className="text-xs text-zinc-500 mb-3">July 15, 2025 • LinkedIn</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  When Everything is Automated
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Exploring the AI browser wars, the agentic era, and how talent wars will reshape the tech industry when automation becomes ubiquitous.
                </p>
              </Link>
            </Card>
            
            <Card>
              <Link href="https://www.linkedin.com/pulse/state-ai-2025-christian-tonny-iradukunda-tzdqc/" target="_blank" className="block p-6 group">
                <div className="text-xs text-zinc-500 mb-3">March 25, 2025 • LinkedIn</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  The State of AI in 2025
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Vibe coding, model breakthroughs, and a practical framework for implementing AI in business. A comprehensive look at where we are.
                </p>
              </Link>
            </Card>
            
            <Card>
              <Link href="https://www.linkedin.com/pulse/12-key-insights-from-psychology-money-christian-tonny-iradukunda-u0bqc/" target="_blank" className="block p-6 group">
                <div className="text-xs text-zinc-500 mb-3">March 18, 2025 • LinkedIn</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  12 Key Insights from The Psychology of Money
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Financial mental models and the power of compounding. Lessons from Morgan Housel's masterpiece on wealth and behavior.
                </p>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent Interests */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 text-center">
            Recent Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-8">
                <p className="font-semibold text-zinc-200 mb-3 text-xl">Books</p>
                <p className="text-zinc-400 leading-relaxed">
                  Founder biographies: Steve Jobs, Bill Gates, Mark Zuckerberg. Understanding how they built products that "feel like magic."
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-8">
                <p className="font-semibold text-zinc-200 mb-3 text-xl">Podcasts</p>
                <p className="text-zinc-400 leading-relaxed">
                  Acquired, Founders. Deep dives into company building, decision-making, and what actually matters in technology.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Interested in AI implementation, technology trends, or just want to chat about building products.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-base font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
