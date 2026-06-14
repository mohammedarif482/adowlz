"use client";

import { track as vercelTrack } from "@vercel/analytics";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Props = Record<string, string | number | boolean | undefined>;

/** Calls window.fbq if the Meta Pixel has loaded — safe to call before/without it. */
function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}

/** Sends a custom event to Vercel Analytics, filtering out undefined props. */
function send(eventName: string, props?: Props) {
  const cleaned = props
    ? (Object.fromEntries(
        Object.entries(props).filter(([, v]) => v !== undefined),
      ) as Props)
    : undefined;
  vercelTrack(eventName, cleaned);
}

/**
 * Fires whenever a visitor reaches for a direct contact channel —
 * WhatsApp, phone, or email. This is the single strongest buying-intent
 * signal on the site, so every "channel" funnel report (which channel
 * converts, from which page/widget) is built on this event.
 *
 * Maps to Meta's standard "Contact" event for ad optimisation, plus a
 * channel-specific custom event for granular breakdowns in Vercel Analytics.
 */
export function trackContactClick(
  channel: "whatsapp" | "phone" | "email",
  source: string,
  label?: string,
) {
  const props: Props = { channel, source, label };
  fbq("track", "Contact", props);
  fbq("trackCustom", `${channel}_click`, props);
  send(`${channel}_click`, props);
}

/**
 * Generic call-to-action click — use for "Start a project", "Let's talk",
 * "View work", etc. `source` should describe where the button lives
 * (e.g. "hero", "header", "services_cta") so we can compare CTA
 * performance across pages/placements.
 */
export function trackCtaClick(label: string, source: string, href?: string) {
  const props: Props = { label, source, href };
  fbq("trackCustom", "CtaClick", props);
  send("cta_click", props);
}

/**
 * Fires when the contact form is successfully handed off to WhatsApp.
 * `projectType` lets us see which service categories generate the most
 * leads; `hasPhone`/`hasMessage` show how much detail leads typically share.
 *
 * Maps to Meta's standard "Lead" event.
 */
export function trackContactFormSubmit(details: {
  projectType?: string;
  hasPhone: boolean;
  hasMessage: boolean;
}) {
  const props: Props = {
    project_type: details.projectType || "unspecified",
    has_phone: details.hasPhone,
    has_message: details.hasMessage,
  };
  fbq("track", "Lead", props);
  send("contact_form_submit", props);
}

/**
 * Fires once per visit to a service detail page. Use this to see which
 * crafts get the most interest — a leading indicator for where to invest
 * production capacity or shift positioning.
 *
 * Maps to Meta's standard "ViewContent" event.
 */
export function trackServiceView(slug: string, title: string) {
  const props: Props = { content_name: title, content_category: "service", slug };
  fbq("track", "ViewContent", props);
  send("service_view", { slug, title });
}

/**
 * Fires when a visitor clicks through to a service from a card/listing
 * (services grid, homepage grid, "more from the studio"). Paired with
 * trackServiceView, this shows interest-to-view conversion per service
 * and per placement.
 */
export function trackServiceInterest(slug: string, title: string, source: string) {
  const props: Props = { slug, title, source };
  fbq("trackCustom", "ServiceInterest", props);
  send("service_interest", props);
}

/**
 * Fires on outbound clicks to social profiles. Useful for measuring how
 * much footer/contact-page traffic actually leaves for Instagram, LinkedIn,
 * etc. — informs whether social presence is worth continued investment.
 */
export function trackSocialClick(platform: string, source: string) {
  const props: Props = { platform, source };
  fbq("trackCustom", "SocialClick", props);
  send("social_click", props);
}
