"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience, type ExperienceItem } from "@/data/site";
import { SectionHeading } from "@/Components/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VISIBLE_COUNT = 3;

function ExperienceEntry({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.li
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
      <div className="space-y-2">
        <p className="font-mono text-xs text-muted-foreground">{item.dates}</p>
        <div className="flex items-center gap-2">
          {item.logo && (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-border bg-background/60 p-1">
              <Image
                src={item.logo}
                alt=""
                width={16}
                height={16}
                className="h-full w-full object-contain"
              />
            </span>
          )}
          <p className="text-sm text-accent">{item.company}</p>
        </div>
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
  );
}

export default function Experience() {
  const visible = experience.slice(0, VISIBLE_COUNT);
  const earlier = experience.slice(VISIBLE_COUNT);

  return (
    <section id="experience" className="relative border-t border-border bg-noise">
      <div className="section-shell">
        <SectionHeading
          eyebrow="01 — Career"
          title="Experience"
          description="2+ years shipping production systems — from intern to Technical Engineering Lead and VP of Global Technology."
        />

        <ol className="relative ml-3 border-l border-border md:ml-4">
          {visible.map((item, index) => (
            <ExperienceEntry key={item.id} item={item} index={index} />
          ))}
        </ol>

        {earlier.length > 0 && (
          <Accordion type="single" collapsible className="ml-3 border-l border-border md:ml-4">
            <AccordionItem value="earlier" className="border-b-0">
              <AccordionTrigger className="py-6 pl-8 font-mono text-xs uppercase tracking-[0.14em] text-accent hover:no-underline md:pl-12">
                Show {earlier.length} earlier role{earlier.length > 1 ? "s" : ""}
              </AccordionTrigger>
              <AccordionContent>
                <ol>
                  {earlier.map((item, index) => (
                    <ExperienceEntry key={item.id} item={item} index={index} />
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </section>
  );
}
