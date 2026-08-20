"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/Components/page-header";
import { Pipeline } from "@/Components/pipeline";

export default function HomePipeline() {
  return (
    <section className="relative border-t border-border bg-noise">
      <div className="section-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="00 — Ownership"
          title="Idea to production"
          description="Capable of taking a product from requirements through architecture, build, security, deployment, and continuous improvement."
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Pipeline compact />
        </motion.div>
      </div>
    </section>
  );
}
