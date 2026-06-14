import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { BrandLogo } from "@/components/BrandLogo";
import { TrackedLink } from "@/components/TrackedLink";

export function Footer() {
  const year = new Date().getFullYear();
  const { brand, nav, contact, social } = siteConfig;

  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" aria-label={brand.name} className="inline-block">
              <BrandLogo className="h-10 w-auto text-bone" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-bone/70">
              {brand.tagline} A marketing, design and development studio working from{" "}
              {contact.locations.join(", ")}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-bone/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/80 transition-colors hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-bone/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <TrackedLink
                  kind="email"
                  source="footer"
                  className="text-bone/80 hover:text-bone"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink
                  kind="phone"
                  source="footer"
                  className="text-bone/80 hover:text-bone"
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                >
                  {contact.phone}
                </TrackedLink>
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <TrackedLink
                    kind="social"
                    source="footer"
                    label={s.label}
                    href={s.href}
                    className="text-bone/70 underline-offset-4 hover:text-bone hover:underline"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {s.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="select-none border-t border-bone/10 pt-10 pb-6"
        >
          <Image
            src="/brand/Group 427319642 1.png"
            alt=""
            width={6144}
            height={1064}
            priority={false}
            sizes="100vw"
            className="h-auto w-full select-none"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-bone/10 py-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. · {contact.locations.join(" · ")}
          </p>
          <Link href="/privacy" className="hover:text-bone">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
