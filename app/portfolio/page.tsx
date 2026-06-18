import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Platforms and products Adowlz has shipped end to end — mobile apps, web platforms, and admin consoles built for real businesses.",
};

export default function PortfolioPage() {
  const { portfolio, projectDisciplines } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Our work
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          Ideas we&rsquo;ve helped{" "}
          <span className="text-accent-gradient">take flight.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 sm:text-xl">
          A look at the platforms and products we&rsquo;ve built end to end —
          from first wireframe to app store, shaped by craft and built to
          scale.
        </p>
      </Section>

      <Section tone="bone" id="portfolio-grid">
        <PortfolioGrid projects={portfolio} disciplines={projectDisciplines} />
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent-gradient p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Got a project in mind?
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Tell us about it. We&rsquo;ll show you how we&rsquo;d bring it
                to life.
              </p>
            </div>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              eventLabel="Start a project"
              eventSource="portfolio_cta"
            >
              Start a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
