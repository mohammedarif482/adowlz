export const BRAND = {
  name: "adowlz",
  tagline: "Marketing, design, and development under one roof.",
  description:
    "adowlz is a full-service studio building brands, campaigns, and products that perform.",
  email: "hello@adowlz.com",
  social: {
    instagram: "https://instagram.com/adowlz",
    linkedin: "https://linkedin.com/company/adowlz",
    twitter: "https://twitter.com/adowlz",
  },
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  team: "/team",
  contact: "/contact",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Team", href: ROUTES.team },
  { label: "Contact", href: ROUTES.contact },
] as const;

export const SERVICES = [
  {
    slug: "marketing",
    title: "Marketing",
    summary:
      "Performance campaigns, paid media, and content that compounds. We obsess over the numbers so growth is never an accident.",
    capabilities: ["Paid media", "SEO", "Content strategy", "Lifecycle"],
  },
  {
    slug: "design",
    title: "Design",
    summary:
      "Brand systems, identities, and interfaces with a point of view. Distinct, considered, and built to scale across every surface.",
    capabilities: ["Brand identity", "Product design", "Design systems", "Motion"],
  },
  {
    slug: "development",
    title: "Development",
    summary:
      "Production-grade web and mobile, engineered for speed and longevity. Modern stacks, clean handoffs, no legacy theatre.",
    capabilities: ["Web apps", "E-commerce", "Mobile", "Platform engineering"],
  },
] as const;
