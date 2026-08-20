import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/Components/page-header";
import { workItems } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work — Tikrr ERP, Click Global Talent recruitment platform, and production client systems.",
};

export default function WorkPage() {
  const major = workItems.filter((w) => w.category === "major");
  const supporting = workItems.filter((w) => w.category === "supporting");

  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28">
        <PageHeader
          eyebrow="Work"
          title="Selected systems"
          description="Major platforms with deep case studies, plus supporting production systems across SaaS, recruitment, operations, and internal tools."
        />

        <section className="mb-20">
          <h2 className="mono-label mb-8">Major case studies</h2>
          <div className="space-y-0">
            {major.map((item) => (
              <Link
                key={item.id}
                href={item.href ?? "/work"}
                className="group flex items-start justify-between gap-6 border-t border-border py-10 last:border-b"
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight
                  className="mt-1 shrink-0 text-accent opacity-50 group-hover:opacity-100"
                  size={20}
                />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mono-label mb-8">Supporting systems</h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((item) => (
              <li key={item.id}>
                {item.externalUrl ? (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <WorkCard item={item} />
                  </a>
                ) : item.href ? (
                  <Link href={item.href} className="group block h-full">
                    <WorkCard item={item} />
                  </Link>
                ) : (
                  <div className="h-full">
                    <WorkCard item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function WorkCard({
  item,
}: {
  item: (typeof workItems)[number];
}) {
  return (
    <>
      <h3 className="font-medium transition-colors group-hover:text-accent">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </>
  );
}
