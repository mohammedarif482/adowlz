import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/BrandLogo";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" aria-label={siteConfig.brand.name} className="flex items-center">
          <BrandLogo className="h-9 w-auto text-foreground" />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-foreground/80">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button
            href={siteConfig.hero.secondaryCta.href}
            size="md"
            eventLabel={siteConfig.hero.secondaryCta.label}
            eventSource="header"
          >
            {siteConfig.hero.secondaryCta.label}
          </Button>
        </div>

        <MobileMenu
          items={siteConfig.nav}
          cta={{
            label: siteConfig.hero.secondaryCta.label,
            href: siteConfig.hero.secondaryCta.href,
          }}
        />
      </div>
    </header>
  );
}
