import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import TopicPill from "@/components/TopicPill";
import VideoCard from "@/components/VideoCard";

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

const videoPreviews = [
  {
    title: "HTML & CSS Layouts যা সত্যিই কাজ করে",
    description:
      "responsive layout, spacing system, আর ছোট ছোট CSS decision দিয়ে page কেমন polished হয়, সেটা দেখো।",
    category: "HTML & CSS",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "React Component আর State সহজভাবে",
    description:
      "component thinking, props, state, আর React code maintain করার সহজ pattern।",
    category: "React",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    title: "Beginners-এর জন্য Next.js App Router Basics",
    description:
      "page, layout, আর server component নিয়ে focused guide, যাতে modern Next.js app confidently বানাতে পারো।",
    category: "Next.js",
    youtubeId: "HusT8K5zIJw",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10">
          <div className="relative">
            <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted shadow-sm backdrop-blur">
              Personal Developer Blog
            </div>

            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              হাই, আমি রাফি। আমার dev log-এ স্বাগতম।
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
              আমি web development, AI lab project, coding note, আর একজন CSE
              student হিসেবে শেখার journey নিয়ে সহজ ভাষায় লিখি।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover sm:px-7 sm:text-base"
              >
                ব্লগ পড়ুন
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface/80 px-6 py-3.5 text-sm font-semibold text-primary shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface hover:shadow-md sm:px-7 sm:text-base"
              >
                ভিডিও দেখুন
              </Link>
              <a
                href="https://mfr-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary sm:px-7 sm:text-base"
              >
                পোর্টফোলিও দেখুন
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" />
            <div className="rounded-[1.75rem] border border-border bg-surface/85 p-5 shadow-md backdrop-blur sm:p-6 lg:p-7">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    শেখার সারাংশ
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    আমি যেসব জিনিসে সময় দিচ্ছি, তার ছোট্ট সারাংশ এখানে।
                  </p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Web Development", value: "ফ্রন্টএন্ড, layout, UI" },
                  { label: "AI Lab Notes", value: "পরীক্ষা আর শেখা" },
                  { label: "Learning Videos", value: "সংক্ষিপ্ত explainers" },
                  { label: "Projects", value: "build, ship, improve" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-background/70 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-semibold text-primary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-background via-surface-soft/60 to-background p-6 sm:p-8 lg:p-10">
            <SectionTitle
              title="সর্বশেষ Dev Log"
              description="আমার শেখার journey থেকে সাম্প্রতিক লেখা।"
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

            <div className="mt-8 flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft"
              >
                সব লেখা দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div className="rounded-4xl border border-border bg-surface-soft p-6 sm:p-8 lg:p-10">
              <SectionTitle
                title="বিষয় অনুযায়ী পড়ুন"
                description="যে বিষয়গুলো এখন সবচেয়ে কাজে লাগবে, সেগুলো বেছে নাও।"
              />
              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                প্রতিটি topic-এ ছোট, পরিষ্কার, আর practical লেখা গুছিয়ে রাখা
                আছে, যাতে তুমি নিজের শেখার গতি অনুযায়ী এগোতে পারো।
              </p>
            </div>

            <div className="rounded-4xl border border-border bg-background p-6 sm:p-8 lg:p-10">
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
          </div>
        </div>
      </section>

      <section className="bg-surface-soft px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-background/75 p-6 sm:p-8 lg:p-10">
            <SectionTitle
              title="ভিডিও শেখার ঝলক"
              description="চোখে দেখা tutorials আর live coding session থেকে বাছাই করা কিছু video।"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {videoPreviews.map((video) => (
                <VideoCard
                  key={video.youtubeId}
                  title={video.title}
                  description={video.description}
                  category={video.category}
                  youtubeId={video.youtubeId}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/videos"
                className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft"
              >
                সব ভিডিও দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-primary/10 via-surface to-accent/10 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  Portfolio
                </div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  আমার কাজগুলো দেখে নাও
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  আমি কী কী বানিয়েছি আর কোন project-এ কাজ করেছি, একবার দেখে নাও।
                </p>
                <a
                  href="https://mfr-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  পোর্টফোলিও দেখুন
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  { label: "Frontend", value: "UI, layout, polish" },
                  { label: "Project work", value: "Build, ship, iterate" },
                  { label: "Case studies", value: "Clear process" },
                  { label: "Live demos", value: "Quick preview" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-surface p-4"
                  >
                    <p className="text-sm font-semibold text-primary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] lg:items-start">
            <div className="rounded-4xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
              <SectionTitle
                title="আমার সম্পর্কে"
                description="রাফি কে, আর এই blog-এ কী পাওয়া যাবে।"
              />
              <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
                আমি রাফি। United International University-এর CSE student হিসেবে
                web development, AI, আর software engineering শিখছি। এই space-এ
                আমি যা শিখছি, যা বানাচ্ছি, আর developer হিসেবে কীভাবে grow করছি,
                তা লিখে রাখি।
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center rounded-full border border-border bg-surface-soft px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface"
              >
                আরও পড়ুন
              </Link>
            </div>

            <div className="rounded-4xl border border-border bg-surface-soft p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                আমি যেগুলোতে ফোকাস করছি
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Web development",
                  "Frontend development",
                  "AI",
                  "Project note",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium text-primary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
