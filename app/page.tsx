import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyUs } from "@/components/WhyUs";
import { siteConfig } from "@/lib/content";

export default function HomePage() {
  const { hero, services, whyUs, clients, testimonials, cta } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 pb-4 sm:pt-32 sm:pb-6" innerClassName="relative isolate">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="relative z-10 mt-6 max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
          Where Ideas{" "}
          <span className="text-accent">Spread Their Wings</span>.
        </h1>
        <p className="relative z-10 mt-8 max-w-2xl text-lg text-muted sm:text-xl">
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

        <div className="absolute right-4 top-0 -z-10 hidden w-[32%] max-w-[420px] lg:block xl:right-8">
          <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-bone/5 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i1-c.pinimg.com/1200x/b1/59/41/b15941c03dd6459cf76302adbf079255.jpg"
              alt="ADOWLZ hero — cinematic creative work"
              className="h-full w-full object-cover transition duration-700 sm:grayscale group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
          <div className="group absolute -bottom-10 -left-12 w-36 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border lg:w-40 xl:w-48">
            <div className="aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.pinimg.com/736x/2b/d9/6b/2bd96b04838c0e74fb3f2b234c4edb18.jpg"
                alt="Featured work — visual identity"
                className="h-full w-full object-cover transition duration-700 sm:grayscale group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10 pb-0 sm:pt-12">
          <p className="text-xs uppercase tracking-widest text-muted">
            Trusted by
          </p>
          <div
            className="marquee mt-8 overflow-x-auto overflow-y-hidden py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:py-6 [&::-webkit-scrollbar]:hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <ul className="animate-marquee flex w-max items-center gap-x-8">
              {Array.from({ length: 6 })
                .flatMap(() => clients)
                .map((src, i) => (
                  <li
                    key={`${src}-${i}`}
                    aria-hidden={i >= clients.length}
                    className="group shrink-0"
                  >
                    <div className="aspect-square h-24 w-24 overflow-hidden rounded-[22%] ring-1 ring-border sm:h-32 sm:w-32">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 sm:grayscale group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
                    </div>
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

      <Section tone="ink" id="behind-the-craft">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
              Behind the Craft
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Shaping Experiences That Make Brands Unforgettable.
            </h2>
          </div>
          <div className="sm:max-w-sm sm:text-right">
            <p className="text-lg text-bone/80">
              A multidisciplinary studio crafting cinematic stories, identities, and digital products that solve real-world problems.
            </p>
            <div className="mt-8 flex items-center gap-4 sm:justify-end">
              <p className="text-sm uppercase tracking-[0.18em] text-bone/50">
                Let&apos;s build something
                <br />
                meaningful together
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient py-1.5 pl-5 pr-1.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                Get in touch
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center text-accent-foreground transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {(() => {
          const craftItems = [
            {
              src: "https://i.pinimg.com/736x/cc/d1/9e/ccd19e6f31b6940c2ca1d7aa7bd544ca.jpg",
              alt: "Cinema camera on set — cinematic storytelling",
              caption: "Video Production",
            },
            {
              src: "https://i1-c.pinimg.com/736x/fc/3e/31/fc3e31e1b28612f0abfd03b22ed7f843.jpg",
              alt: "Designer sketching a visual identity system",
              caption: "Product Shoot",
            },
            {
              src: "https://i1-c.pinimg.com/736x/79/63/41/796341af10ce4015a3e703e60efbd31a.jpg",
              alt: "Code on screen — intelligent software",
              caption: "Mobile & Web Apps",
            },
            {
              src: "https://i.pinimg.com/736x/38/6c/23/386c2366c091b9b63eb2240b86e7a713.jpg",
              alt: "AI-powered software interface",
              caption: "AI Powered Software",
            },
            {
              src: "https://i1-c.pinimg.com/1200x/4e/29/ad/4e29adb2e8f359f48d34be94c9c9cc97.jpg",
              alt: "Live event production",
              caption: "Events",
            },
            {
              src: "https://i1-c.pinimg.com/1200x/0f/a1/ca/0fa1ca1b1305aa9598828c25706da65d.jpg",
              alt: "Brand identity system",
              caption: "Branding",
            },
            {
              src: "https://i1-c.pinimg.com/1200x/c4/3a/f6/c43af6f061208a8d93ae8e0b0085ffd2.jpg",
              alt: "Digital marketing campaign",
              caption: "Digital marketing",
            },
          ];
          return (
            <>
              <ul className="mt-16 grid gap-4 sm:hidden">
                {craftItems.map((item) => (
                  <li
                    key={item.caption}
                    className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-bone/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-bone backdrop-blur">
                      {item.caption}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="marquee mt-16 hidden overflow-x-auto overflow-y-hidden py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:block [&::-webkit-scrollbar]:hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
                }}
              >
                <ul className="animate-marquee flex w-max items-stretch gap-6">
                  {Array.from({ length: 6 })
                    .flatMap(() => craftItems)
                    .map((item, i) => (
                      <li
                        key={`${item.caption}-${i}`}
                        aria-hidden={i >= craftItems.length}
                        className="group relative aspect-[2/3] w-[260px] shrink-0 overflow-hidden rounded-3xl bg-bone/5 md:w-[320px] lg:w-[360px]"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 grayscale group-hover:scale-[1.03] group-hover:grayscale-0"
                        />
                        <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-bone backdrop-blur">
                          {item.caption}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </>
          );
        })()}
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

      <Section tone="bone" className="py-8 sm:py-12">
        <div className="overflow-hidden rounded-3xl bg-accent-gradient p-10 text-accent-foreground sm:p-16">
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

      <Section tone="bone" className="py-8 pb-16 sm:py-12 sm:pb-20">
        <div
          className="overflow-hidden rounded-3xl bg-contain bg-center bg-no-repeat p-6 text-accent-foreground sm:p-10 lg:p-16"
          style={{
            backgroundImage: "url('/moc/mocbg.png')",
            aspectRatio: "4096 / 1045",
          }}
        >
          <div className="flex h-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/moc/moctitle.png"
                alt={cta.title}
                className="h-auto w-full max-w-sm sm:max-w-md"
              />
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
