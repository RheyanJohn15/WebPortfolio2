import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/Components/case-study";
import { getCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Tikrr ERP",
  description:
    "Multi-tenant SaaS ERP and AI platform for painting contractors — ScopeLab, SalesLab, SiteLab, Media Lab, Metrics Lab.",
};

export default function TikrrPage() {
  const study = getCaseStudy("tikrr");
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28">
        <CaseStudyView study={study} />
      </div>
    </main>
  );
}
