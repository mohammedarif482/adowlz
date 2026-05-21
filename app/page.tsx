import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/lib/content";

export default function HomePage() {
  const { hero, about, services, clients, testimonials, cta } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32" innerClassName="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
          Where creativity thrives{" "}
          <span className="text-accent">under the stars</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} size="lg" variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-8 text-sm text-muted">
          <span className="text-xs uppercase tracking-widest">Trusted by</span>
          {clients.map((c) => (
            <span key={c} className="font-medium text-foreground/80">
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="bone" id="about">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {about.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {about.title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-foreground/80 sm:text-xl">{about.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {about.values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/80"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ink" id="services">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Four services. One night-driven studio.
            </h2>
          </div>
          <Button href="/services" variant="primary" size="md">
            See all services
          </Button>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </ul>
      </Section>

      <Section tone="bone" id="testimonials">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          What clients say
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.attribution}
              className="rounded-3xl border border-border bg-surface p-8 sm:p-10"
            >
              <blockquote className="text-2xl font-medium leading-snug tracking-tight text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest text-muted">
                — {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {cta.title}
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">{cta.body}</p>
            </div>
            <Button href={cta.button.href} variant="secondary" size="lg">
              {cta.button.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
