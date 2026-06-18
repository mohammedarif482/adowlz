import {
  AiOutlineGift,
  AiOutlineLineChart,
  AiOutlineVideoCamera,
  AiOutlineCode,
  AiOutlineHighlight,
  AiOutlineRobot,
} from "react-icons/ai";

export const BRAND = {
  name: "adowlz",
  tagline: "Where ideas spread their wings.",
  description:
    "Adowlz crafts cinematic stories and bold visual identities that move brands forward — from concept to culture-shifting impact.",
  email: "hello@adowlz.com",
  social: {
    instagram: "https://www.instagram.com/adowlz/",
    linkedin: "https://www.linkedin.com/company/adowlz/posts/?feedView=all",
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
    "We create powerful advertising, build digital experiences, and integrate cutting-edge technology to help brands grow, engage, and lead.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/services" },
  metrics: "34+ years combined expertise · 23+ projects shipped",
} as const;

export const MAJOR_CLIENTS = [
  "https://i.pinimg.com/736x/c1/ef/2e/c1ef2e91b95eac43bc00afbd580d23a3.jpg",
  "https://cdn.brandfetch.io/domain/swiggy.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
  "https://cdn.brandfetch.io/domain/pepsico.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
  "https://cdn.brandfetch.io/domain/birlaestates.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
  "https://cdn.brandfetch.io/domain/fidelity.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
  "https://cdn.brandfetch.io/domain/practo.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
] as const;

export const SERVICES = [
  {
    number: "01",
    slug: "cinematic-storytelling",
    title: "Cinematic Storytelling",
    desc: "TVCs, DVCs, and brand films that move hearts. From Canara Bank to Swiggy — we craft narratives that resonate globally.",
    icon: AiOutlineVideoCamera,
  },
  {
    number: "02",
    slug: "visual-identity",
    title: "Visual Identity & Design",
    desc: "Logos, packaging, social assets, billboards, hoardings. Bold creativity that speaks volumes and stands out.",
    icon: AiOutlineHighlight,
  },
  {
    number: "03",
    slug: "web-digital",
    title: "Web & Digital Experiences",
    desc: "Websites that captivate with beauty, engage with ease, and deliver purpose-driven performance.",
    icon: AiOutlineCode,
  },
  {
    number: "04",
    slug: "ai-software",
    title: "AI & Intelligent Software",
    desc: "Smart apps, automation, and personalized digital platforms that scale and adapt to your needs.",
    icon: AiOutlineRobot,
  },
  {
    number: "05",
    slug: "events-activations",
    title: "Events & Activations",
    desc: "Brand experiences and collaborative initiatives where ideas, people, and vision come together.",
    icon: AiOutlineGift,
  },
  {
    number: "06",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    desc: "Strategy, media planning, analytics, and campaigns that drive visibility, traffic, and real results.",
    icon: AiOutlineLineChart,
  },
] as const;

export const PROJECT_DISCIPLINES = [
  "Mobile App Development",
  "Video Production",
  "Web Design & Development",
  "Digital Marketing",
  "Brand Identity Design",
  "E-commerce Solutions",
  "AI & Intelligent Software",
] as const;

export type PortfolioMedia =
  | { type: "image"; src: string; width: number; height: number }
  | { type: "video"; src: string; width: number; height: number };

