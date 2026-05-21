import { cn } from "@/lib/utils";

type Tone = "bone" | "ink" | "surface";

const toneStyles: Record<Tone, string> = {
  bone: "bg-background text-foreground",
  ink: "bg-ink text-bone",
  surface: "bg-surface text-foreground",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  tone = "bone",
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full px-6 py-20 sm:px-10 sm:py-28", toneStyles[tone], className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl", innerClassName)}>{children}</div>
    </section>
  );
}
