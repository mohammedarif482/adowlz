import type { siteConfig } from "@/lib/content";

type Service = (typeof siteConfig.services)[number];

export function ServiceCard({ number, title, desc }: Service) {
  return (
    <li className="group flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-bone/[0.04] sm:p-10">
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-accent">{number}</span>
        <span
          aria-hidden
          className="text-xl text-bone/40 transition-transform group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h3>
      <p className="text-bone/70">{desc}</p>
    </li>
  );
}
