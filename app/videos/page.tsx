import type { Metadata } from "next";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Videos | Blog with Rafi",
  description:
    "Watch Rafi's video learning collection with coding tutorials, resources, and embedded YouTube videos.",
};

type VideoItem = {
  title: string;
  description: string;
  category: string;
  youtubeId: string;
};

const videos: VideoItem[] = [
  {
    title: "HTML & CSS Layouts That Actually Scale",
    description:
      "A practical walkthrough of responsive layouts, spacing systems, and the small CSS decisions that make pages feel polished.",
    category: "HTML & CSS",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "JavaScript Fundamentals for Building Real Projects",
    description:
      "Core JavaScript concepts explained through examples you can immediately reuse in front-end projects and small apps.",
    category: "JavaScript",
    youtubeId: "M7lc1UVf-VE",
  },
  {
    title: "React Components and State, Without the Confusion",
    description:
      "A clean introduction to component thinking, props, state, and the patterns that make React code easier to maintain.",
    category: "React",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    title: "Next.js App Router Basics for Beginners",
    description:
      "A focused guide to pages, layouts, and server components so you can build and organize modern Next.js apps confidently.",
    category: "Next.js",
    youtubeId: "HusT8K5zIJw",
  },
  {
    title: "AI Lab Notes: Learning by Building Small Experiments",
    description:
      "Short experiments, workflows, and project notes from the AI side of the learning journey, kept simple and actionable.",
    category: "AI Lab",
    youtubeId: "dA0VGEbbw4g",
  },
  {
    title: "DSA Patterns for Interviews and Practice",
    description:
      "A beginner-friendly overview of arrays, recursion, and problem-solving patterns that show up again and again in interviews.",
    category: "DSA",
    youtubeId: "8hly31xKli0",
  },
];

export default function VideosPage() {
  return (
    <div className="w-full">
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            Video Learning
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Video Learning
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            A collection of coding videos, tutorials, and learning resources I
            follow or create.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.youtubeId}
                title={video.title}
                description={video.description}
                category={video.category}
                youtubeId={video.youtubeId}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
