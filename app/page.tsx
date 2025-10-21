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
        
        <div className="z-10 max-w-5xl mx-auto text-center mt-8 mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-100 leading-tight mb-6 px-4">
            At 22, I Built Rwanda's First AI-Powered Government Intelligence Platform. Then I Generated $120,000 in New Business.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            Software Engineer | AI Implementation Consultant | Digital Operations Specialist
          </p>
          <p className="text-base md:text-lg text-zinc-500 italic">
            Where Technical Excellence Meets Measurable Business Impact
          </p>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        <div className="my-16 max-w-3xl mx-auto text-center animate-fade-in px-6">
          <p className="text-lg text-zinc-400 leading-relaxed mb-8">
            Most software engineers can write code. Some can ship products. Few can prove their work makes money.
          </p>
          <p className="text-lg text-zinc-100 font-semibold mb-8">
            I'm one of the few.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
            >
              Read About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 text-center mb-12">
            Impact By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-zinc-100 mb-2">$120K</p>
                <p className="text-sm text-zinc-400">Qualified Leads Generated</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-zinc-100 mb-2">90%</p>
                <p className="text-sm text-zinc-400">AI Platform Accuracy</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-zinc-100 mb-2">50+</p>
                <p className="text-sm text-zinc-400">Employees Secured</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <p className="text-4xl font-bold text-zinc-100 mb-2">1,500+</p>
                <p className="text-sm text-zinc-400">Article Views</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
              Featured Work
            </h2>
            <Link
              href="/projects"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
            >
              View All Projects &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Link href="/projects/nisr-ai-platform" className="block p-6 group">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  NISR AI Platform
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Rwanda's first AI-powered government intelligence platform enabling policymakers to query years of data in seconds.
                </p>
                <div className="space-y-2 text-xs text-zinc-500">
                  <p>• 90% accuracy across 50+ datasets</p>
                  <p>• Built with RAG architecture</p>
                  <p>• React + Python + LangChain</p>
                </div>
              </Link>
            </Card>
            
            <Card>
              <Link href="/projects/ai-consulting" className="block p-6 group">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  AI Consulting Practice
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Launched AI advisory service line generating qualified business opportunities through workshops and thought leadership.
                </p>
                <div className="space-y-2 text-xs text-zinc-500">
                  <p>• $120K in qualified leads</p>
                  <p>• 15% conversion rate</p>
                  <p>• 5 published articles</p>
                </div>
              </Link>
            </Card>
            
            <Card>
              <Link href="/projects/enterprise-infrastructure" className="block p-6 group">
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                  Enterprise Infrastructure
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Secured 50+ employees with zero-downtime upgrades, comprehensive cybersecurity, and automated systems.
                </p>
                <div className="space-y-2 text-xs text-zinc-500">
                  <p>• 100% MFA adoption</p>
                  <p>• 99.9% uptime achieved</p>
                  <p>• Zero security breaches</p>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 text-center">
                What Drives Me
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed text-center mb-6">
                Every line of code I write serves a business objective. Every system I build solves a real problem. Every strategy I propose includes measurable ROI.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed text-center">
                I don't just build technology. I build technology that makes money, saves time, and creates competitive advantage. And I do it while maintaining a singular mission: using these skills to bring quality education to rural students across Africa who need it most.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-zinc-100 mb-8">
            Currently
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-400">
            <div>
              <p className="font-semibold text-zinc-300 mb-2">Organization</p>
              <p>Andersen Rwanda</p>
              <p className="text-sm">Digital Operations Associate</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-300 mb-2">Education</p>
              <p>African Leadership University</p>
              <p className="text-sm">Software Engineering</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-300 mb-2">Published</p>
              <p>5 Articles on AI Implementation</p>
              <p className="text-sm">1,500+ Views</p>
            </div>
            <div>
              <p className="font-semibold text-zinc-300 mb-2">Location</p>
              <p>Kigali, Rwanda</p>
              <p className="text-sm">Available for Remote Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Open to: AI consulting projects, software engineering roles, speaking opportunities, and collaborations in educational technology.
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
