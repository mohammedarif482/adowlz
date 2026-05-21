import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TeamMember } from "@/components/TeamMember";
import { ABOUT_INTRO, HERO, SERVICES, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_INTRO.paragraphs[0],
};

export default function AboutPage() {
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
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {ABOUT_INTRO.paragraphs.map((p) => (
            <p key={p} className="text-lg text-foreground/80 sm:text-xl">
              {p}
            </p>
          ))}
        </div>
        <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70">
          {HERO.metrics}
        </p>
      </Section>

      <Section tone="ink" id="craft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bone/60">
              Our craft spans
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              From frame one to launch day.
            </h2>
          </div>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li
              key={s.slug}
              className="flex flex-col gap-3 bg-ink p-8 sm:p-10"
            >
              <span className="text-sm font-medium text-accent">{s.number}</span>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {s.title}
              </h3>
              <p className="text-sm text-bone/70">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="bone" id="team">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            The people
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A senior team, hands on every project.
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Four practitioners. Decades of craft. No hand-offs to junior teams.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </ul>
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
            <Button href="/contact" variant="secondary" size="lg">
              Start a project
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
