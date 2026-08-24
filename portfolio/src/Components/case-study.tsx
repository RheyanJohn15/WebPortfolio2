import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { SkillChips } from "@/Components/skill-chips";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CaseStudyViewProps = {
  study: CaseStudy;
};

export function CaseStudyView({ study }: CaseStudyViewProps) {
  const modulesLabel = study.portals ? "Experiences & modules" : "Platform modules";

  return (
    <article className="space-y-16">
      <div>
        <div className="mb-4 flex items-center gap-3">
          {study.logo && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card p-2">
              <Image
                src={study.logo}
                alt=""
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </span>
          )}
          <p className="mono-label">{study.company}</p>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {study.outcome}
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-6">
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {modulesLabel}
            </dt>
            <dd className="mt-1 font-mono text-2xl text-foreground">
              {study.modules.length}
            </dd>
          </div>
          {study.portals && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Portals
              </dt>
              <dd className="mt-1 font-mono text-2xl text-foreground">
                {study.portals.length}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Stack
            </dt>
            <dd className="mt-1 font-mono text-2xl text-foreground">
              {study.tech.length}
            </dd>
          </div>
          <div className="min-w-0 flex-1">
            <dt className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Core tech
            </dt>
            <SkillChips items={study.tech.slice(0, 6)} />
          </div>
        </dl>
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

      <section className="border-y border-border py-2">
        <Accordion type="multiple" defaultValue={["architecture", "modules"]}>
          <AccordionItem value="architecture">
            <AccordionTrigger className="mono-label hover:no-underline">
              Architecture
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-2">
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modules">
            <AccordionTrigger className="mono-label hover:no-underline">
              {modulesLabel}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 pt-2 sm:grid-cols-2">
                {study.modules.map((mod) => (
                  <div key={mod.name} className="border-l border-accent/40 pl-4">
                    <h3 className="text-lg font-medium">{mod.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {study.portals && (
            <AccordionItem value="portals">
              <AccordionTrigger className="mono-label hover:no-underline">
                Portals
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2">
                  <SkillChips items={study.portals} />
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {study.workflows && (
            <AccordionItem value="workflows">
              <AccordionTrigger className="mono-label hover:no-underline">
                Workflows
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2">
                  <SkillChips items={study.workflows} />
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem value="ownership" className="border-b-0">
            <AccordionTrigger className="mono-label hover:no-underline">
              Decisions & ownership
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-2">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
