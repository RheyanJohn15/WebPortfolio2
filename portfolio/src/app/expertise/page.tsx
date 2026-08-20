import type { Metadata } from "next";
import { PageHeader } from "@/Components/page-header";
import { DomainExplorer } from "@/Components/domain-explorer";
import { expertiseDomains } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Full-stack, backend, cloud, security, SaaS/ERP, AI & agentic systems, integrations, and production engineering.",
};

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-background bg-noise text-foreground">
      <div className="section-shell pt-28">
        <PageHeader
          eyebrow="Expertise"
          title="Core capabilities"
          description="Domains I work across as a full-spectrum engineer—from full-stack delivery and multi-tenant SaaS to cloud infrastructure, security, and agentic AI."
        />
        <DomainExplorer domains={expertiseDomains} />
      </div>
    </main>
  );
}
