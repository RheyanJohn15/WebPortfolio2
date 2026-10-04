import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/Components/case-study";
import { getCaseStudy } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Akruals",
  description:
    "Cloud accounting platform for small businesses — CRM, authentication, and subscription billing on Next.js and ASP.NET Core.",
};

export default function AkrualsPage() {
  const study = getCaseStudy("akruals");
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28">
        <CaseStudyView study={study} />
      </div>
    </main>
  );
}
