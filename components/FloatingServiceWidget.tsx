"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  "Video Production",
  "Social Media Handling",
  "Mobile App Development",
  "E-commerce Solutions",
  "Brand Identity Design",
  "Digital Marketing",
  "Web Design & Development",
  "AI & Intelligent Software",
];

const ROW_HEIGHT_PX = 28;

export default function FloatingServiceWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-border/60 bg-background/80 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:gap-6 sm:px-4 sm:py-2.5">
        <p className="hidden shrink-0 pl-3 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/60 sm:block">
          Looking for
        </p>

        <div
          className="relative w-44 overflow-hidden sm:w-64"
          style={{ height: ROW_HEIGHT_PX }}
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * ROW_HEIGHT_PX}px)` }}
          >
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center truncate text-sm font-semibold text-foreground sm:text-base"
                style={{ height: ROW_HEIGHT_PX }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 sm:px-5"
        >
          Let&apos;s Talk →
        </Link>
      </div>
    </div>
  );
}
