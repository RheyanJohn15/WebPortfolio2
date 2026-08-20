import { cn } from "@/lib/utils";

type SkillChipsProps = {
  items: string[];
  className?: string;
};

export function SkillChips({ items, className }: SkillChipsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
