type TeamMemberProps = {
  name: string;
  role: string;
  credentials: readonly string[];
};

export function TeamMember({ name, role, credentials }: TeamMemberProps) {
  return (
    <li className="rounded-3xl border border-border bg-surface p-8 sm:p-10">
      <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
      <p className="mt-1 text-sm uppercase tracking-widest text-accent">
        {role}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-foreground/75">
        {credentials.map((c) => (
          <li key={c} className="flex gap-3">
            <span aria-hidden className="mt-2 inline-block h-1 w-3 shrink-0 bg-accent" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
