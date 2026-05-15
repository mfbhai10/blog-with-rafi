import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  href?: string;
  tags?: string[];
}

export default function BlogCard({
  title,
  description,
  category,
  date,
  readingTime,
  href = "#",
  tags = [],
}: BlogCardProps) {
  const hasTags = tags.length > 0;

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 sm:text-sm">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 line-clamp-2 group-hover:text-blue-700 sm:text-xl">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
          {description}
        </p>
        {hasTags ? (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:text-sm">
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
