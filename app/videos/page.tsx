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
      <section className="bg-linear-to-b from-slate-50 to-white px-6 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">
            ভিডিও থেকে শেখা
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            ভিডিও থেকে শেখা
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            coding, web development, AI, আর software engineering শেখার জন্য
            useful video resources।
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
