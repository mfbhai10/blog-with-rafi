import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-b from-slate-50 to-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Dev Logs"
            description="Notes, tutorials, and lessons from my coding journey."
          />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Every post here is pulled directly from content/blog so the page
            stays in sync with the MDX source.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {allPosts.length > 0 ? (
            <>
              <p className="mb-8 text-sm text-slate-600">
                Showing {allPosts.length} posts
              </p>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {allPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    date={formatDate(post.date)}
                    readingTime={post.readingTime}
                    href={`/blog/${post.slug}`}
                    tags={post.tags}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <p className="text-slate-600">No posts found yet.</p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Back to home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-slate-600">
            More posts will appear here automatically as you add MDX files to
            content/blog.
          </p>
        </div>
      </section>
    </div>
  );
}
