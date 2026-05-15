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
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <a
      href={`https://youtube.com/watch?v=${youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-slate-200 overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-4xl text-white">▶</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
              {category}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-slate-900 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </a>
  );
}
