export const site = {
  name: "Rheyan John Blanco",
  title: "Software Engineer",
  tagline: "Full-spectrum software engineer & technical owner",
  location: "Bacolod City, Philippines",
  yearsExperience: "2+",
  heroSupport:
    "2+ years building and operating production systems end-to-end — architecture, full-stack delivery, cloud infrastructure, security, and AI-powered business workflows.",
  summary:
    "Software Engineer with 2+ years of professional experience as a Full Stack Developer, DevOps Engineer, and technical product builder from the Philippines. Focused on production-ready web applications, SaaS platforms, ERP and business systems, recruitment platforms, AI-powered products, APIs, and cloud infrastructure.",
  about: [
    "I work across the entire software development lifecycle—from understanding business requirements and designing system architecture, to building frontend applications, developing backend APIs, managing databases, integrating third-party services, establishing CI/CD pipelines, deploying systems, securing infrastructure, troubleshooting production issues, and continuously improving the product.",
    "My strength is not being limited to one layer of the stack. I’m comfortable taking ownership of a complete system and making decisions across frontend architecture, backend architecture, databases, infrastructure, deployment, integrations, security, performance, user experience, analytics, and operational reliability.",
    "I particularly enjoy solving problems where software engineering and business requirements intersect: taking a complex business workflow, turning it into a practical system architecture, and then actually building and operating that system in production.",
    "I also have a strong interest in AI-assisted software development and agentic systems, particularly when AI can be integrated into real business workflows instead of being treated simply as a chatbot.",
  ],
  resumePath: "/ResumeRheyanJohnBlanco.pdf",
  contact: {
    email: "rheyanjohnblancogwapo@gmail.com",
    phone: "+639275333250",
    linkedin: "https://www.linkedin.com/in/rheyan-john-blanco-256090287/",
    github: "https://github.com/RheyanJohn15",
  },
  education: {
    degree: "Bachelor of Science in Information Systems",
    school: "Carlos Hilado Memorial State University",
    minor: "Minor in Systems Management",
    dates: "Aug 2020 – Jun 2024",
  },
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "tikrr-lead",
    role: "Technical Engineering Lead",
    company: "Tikrr LLC",
    dates: "Jun 2026 – Present",
    bullets: [
      "Promoted from Founding Engineer to Technical Engineering Lead, leading technical architecture, engineering strategy, and product development for Tikrr, a vertical SaaS ERP and AI platform for painting businesses.",
      "Architected and developed core ERP and AI capabilities using Laravel, PostgreSQL, Next.js, and OpenAI APIs, including CRM, estimating, operations, and AI-powered automation.",
      "Led cloud infrastructure, CI/CD, and engineering standards across Google Cloud and Firebase, driving platform scalability, reliability, and beta-launch readiness.",
    ],
  },
  {
    id: "click-vp",
    role: "VP of Global Technology",
    company: "Click Global Talent",
    dates: "Jan 2026 – Present",
    bullets: [
      "Led global technology operations, overseeing IT infrastructure, technical support, software development, and digital platforms supporting recruitment operations.",
      "Architected and developed the Click Match recruitment platform, enabling job seekers to manage applications and clients to create and manage job postings, alongside internal recruitment tools and workflows.",
      "Managed cloud infrastructure, integrations, deployments, and company systems, partnering with leadership to implement scalable technology solutions and improve operational efficiency.",
    ],
  },
  {
    id: "tikrr-fullstack",
    role: "Full Stack Web Developer",
    company: "Tikrr LLC",
    dates: "Nov 2025 – Jun 2026",
    bullets: [
      "Architected and executed Tikrr’s migration from a client-side architecture to a secure, scalable multi-tenant ERP platform, leading backend architecture with Laravel and PostgreSQL while developing the Next.js frontend and APIs.",
      "Designed modular multi-tenant architecture, tenant data isolation, RESTful APIs, and JWT authentication to securely support core ERP business operations.",
      "Established Docker-based environments and GitHub Actions CI/CD across Google Cloud VMs, maintaining end-to-end ownership of development, deployment, infrastructure, and third-party integrations.",
    ],
  },
  {
    id: "csh-consultant",
    role: "Software Engineer Consultant",
    company: "Core Support Hub",
    dates: "May 2025 – Present",
    bullets: [
      "Provide software engineering and technical consulting across client projects, owning full-stack development, architecture, and technical implementation.",
      "Design and implement scalable, production-ready solutions, while advising on system architecture, technology selection, and development practices.",
      "Support and optimize existing applications through feature development, troubleshooting, maintenance, and performance improvements.",
    ],
  },
  {
    id: "tikrr-frontend",
    role: "Front End Web Developer",
    company: "Tikrr LLC",
    dates: "May 2025 – Nov 2025",
    bullets: [
      "Developed and maintained Tikrr’s SaaS ERP frontend using Next.js and Firebase, delivering responsive, scalable, and user-focused web applications.",
      "Built core platform modules including the Estimator and Quote Management systems from the ground up, translating UI/UX designs into interactive and accessible interfaces.",
      "Designed reusable UI components and contributed to frontend architecture and technical decisions, improving maintainability, consistency, and development velocity.",
    ],
  },
  {
    id: "csh-engineer",
    role: "Software Engineer",
    company: "Core Support Hub",
    dates: "Jun 2024 – May 2025",
    bullets: [
      "Served as a primary developer and technical lead, owning architecture and implementation across multiple SaaS, ERP, automation, and client software projects.",
      "Architected and developed major platforms including a multi-tenant SaaS system, coworking management platform, and Unioil’s nationwide QR raffle system supporting 250+ retail stores and ~100,000 entries.",
      "Delivered full-stack solutions across React/Next.js, backend services, SQL, authentication, subscriptions, and integrations, while mentoring developers.",
    ],
  },
  {
    id: "csh-intern",
    role: "Software Engineer Intern",
    company: "Core Support Hub",
    dates: "Jun 2024 – May 2025",
    bullets: [
      "Supported the development and maintenance of web applications and internal business systems, gaining hands-on experience in full-stack development.",
      "Contributed to the Core Support Hub website and Orange Shire Customer Management System, implementing features for customer management, check-in/out, automated payments, and record management.",
      "Assisted with database integration, troubleshooting, and application support.",
    ],
  },
];

