const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adowlz.com";

export const siteConfig = {
  url: SITE_URL,
  brand: {
    name: "ADOWLZ",
    tagline: "Creativity thrives under the stars.",
    color: "#ff5126",
  },
  seo: {
    keywords: [
      "digital marketing agency",
      "social media management",
      "business development",
      "corporate events",
      "brand design",
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
    { label: "About", href: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { label: "Services", href: "/services", priority: 0.8, changeFrequency: "weekly" as const },
    { label: "Team", href: "/team", priority: 0.6, changeFrequency: "monthly" as const },
    { label: "Contact", href: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ],
  hero: {
    eyebrow: "Marketing · Design · Development",
    title: "Where creativity thrives under the stars.",
    subtitle:
      "A dedicated team delivering top-notch marketing and promotional solutions that make your brand stand out — day or night.",
    primaryCta: { label: "Know More", href: "/about" },
    secondaryCta: { label: "Start a project", href: "/contact" },
  },
  about: {
    eyebrow: "Who we are",
    title: "Young, approachable, enthusiastic — and a little nocturnal.",
    body: "Our offerings range from social media management to digital marketing, content creation, and corporate events. Our night-driven approach ensures focused, innovative strategies tailored to your unique needs. Partner with Adowlz to illuminate your business's success.",
    values: [
      "Creativity",
      "Innovation",
      "Attention to Detail",
      "Storytelling",
      "Brand Identity",
      "Visual Communication",
    ],
  },
  services: [
    {
      number: "01",
      title: "Digital Marketing",
      desc: "Internet and electronic channels working in concert — search, social, and the open web — to lift brand visibility, drive traffic, and grow sales.",
    },
    {
      number: "02",
      title: "Business Development",
      desc: "Strategic partnerships, market expansion, and relationship building that create real growth opportunities and lasting revenue.",
    },
    {
      number: "03",
      title: "Social Media Management",
      desc: "Content creation, scheduling, analytics, and community — building an online presence that actually sounds like your brand.",
    },
    {
      number: "04",
      title: "Corporate Events",
      desc: "Collaborative initiatives and events where ideas, brands, and people come together around shared goals — coordinated end-to-end.",
    },
  ],
  team: [
    { name: "Arya Biju", role: "Founder & CEO", note: "8+ years of experience" },
    { name: "Anand Lal SS", role: "Co-Founder" },
    {
      name: "Deepu Cherian",
      role: "Digital Head",
      note: "Over a decade in software engineering and leadership",
    },
    {
      name: "SJ Ajesh",
      role: "Associate Cinematographer",
      note: "In the craft since 2013",
    },
  ],
  clients: ["Align Architecture", "Ivorytusk"],
  testimonials: [
    {
      quote:
        "Adowlz has been a game-changer for our business. They designed work that finally felt like us.",
      attribution: "Align Architecture",
    },
    {
      quote:
        "Adowlz did an amazing job with our website — not only does it look great, it works.",
      attribution: "Ivorytusk",
    },
  ],
  contact: {
    email: "hello@adowlz.com",
    phone: "+91 85902 044723",
    locations: ["Dubai", "Bangalore", "Cochin"],
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
  ],
  cta: {
    title: "Let's make your brand shine — day or night.",
    body: "Tell us about the project. We'll come back with a plan you can actually use.",
    button: { label: "Start a project", href: "/contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
