"use client";

import {
  trackContactClick,
  trackCtaClick,
  trackServiceInterest,
  trackSocialClick,
} from "@/lib/analytics";

type Kind = "whatsapp" | "phone" | "email" | "social" | "cta" | "service";

type TrackedLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  kind: Kind;
  /** Where on the site this link lives, e.g. "footer", "contact_office", "floating_widget". */
  source: string;
  /** Extra context, e.g. office city, social platform name, or CTA label. */
  label?: string;
  /** Required when kind is "service": the service slug and title. */
  serviceSlug?: string;
  serviceTitle?: string;
};

/**
 * Anchor tag that fires the matching analytics event before navigating —
 * use for WhatsApp/phone/email/social links and outbound CTAs so every
 * contact channel and CTA placement is measurable.
 */
export function TrackedLink({
  kind,
  source,
  label,
  serviceSlug,
  serviceTitle,
  onClick,
  href = "",
  ...rest
}: TrackedLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    switch (kind) {
      case "whatsapp":
      case "phone":
      case "email":
        trackContactClick(kind, source, label);
        break;
      case "social":
        trackSocialClick(label ?? source, source);
        break;
      case "cta":
        trackCtaClick(label ?? "", source, href);
        break;
      case "service":
        trackServiceInterest(serviceSlug ?? "", serviceTitle ?? "", source);
        break;
    }
    onClick?.(event);
  }

  return <a href={href} onClick={handleClick} {...rest} />;
}
