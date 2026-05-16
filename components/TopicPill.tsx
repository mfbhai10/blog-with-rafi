import Link from "next/link";

interface TopicPillProps {
  label: string;
  count?: number;
  href?: string;
}

export default function TopicPill({
  label,
  count,
  href = "#",
}: TopicPillProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-full border border-border bg-surface px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-soft"
    >
      <span className="font-medium text-primary transition-colors duration-300 group-hover:text-accent">
        {label}
      </span>
      {count !== undefined && (
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent transition-colors duration-300 group-hover:bg-primary/10">
          {count}
        </span>
      )}
    </Link>
  );
}
