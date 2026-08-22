"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function CallToAction() {
  return (
    <section id="cta"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 text-center">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <AnimatedItem>
            <EyebrowBadge>DEVINI // READY?</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[28ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Stop watching tutorials.{" "}
              <span className="text-accent">Start shipping.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Learn vibe coding and launch your first product in 30 days.
              The stack is ready. Are you?
            </p>
          </AnimatedItem>
          <AnimatedItem className="flex flex-col gap-4 sm:flex-row">
            <a href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20 active:translate-y-[1px]">
              View Plans
              <ArrowUpRight size={14} weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://wa.me/919073347571"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.1] active:translate-y-[1px]">
              Chat on WhatsApp
              <ArrowUpRight size={14} weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
