"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/Components/page-header";
import { ProjectCover } from "@/Components/project-cover";
import { workItems } from "@/data/projects";

export default function FeaturedWork() {
  const featured = workItems.filter((w) => w.featured);
  const supporting = workItems
    .filter((w) => w.category === "supporting")
    .slice(0, 3);

  return (
    <section id="work" className="relative border-t border-border bg-noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 — Portfolio"
          title="Selected Work"
          description="Major platforms and production systems — case studies for Tikrr and Click, plus shipped client software."
          actionHref="/work"
          actionLabel="All work"
        />

        <div className="space-y-0">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border-t border-border py-10 first:border-t-0 first:pt-0"
            >
              <Link
                href={item.href ?? "/work"}
                className="group grid gap-6 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center sm:gap-8"
              >
                <ProjectCover
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  logo={item.logo}
                  sizes="(min-width: 640px) 280px, 100vw"
                />
                <div className="flex items-start justify-between gap-4">
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
                    className="shrink-0 text-accent opacity-60 transition-opacity group-hover:opacity-100"
                    size={20}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {supporting.map((item) => (
            <a
              key={item.id}
              href={item.externalUrl ?? item.href ?? "/work"}
              target={item.externalUrl ? "_blank" : undefined}
              rel={item.externalUrl ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-3"
            >
              {item.logo && (
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border bg-card p-1.5">
                  <Image
                    src={item.logo}
                    alt=""
                    width={18}
                    height={18}
                    className="h-full w-full object-contain"
                  />
                </span>
              )}
              <div>
                <h4 className="font-medium transition-colors group-hover:text-accent">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
