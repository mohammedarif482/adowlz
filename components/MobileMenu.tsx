"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type NavItem = { label: string; href: string };

type Props = {
  items: readonly NavItem[];
  cta: NavItem;
};

export function MobileMenu({ items, cta }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const panel =
    open && mounted
      ? createPortal(
          <div
            id="mobile-nav"
            className="md:hidden fixed inset-x-0 bottom-0 top-16 z-30 flex flex-col"
            style={{ backgroundColor: "var(--background)" }}
          >
            <nav aria-label="Mobile" className="flex-1 px-6 pb-10 pt-8">
              <ul className="flex flex-col gap-2">
                {items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-2xl px-4 py-4 text-2xl font-semibold transition-colors ${
                          active
                            ? "bg-foreground/5 text-foreground"
                            : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground"
      >
        <span className="sr-only">{open ? "Close" : "Open"} menu</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          {open ? (
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          ) : (
            <>
              <path d="M3 6h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M3 10h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              <path d="M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {panel}
    </>
  );
}
