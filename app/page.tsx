import Link from "next/link";

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
      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            Welcome to my dev log
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-slate-900">
            Hi, I&apos;m Rafi.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            I write beginner-friendly notes about web development, AI lab
            projects, coding mistakes, and everything I learn while becoming a
            better developer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Read Dev Logs
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Dev Logs Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Latest Dev Logs
            </h2>
            <p className="mt-2 text-slate-600">
              Fresh insights from my learning journey
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {sampleBlogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {post.topic}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Dev Logs →
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Topics Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Browse by Topics
            </h2>
            <p className="mt-2 text-slate-600">
              Find content that interests you
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.name}
                href={`/blog?topic=${topic.name.toLowerCase()}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <span className="font-medium text-slate-900 group-hover:text-blue-600">
                  {topic.name}
                </span>
                <span className="text-sm text-slate-500 group-hover:text-blue-600">
                  {topic.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Learning Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Video Learning
            </h2>
            <p className="mt-2 text-slate-600">
              Visual tutorials and live coding sessions
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-100 px-8 py-16 text-center">
            <div className="mb-4 text-4xl">🎥</div>
            <p className="mb-4 text-slate-600">
              Video content coming soon. Check back for tutorials and live
              coding sessions!
            </p>
            <Link
              href="/videos"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Visit Videos Page →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="bg-slate-900 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Check Out My Portfolio
          </h2>
          <p className="mt-4 text-slate-300">
            See what I&apos;ve built and the projects I&apos;ve worked on
          </p>
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
          >
            View My Portfolio
          </a>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">About Me</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I&apos;m a Computer Science student passionate about web
              development and AI. I learn by building projects and documenting
              my journey. This blog is my way of sharing knowledge, helping
              others, and reinforcing what I&apos;ve learned. When I&apos;m not
              coding, I enjoy exploring new technologies and solving complex
              problems.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Read More About Me →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
