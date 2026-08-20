import { cn } from "@/lib/utils";
import { ownershipPipeline } from "@/data/approach";

type PipelineProps = {
  compact?: boolean;
  className?: string;
};

export function Pipeline({ compact = false, className }: PipelineProps) {
  const stages = compact
    ? [
        "Requirements",
        "Architecture",
        "Build",
        "Integrate",
        "Secure",
        "Deploy",
        "Operate",
        "Improve",
      ]
    : ownershipPipeline;

  return (
    <div className={cn("relative", className)}>
      {!compact && (
        <p className="mono-label mb-6">Ownership pipeline</p>
      )}
      <ol
        className={cn(
          "flex gap-2 overflow-x-auto pb-2",
          compact ? "md:flex-wrap md:overflow-visible" : "flex-col md:flex-row md:flex-wrap"
        )}
      >
        {stages.map((stage, index) => (
          <li
            key={stage}
            className={cn(
              "flex shrink-0 items-center gap-2",
              !compact && "md:w-[calc(25%-0.5rem)]"
            )}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-[10px] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "text-sm text-foreground",
                compact ? "whitespace-nowrap pr-3" : "leading-snug"
              )}
            >
              {stage}
            </span>
            {compact && index < stages.length - 1 && (
              <span className="hidden text-muted-foreground sm:inline" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
