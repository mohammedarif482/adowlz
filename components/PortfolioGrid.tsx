"use client";

import { useState } from "react";
import { PortfolioCardHorizontal } from "@/components/PortfolioCardHorizontal";
import { PortfolioCardPin } from "@/components/PortfolioCardPin";
import { cn } from "@/lib/utils";
import type { siteConfig } from "@/lib/content";

type Project = (typeof siteConfig.portfolio)[number];
type Discipline = (typeof siteConfig.projectDisciplines)[number];

type PortfolioGridProps = {
  projects: readonly Project[];
  disciplines: readonly Discipline[];
};

const PINTEREST_DISCIPLINES = new Set([
  "Video Production",
  "Brand Identity Design",
  "Digital Marketing",
]);

export function PortfolioGrid({ projects, disciplines }: PortfolioGridProps) {
  const [active, setActive] = useState<string>(disciplines[0]);

  const filtered = projects.filter((project) =>
    (project.disciplines as readonly string[]).includes(active),
  );

  const isPinterest = PINTEREST_DISCIPLINES.has(active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by discipline"
        className="flex flex-wrap gap-3"
      >
        {disciplines.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-accent-gradient text-accent-foreground"
                  : "border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        isPinterest ? (
          <ul className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {filtered.map((project) => (
              <PortfolioCardPin key={project.slug} {...project} />
            ))}
          </ul>
        ) : (
          <ul className="mt-10 flex flex-col gap-8">
            {filtered.map((project) => (
              <PortfolioCardHorizontal key={project.slug} {...project} />
            ))}
          </ul>
        )
      ) : (
        <p className="mt-10 text-foreground/60">
          More work in this discipline is on the way — check back soon.
        </p>
      )}
    </div>
  );
}
