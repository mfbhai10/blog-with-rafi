import type { Metadata } from "next";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "ভিডিও থেকে শেখা | Blog with Rafi",
  description:
    "coding, web development, AI, আর software engineering শেখার জন্য useful video resources দেখুন।",
};

type VideoItem = {
  title: string;
  description: string;
  category: string;
  youtubeId: string;
};

const videos: VideoItem[] = [
  {
    title: "HTML & CSS Layouts যা সত্যিই কাজ করে",
    description:
      "responsive layout, spacing system, আর ছোট ছোট CSS decision দিয়ে page কেমন polished হয়, সেটা দেখো।",
    category: "HTML & CSS",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Real Project বানানোর জন্য JavaScript Basics",
    description:
      "front-end project আর ছোট app-এ সরাসরি ব্যবহার করা যায় এমন JavaScript concept সহজ উদাহরণে শেখা।",
    category: "JavaScript",
    youtubeId: "M7lc1UVf-VE",
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
  {
    title: "AI Lab Notes: ছোট experiment বানিয়ে শেখা",
    description:
      "AI side-এর ছোট experiment, workflow, আর project note—সবই simple আর actionable।",
    category: "AI Lab",
    youtubeId: "dA0VGEbbw4g",
  },
  {
    title: "Interview আর Practice-এর জন্য DSA Pattern",
    description:
      "array, recursion, আর problem-solving pattern-এর beginner-friendly overview, যা interview-এ বারবার আসে।",
    category: "DSA",
    youtubeId: "8hly31xKli0",
  },
];

export default function VideosPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto max-w-6xl">
          <div className="rounded-4xl border border-border bg-linear-to-br from-surface via-surface-soft/80 to-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-border bg-surface-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                ভিডিও লাইব্রেরি
              </div>

              <h1 className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                ভিডিও থেকে শেখা
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                coding, web development, AI, আর software engineering শেখার জন্য
                useful video resources।
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">
                প্রতিটি ভিডিও card responsive, readable, আর light/dark mode-এ
                আরামদায়ক রাখার জন্য সাজানো।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
