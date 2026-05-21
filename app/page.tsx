import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyUs } from "@/components/WhyUs";
import { siteConfig } from "@/lib/content";

export default function HomePage() {
  const { hero, services, whyUs, clients, testimonials, cta } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32" innerClassName="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
          Where Ideas{" "}
          <span className="text-accent">Spread Their Wings</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          {hero.subtitle}
        </p>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70">
          {hero.metrics}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} size="lg" variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-xs uppercase tracking-widest text-muted">
            Trusted by
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <li key={c} className="font-medium text-foreground/85">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="ink" id="services">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Six crafts. One studio with wings.
            </h2>
          </div>
          <Button href="/services" variant="primary" size="md">
            See all services
          </Button>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </ul>
      </Section>

      <Section tone="bone" id="why-adowlz">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Why Adowlz
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built on craft, sharpened by experience.
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Four reasons brands from Canara Bank to Swiggy keep coming back.
          </p>
        </div>
        <WhyUs items={whyUs} />
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
