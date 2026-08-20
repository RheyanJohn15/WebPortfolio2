"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionHeading } from "@/Components/page-header";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border bg-noise">
      <div className="section-shell">
        <SectionHeading eyebrow="01 — Career" title="Experience" />

        <ol className="relative ml-3 border-l border-border md:ml-4">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.25),
              }}
              className="relative grid gap-4 border-b border-border/70 py-10 pl-8 last:border-b-0 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10 md:pl-12"
            >
              <span
                aria-hidden
                className="absolute -left-[5px] top-12 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
              />
              <div className="space-y-1">
                <p className="font-mono text-xs text-muted-foreground">
                  {item.dates}
                </p>
                <p className="text-sm text-accent">{item.company}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">
                  {item.role}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted-foreground md:text-[15px]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
