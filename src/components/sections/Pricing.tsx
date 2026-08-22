"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { PlanCard } from "@/components/ui/PlanCard";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Get your feet wet with vibe coding fundamentals.",
    features: [
      "3 beginner courses",
      "Prompt engineering basics",
      "Community access",
      "Email support",
    ],
  },
  {
    name: "Builder",
    price: "$29",
    period: "/month",
    description: "Full access to the Devini method and all tools.",
    features: [
      "All courses (20+)",
      "AI-assisted coding deep dives",
      "Full-stack project templates",
      "Deployment workflows",
      "Priority support",
      "Monthly live sessions",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: "$79",
    period: "/month",
    description: "Scale your team with vibe coding training.",
    features: [
      "Everything in Builder",
      "Team licenses (up to 10)",
      "Custom curriculum",
      "1-on-1 coaching calls",
      "Slack/Discord private channel",
      "Early access to new courses",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <AnimatedSection className="flex flex-col items-center gap-6 text-center">
          <AnimatedItem>
            <EyebrowBadge>DEVINI // PLANS</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Pick your{" "}
              <span className="text-accent">build speed.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Start free. Upgrade when you are ready to ship. Cancel anytime.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <AnimatedItem key={plan.name}>
              <PlanCard {...plan} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
