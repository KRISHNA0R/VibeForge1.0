type Props = { name: string; icon?: string };

export function SkillBadge({ name, icon }: Props) {
  return (
    <div className="card-surface flex items-center gap-3 px-4 py-3">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
        {name}
      </span>
    </div>
  );
}
