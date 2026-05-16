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
      <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent sm:text-sm">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-primary line-clamp-2 transition-colors duration-300 group-hover:text-accent sm:text-xl">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-6 text-muted line-clamp-3">
          {description}
        </p>
        {hasTags ? (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-muted sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <div className="flex items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted sm:text-sm">
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
