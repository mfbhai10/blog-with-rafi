import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import BlogFilter from "@/components/BlogFilter";
import { getAllCategories, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Dev Logs | Blog with Rafi",
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
  const categories = getAllCategories();

  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-20 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-surface via-surface-soft/80 to-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Blog archive
              </div>

              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Dev Logs
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                coding শেখার পথে আমার notes, tutorials, আর ছোট ছোট lesson।
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                এই পেজের সব লেখা content/blog থেকে সরাসরি আসে, তাই MDX file
                বদলালে এখানেও আপডেট হয়ে যায়।
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  মোট পোস্ট
                </p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {allPosts.length}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  ক্যাটাগরি
                </p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {categories.length}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  ফোকাস
                </p>
                <p className="mt-2 text-base font-semibold text-primary">
                  সহজ, পরিষ্কার, practical লেখা
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          {allPosts.length > 0 ? (
            <div className="space-y-8">
              <BlogFilter posts={allPosts} categories={categories} />
            </div>
          ) : (
            <div className="rounded-4xl border border-dashed border-border bg-surface-soft py-16 text-center shadow-sm">
              <p className="text-muted">এখনও কোনো পোস্ট পাওয়া যায়নি।</p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  হোমে ফিরে যান
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