export type PortfolioLinks = Partial<Record<"ios" | "android" | "web", string>>;

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  media: PortfolioMedia;
  tags: string[];
  disciplines: string[];
  links: PortfolioLinks;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "hango",
    title: "Hango",
    category: "Social Discovery & Activities App",
    desc: "Hango connects you with people in your area through real-world activities and experiences. Whether you're new in town, looking to explore a hobby, or simply want to meet like-minded people — Hango makes it easy.",
    media: { type: "image", src: "/portfolio/Hango.png", width: 1226, height: 1223 },
    tags: ["Mobile App", "iOS & Android", "Admin Dashboard", "Web App"],
    disciplines: ["Mobile App Development", "Web Design & Development"],
    links: { ios: "#", android: "#", web: "#" },
  },
  {
    slug: "bookwie",
    title: "Bookwie",
    category: "Salon & Wellness Booking Platform",
    desc: "An end-to-end booking ecosystem for salons and wellness studios — customer app, vendor dashboard, and admin console working in lockstep to turn walk-ins into scheduled, recurring revenue.",
    media: { type: "image", src: "/portfolio/Bookwie.png", width: 1231, height: 1715 },
    tags: ["Mobile App", "iOS & Android", "Vendor Dashboard", "Admin Panel"],
    disciplines: ["Mobile App Development", "Web Design & Development", "E-commerce Solutions"],
    links: { ios: "#", android: "#", web: "#" },
  },
  {
    slug: "bookwie-bts",
    title: "Bookwie — Behind the Scenes",
    category: "Brand Film & Product Shoot",
    desc: "A successful shoot completed for Bookwie\nFrom concept to production, we helped bring the brand's story to life through engaging visual content designed to boost visibility, engagement, and growth.",
    media: { type: "video", src: "/portfolio/shoot-bookwie-BTS.mp4", width: 720, height: 1280 },
    tags: ["Video Production", "BTS", "Brand Film"],
    disciplines: ["Video Production", "Digital Marketing"],
    links: {},
  },
];

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
    role: "Founder & Art Director",
    credentials: [
      "8+ years in design direction",
      "Led visual identity for 23+ brands",
    ],
    image: "/team/arya.png",
    bio: "Arya started Adowlz to build the studio she wanted to work at — one where art direction has a seat at the table from day one. She has led identity work for fifty-plus brands and keeps a hand on every project that leaves the door.",
    expertise: ["Art Direction", "Brand Identity", "Packaging", "Creative Strategy"],
    social: { linkedin: "https://www.linkedin.com/in/arya-biju-674463143/", instagram: "#" },
  },
  {
    name: "Mohammed Arif",
    role: "Technology Lead",
    credentials: [
      "Builder & problem solver",
      "AI, software, and digital infrastructure",
    ],
    image: "/team/arif.png",
    bio: "Arif leads technology at Adowlz — from web platforms to AI-powered products. He has built and shipped across SaaS, consumer apps, and digital infrastructure, and keeps the bridge between creative ambition and technical execution shorter than most.",
    expertise: ["AI & Software", "Web Development", "Product Strategy", "Digital Infrastructure"],
    social: { linkedin: "https://www.linkedin.com/in/mohammedarif02/", instagram: "#" },
  },
  {
    name: "SJ Ajesh",
    role: "Associate Cinematographer",
    credentials: [
      "Cinematographer since 2013",
      "30+ commercial & feature projects",
    ],
    image: "/team/ajesh.png",
    bio: "Ajesh has been behind the camera since 2013, on everything from commercials to feature films. He brings a cinematographer's eye to brand work — long takes, considered light, and a quiet refusal to let a frame go out the door if it isn't right.",
    expertise: ["Cinematography", "Lighting", "Direction", "Post"],
    social: { linkedin: "#", instagram: "#" },
  },
] as const;

export const ABOUT_INTRO = {
  headline: "At Adowlz, Ideas Spread Their Wings",
  paragraphs: [
    "With the sharp vision of owls and creative precision, we craft bold work that reaches across the globe — rooted in connection, inspired by nature.",
    "We don't just deliver creative solutions. We build lasting partnerships with brands that want to grow, evolve, and make an impact.",
  ],
} as const;

export const ABOUT_PAGE = {
  hero: {
    headline: "At Adowlz, Ideas Spread Their Wings",
    subheading:
      "A creative studio working at the intersection of cinema, design, and software — out of Dubai, Bangalore, and Cochin.",
  },
  story: [
    "Adowlz was born from a simple belief: that great ideas, like owls, see what others miss — and when they take flight, they carry brands across new horizons. We started with a small studio, a handful of clients who trusted us, and a refusal to make work that looks like everyone else's.",
    "Today we're a multidisciplinary team working across Dubai, Bangalore, and Cochin — cinematographers, designers, engineers, and strategists who collaborate on every brief from frame one. No layers, no hand-offs. The people you meet are the people who make the work.",
    "We've shipped campaigns for Canara Bank, Swiggy, Pepsico and dozens of others, but the brief we love most is the one that comes from a founder with a story they haven't told yet. That's where the wings come in.",
  ],
  impact: [
    { number: "34+", label: "Years of combined expertise" },
    { number: "23+", label: "Projects shipped" },
    { number: "3", label: "Offices across two continents" },
    { number: "100%", label: "Client satisfaction" },
  ],
  vision:
    "We believe in the transformative power of creativity — that a well-told story, a sharp piece of design, or a thoughtfully built product can move markets, shape culture, and give an idea wings it never knew it had.",
} as const;

