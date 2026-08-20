"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Layers } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-grid bg-noise">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-grid-drift bg-grid opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="section-shell relative z-10 flex flex-col gap-8 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mono-label"
        >
          {site.location} · {site.yearsExperience} years experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="font-mono text-lg text-accent md:text-xl"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="max-w-xl text-sm font-medium tracking-wide text-foreground/80 md:text-base"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {site.heroSupport}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View work
            <ArrowDownRight size={16} />
          </Link>
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Layers size={16} />
            Expertise
          </Link>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
