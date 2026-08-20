import { principleQuote } from "@/data/approach";
import { cn } from "@/lib/utils";

type PrincipleBandProps = {
  quote?: string;
  className?: string;
};

export function PrincipleBand({
  quote = principleQuote,
  className,
}: PrincipleBandProps) {
  return (
    <aside
      className={cn(
        "border-y border-border bg-grid/20 py-12 md:py-16",
        className
      )}
    >
      <blockquote className="mx-auto max-w-3xl px-6 text-center text-xl font-medium leading-relaxed tracking-tight text-foreground md:px-8 md:text-2xl">
        “{quote}”
      </blockquote>
    </aside>
  );
}
