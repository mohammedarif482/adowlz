import Image from "next/image";
import { AiOutlineAndroid, AiOutlineApple, AiOutlineGlobal } from "react-icons/ai";
import type { siteConfig } from "@/lib/content";
import { TrackedLink } from "@/components/TrackedLink";
import { Button } from "@/components/ui/Button";
import { PortfolioVideo } from "@/components/PortfolioVideo";

type Project = (typeof siteConfig.portfolio)[number];

const PLATFORM_LABELS = {
  ios: "App Store",
  android: "Google Play",
  web: "Website",
} as const;

const PLATFORM_ICONS = {
  ios: AiOutlineApple,
  android: AiOutlineAndroid,
  web: AiOutlineGlobal,
} as const;

type Platform = keyof typeof PLATFORM_LABELS;

export function PortfolioCardHorizontal({ title, category, desc, media, tags, slug, links }: Project) {
  const projectLinks = links as Partial<Record<Platform, string>>;
  const hasPlatformLinks = (Object.keys(PLATFORM_LABELS) as Platform[]).some(
    (platform) => projectLinks[platform],
  );

  return (
    <li className="group overflow-hidden rounded-3xl border border-border bg-surface transition-shadow hover:shadow-xl">
      <div className="flex flex-col sm:flex-row">
        <div className="relative block aspect-[16/10] w-full min-h-[320px] overflow-hidden bg-ink/5 sm:aspect-auto sm:w-2/5 sm:min-h-[540px] sm:shrink-0">
          {media.type === "video" ? (
            <PortfolioVideo src={media.src} className="absolute inset-0" />
          ) : (
            <TrackedLink
              kind="cta"
              source="portfolio_grid"
              label={title}
              href="/portfolio"
              className="absolute inset-0 block"
            >
              <Image
                src={media.src}
                alt={`${title} — ${category}`}
                fill
                className="object-contain p-6 transition duration-700 group-hover:scale-[1.04] sm:p-10"
                sizes="(min-width: 640px) 40vw, 100vw"
              />
            </TrackedLink>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-8 sm:p-10">
          <div className="flex flex-col gap-4">
            <TrackedLink
              kind="cta"
              source="portfolio_grid"
              label={title}
              href="/portfolio"
              className="flex items-start justify-between gap-4"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h3>
              </div>
              <span
                aria-hidden
                className="mt-1 text-xl text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </TrackedLink>

            <p className="text-foreground/75">{desc}</p>

            <ul className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={`${slug}-${tag}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/70"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {hasPlatformLinks && (
              <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4">
                {(Object.keys(PLATFORM_LABELS) as Platform[])
                  .filter((platform) => projectLinks[platform])
                  .map((platform) => {
                    const Icon = PLATFORM_ICONS[platform];
                    return (
                      <TrackedLink
                        key={`${slug}-${platform}`}
                        kind="cta"
                        source="portfolio_card_platform"
                        label={`${title} — ${PLATFORM_LABELS[platform]}`}
                        href={projectLinks[platform]!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 underline-offset-4 transition hover:text-accent hover:underline"
                      >
                        <Icon className="text-lg" aria-hidden />
                        {PLATFORM_LABELS[platform]}
                      </TrackedLink>
                    );
                  })}
              </div>
            )}
          </div>

          <Button
            href="/contact"
            size="md"
            className="mt-auto self-start"
            eventLabel="Start a project"
            eventSource={`portfolio_card_${slug}`}
          >
            Start a project
          </Button>
        </div>
      </div>
    </li>
  );
}
