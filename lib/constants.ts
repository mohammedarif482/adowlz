export const BRAND = {
  name: "adowlz",
  tagline: "Where ideas spread their wings.",
  description:
    "Adowlz crafts cinematic stories and bold visual identities that move brands forward — from concept to culture-shifting impact.",
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

export const HERO = {
  eyebrow: "Cinematic · Design · Tech",
  headline: "Where Ideas Spread Their Wings",
  subheading:
    "We craft cinematic stories and bold visual identities that move brands forward — from concept to culture-shifting impact.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/services" },
  metrics: "34+ years combined expertise · 50+ projects shipped",
} as const;

export const MAJOR_CLIENTS = [
  "Canara Bank",
  "Swiggy",
  "Pepsico",
  "Birla Estates",
  "Fidelity",
  "Practo",
] as const;

export const SERVICES = [
  {
    number: "01",
    slug: "cinematic-storytelling",
    title: "Cinematic Storytelling",
    desc: "TVCs, DVCs, and brand films that move hearts. From Canara Bank to Swiggy — we craft narratives that resonate globally.",
  },
  {
    number: "02",
    slug: "visual-identity",
    title: "Visual Identity & Design",
    desc: "Logos, packaging, social assets, billboards, hoardings. Bold creativity that speaks volumes and stands out.",
  },
  {
    number: "03",
    slug: "web-digital",
    title: "Web & Digital Experiences",
    desc: "Websites that captivate with beauty, engage with ease, and deliver purpose-driven performance.",
  },
  {
    number: "04",
    slug: "ai-software",
    title: "AI & Intelligent Software",
    desc: "Smart apps, automation, and personalized digital platforms that scale and adapt to your needs.",
  },
  {
    number: "05",
    slug: "events-activations",
    title: "Events & Activations",
    desc: "Brand experiences and collaborative initiatives where ideas, people, and vision come together.",
  },
  {
    number: "06",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    desc: "Strategy, media planning, analytics, and campaigns that drive visibility, traffic, and real results.",
  },
] as const;

export const WHY_US = [
  {
    title: "Experience",
    body: "34+ years combined expertise across creative, tech, and brand strategy. We know what works because we've done it at scale.",
  },
  {
    title: "Innovation",
    body: "We don't follow trends — we create them. AI-powered tools, cinematic production, intelligent automation. Always one step ahead.",
  },
  {
    title: "Transparency",
    body: "No jargon. No bloat. You'll know exactly what you're paying for and why it works.",
  },
  {
    title: "Client-Centric",
    body: "We partner with you, not for you. Your vision, our craft. Lasting relationships built on trust.",
  },
] as const;

export const TEAM = [
  {
    name: "Arya Biju",
    role: "Founder & CEO",
    credentials: [
      "8+ years in design direction",
      "Led visual identity for 50+ brands",
    ],
  },
  {
    name: "Anand Lal SS",
    role: "Co-Founder",
    credentials: [
      "MNC strategy background → creative storytelling",
      "Brand narrative specialist",
    ],
  },
  {
    name: "Deepu Cherian",
    role: "Digital Head",
    credentials: [
      "10+ years software engineering",
      "Scaled platforms for 100k+ users",
    ],
  },
  {
    name: "SJ Ajesh",
    role: "Associate Cinematographer",
    credentials: [
      "In the craft since 2013",
      "30+ cinematic projects — ads, features, commercials",
    ],
  },
] as const;

export const ABOUT_INTRO = {
  headline: "At Adowlz, Ideas Spread Their Wings",
  paragraphs: [
    "With the sharp vision of owls and creative precision, we craft bold work that reaches across the globe — rooted in connection, inspired by nature.",
    "We don't just deliver creative solutions. We build lasting partnerships with brands that want to grow, evolve, and make an impact.",
  ],
} as const;

export type Service = (typeof SERVICES)[number];
export type WhyUsItem = (typeof WHY_US)[number];
export type TeamMemberData = (typeof TEAM)[number];
