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
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="aspect-video overflow-hidden border-b border-border bg-surface-soft">
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
          <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-[11px] font-medium text-accent sm:text-xs">
            {category}
          </span>
        </div>

        <h3 className="mb-2 text-base font-semibold tracking-tight text-primary line-clamp-2 transition-colors duration-300 group-hover:text-accent sm:text-lg">
          {title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-6 text-muted line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
          <Link
            href={`https://youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors duration-300 hover:text-primary"
          >
            YouTube-এ দেখুন
          </Link>
          <span className="text-xs text-muted">এম্বেড করা ভিডিও</span>
        </div>
      </div>
    </article>
  );
}