export const SERVICE_DETAILS = {
  "cinematic-storytelling": {
    longDesc:
      "Every brand has a story worth telling on screen. We craft cinematic narratives — TV commercials, digital videos, and brand films — that make people stop scrolling, lean in, and remember. From script to screen our team works as one production unit, so the vision survives intact from boardroom pitch to final cut.",
    approach: [
      "Concept & Storyboarding — we begin with the story, not the shot list. Every scene is mapped to a brand emotion before a camera moves.",
      "Production Quality — cinema-grade cameras, lighting, and locations. We treat a 30-second ad like a feature film, because the audience does too.",
      "Emotional Resonance — the final cut is tested for what it makes people feel. Recall comes from emotion; emotion comes from craft.",
    ],
    clients: ["Canara Bank", "Swiggy", "Birla Estates", "Pepsico"],
  },
  "visual-identity": {
    longDesc:
      "A brand's visual identity is the first conversation it has with the world. We design systems — logos, type, palettes, packaging, social templates — that hold up across every surface, from billboards in Bangalore to a feed in Brooklyn. Bold without being loud. Distinctive without being difficult.",
    approach: [
      "Discovery & Strategy — we learn the brand's voice and the room it has to grow into before we sketch.",
      "Design System — every mark is built as a system, not a one-off. Logos, type, color, and motion all play in the same band.",
      "Rollout & Stewardship — we hand over a brand book that's used, not shelved, then help the team apply it as the brand scales.",
    ],
    clients: ["Ivorytusk", "Align Architecture", "Practo"],
  },
  "web-digital": {
    longDesc:
      "A website is the only piece of brand work that has to do three things at once: look beautiful, feel effortless, and pay for itself. We build sites that are designed to convert as well as they're designed to be admired — measured in load time, scroll depth, and signed contracts.",
    approach: [
      "UX & Architecture — sitemap, flows, and content order are decided before a pixel is drawn.",
      "Design & Build — hand-crafted in modern stacks like Next.js and Tailwind, with performance and accessibility baked in.",
      "Launch & Iteration — we ship, measure, and improve. The site is a product, not a project.",
    ],
    clients: ["Fidelity", "Ivorytusk", "Practo"],
  },
  "ai-software": {
    longDesc:
      "Software is creative work too. We build intelligent applications — internal tools, customer-facing platforms, and AI-powered workflows — that take the busywork out of growth and put insight back in. Built to scale, designed to feel like the rest of your brand.",
    approach: [
      "Discovery & Prototyping — we map workflows and prototype interactions before we commit to architecture.",
      "Engineering & AI Integration — modern stacks (TypeScript, Python), thoughtful AI integrations, and infrastructure that scales.",
      "Support & Iteration — software is never done. We stay on for monitoring, improvements, and new features.",
    ],
    clients: ["Fidelity", "Practo", "Internal R&D"],
  },
  "events-activations": {
    longDesc:
      "Some brand moments need to be lived, not watched. We design and produce activations — launches, pop-ups, conferences, and brand experiences — that turn audiences into participants and stories into memories you can taste, hear, and walk through.",
    approach: [
      "Concept & Theme — every activation is built around a single, clear creative idea.",
      "Production & Logistics — venue, vendors, talent, and tech. We handle the chaos so the brand can be present.",
      "Capture & Amplification — what happens in the room shouldn't stay there. We document and edit for the channels.",
    ],
    clients: ["Birla Estates", "Pepsico", "Swiggy"],
  },
  "digital-marketing": {
    longDesc:
      "Great work nobody sees is a tragedy. Our growth team plans, places, and measures campaigns that put brand work in front of the right audience at the right cost. Performance media, content strategy, and analytics — wired up so every rupee can be traced.",
    approach: [
      "Strategy & Planning — audience, channel, message, budget. The plan is built before the spend.",
      "Execution & Optimization — daily creative testing, audience refinement, and channel rebalancing.",
      "Reporting & Insight — clear dashboards, monthly reads, and recommendations that drive next quarter's plan.",
    ],
    clients: ["Canara Bank", "Swiggy", "Practo"],
  },
} as const;

export const CONTACT_PAGE = {
  hero: {
    headline: "Let's Make Magic Happen",
    subheading:
      "Tell us about the project — a brief, a budget range, a deadline, or just an idea you can't shake. We come back within two working days with thoughts on how we'd help.",
  },
  offices: [
    {
      city: "Dubai",
      address: "Dubai, UAE",
      phone: undefined as string | undefined,
      email: "hello@adowlz.com",
    },
    {
      city: "Bangalore",
      address: "Indiranagar, Bengaluru, India",
      phone: "+91 85920 44723",
      email: "hello@adowlz.com",
    },
    {
      city: "Cochin",
      address: "Kakkanad, Kochi, India",
      phone: "+91 85920 44723",
      email: "hello@adowlz.com",
    },
  ],
  formFields: [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      required: true,
      placeholder: "Jane Doe",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@brand.com",
    },
    {
      name: "phone",
      label: "Phone (optional)",
      type: "tel",
      required: false,
      placeholder: "+91 ...",
    },
    {
      name: "projectType",
      label: "Project Type",
      type: "select",
      required: true,
      options: [
        "Cinematic Storytelling",
        "Visual Identity & Design",
        "Web & Digital Experiences",
        "AI & Intelligent Software",
        "Events & Activations",
        "Digital Marketing & Growth",
        "Something else",
      ],
    },
    {
      name: "message",
      label: "Tell us about your project",
      type: "textarea",
      required: true,
      rows: 5,
      placeholder: "Brief, budget range, timeline, or an idea you can't shake.",
    },
  ],
} as const;

export type Service = (typeof SERVICES)[number];
export type PortfolioProject = (typeof PORTFOLIO)[number];
export type ProjectDiscipline = (typeof PROJECT_DISCIPLINES)[number];
export type ServiceSlug = Service["slug"];
export type WhyUsItem = (typeof WHY_US)[number];
export type TeamMemberData = (typeof TEAM)[number];
export type ServiceDetail = (typeof SERVICE_DETAILS)[ServiceSlug];
export type Office = (typeof CONTACT_PAGE.offices)[number];
export type ContactFormField = (typeof CONTACT_PAGE.formFields)[number];
