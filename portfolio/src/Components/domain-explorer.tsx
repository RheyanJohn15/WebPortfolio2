"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { ExpertiseDomain } from "@/data/expertise";

type DomainExplorerProps = {
  domains: ExpertiseDomain[];
};

export function DomainExplorer({ domains }: DomainExplorerProps) {
  const [activeId, setActiveId] = useState(domains[0]?.id ?? "");

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && domains.some((d) => d.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [domains]);

  const active = domains.find((d) => d.id === activeId) ?? domains[0];
  if (!active) return null;

  const select = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="mono-label mb-4 lg:hidden">Domains</p>
        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
          {domains.map((domain) => (
            <button
              key={domain.id}
              type="button"
              id={domain.id}
              onClick={() => select(domain.id)}
              className={cn(
                "shrink-0 rounded-md border px-3 py-2 text-left text-sm transition-colors lg:w-full",
                activeId === domain.id
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border bg-card/40 text-muted-foreground hover:border-accent/30 hover:text-foreground"
              )}
            >
              {domain.title}
            </button>
          ))}
        </div>
      </div>

      <div className="min-w-0 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {active.title}
        </h2>
        <div className="mt-5 space-y-4">
          {active.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-sm leading-relaxed text-muted-foreground md:text-[15px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {active.topics.map((topic) => (
            <li
              key={topic}
              className="rounded border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
