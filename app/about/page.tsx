import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutPage.hero.subheading,
};

export default function AboutPage() {
  const { aboutPage, services } = siteConfig;
  const { hero, story, impact, vision } = aboutPage;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          About Adowlz
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          At Adowlz,{" "}
          <span className="text-accent">Ideas Spread Their Wings</span>.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-foreground/75 sm:text-xl">
          {hero.subheading}
        </p>
      </Section>

      <Section tone="bone" id="story">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Our story
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built by people who believe ideas have wings.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {story.map((paragraph) => (
            <p key={paragraph} className="text-base text-foreground/80 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="ink" id="craft">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
            Our craft spans
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Six disciplines. One studio.
          </h2>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="flex flex-col gap-3 bg-ink p-8 sm:p-10">
              <span className="text-2xl" aria-hidden>
                {s.icon}
              </span>
              <span className="text-sm font-medium text-accent">{s.number}</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {s.title}
              </h3>
              <p className="text-sm text-bone/70">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bone" id="impact">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Impact
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Years of craft, measured in outcomes.
          </h2>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((stat) => (
            <li
              key={stat.label}
              className="rounded-3xl border border-border bg-surface p-8"
            >
              <p className="text-5xl font-semibold tracking-tight text-accent sm:text-6xl">
                {stat.number}
              </p>
              <p className="mt-4 text-sm uppercase tracking-widest text-foreground/70">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" id="vision">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Our vision
          </p>
          <p className="mt-8 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            {vision}
          </p>
        </div>
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Work with us.
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Bring the brief. We&rsquo;ll bring the vision, the craft, and the team that ships.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:border-accent-foreground hover:bg-accent-foreground/10">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
