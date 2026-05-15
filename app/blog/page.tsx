import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ব্লগ | Blog with Rafi",
  description:
    "রাফির dev log, coding note, tutorial, আর শেখার journey-এর লেখা পড়ুন।",
};

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("bn-BD", {
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
            description="coding শেখার পথে আমার notes, tutorials, আর ছোট ছোট lesson।"
          />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            এই পেজের সব লেখা content/blog থেকে সরাসরি আসে, তাই MDX file বদলালে
            এখানেও আপডেট হয়ে যায়।
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {allPosts.length > 0 ? (
            <>
              <p className="mb-8 text-sm text-slate-600">
                {allPosts.length}টি পোস্ট দেখানো হচ্ছে
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
              <p className="text-slate-600">এখনও কোনো পোস্ট পাওয়া যায়নি।</p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  হোমে ফিরে যান
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-slate-600">
            content/blog-এ MDX file যোগ করলেই নতুন পোস্ট এখানে automatically
            দেখাবে।
          </p>
        </div>
      </section>
    </div>
  );
}
