import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/Components/page-header";
import { Pipeline } from "@/Components/pipeline";
import { PrincipleBand } from "@/Components/principle-band";
import { SkillChips } from "@/Components/skill-chips";
import {
  approachIntro,
  approachPrinciples,
  businessThinkingIntro,
  businessThinkingQuestions,
  hostingDecisionCriteria,
  identityCloser,
  mindsetIntro,
  mindsetQuestions,
  releasePractices,
  testingPractices,
} from "@/data/approach";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Engineering ownership, business-domain thinking, release discipline, and how systems are designed to survive production.",
};

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28 pb-8">
        <PageHeader
          eyebrow="Approach"
          title="How I engineer"
          description="Practical architecture, business-domain understanding, and ownership across the full product lifecycle."
        />

        <div className="mb-16 space-y-4 border-b border-border pb-12">
          <p className="max-w-3xl text-base leading-relaxed text-foreground md:text-lg">
            {site.summary}
          </p>
          {site.about.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[15px]"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mb-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            How I approach engineering
          </h2>
          {approachIntro.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[15px]"
            >
              {p}
            </p>
          ))}
        </div>

        <section className="mb-20">
          <h2 className="mono-label mb-6">Principles</h2>
          <ol className="grid gap-3 sm:grid-cols-2">
            {approachPrinciples.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 border-l border-border pl-4 text-sm text-foreground"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <PrincipleBand />

      <div className="section-shell space-y-20 py-16 md:py-24">
        <section>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Ownership pipeline
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Best suited to environments where an engineer is expected to take
            broad ownership rather than work on an isolated technical layer.
          </p>
          <Pipeline />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Engineering mindset
          </h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {mindsetIntro}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {mindsetQuestions.map((q) => (
              <li
                key={q}
                className="border-l border-accent/30 pl-3 text-sm text-muted-foreground"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Business & product thinking
          </h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {businessThinkingIntro}
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {businessThinkingQuestions.map((q) => (
              <li
                key={q}
                className="border-l border-accent/30 pl-3 text-sm text-muted-foreground"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mono-label mb-4">Release practices</h2>
            <SkillChips items={releasePractices} />
          </div>
          <div>
            <h2 className="mono-label mb-4">Testing & quality</h2>
            <SkillChips items={testingPractices} />
          </div>
        </section>

        <section>
          <h2 className="mono-label mb-4">
            Hosting & infrastructure decisions
          </h2>
          <p className="mb-5 max-w-2xl text-sm text-muted-foreground">
            Cloud infrastructure is not one-size-fits-all. Options are compared
            against real operational constraints—including AWS, Azure, and
            Windows 365 when evaluating remote development environments.
          </p>
          <SkillChips items={hostingDecisionCriteria} />
        </section>

        <p className="max-w-3xl border-t border-border pt-10 text-base leading-relaxed text-foreground md:text-lg">
          {identityCloser}
        </p>

        <p className="font-mono text-xs text-muted-foreground">
          <Link href="/#contact" className="text-accent hover:opacity-80">
            Contact →
          </Link>
        </p>
      </div>
    </main>
  );
}
