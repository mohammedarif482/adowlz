import type { WhyUsItem } from "@/lib/constants";

type WhyUsProps = {
  items: readonly WhyUsItem[];
};

export function WhyUs({ items }: WhyUsProps) {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="rounded-3xl border border-border bg-surface p-8 sm:p-10"
        >
          <span className="text-sm font-medium text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 text-foreground/75">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
