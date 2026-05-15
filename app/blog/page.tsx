"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";

// Sample blog data
const allBlogPosts = [
  {
    id: 1,
    title: "How I Started Web Development",
    description:
      "My journey into web development started with curiosity and a desire to build things. In this post, I share the resources that helped me get started and the mistakes I made along the way.",
    category: "Career",
    date: "May 15, 2026",
    readingTime: "6 min read",
    slug: "how-i-started-web-development",
  },
  {
    id: 2,
    title: "Why I Built Blog with Rafi",
    description:
      "Discover why I decided to create this personal blog and what I hope to achieve with it. Learn about my vision for sharing knowledge and documenting my learning journey.",
    category: "Personal",
    date: "May 14, 2026",
    readingTime: "5 min read",
    slug: "why-i-built-blog-with-rafi",
  },
  {
    id: 3,
    title: "My First Next.js Blog Website",
    description:
      "A detailed walkthrough of how I built this blog using Next.js, React, TypeScript, and Tailwind CSS. Includes setup steps, component architecture, and deployment tips.",
    category: "Next.js",
    date: "May 12, 2026",
    readingTime: "12 min read",
    slug: "my-first-nextjs-blog",
  },
  {
    id: 4,
    title: "A* Search Explained Simply",
    description:
      "Understanding the A* pathfinding algorithm with clear explanations and visual examples. Perfect for beginners interested in algorithms and artificial intelligence.",
    category: "Algorithms",
    date: "May 8, 2026",
    readingTime: "10 min read",
    slug: "a-star-search-explained",
  },
  {
    id: 5,
    title: "React Components Explained for Beginners",
    description:
      "A comprehensive guide to understanding React components, hooks, and state management. Learn the fundamentals that will help you build interactive user interfaces.",
    category: "React",
    date: "May 5, 2026",
    readingTime: "9 min read",
    slug: "react-components-for-beginners",
  },
];

// Available categories
const categories = [
  "All",
  "React",
  "Next.js",
  "JavaScript",
  "Algorithms",
  "Career",
  "Personal",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? allBlogPosts
      : allBlogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Dev Logs"
            description="Notes, tutorials, and lessons from my coding journey."
          />
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-slate-50 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-700">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {filteredPosts.length > 0 ? (
            <>
              <p className="mb-8 text-sm text-slate-600">
                Showing {filteredPosts.length}{" "}
                {selectedCategory === "All"
                  ? "posts"
                  : `posts in ${selectedCategory}`}
              </p>

              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    date={post.date}
                    readingTime={post.readingTime}
                    href={`/blog/${post.slug}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-slate-50 py-12 text-center">
              <p className="text-slate-600">
                No posts found in this category. Try selecting a different one.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-slate-600">
            More posts coming soon! Subscribe to stay updated.
          </p>
        </div>
      </section>
    </div>
  );
}
