"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/Components/page-header";
import { expertiseTeasers } from "@/data/site";

export default function ExpertiseSnapshot() {
  return (
    <section id="expertise" className="relative border-t border-border bg-noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 — Capabilities"
          title="Expertise"
          description="Full-spectrum ownership across product, architecture, infrastructure, and AI."
          actionHref="/expertise"
          actionLabel="Explore all domains"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseTeasers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24) }}
            >
              <Link
                href={`/expertise#${item.id}`}
                className="block h-full border-l border-accent/30 pl-4 transition-colors hover:border-accent"
              >
                <h3 className="text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
