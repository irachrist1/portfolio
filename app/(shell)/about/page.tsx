import { Card } from "../../components/card";
import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="px-6 py-10 mx-auto space-y-16 max-w-4xl lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-8">
          About Me
        </h1>

        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            I've long been fascinated by how AI can be used to solve real business problems by changing how you use tools and which strategies and frameworks you adopt.
          </p>
          <p>
            That's what I'm trying to do at <span className="text-zinc-100 font-semibold">Andersen in Rwanda</span>, where I'm building out our AI Advisory practice. We help companies figure out if they're ready for AI, then build the actual frameworks and tools to help them get there faster - everything from automating research to creating market intelligence systems.
          </p>
          <p>
            In my free time, I'm trying to solve the education problem around how schools, mentors and students approach mentoring. Career choice is something that every student and graduate faces and many wonder how do I choose a career that is both fulfilling and societally transformational that will truly make an impact in my lifetime and I think it's something worth spending time on to try and help students make such choices.
          </p>
          <p>
            Other than that, I like podcasts and listen to at least 1.5 audiobooks per week.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Currently Working On</h2>
            <div className="space-y-4 text-zinc-300">
              <div>
                <p className="font-semibold text-zinc-200 mb-2">At Andersen Rwanda:</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• AI Implementation for businesses and Technology advisory</li>
                  <li>• Internal development of AI agents</li>
                  <li>• Building automation tools for faster citable research, compliance, and market analysis</li>
                  <li>• ERP management with Odoo and Microsoft 365 administration</li>
                </ul>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-zinc-200 mb-2">Personal Projects:</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Spark - Career mentoring tools to help students make better career choices</li>
                  <li>• Rwanda's first AI-powered government intelligence platform (NISR Hackathon)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg text-zinc-200 font-semibold">BSc Software Engineering</p>
                <p className="text-zinc-400">African Leadership University (ALU), Kigali</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">What I Listen To</h2>
          <p className="text-zinc-300 mb-4">
            Regular listener of audiobooks and podcasts like <span className="text-zinc-100">Acquired</span> and <span className="text-zinc-100">Founders</span>.
          </p>
          <p className="text-zinc-400 text-sm">
            ~1.5 audiobooks per week on business, technology, and founder stories.
          </p>
        </div>
      </Card>

      <div className="pt-8">
        <Link
          href="/contact"
          className="inline-block px-8 py-4 text-base font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
