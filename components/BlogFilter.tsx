"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";

type PostPreview = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
};

interface BlogFilterProps {
  posts: PostPreview[];
  categories: string[];
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [selected, setSelected] = useState<string>("All");

  const filtered = useMemo(() => {
    if (selected === "All") return posts;
    return posts.filter((p) => p.category === selected);
  }, [selected, posts]);

  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-border bg-surface px-5 py-6 shadow-sm sm:px-6 sm:py-7">
        <SectionTitle
          title="ক্যাটাগরি"
          description="নীচ থেকে একটা ক্যাটাগরি সিলেক্ট করে পোস্ট ফিল্টার করুন।"
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            aria-pressed={selected === "All"}
            onClick={() => setSelected("All")}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selected === "All"
                ? "bg-accent text-white border border-accent"
                : "border border-border bg-surface-soft text-primary hover:bg-accent-soft hover:text-accent"
            }`}
          >
            সকল
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              aria-pressed={selected === cat}
              onClick={() => setSelected(cat)}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                selected === cat
                  ? "bg-accent text-white border border-accent"
                  : "border border-border bg-surface-soft text-primary hover:bg-accent-soft hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                category={post.category}
                date={post.date}
                readingTime={post.readingTime}
                href={`/blog/${post.slug}`}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-4xl border border-dashed border-border bg-surface-soft py-12 text-center">
            <p className="text-muted">এই ক্যাটাগরিতে কোনো পোস্ট পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
}
