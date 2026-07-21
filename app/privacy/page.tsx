import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.brand.name} collects, uses, and protects your information.`,
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly to us — such as your name, email address, phone number, and project details — when you fill out a contact form, request a quote, or otherwise reach out to us. We may also collect basic usage data (pages visited, referring site, device/browser type) through analytics tools to understand how our site is used.",
  },
  {
    title: "How we use your information",
    body: "We use the information we collect to respond to enquiries, deliver the services you request, communicate with you about your project, and improve our website and offerings. We do not sell your personal information to third parties.",
  },
  {
    title: "Sharing of information",
    body: "We may share information with trusted service providers who help us operate our business (for example, email delivery, hosting, or analytics providers), and only to the extent necessary for them to perform their services. We may also disclose information if required by law.",
  },
  {
    title: "Cookies & analytics",
    body: "Our website may use cookies and similar technologies, along with analytics and advertising tools (such as Vercel Analytics and Meta Pixel), to understand site traffic and measure the performance of our campaigns. You can control cookies through your browser settings.",
  },
  {
    title: "Data retention",
    body: "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Contact us",
    body: `If you have questions about this policy or how we handle your information, contact us at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section tone="bone" className="pt-24 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Legal</p>
        <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/75">
          This policy explains how {siteConfig.brand.name} collects, uses, and
          protects information when you use our website or work with us. This is
          a general policy and may be updated from time to time.
        </p>
      </Section>

      <Section tone="bone" className="pb-32 pt-0">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/75">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
