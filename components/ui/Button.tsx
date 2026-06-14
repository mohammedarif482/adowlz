"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackCtaClick } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent-gradient text-accent-foreground hover:opacity-90",
  secondary:
    "bg-foreground text-background hover:bg-foreground/85",
  ghost:
    "border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-foreground/5",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Label used for CTA-click analytics, e.g. "Start a project". Defaults to the href if omitted. */
  eventLabel?: string;
  /** Where on the site this button lives, e.g. "hero", "services_cta". Required to track the click. */
  eventSource?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  eventLabel,
  eventSource,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={
        eventSource
          ? () => trackCtaClick(eventLabel ?? href, eventSource, href)
          : undefined
      }
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
      <span aria-hidden className="text-base leading-none">→</span>
    </Link>
  );
}
