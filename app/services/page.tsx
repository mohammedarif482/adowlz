import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrackedLink } from "@/components/TrackedLink";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six disciplines under one roof — cinematic storytelling, visual identity, web, AI software, events, and digital growth.",
};

export default function ServicesPage() {
  const { services, portfolio, projectDisciplines } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          What we do
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          Six crafts.{" "}
          <span className="text-accent-gradient">One studio with wings.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 sm:text-xl">
          Pick a discipline below to see how we work, who we&rsquo;ve made it for, and
          what to expect when you brief us.
        </p>
      </Section>

      <Section tone="ink" id="services-grid">
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <TrackedLink
                kind="service"
                source="services_grid"
                serviceSlug={s.slug}
                serviceTitle={s.title}
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col gap-6 bg-ink p-8 transition-colors hover:bg-bone/[0.04] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <s.icon className="text-3xl text-accent" aria-hidden />
                  <span
                    aria-hidden
                    className="text-xl text-bone/40 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </div>
                <span className="text-sm font-medium text-accent">{s.number}</span>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h2>
                <p className="text-bone/70">{s.desc}</p>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bone" id="recent-projects">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Some of our recent projects.
            </h2>
            <p className="mt-6 text-lg text-foreground/75">
              A glimpse at the platforms and products we&rsquo;ve shipped end to
              end — from first wireframe to app store.
            </p>
          </div>
          <Button
            href="/portfolio"
            variant="primary"
            size="md"
            eventLabel="View full portfolio"
            eventSource="services_portfolio"
          >
            View full portfolio
          </Button>
        </div>

        <div className="mt-14">
          <PortfolioGrid projects={portfolio} disciplines={projectDisciplines} />
        </div>
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent-gradient p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Not sure where you fit?
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Tell us about the project. We&rsquo;ll point you to the right craft —
                or the right combination.
              </p>
            </div>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="Start a project"
              eventSource="services_cta"
            >
              Start a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
