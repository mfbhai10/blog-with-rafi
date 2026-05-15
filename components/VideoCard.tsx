import Link from "next/link";

interface VideoCardProps {
  title: string;
  description: string;
  category: string;
  youtubeId: string;
}

export default function VideoCard({
  title,
  description,
  category,
  youtubeId,
}: VideoCardProps) {
  const videoUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video bg-slate-100">
        <iframe
          src={videoUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-full w-full border-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-[11px] font-medium text-red-700 sm:text-xs">
            {category}
          </span>
        </div>

        <h3 className="mb-2 text-base font-semibold tracking-tight text-slate-900 line-clamp-2 sm:text-lg">
          {title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <Link
            href={`https://youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-800"
          >
            Watch on YouTube
          </Link>
          <span className="text-xs text-slate-500">Embedded video</span>
        </div>
      </div>
    </article>
  );
}
