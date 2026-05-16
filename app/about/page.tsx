import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "আমার সম্পর্কে | Blog with Rafi",
  description:
    "রাফি, United International University-এর Computer Science and Engineering student, web development, AI, আর software engineering শেখার journey শেয়ার করে।",
};

const learningAreas = [
  "Web development",
  "Frontend development",
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-surface via-surface-soft/80 to-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                আমার সম্পর্কে
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                হাই, আমি রাফি।
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                আমি United International University-এর Computer Science and
                Engineering student। এই blog আমার personal dev log।
              </p>
            </div>
          </div>
  "Next.js",
  "Python",
  "Django",
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-4xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
  "Coding note",
              title="আমি কে"
              description="আমি কে আর এই space টা কী জন্য, তার ছোট পরিচয়।"
  "Project",
            <p className="text-sm leading-7 text-muted sm:text-base">
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
          <div className="rounded-4xl border border-border bg-surface-soft p-6 shadow-sm sm:p-8 lg:p-10">
          </p>
              title="আমি কী শিখছি"
              description="Developer হিসেবে grow করার জন্য যেগুলোতে focus করছি।"
          </h1>
            <div className="grid gap-3 sm:grid-cols-2">
              {learningAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <p className="text-sm font-semibold text-primary">{area}</p>
                </div>
              ))}
              শিখছি, যা বানাচ্ছি, আর developer হিসেবে কীভাবে grow করছি, তা লিখে
              রাখি।
            </p>
          </div>

      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
              title="আমার লক্ষ্য"
            title="আমি কী লিখি"
            description="যে বিষয়গুলোকে note, tutorial, আর learning log-এ বদলে দিই।"
            <p className="text-base leading-7 text-slate-300">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {writingTopics.map((topic) => (
              progress-এর একটা record রাখা।
                key={topic}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              <Link
                <p className="text-sm font-semibold text-primary sm:text-base">
                  {topic}
                </p>
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Dev Log পড়ুন
              </Link>
              <Link
                href="/videos"
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
                ভিডিও দেখুন
            title="আমার tech stack"
            description="শেখা আর বানানোর সময় আমি যে tools আর technologies ব্যবহার করি।"
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech) => (

                key={tech}
                className="rounded-full border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft"
          <SectionTitle
                {tech}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
      <section className="bg-surface-soft px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
            ))}
            title="আমার লক্ষ্য"
            description="এই blog-টাকে আমি কী বানাতে চাই।"
      </section>
          <div className="rounded-4xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
              আমার লক্ষ্য হলো নিয়মিত practice করে আরও ভালো হওয়া, useful note
              শেয়ার করা, আর web development, AI, software engineering-এ আমার
              progress-এর একটা record রাখা।
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "নিয়মিত practice",
                "Useful note",
                "Project progress",
              ].map((goal) => (
                <div
                  key={goal}
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-primary"
                >
                  {goal}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                Dev Log পড়ুন
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft"
              >
                ভিডিও দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-surface-soft p-6 shadow-sm sm:p-8 lg:p-10">
            <SectionTitle
              title="আমার লক্ষ্য"
              description="আমি public-এ শেখা চালিয়ে যেতে চাই, useful project বানাতে চাই।"
            />
            <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
              আমি public-এ শেখা চালিয়ে যেতে চাই, useful project বানাতে চাই, আর
              পথে পাওয়া lesson গুলো শেয়ার করতে চাই। এই blog-এ আমি সেই note গুলো
              গুছিয়ে রাখি, যাতে সেগুলো আমার জন্য আর একই পথে হাঁটা অন্যদের জন্যও
              কাজে লাগে।
            </p>
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="বর্তমান tech stack"
            description="শেখা আর বানানোর সময় আমি যে tools আর technologies ব্যবহার করি।"
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
              আমার লক্ষ্য
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              আমি public-এ শেখা চালিয়ে যেতে চাই, useful project বানাতে চাই, আর
              পথে পাওয়া lesson গুলো শেয়ার করতে চাই। এই blog-এ আমি সেই note গুলো
              গুছিয়ে রাখি, যাতে সেগুলো আমার জন্য আর একই পথে হাঁটা অন্যদের জন্যও
              কাজে লাগে।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
