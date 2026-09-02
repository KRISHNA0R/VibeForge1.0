"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const toolGroups = [
  {
    category: "AI Models",
    tools: [
      { name: "ChatGPT", tier: "Pro", logo: "/tool-logos/chatgpt.svg" },
      { name: "Claude", tier: "Pro", logo: "/tool-logos/claude.svg" },
      { name: "Gemini", tier: "Advanced", logo: "/tool-logos/gemini.svg" },
      { name: "Copilot", tier: "Enterprise", logo: "/tool-logos/copilot.svg" },
      { name: "Cursor", tier: "Pro", logo: "/tool-logos/cursor.svg" },
      { name: "Perplexity", tier: "Pro", logo: "/tool-logos/perplexity.svg" },
      { name: "v0", tier: "Pro", logo: "/tool-logos/v0.svg" },
    ],
  },
  {
    category: "Frontend",
    tools: [
      { name: "React", tier: "19", logo: "/tool-logos/react.svg" },
      { name: "Next.js", tier: "16", logo: "/tool-logos/nextjs.svg" },
      { name: "Tailwind CSS", tier: "4", logo: "/tool-logos/tailwind.svg" },
      { name: "TypeScript", tier: "5", logo: "/tool-logos/typescript.svg" },
      { name: "Framer Motion", tier: "12", logo: "/tool-logos/framer.svg" },
      { name: "Figma", tier: "Pro", logo: "/tool-logos/figma.svg" },
      { name: "Vite", tier: "6", logo: "/tool-logos/vite.svg" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", tier: "22", logo: "/tool-logos/nodejs.svg" },
      { name: "Python", tier: "3.12", logo: "/tool-logos/python.svg" },
      { name: "PostgreSQL", tier: "16", logo: "/tool-logos/postgresql.svg" },
      { name: "Prisma", tier: "6", logo: "/tool-logos/prisma.svg" },
      { name: "tRPC", tier: "11", logo: "/tool-logos/trpc.svg" },
      { name: "MongoDB", tier: "8", logo: "/tool-logos/mongodb.svg" },
      { name: "GraphQL", tier: "16", logo: "/tool-logos/graphql.svg" },
    ],
  },
  {
    category: "DevOps",
    tools: [
      { name: "Vercel", tier: "Pro", logo: "/tool-logos/vercel.svg" },
      { name: "Docker", tier: "24", logo: "/tool-logos/docker.svg" },
      { name: "GitHub Actions", tier: "CI/CD", logo: "/tool-logos/github.svg" },
      { name: "AWS", tier: "Cloud", logo: "/tool-logos/aws.svg" },
      { name: "Supabase", tier: "Pro", logo: "/tool-logos/supabase.svg" },
      { name: "Cloudflare", tier: "Pro", logo: "/tool-logos/cloudflare.svg" },
      { name: "Kubernetes", tier: "1.31", logo: "/tool-logos/kubernetes.svg" },
    ],
  },
];

function ToolBadge({ name, tier, logo, index }: { name: string; tier: string; logo: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(212,162,47,0.35)" }}
      className="group relative cursor-default"
    >
      <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:from-accent/[0.08] hover:to-accent/[0.02]">
        <img src={logo} alt={name} className="h-7 w-7 object-contain" />
        <div className="flex flex-col">
          <span className="font-sans text-sm font-medium text-foreground">
            {name}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
            v{tier}
          </span>
        </div>
        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-accent/40 shadow-[0_0_8px_rgba(212,162,47,0.5)] transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(212,162,47,0.9)]" />
      </div>
    </motion.div>
  );
}

function ToolGroup({ group, index }: { group: typeof toolGroups[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8 transition-all duration-300 hover:border-accent/20"
    >
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            {group.category}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {group.tools.map((tool, i) => (
            <ToolBadge key={tool.name} name={tool.name} tier={tool.tier} logo={tool.logo} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Tools() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col gap-6"
        >
          <EyebrowBadge>VIBEFORGE // TOOL STACK</EyebrowBadge>
          <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Every tool you need.{" "}
            <span className="text-accent">One stack.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            We teach the exact tools used by top indie hackers and production teams.
            No bloat — only what ships.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {toolGroups.map((group, i) => (
            <ToolGroup key={group.category} group={group} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-8 rounded-xl border border-white/8 bg-white/[0.03] px-6 py-5 md:px-8 backdrop-blur-md"
        >
          {[
            { label: "Tools Taught", value: "28+" },
            { label: "Avg. Course Rating", value: "4.8/5" },
            { label: "Students Trained", value: "500+" },
            { label: "Ship Rate", value: "94%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-sans text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
