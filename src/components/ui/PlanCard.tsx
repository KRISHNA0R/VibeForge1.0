import { ArrowUpRight } from "@phosphor-icons/react";

type Props = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export function PlanCard({ name, price, period, description, features, popular }: Props) {
  return (
    <div className={`card-surface flex flex-col gap-6 p-8 ${popular ? "ring-1 ring-accent/30" : ""}`}>
      {popular && (
        <span className="self-start rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          Most Popular
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="font-sans text-4xl font-bold tracking-tight text-foreground">
            {price}
          </span>
          <span className="font-mono text-[11px] text-zinc-500">{period}</span>
        </div>
        <p className="font-sans text-sm text-zinc-400">{description}</p>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-sans text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(212,162,47,0.7)]" />
            {f}
          </li>
        ))}
      </ul>
      <a href="#cta"
        className="group mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]">
        Get Started
        <ArrowUpRight size={14} weight="bold"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}
