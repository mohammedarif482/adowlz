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

export function PortfolioCardPin({ title, category, desc, media, tags, slug, links }: Project) {
  const projectLinks = links as Partial<Record<Platform, string>>;
  const hasPlatformLinks = (Object.keys(PLATFORM_LABELS) as Platform[]).some(
    (platform) => projectLinks[platform],
  );

  return (
    <li className="group mb-6 block break-inside-avoid overflow-hidden rounded-3xl border border-border bg-surface transition-shadow hover:shadow-xl">
      <div className="relative w-full overflow-hidden bg-ink/5" style={{ aspectRatio: `${media.width} / ${media.height}` }}>
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
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </TrackedLink>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6 sm:p-7">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{category}</p>

        <p className="whitespace-pre-line text-sm text-foreground/75 sm:text-base">{desc}</p>

        <ul className="flex flex-wrap gap-2">
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
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4">
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

        <Button
          href="/contact"
          size="md"
          className="self-start"
          eventLabel="Start a project"
          eventSource={`portfolio_card_${slug}`}
        >
          Start a project
        </Button>
      </div>
    </li>
  );
}
