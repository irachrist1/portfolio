import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { MobileMenu } from "./components/mobile-menu";

export const dynamic = "force-static";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Changelog", href: "/changelog" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Writing", href: "/writing" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Mobile hamburger menu - only visible on mobile */}
      <MobileMenu />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Desktop inline navigation - hidden on mobile */}
      <nav className="my-16 animate-fade-in hidden md:block">
        <ul className="flex items-center justify-center gap-8">
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

      {/* Mobile spacer */}
      <div className="h-16 md:hidden" />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="z-10 max-w-4xl mx-auto text-center my-16 animate-fade-in px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-6">
          Christian Tonny
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-300 mb-8">
          Building AI solutions for businesses
        </p>
        <p className="text-lg text-zinc-400 mb-4">
          Software Engineering @ALU
        </p>
        <p className="text-base text-zinc-500 max-w-2xl mx-auto">
          Digital Operations at Andersen Rwanda | Building automation tools for research, compliance, and market analysis
        </p>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-16 animate-fade-in flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
