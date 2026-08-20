import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/Components/case-study";
import { getCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Click Global Talent",
  description:
    "Recruitment and talent platform with multi-portal architecture for job seekers, clients, recruiters, and administrators.",
};

export default function ClickPage() {
  const study = getCaseStudy("click");
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28">
        <CaseStudyView study={study} />
      </div>
    </main>
  );
}
