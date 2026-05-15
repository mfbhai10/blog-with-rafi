import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About | Blog with Rafi",
  description:
    "Learn more about Rafi, a Computer Science and Engineering student at United International University who shares his learning journey through blog posts and dev logs.",
};

const learningAreas = [
  "Web development",
  "Frontend development",
  "Full-stack development",
  "AI",
  "Software engineering",
];

const techStack = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
];

const writingTopics = [
  "Coding notes",
  "AI lab work",
  "Web development tutorials",
  "Projects",
  "Learning journey updates",
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            About Me
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Hi, I&apos;m Rafi.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m a Computer Science and Engineering student at United
            International University, and this blog is my personal dev log.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <SectionTitle
              title="Intro"
              description="A short introduction to who I am and what this site is for."
            />
            <p className="text-base leading-7 text-slate-600">
              I am Rafi, a Computer Science and Engineering student at United
              International University. I use this space to document what I am
              learning, what I am building, and the ideas that shape my growth
              as a developer.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 shadow-sm">
            <SectionTitle
              title="My goal"
              description="What I want this blog to become over time."
            />
            <p className="text-base leading-7 text-slate-300">
              My goal is to keep improving through consistent practice, share
              useful notes with others, and build a record of my progress in web
              development, AI, and software engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Read Dev Logs
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-800"
              >
                Explore Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="What I am learning"
            description="The areas I focus on as I grow as a developer."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-semibold text-slate-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="What I write about"
            description="Topics I turn into notes, tutorials, and learning logs."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {writingTopics.map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-base font-semibold text-slate-900">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Current tech stack"
            description="Tools and technologies I use while learning and building."
          />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              My goal
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              I want to keep learning in public, build useful projects, and
              share the lessons I pick up along the way. This blog is where I
              collect those notes so they stay useful for me and for anyone else
              following a similar path.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
