import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: siteConfig.contactPage.hero.subheading,
};

export default function ContactPage() {
  const { contactPage, contact, social } = siteConfig;
  const { hero, offices } = contactPage;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Get in touch
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          Let&rsquo;s Make{" "}
          <span className="text-accent-gradient">Magic Happen</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 sm:text-xl">
          {hero.subheading}
        </p>
      </Section>

      <Section tone="bone" id="contact-form">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                Studios
              </h2>
              <ul className="mt-4 space-y-4">
                {offices.map((office) => (
                  <li
                    key={office.city}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <p className="text-base font-semibold tracking-tight">
                      {office.city}
                    </p>
                    <p className="mt-1 text-sm text-foreground/70">
                      {office.address}
                    </p>
                    <div className="mt-3 flex flex-col gap-1 text-sm">
                      <a
                        className="text-foreground/80 hover:text-accent"
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      >
                        {office.phone}
                      </a>
                      <a
                        className="text-foreground/80 hover:text-accent"
                        href={`mailto:${office.email}`}
                      >
                        {office.email}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                Follow along
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="ink" className="pb-32">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
              Prefer email?
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {contact.email}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 text-bone/70 sm:items-end">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-4 text-base font-medium text-accent-foreground transition hover:opacity-90"
            >
              Open in mail
              <span aria-hidden>→</span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="text-sm hover:text-bone"
            >
              Or call {contact.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
