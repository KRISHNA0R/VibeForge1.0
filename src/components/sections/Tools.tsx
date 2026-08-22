"use client";

import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const toolGroups = [
  {
    category: "AI Models",
    tools: ["ChatGPT", "Claude", "Gemini", "Copilot", "Cursor"],
  },
  {
    category: "Frontend",
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "PostgreSQL", "Prisma", "tRPC"],
  },
  {
    category: "DevOps",
    tools: ["Vercel", "Docker", "GitHub Actions", "AWS", "Supabase"],
  },
];

export function Tools() {
  return (
    <section id="tools"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <AnimatedSection className="flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>DEVINI // TOOL STACK</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Every tool you need.{" "}
              <span className="text-accent">One stack.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              We teach the exact tools used by top indie hackers and production teams.
              No bloat — only what ships.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid gap-12 md:grid-cols-2">
          {toolGroups.map((group) => (
            <AnimatedItem key={group.category}>
              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <SkillBadge key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