export type SkillIcon =
  | "laravel"
  | "nextdotjs"
  | "react"
  | "vuedotjs"
  | "nodedotjs"
  | "postgresql"
  | "mysql"
  | "docker"
  | "googlecloud"
  | "firebase"
  | "github"
  | "linux"
  | "vercel"
  | "supabase"
  | "openai"
  | "cursor"
  | "git"
  | "tailwindcss"
  | "typescript";

export type SkillItem = {
  name: string;
  icon: SkillIcon;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "Vue.js", icon: "vuedotjs" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Docker", icon: "docker" },
      { name: "Firebase", icon: "firebase" },
      { name: "Vercel", icon: "vercel" },
      { name: "Linux", icon: "linux" },
      { name: "GitHub", icon: "github" },
      { name: "Git", icon: "git" },
    ],
  },
  {
    title: "Data & APIs",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    title: "AI-Assisted Development",
    items: [
      { name: "Cursor", icon: "cursor" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
];

export const expertiseTeasers = [
  { id: "fullstack", title: "Full Stack Development", blurb: "Next.js, React, Laravel, APIs, multi-tenant SaaS" },
  { id: "backend", title: "Backend & Databases", blurb: "Laravel, PostgreSQL, queues, domain-driven APIs" },
  { id: "cloud", title: "Cloud & DevOps", blurb: "GCP, Docker, CI/CD, Vercel, production ops" },
  { id: "saas", title: "SaaS & ERP Architecture", blurb: "Multi-tenancy, CRM, estimating, operations" },
  { id: "ai", title: "AI & Agentic Systems", blurb: "RAG, pgvector, agents, OpenAI, Cursor" },
  { id: "security", title: "Security & Compliance", blurb: "ISO 27001, SOC 2, zero-trust, RBAC" },
  { id: "integrations", title: "Integrations", blurb: "Stripe, OAuth, webhooks, CRM & comms APIs" },
  { id: "production", title: "Production Engineering", blurb: "Nginx, queues, monitoring, real incident work" },
];
