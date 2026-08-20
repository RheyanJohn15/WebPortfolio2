"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/Components/page-header";
import { site } from "@/data/site";

export default function AboutMe() {
  return (
    <section id="about" className="relative border-t border-border bg-noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 — Profile"
          title="About"
          actionHref="/approach"
          actionLabel="Engineering approach"
        />

        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,260px)_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-md border border-border bg-card md:mx-0"
          >
            <Image
              src="/portf/rheyan.jpg"
              alt={site.name}
              fill
              className="object-cover"
              sizes="260px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.summary}
            </p>
            {site.about.slice(0, 2).map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}

            <div className="border-t border-border pt-6">
              <p className="mono-label mb-3">Education</p>
              <h3 className="text-lg font-medium">{site.education.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.education.school}
              </p>
              <p className="mt-1 font-mono text-xs text-accent">
                {site.education.minor} · {site.education.dates}
              </p>
            </div>

            <Link
              href="/approach"
              className="inline-block pt-2 font-mono text-xs uppercase tracking-[0.14em] text-accent"
            >
              How I approach engineering →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
