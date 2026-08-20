import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("mb-12 md:mb-16", className)}>
      <p className="mono-label mb-3">{eyebrow}</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="mono-label mb-3">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
        )}
      </div>
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-accent transition-opacity hover:opacity-80"
        >
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}
