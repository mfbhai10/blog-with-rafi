interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      {description && <p className="mt-2 text-slate-600">{description}</p>}
    </div>
  );
}
