import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import TopicPill from "@/components/TopicPill";

const sampleBlogPosts = [
  {
    id: 1,
    title: "Next.js App Router দিয়ে শুরু",
    excerpt:
      "Next.js App Router দিয়ে modern React app বানানোর routing, layout, আর server component basics সহজভাবে বুঝি।",
    date: "2026-05-10",
    readTime: "৮ মিনিট পড়া",
    topic: "Next.js",
  },
  {
    id: 2,
    title: "React Hooks: useEffect আর useContext",
    excerpt:
      "React hooks-এর মূল ধারণা আর side effect, global state manage করার সহজ ব্যাখ্যা।",
    date: "2026-05-05",
    readTime: "১২ মিনিট পড়া",
    topic: "React",
  },
  {
    id: 3,
    title: "JavaScript Async/Await প্যাটার্ন",
    excerpt:
      "Promise আর error handle করার practical pattern দিয়ে asynchronous JavaScript সহজ করি।",
    date: "2026-04-28",
    readTime: "১০ মিনিট পড়া",
    topic: "JavaScript",
  },
];

const topics = [
  { name: "React", count: 12 },
  { name: "Next.js", count: 8 },
  { name: "JavaScript", count: 15 },
  { name: "TypeScript", count: 6 },
  { name: "ওয়েব ডেভেলপমেন্ট", count: 10 },
  { name: "AI & ML", count: 4 },
];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            আমার dev log-এ স্বাগতম
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            হাই, আমি রাফি। আমার dev log-এ স্বাগতম।
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            আমি web development, AI lab project, coding note, আর একজন CSE
            student হিসেবে শেখার journey নিয়ে সহজ ভাষায় লিখি।
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:text-base"
            >
              Dev Log পড়ুন
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 sm:px-6 sm:text-base"
            >
              আমার সম্পর্কে জানুন
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="নতুন dev log"
            description="আমার শেখার journey থেকে নতুন লেখা।"
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {sampleBlogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.excerpt}
                category={post.topic}
                date={post.date}
                readingTime={post.readTime}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
            >
              সব Dev Log দেখুন →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="টপিক অনুযায়ী পড়ুন"
            description="যে বিষয়গুলো তোমার কাজে লাগবে, সেগুলো বেছে নাও।"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <TopicPill
                key={topic.name}
                label={topic.name}
                count={topic.count}
                href={`/blog?topic=${topic.name.toLowerCase()}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="ভিডিও থেকে শেখা"
            description="চোখে দেখা tutorials আর live coding session।"
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-100 px-6 py-12 text-center sm:px-8 sm:py-16">
            <div className="mb-4 text-4xl">🎥</div>
            <p className="mx-auto mb-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              শিগগিরই নতুন video content আসছে। tutorials আর live coding
              session-এর জন্য আবার দেখো!
            </p>
            <Link
              href="/videos"
              className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
            >
              ভিডিও পেজ দেখুন →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            আমার কাজগুলো দেখুন
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            আমি কী কী বানিয়েছি আর কোন project-এ কাজ করেছি, একবার দেখে নাও।
          </p>
          <a
            href="https://mfr-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:text-base"
          >
            পোর্টফোলিও দেখুন
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              রাফি সম্পর্কে
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              আমি web development আর AI নিয়ে আগ্রহী একজন Computer Science
              student। আমি project বানিয়ে শিখি আর সেই journey-টা এখানে লিখে
              রাখি। এই blog আমার personal dev log, যেখানে coding note, project,
              আর শেখার অভিজ্ঞতা শেয়ার করি।
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
            >
              আরও পড়ুন →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
