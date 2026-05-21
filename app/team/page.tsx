import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the cinematographers, designers, engineers, and strategists behind Adowlz.",
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  const { team } = siteConfig;

  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          The people
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          Our <span className="text-accent-gradient">Gifted Minds</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 sm:text-xl">
          Young, approachable, enthusiastic — and genuinely talented. Four
          practitioners with decades of combined craft, hands on every project.
        </p>
      </Section>

      <Section tone="bone" id="team-grid">
        <ul className="grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 sm:p-10"
            >
              <div className="flex items-start gap-5">
                <div
                  aria-hidden
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-semibold text-accent-foreground"
                >
                  {initials(member.name)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-widest text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-foreground/60">
                    {member.credentials.join(" · ")}
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-foreground/80">
                {member.bio}
              </p>

              <ul className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {member.social.linkedin ? (
                  <li>
                    <a
                      href={member.social.linkedin}
                      className="text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      LinkedIn
                    </a>
                  </li>
                ) : null}
                {member.social.instagram ? (
                  <li>
                    <a
                      href={member.social.instagram}
                      className="text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Instagram
                    </a>
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" id="culture">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            How we work
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            A studio without hand-offs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">
            We&rsquo;re scrappy and curious by default. We work without titles getting in
            the way, take ownership end-to-end, and would rather ship something honest
            than something safe. The studio is built on the assumption that the best
            ideas come from the people doing the work — and that means everyone, on
            every project.
          </p>
        </div>
      </Section>

      <Section tone="bone" className="pb-32">
        <div className="overflow-hidden rounded-3xl bg-accent-gradient p-10 text-accent-foreground sm:p-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Want to work with us?
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Bring the brief. We&rsquo;ll bring the team that ships it.
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
