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
    <Link href={href}>
      <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors group cursor-pointer">
        <span className="font-medium text-slate-900 group-hover:text-blue-600">
          {label}
        </span>
        {count !== undefined && (
          <span className="text-sm text-slate-500 group-hover:text-blue-600">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
