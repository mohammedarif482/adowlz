import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";
import { SERVICES, SERVICE_DETAILS, type ServiceSlug } from "@/lib/constants";

type Params = { slug: string };

function findService(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  const detail = SERVICE_DETAILS[service.slug as ServiceSlug];
  return detail ? { service, detail } : null;
}

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const match = findService(slug);
  if (!match) return { title: "Services" };
  return {
    title: match.service.title,
    description: match.service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const match = findService(slug);
  if (!match) notFound();

  const { service, detail } = match;
  const otherServices = siteConfig.services.filter((s) => s.slug !== slug);

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Services / {service.number}
        </p>
        <div className="mt-6 flex items-start gap-6">
          <service.icon className="text-6xl text-accent sm:text-7xl" aria-hidden />
          <div>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/75 sm:text-xl">
              {service.desc}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="bone" id="overview">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Overview
          </p>
          <p className="mt-6 text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            {detail.longDesc}
          </p>
        </div>
      </Section>

      <Section tone="ink" id="approach">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
            Our approach
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Three steps. No surprises.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {detail.approach.map((step, i) => (
            <li
              key={step}
              className="flex flex-col gap-4 rounded-3xl border border-bone/10 bg-bone/[0.03] p-8 sm:p-10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-semibold text-accent-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-bone/85">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="bone" id="clients">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Trusted by
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Brands that have shipped this work with us.
          </h2>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {detail.clients.map((client) => (
            <li
              key={client}
              className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-foreground/80"
            >
              {client}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" id="more">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              More from the studio
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Explore the other crafts.
            </h2>
          </div>
          <Button href="/services" variant="ghost" size="md">
            All services
          </Button>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
            <li key={s.slug}>
              <a
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50"
              >
                <span className="flex items-center gap-3">
                  <s.icon className="text-xl text-accent" aria-hidden />
                  <span className="text-base font-medium">{s.title}</span>
                </span>
                <span
                  aria-hidden
                  className="text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent-gradient p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Tell us where you are and where you want to be. We&rsquo;ll come back
                with a plan.
              </p>
            </div>
            <Button href="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
