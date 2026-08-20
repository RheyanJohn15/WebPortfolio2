export type WorkItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  externalUrl?: string;
  image?: string;
  tech: string[];
  featured?: boolean;
  category: "major" | "supporting";
};

export const workItems: WorkItem[] = [
  {
    id: "tikrr",
    title: "Tikrr ERP",
    description:
      "Vertical SaaS ERP and AI platform for painting businesses — ScopeLab, SalesLab, SiteLab, Media Lab, and Metrics Lab on a multi-tenant Laravel + Next.js stack.",
    href: "/work/tikrr",
    tech: ["Laravel", "Next.js", "PostgreSQL", "OpenAI", "GCP"],
    featured: true,
    category: "major",
  },
  {
    id: "click",
    title: "Click Match / Click Global Talent",
    description:
      "Recruitment and talent platform with separate portals for job seekers, clients, recruiters, and admins—plus a Philippines-focused job-seeker experience.",
    href: "/work/click",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Vercel", "GCP"],
    featured: true,
    category: "major",
  },
  {
    id: "coresupporthub",
    title: "Core Support Hub",
    description:
      "Company platform and site with admin tooling for attendance, visitor messages, and newsletter management.",
    externalUrl: "https://coresupporthub.com",
    tech: ["Next.js", "React", "Django", "PostgreSQL"],
    category: "supporting",
  },
  {
    id: "orangeshire",
    title: "Orange Shire",
    description:
      "Coworking management system for check-in/out, subscriptions, time-based payments, and sales analytics.",
    externalUrl: "https://orangeshire.com",
    tech: ["Laravel", "jQuery", "MySQL"],
    category: "supporting",
  },
  {
    id: "unioil-raffle",
    title: "Unioil QR Raffle",
    description:
      "Nationwide QR raffle system supporting 250+ retail stores and ~100,000 entries.",
    externalUrl: "https://promo.unioil.com",
    tech: ["Laravel", "jQuery", "MySQL", "QR"],
    category: "supporting",
  },
  {
    id: "sis",
    title: "Student Information Systems",
    description:
      "Education-domain systems for managing academic and administrative student workflows.",
    tech: ["Web", "Databases"],
    category: "supporting",
  },
  {
    id: "waste",
    title: "Waste Management Systems",
    description:
      "Logistics and operations software for collection scheduling, routing, and municipal workflows.",
    tech: ["Laravel", "Analytics"],
    category: "supporting",
  },
  {
    id: "time-tracking",
    title: "Time-Tracking Systems",
    description:
      "Internal business applications for attendance and time tracking.",
    tech: ["Full stack"],
    category: "supporting",
  },
  {
    id: "admin-saas",
    title: "Administrative & Internal SaaS",
    description:
      "Internal business applications, administrative systems, and SaaS products across consulting engagements.",
    tech: ["Laravel", "Next.js", "APIs"],
    category: "supporting",
  },
];

/** @deprecated Prefer workItems — kept for any legacy imports */
export const projects = workItems
  .filter((w) => w.featured || w.image)
  .map((w) => ({
    id: w.id,
    title: w.title,
    description: w.description,
    image: w.image,
    link: w.externalUrl,
    tech: w.tech,
  }));
