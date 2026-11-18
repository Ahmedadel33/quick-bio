import type { ProfileVariantKey } from "@/lib/variant";
import type { VCardInfo } from "@/lib/vcard";

export interface InstitutionLogo {
  name: string;
  src: string;
  widthClass: string;
}

export interface SkillTag {
  label: string;
  highlighted?: boolean;
}

export interface ProofMetric {
  value: string;
  label: string;
}

export interface CurrentRoleHighlight {
  title: string;
  summary: string;
}

export interface ActionLinkItem {
  id: "resume" | "linkedin" | "portfolio";
  title: string;
  subtitle: string;
  href: string;
  downloadName?: string;
}

export interface QuickContactItem {
  id: "github" | "whatsapp" | "email" | "website";
  label: string;
  href: string;
}

export interface ProfileVariant {
  pageTitle: string;
  role: string;
  locationLine: string;
  bio: string;
  fellowshipBadge: string;
  skills: SkillTag[];
  metrics: ProofMetric[];
  currentRole: CurrentRoleHighlight;
  links: ActionLinkItem[];
  vcard: VCardInfo;
}

export const SHARED_PROFILE = {
  name: "Ahmed Adel ELtantawy",
  availabilityText: "Available for opportunities",
  heroImage: "/profile-photo.jfif",
  accreditationFooter: "DiGiLiANS • MCIT • Military Academy • NTI",
  institutions: [
    {
      name: "DiGiLiANS",
      src: "/logos/digilians.png",
      widthClass: "w-16",
    },
    {
      name: "MCIT",
      src: "/logos/mcit.png",
      widthClass: "w-16",
    },
    {
      name: "Military Academy",
      src: "/logos/military-academy.png",
      widthClass: "w-9",
    },
    {
      name: "NTI",
      src: "/logos/nti.png",
      widthClass: "w-14",
    },
  ] satisfies InstitutionLogo[],
  quickContacts: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Ahmedadel33",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/201065013789",
    },
    {
      id: "email",
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.a.tantawi%40gmail.com",
    },
    {
      id: "website",
      label: "Personal Website",
      href: "https://website-porto-beta.vercel.app/",
    },
  ] satisfies QuickContactItem[],
} as const;

const BASE_VCARD = {
  fullName: "Ahmed Adel ELtantawy",
  organization: "MCIT • Digilians Initiative",
  phone: "+201065013789",
  email: "ahmed.a.tantawi@gmail.com",
  url: "https://website-porto-beta.vercel.app",
  address: ";;Cairo;Egypt;;;",
  fileName: "Ahmed-Adel-ELtantawy.vcf",
};

