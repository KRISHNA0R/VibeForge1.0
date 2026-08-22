"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { PlanCard } from "@/components/ui/PlanCard";

const plans = [
  {
    name: "Starter",
    priceINR: "Free",
    priceUSD: "Free",
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
    priceINR: "₹1,499",
    priceUSD: "$29",
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
    priceINR: "₹4,999",
    priceUSD: "$79",
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
  const [isInternational, setIsInternational] = useState(false);

  return (
    <section id="pricing"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <EyebrowBadge>DEVINI // PLANS</EyebrowBadge>
          <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Pick your{" "}
            <span className="text-accent">build speed.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            Start free. Upgrade when you are ready to ship. Cancel anytime.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center gap-4 mt-4">
            <span className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${!isInternational ? "text-accent" : "text-zinc-500"}`}>
              India (INR)
            </span>
            <button
              onClick={() => setIsInternational(!isInternational)}
              className="relative h-6 w-10 md:h-7 md:w-12 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              <motion.div
                className="absolute top-0.5 h-6 w-6 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.6)]"
                animate={{ left: isInternational ? "22px" : "2px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${isInternational ? "text-accent" : "text-zinc-500"}`}>
              International (USD)
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3" style={{ alignItems: "stretch" }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(212,162,47,0.25)" }}
              className="h-full"
            >
              <PlanCard
                name={plan.name}
                price={isInternational ? plan.priceUSD : plan.priceINR}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
