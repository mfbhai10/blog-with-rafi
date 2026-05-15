import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import TopicPill from "@/components/TopicPill";
import VideoCard from "@/components/VideoCard";

// Sample data - will be replaced with dynamic data from MDX later
const sampleBlogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js App Router",
    excerpt:
      "Learn how to build modern React applications with Next.js App Router, including routing, layouts, and server components.",
    date: "May 10, 2026",
    readTime: "8 min read",
    topic: "Next.js",
  },
  {
    id: 2,
    title: "React Hooks Deep Dive: useEffect and useContext",
    excerpt:
      "Understand the fundamentals of React hooks and how to manage side effects and global state in your applications.",
    date: "May 5, 2026",
    readTime: "12 min read",
    topic: "React",
  },
  {
    id: 3,
    title: "JavaScript Async/Await Patterns You Should Know",
    excerpt:
      "Master asynchronous JavaScript with practical examples and patterns for handling promises and errors gracefully.",
    date: "April 28, 2026",
    readTime: "10 min read",
    topic: "JavaScript",
  },
];

const topics = [
  { name: "React", count: 12 },
  { name: "Next.js", count: 8 },
  { name: "JavaScript", count: 15 },
  { name: "TypeScript", count: 6 },
  { name: "Web Development", count: 10 },
  { name: "AI & ML", count: 4 },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            Welcome to my dev log
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Rafi.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            I write beginner-friendly notes about web development, AI lab
            projects, coding mistakes, and everything I learn while becoming a
            better developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:text-base"
            >
              Read Dev Logs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 sm:px-6 sm:text-base"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Dev Logs Section */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Latest Dev Logs"
            description="Fresh insights from my learning journey"
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
              View All Dev Logs →
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Topics Section */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Browse by Topics"
            description="Find content that interests you"
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

      {/* Video Learning Section */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Video Learning"
            description="Visual tutorials and live coding sessions"
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-100 px-6 py-12 text-center sm:px-8 sm:py-16">
            <div className="mb-4 text-4xl">🎥</div>
            <p className="mx-auto mb-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Video content coming soon. Check back for tutorials and live
              coding sessions!
            </p>
            <Link
              href="/videos"
              className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
            >
              Visit Videos Page →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="bg-slate-900 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Check Out My Portfolio
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            See what I&apos;ve built and the projects I&apos;ve worked on
          </p>
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:text-base"
          >
            View My Portfolio
          </a>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              About Me
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              I&apos;m a Computer Science student passionate about web
              development and AI. I learn by building projects and documenting
              my journey. This blog is my way of sharing knowledge, helping
              others, and reinforcing what I&apos;ve learned. When I&apos;m not
              coding, I enjoy exploring new technologies and solving complex
              problems.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
            >
              Read More About Me →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
