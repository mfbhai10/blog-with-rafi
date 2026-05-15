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
  "Coding note",
  "AI lab work",
  "Web development tutorial",
  "Project",
  "Learning journey update",
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            আমার সম্পর্কে
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            হাই, আমি রাফি।
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            আমি United International University-এর Computer Science and
            Engineering student। এই blog আমার personal dev log।
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <SectionTitle
              title="পরিচিতি"
              description="আমি কে আর এই site টা কী জন্য, তার ছোট পরিচয়।"
            />
            <p className="text-base leading-7 text-slate-600">
              আমি রাফি। United International University-এর Computer Science and
              Engineering student হিসেবে web development, full-stack
              development, AI, আর software engineering শিখছি। এই space-এ আমি যা
              শিখছি, যা বানাচ্ছি, আর developer হিসেবে কীভাবে grow করছি, তা লিখে
              রাখি।
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 shadow-sm">
            <SectionTitle
              title="আমার লক্ষ্য"
              description="এই blog-টাকে আমি কী বানাতে চাই।"
            />
            <p className="text-base leading-7 text-slate-300">
              আমার লক্ষ্য হলো নিয়মিত practice করে আরও ভালো হওয়া, useful note
              শেয়ার করা, আর web development, AI, software engineering-এ আমার
              progress-এর একটা record রাখা।
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Dev Log পড়ুন
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-800"
              >
                ভিডিও দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="আমি কী শিখছি"
            description="Developer হিসেবে grow করার জন্য যেগুলোতে focus করছি।"
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
            title="আমি কী লিখি"
            description="যে বিষয়গুলোকে note, tutorial, আর learning log-এ বদলে দিই।"
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