export const PROFILE_VARIANTS: Record<ProfileVariantKey, ProfileVariant> = {
  fullstack: {
    pageTitle: "Ahmed Adel ELtantawy | Full-Stack Developer",
    role: "Full-Stack Developer | Node.js, React & AWS",
    locationLine: "Cairo, Egypt",
    bio: "Building resilient Node.js backends & modern React apps.",
    fellowshipBadge: "AWS Certified",
    skills: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "PostgreSQL" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "Dual AWS", label: "DVA & CLF" },
      { value: "47+ Routes", label: "Multi-Tenant API" },
    ],
    currentRole: {
      title: "Full-Stack Engineer Intern @ Darwish & co",
      summary:
        "Designing a Node.js and React processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and standardize inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Full-Stack CV • PDF",
        href: "/cv/fullstack-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Fullstack Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/ahmed-adel-5199972b9",
      },
      {
        id: "portfolio",
        title: "Portfolio & Projects",
        subtitle: "NEXUS-CRM, MediMind & more",
        href: "https://website-porto-beta.vercel.app/#projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Full-Stack Developer | Software Engineer Intern @ Darwish & co",
      note: "Dual AWS Certified (DVA-C02 & CLF-C02) • Node.js, React & Cloud",
    },
  },
  backend: {
    pageTitle: "Ahmed Adel ELtantawy | Backend & Cloud Engineer",
    role: "Backend & Cloud Engineer | Node.js & AWS",
    locationLine: "Cairo, Egypt",
    bio: "Multi-tenant APIs, Redis caching, RBAC & AWS ECS systems.",
    fellowshipBadge: "Dual AWS Certified",
    skills: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
      { label: "Redis" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "47+ Routes", label: "NEXUS-CRM API" },
      { value: "Dual AWS", label: "DVA & CLF" },
    ],
    currentRole: {
      title: "Backend Engineer Intern @ Darwish & co",
      summary:
        "Building a Node.js processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and prepare standardized pipeline inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Back-End CV • PDF",
        href: "/cv/backend-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Backend Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/ahmed-adel-5199972b9",
      },
      {
        id: "portfolio",
        title: "Backend Case Studies",
        subtitle: "NEXUS-CRM (47+ routes) & MediMind",
        href: "https://website-porto-beta.vercel.app/#projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Backend & Cloud Engineer | Software Engineer Intern @ Darwish & co",
      note: "Node.js, TypeScript, PostgreSQL, Redis, Terraform & Dual AWS Certified",
    },
  },
  devops: {
    pageTitle: "Ahmed Adel ELtantawy | DevOps Engineer",
    role: "DevOps Engineer | AWS, Docker & CI/CD",
    locationLine: "Cairo, Egypt",
    bio: "Deploying, securing, and maintaining applications on Linux and AWS.",
    fellowshipBadge: "AWS Certified Cloud Practitioner",
    skills: [
      { label: "GitHub Actions" },
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "AWS", highlighted: true },
      { label: "Linux" },
    ],
    metrics: [
      { value: "AWS CCP", label: "Cloud Practitioner" },
      { value: "CI/CD", label: "GitHub Actions" },
    ],
    currentRole: {
      title: "Freelance Full Stack / DevOps-Oriented Developer",
      summary:
        "Deploying and maintaining production apps on Linux, configuring Nginx and PM2, building GitHub Actions CI/CD workflows, and managing AWS resources.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "DevOps Engineer CV • PDF",
        href: "/cv/Ahmed_Adel_Tantawi_DevOps.pdf",
        downloadName: "Ahmed_Adel_Tantawi_DevOps.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/ahmed-adel-5199972b9",
      },
      {
        id: "portfolio",
        title: "DevOps Project",
        subtitle: "GitHub Actions & CI/CD",
        href: "https://github.com/Ahmedadel33/git-github",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "DevOps Engineer | Freelance Full Stack Developer",
      note: "AWS, Docker, Kubernetes, Linux, Nginx & GitHub Actions",
    },
  },
  frontend: {
    pageTitle: "Ahmed Adel ELtantawy | Front-End Engineer",
    role: "Front-End Engineer | React, Next.js & TypeScript",
    locationLine: "Cairo, Egypt",
    bio: "Fast, accessible React 19, Next.js PWAs & design systems.",
    fellowshipBadge: "Meta Front-End",
    skills: [
      { label: "React 19" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "PWA", highlighted: true },
    ],
    metrics: [
      { value: "React 19", label: "& Next.js PWA" },
      { value: "Meta Cert", label: "Front-End" },
    ],
    currentRole: {
      title: "Front-End Engineer Intern @ Darwish & co",
      summary:
        "Designing a React & Node.js interface and processing engine to inspect digitization/OCR deliveries, surface metadata inconsistencies, and standardize outputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Front-End CV • PDF",
        href: "/cv/frontend-cv.pdf",
        downloadName: "Ahmed Adel ELtantawy - Frontend Developer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/ahmed-adel-5199972b9",
      },
      {
        id: "portfolio",
        title: "UI & Web Projects",
        subtitle: "React & Next.js PWA",
        href: "https://github.com/Ahmedadel33",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Front-End Engineer | Software Engineer Intern @ Darwish & co",
      note: "React 19, Next.js, TypeScript, Tailwind CSS & Meta Front-End Certified",
    },
  },
  software: {
    pageTitle: "Ahmed Adel ELtantawy | Software Engineer",
    role: "Software Engineer | Systems & Cloud",
    locationLine: "Cairo, Egypt",
    bio: "Building multi-tenant SaaS backends, React apps & AWS cloud.",
    fellowshipBadge: "AWS Certified",
    skills: [
      { label: "TypeScript" },
      { label: "Node.js" },
      { label: "React" },
      { label: "Docker" },
      { label: "AWS", highlighted: true },
    ],
    metrics: [
      { value: "47+ Routes", label: "Multi-Tenant SaaS" },
      { value: "Dual AWS", label: "DVA & CLF" },
    ],
    currentRole: {
      title: "Software Engineer Intern @ Darwish & co",
      summary:
        "Working on the design of a Node.js and React processing engine to validate digitization/OCR deliveries, detect file-structure and metadata inconsistencies, and prepare standardized inputs.",
    },
    links: [
      {
        id: "resume",
        title: "My Resume (CV)",
        subtitle: "Software Engineer CV • PDF",
        href: "/cv/software-engineer-cv.pdf",
        downloadName: "Abdelrahman Mahmoud - Software Engineer.pdf",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile",
        subtitle: "Connect & network",
        href: "https://www.linkedin.com/in/ahmed-adel-5199972b9",
      },
      {
        id: "portfolio",
        title: "Systems & Projects",
        subtitle: "SaaS, Cloud & C++ HPC",
        href: "https://website-porto-beta.vercel.app/#projects",
      },
    ],
    vcard: {
      ...BASE_VCARD,
      title: "Software Engineer | Intern @ Darwish & co",
      note: "Distributed Systems, C++ HPC, TypeScript & Dual AWS Certified",
    },
  },
};
