import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { SkillChips } from "@/Components/skill-chips";

type CaseStudyViewProps = {
  study: CaseStudy;
};

export function CaseStudyView({ study }: CaseStudyViewProps) {
  return (
    <article className="space-y-16">
      <div>
        <p className="mono-label mb-3">{study.company}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {study.outcome}
        </p>
      </div>

      <section>
        <h2 className="mono-label mb-4">Overview</h2>
        <div className="space-y-4">
          {study.summary.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[15px]"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-10">
        <h2 className="mono-label mb-5">Architecture</h2>
        <ul className="space-y-3">
          {study.architecture.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-foreground md:text-[15px]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mono-label mb-6">
          {study.portals ? "Experiences & modules" : "Platform modules"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {study.modules.map((mod) => (
            <div
              key={mod.name}
              className="border-l border-accent/40 pl-4"
            >
              <h3 className="text-lg font-medium">{mod.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {study.portals && (
        <section>
          <h2 className="mono-label mb-4">Portals</h2>
          <SkillChips items={study.portals} />
        </section>
      )}

      {study.workflows && (
        <section>
          <h2 className="mono-label mb-4">Workflows</h2>
          <SkillChips items={study.workflows} />
        </section>
      )}

      <section>
        <h2 className="mono-label mb-4">Decisions & ownership</h2>
        <ul className="space-y-3">
          {study.ownership.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        {study.extras?.map((extra) => (
          <p
            key={extra.slice(0, 40)}
            className="mt-6 max-w-3xl border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground"
          >
            {extra}
          </p>
        ))}
      </section>

      <section>
        <h2 className="mono-label mb-4">Stack</h2>
        <SkillChips items={study.tech} />
      </section>

      <section className="border-t border-border pt-10">
        <h2 className="mono-label mb-4">Related roles</h2>
        <ul className="space-y-2">
          {study.relatedRoles.map((role) => (
            <li key={role} className="text-sm text-foreground">
              {role}
            </li>
          ))}
        </ul>
        <Link
          href="/work"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.14em] text-accent"
        >
          ← All work
        </Link>
      </section>
    </article>
  );
}
