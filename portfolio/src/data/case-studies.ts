export type CaseModule = {
  name: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  company: string;
  outcome: string;
  summary: string[];
  architecture: string[];
  modules: CaseModule[];
  workflows?: string[];
  portals?: string[];
  tech: string[];
  ownership: string[];
  extras?: string[];
  relatedRoles: string[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "tikrr",
    slug: "tikrr",
    title: "Tikrr ERP",
    company: "Tikrr LLC",
    outcome:
      "A multi-tenant SaaS ERP and AI platform purpose-built for painting contractor workflows—from estimating and CRM through production, media, and analytics.",
    summary: [
      "Tikrr combines multiple business domains into a single platform for painting businesses, with company-based multi-tenancy so each company has its own users, data, roles, permissions, and workflows.",
      "Work spans architecture and implementation—not only features—covering system architecture, API design, deployment strategy, database infrastructure, CI/CD, production troubleshooting, cloud migration, integrations, AI architecture, and release management.",
    ],
    architecture: [
      "Multi-tenant SaaS with tenant data isolation",
      "Next.js frontend applications with Laravel APIs and PostgreSQL",
      "Google Cloud infrastructure (Compute Engine, Cloud Run), Firebase, Nginx, Supervisor",
      "WebSockets via Laravel Reverb, queues, and third-party / OAuth integrations",
      "AI capabilities including embeddings with pgvector and OpenAI-powered workflows",
    ],
    modules: [
      {
        name: "ScopeLab",
        description:
          "Estimating, quoting, scopes, presentations, production rates, and related workflows.",
      },
      {
        name: "SalesLab",
        description: "CRM and sales management.",
      },
      {
        name: "SiteLab",
        description: "Production and field operations.",
      },
      {
        name: "Media Lab",
        description: "Media and file management.",
      },
      {
        name: "Metrics Lab",
        description:
          "Analytics, metrics, trends, correlations, and dashboard functionality.",
      },
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "pgvector",
      "GitHub Actions",
      "Firebase",
      "Google Cloud",
      "Cloud Run",
      "Compute Engine",
      "Nginx",
      "Supervisor",
      "WebSockets / Laravel Reverb",
      "Laravel queues",
      "Third-party APIs",
      "OAuth integrations",
      "OpenAI",
    ],
    ownership: [
      "System architecture and API design",
      "Deployment strategy and CI/CD",
      "Database infrastructure",
      "Production troubleshooting",
      "Cloud migration",
      "Integrations and AI architecture",
      "Release management",
    ],
    extras: [
      "Chrome extension for migrating PaintScout quotes and PDFs into Tikrr—requiring understanding of external application data and migration workflows.",
    ],
    relatedRoles: [
      "Technical Engineering Lead — Tikrr LLC",
      "Full Stack Web Developer — Tikrr LLC",
      "Front End Web Developer — Tikrr LLC",
    ],
    href: "/work/tikrr",
  },
  {
    id: "click",
    slug: "click",
    title: "Click Global Talent / Recruitment Platform",
    company: "Click Global Talent",
    outcome:
      "A recruitment and talent platform connecting companies with candidates—multiple portals sharing a backend while reflecting real recruitment workflows.",
    summary: [
      "The platform involves multiple applications and portals serving different users and responsibilities, designed around real recruitment workflows rather than a generic job board.",
      "An important architectural decision is separating portal experiences while maintaining a shared backend/API architecture, with separate domains for public recruitment, applicants, clients, and administrators/recruiters.",
    ],
    architecture: [
      "Separate portal experiences on shared backend/API architecture",
      "Next.js frontends with Laravel APIs and PostgreSQL",
      "Vercel for frontend delivery; Google Cloud for backend and infrastructure",
      "REST APIs, third-party services, and compliance-aware recruitment workflows",
    ],
    modules: [
      {
        name: "Talent / Job Seeker Experience",
        description: "Registration, profiles, applications, and candidate resources.",
      },
      {
        name: "Client Portal",
        description: "Client registration, job postings, and hiring workflows.",
      },
      {
        name: "Recruiter & Admin",
        description: "Administrative review, recruitment pipelines, and internal tools.",
      },
      {
        name: "Philippines Experience",
        description:
          "Dedicated Philippines-focused experience for Filipino job seekers—job board, candidate resources, profile submission, and applicant workflows.",
      },
    ],
    portals: [
      "Job seekers / talents",
      "Clients",
      "Administrators",
      "Recruiters",
    ],
    workflows: [
      "Talent registration",
      "Client registration",
      "Job postings",
      "Applications",
      "Candidate profiles",
      "Resume management",
      "Client management",
      "Administrative review",
      "Recruitment workflows",
      "Assessments",
      "Interviews",
      "Applicant management",
      "CRM-style workflows",
      "Analytics",
      "Payments",
      "Compliance",
      "Third-party integrations",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Vercel",
      "Google Cloud",
      "REST APIs",
      "GitHub",
      "Third-party APIs and services",
    ],
    ownership: [
      "Global technology operations",
      "Platform architecture across portals",
      "Cloud infrastructure and deployments",
      "Integrations and company systems",
      "Partnership with leadership on scalable technology solutions",
    ],
    relatedRoles: ["VP of Global Technology — Click Global Talent"],
    href: "/work/click",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
