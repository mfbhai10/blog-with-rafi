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
      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}
