import {
  ABOUT_INTRO,
  ABOUT_PAGE,
  CONTACT_PAGE,
  HERO,
  MAJOR_CLIENTS,
  SERVICE_DETAILS,
  SERVICES,
  TEAM,
  WHY_US,
} from "./constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adowlz.com";

export const siteConfig = {
  url: SITE_URL,
  brand: {
    name: "ADOWLZ",
    tagline: "Where ideas spread their wings.",
    color: "#ff5126",
  },
  seo: {
    keywords: [
      "creative agency",
      "cinematic storytelling",
      "brand films",
      "TVC production",
      "visual identity",
      "AI software",
      "digital marketing agency",
      "ADOWLZ",
      "Bangalore",
      "Cochin",
      "Dubai",
    ],
    twitterHandle: "@adowlz",
    locale: "en_US",
  },
  nav: [
    { label: "Home", href: "/", priority: 1, changeFrequency: "weekly" as const },
    { label: "About", href: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { label: "Services", href: "/services", priority: 0.8, changeFrequency: "weekly" as const },
    { label: "Team", href: "/team", priority: 0.6, changeFrequency: "monthly" as const },
    { label: "Contact", href: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ],
  hero: {
    eyebrow: HERO.eyebrow,
    title: HERO.headline,
    subtitle: HERO.subheading,
    metrics: HERO.metrics,
    primaryCta: HERO.primaryCta,
    secondaryCta: HERO.secondaryCta,
  },
  about: ABOUT_INTRO,
  aboutPage: ABOUT_PAGE,
  services: SERVICES,
  serviceDetails: SERVICE_DETAILS,
  whyUs: WHY_US,
  team: TEAM,
  clients: MAJOR_CLIENTS,
  testimonials: [
    {
      quote:
        "Adowlz built work that finally felt like us — sharp, cinematic, and unmistakably on-brand.",
      attribution: "Align Architecture",
    },
    {
      quote:
        "The site doesn't just look great — it performs. Conversions are up, and the team made the process effortless.",
      attribution: "Ivorytusk",
    },
  ],
  contact: {
    email: "hello@adowlz.com",
    phone: "+91 85902 044723",
    locations: ["Dubai", "Bangalore", "Cochin"],
  },
  contactPage: CONTACT_PAGE,
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
  cta: {
    title: "Got an idea? Let's give it wings.",
    body: "Tell us about the project. We'll come back with a plan you can actually use.",
    button: { label: "Start a project", href: "/contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
