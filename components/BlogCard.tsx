interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  href?: string;
}

export default function BlogCard({
  title,
  description,
  category,
  date,
  readingTime,
  href = "#",
}: BlogCardProps) {
  return (
    <a href={href}>
      <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow cursor-pointer">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900 line-clamp-2">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-slate-600 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </a>
  );
}
