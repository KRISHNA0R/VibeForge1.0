# Devini Vibe Coding Agency — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Iron Man fan site into a vibe coding teaching agency landing site — keep the Iron Man theme and scroll canvas sections untouched, replace all text content, and add new pages (Pricing, Tools, Contact).

**Architecture:** Single-page landing + 3 new routes. The 2 scroll canvas sections stay pixel-perfect. Only text, links, and the SystemsNominal/Footer sections change. New pages use the same glass-morphism card system and gold accent palette.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion 12, Lenis, Phosphor Icons, Geist font

---

## Brand Name: Devini

> "Dev" (developer) + "ini" (divine/innovation). Already referenced in the hero ("Build with Devini"). Short, memorable, premium-sounding.

**Tagline:** "Code. Ship. Repeat."

---

## File Structure

### Files to MODIFY

| File | What Changes |
|---|---|
| `src/app/layout.tsx` | Update title, description |
| `src/app/page.tsx` | Add new section imports |
| `src/components/ui/Navbar.tsx` | Brand text, nav links, CTA |
| `src/components/sections/Hero.tsx` | Badge, heading, sub-text, reveal text |
| `src/components/sections/CinematicReveal.tsx` | Beat quotes, headings, outro |
| `src/components/sections/SystemsNominal.tsx` | Full replacement — Skills grid |
| `src/components/sections/Footer.tsx` | Brand, links, copyright |
| `src/lib/hero.ts` | Dialogue quotes |
| `src/lib/cinematic.ts` | Beat quotes |

### Files to CREATE

| File | Purpose |
|---|---|
| `src/app/pricing/page.tsx` | Pricing page with 3 plan cards |
| `src/components/sections/Pricing.tsx` | Pricing cards section |
| `src/components/sections/Tools.tsx` | Tools and skills grid |
| `src/components/sections/CallToAction.tsx` | Final CTA before footer |
| `src/components/ui/PlanCard.tsx` | Pricing card component |
| `src/components/ui/SkillBadge.tsx` | Skill/tool badge |

---

## Task 1: Update Site Metadata

**Files:** Modify `src/app/layout.tsx`

- [ ] **Step 1: Update metadata**

Replace the metadata block (lines 12-16) with:

```tsx
export const metadata: Metadata = {
  title: "Devini — Vibe Code Your Way to Production",
  description:
    "Master vibe coding. AI-assisted development, prompt engineering, and full-stack building — ship faster with modern tools.",
  metadataBase: new URL("http://localhost:3000"),
};
```

- [ ] **Step 2: Verify**

Run: `curl -s http://localhost:3000 | head -5`
Expected: HTML with "Devini" in title

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update site metadata to Devini vibe coding agency"
```

---

## Task 2: Update Navbar

**Files:** Modify `src/components/ui/Navbar.tsx`

- [ ] **Step 1: Replace brand text**

Find `"Stark / Industries"` and replace with `"Devini"`

- [ ] **Step 2: Replace nav links**

Find the nav section and replace links:
- `"Systems"` with `"Skills"` → `href="#skills"`
- `"Archive"` with `"Tools"` → `href="#tools"`
- Add new link: `"Pricing"` → `href="/pricing"`
- Add new link: `"Contact"` → `href="#cta"`

- [ ] **Step 3: Replace CTA button**

Find `"Engage"` and replace with `"Start Building"`. Change the `href` to `/pricing`.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Navbar.tsx
git commit -m "feat: update navbar to Devini brand"
```

---

## Task 3: Update Hero Section Content

**Files:** Modify `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace eyebrow badge**

Find `MARK LXXXV // STARK INDUSTRIES // ONLINE` and replace with `DEVINI // VIBE CODING ACADEMY // ONLINE`

- [ ] **Step 2: Replace hero heading**

Find `I am Iron Man.` (the h1) and replace with `Build with Devini.`

- [ ] **Step 3: Replace hero sub-text**

Find the paragraph starting with `Mark LXXXV nanotech suit` and replace with:
`Master vibe coding. AI-assisted development, prompt engineering, and full-stack building — ship production-ready apps in record time.`

- [ ] **Step 4: Replace protocol label**

Find `Protocol — Mk LXXXV` and replace with `Protocol — Devini Stack`

- [ ] **Step 5: Replace reveal text**

Find `Build with Devini` (the reveal heading) and replace with `Ship Faster.`
Find `Interfaces & products, engineered like the Mark LXXXV.` and replace with `Full-stack apps, AI workflows, and production systems — engineered to ship.`

- [ ] **Step 6: Replace telemetry label**

Find `Telemetry Link — Live` and replace with `Dev Output — Live`

- [ ] **Step 7: Update dialogue quotes in hero.ts**

Edit `src/lib/hero.ts` — replace the DIALOGUES array:

```ts
export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Talk is cheap. Show me the code.",
    speaker: "Linus Torvalds",
    film: "LINUX — OPEN SOURCE",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "First, solve the problem. Then, write the code.",
    speaker: "John Johnson",
    film: "SOFTWARE ENGINEERING",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Any fool can write code that a computer can understand.",
    speaker: "Martin Fowler",
    film: "REFACTORING — 1999",
  },
];
```

- [ ] **Step 8: Commit**

```bash
git add src/components/sections/Hero.tsx src/lib/hero.ts
git commit -m "feat: replace hero content with vibe coding messaging"
```

---

## Task 4: Update Cinematic Reveal Content

**Files:** Modify `src/components/sections/CinematicReveal.tsx`, `src/lib/cinematic.ts`

- [ ] **Step 1: Update cinematic quotes in cinematic.ts**

Replace the BEATS array:

```ts
export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Prototype",
    quote: "Move fast and break things.",
    speaker: "Mark Zuckerberg",
    film: "FACEBOOK — 2012",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Ship It",
    quote: "The best code is no code at all.",
    speaker: "Jeff Atwood",
    film: "STACK OVERFLOW — 2008",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Scale",
    quote: "Simplicity is the ultimate sophistication.",
    speaker: "Leonardo da Vinci",
    film: "DESIGN PRINCIPLE",
  },
];
```

- [ ] **Step 2: Update crossfade headings in CinematicReveal.tsx**

Find `I am Inevitable.` and replace with `Vibe Code.`
Find `And I am Iron Man.` and replace with `Ship Products.`

- [ ] **Step 3: Update sub-text**

Find `Endgame — the snap heard across the universe` and replace with:
`From zero to production. Devini held the frame so you could build from it — one vibe at a time.`

- [ ] **Step 4: Update labels**

- `Flight Log — Archived` → `Build Log — Active`
- `MARK III // ARCHIVE` → `DEVINI // LIVE`
- `J.A.R.V.I.S. // PLAYBACK` → `AI ENGINE // ONLINE`

- [ ] **Step 5: Update outro CTA**

- `Next — engage` → `Ready to ship?`
- `Open diagnostics` → `View plans`

- [ ] **Step 6: Commit**

```bash
git add src/components/sections/CinematicReveal.tsx src/lib/cinematic.ts
git commit -m "feat: update cinematic reveal with vibe coding messaging"
```

---

## Task 5: Replace SystemsNominal with Skills Section

**Files:** Modify `src/components/sections/SystemsNominal.tsx`

- [ ] **Step 1: Full replacement**

Replace entire file with:

```tsx
"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const skills = [
  { label: "Prompt Engineering", value: "Advanced", note: "ChatGPT, Claude, Gemini" },
  { label: "AI-Assisted Coding", value: "Expert", note: "Copilot, Cursor, Codex" },
  { label: "Full-Stack Dev", value: "Production", note: "Next.js, React, Node.js" },
  { label: "Deployment", value: "Automated", note: "Vercel, Docker, CI/CD" },
];

export function SystemsNominal() {
  return (
    <section id="skills"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8">
          <AnimatedItem>
            <EyebrowBadge>DEVINI // SKILL MATRIX</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              &ldquo;Code.{" "}
              <span className="text-accent">Ship.</span>{" "}Repeat.&rdquo;
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Every skill below is what Devini logged from real production builds.
              No theory — only patterns that ship. Master the stack, ship faster,
              build with confidence.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <a href="#cta"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]">
              Start Learning
              <ArrowUpRight size={14} weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col divide-y divide-white/8 border-t border-white/8 font-mono md:mt-3">
          {skills.map((row) => (
            <AnimatedItem key={row.label}>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {row.label}
                  </span>
                  <span className="font-sans text-[13px] text-zinc-400">
                    {row.note}
                  </span>
                </div>
                <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {row.value}
                </span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/SystemsNominal.tsx
git commit -m "feat: replace SystemsNominal with Devini skills section"
```

---

## Task 6: Update Footer

**Files:** Modify `src/components/sections/Footer.tsx`

- [ ] **Step 1: Replace brand text**

Find `Stark / Industries` and replace with `Devini`

- [ ] **Step 2: Replace address/description**

Find the paragraph with `10880 Malibu Point` and replace with:
`© Devini — Vibe Coding Academy. Built for builders, by builders.`

- [ ] **Step 3: Replace archive grid**

Replace the 6-item grid with course links:

```tsx
{[
  ["Prompt Engineering", "Master AI prompts", "#skills"],
  ["Full-Stack Apps", "Next.js + React", "#skills"],
  ["AI Workflows", "Automate with AI", "#tools"],
  ["Deployment", "Ship to production", "#tools"],
  ["System Design", "Architecture patterns", "/pricing"],
  ["Vibe Coding", "The Devini method", "/pricing"],
].map(([name, note, href]) => (
  <a key={name} href={href}
    className="group flex flex-col gap-1">
    <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent">
      {name}
      <ArrowUpRight size={11} weight="bold"
        className="ml-1 inline-block align-baseline opacity-0 transition-opacity group-hover:opacity-100" />
    </span>
    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
      {note}
    </span>
  </a>
))}
```

- [ ] **Step 4: Replace footer bottom**

Find `Build 2026.04.21` and replace with:
`Build 2026.08.23 · Devini v1.0 · AI Engine Online`

Find `Proof of concept — fan art, no commercial use` and replace with:
`Vibe coding education — all rights reserved`

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "feat: update footer to Devini branding and course links"
```

---

## Task 7: Create Tools Section

**Files:** Create `src/components/ui/SkillBadge.tsx`, Create `src/components/sections/Tools.tsx`

- [ ] **Step 1: Create SkillBadge component**

```tsx
// src/components/ui/SkillBadge.tsx
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
```

- [ ] **Step 2: Create Tools section**

```tsx
// src/components/sections/Tools.tsx
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/SkillBadge.tsx src/components/sections/Tools.tsx
git commit -m "feat: add Tools section with skill badges"
```

---

## Task 8: Create Pricing Page

**Files:** Create `src/components/ui/PlanCard.tsx`, Create `src/components/sections/Pricing.tsx`, Create `src/app/pricing/page.tsx`

- [ ] **Step 1: Create PlanCard component**

```tsx
// src/components/ui/PlanCard.tsx
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
```

- [ ] **Step 2: Create Pricing section**

```tsx
// src/components/sections/Pricing.tsx
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
```

- [ ] **Step 3: Create pricing page**

```tsx
// src/app/pricing/page.tsx
import { Navbar } from "@/components/ui/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/PlanCard.tsx src/components/sections/Pricing.tsx src/app/pricing/page.tsx
git commit -m "feat: add pricing page with 3 plan cards"
```

---

## Task 9: Create Call-to-Action Section

**Files:** Create `src/components/sections/CallToAction.tsx`

- [ ] **Step 1: Create CTA section**

```tsx
// src/components/sections/CallToAction.tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/CallToAction.tsx
git commit -m "feat: add CallToAction section"
```

---

## Task 10: Wire Up Home Page

**Files:** Modify `src/app/page.tsx`

- [ ] **Step 1: Add new imports and sections**

```tsx
// src/app/page.tsx
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Tools } from "@/components/sections/Tools";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <SystemsNominal />
        <Tools />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify full site**

Run: `curl -s http://localhost:3000 | grep -c "Devini"`
Expected: multiple matches (navbar, hero, sections)

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire up all sections on home page"
```

---

## Task 11: Verify and Test

- [ ] **Step 1: Run dev server**

Run: `npm run dev`
Verify: http://localhost:3000 loads without errors

- [ ] **Step 2: Check all routes**

- `/` — home page with all sections
- `/pricing` — pricing page with 3 plan cards

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 4: Visual check**

Verify:
- Navbar shows "Devini" brand
- Hero shows "Build with Devini" heading
- Cinematic reveal shows "Vibe Code. Ship Products."
- Skills section shows 4 skill rows
- Tools section shows 4 tool groups with badges
- Pricing section shows 3 plan cards (Free, $29, $79)
- CTA section shows "Stop watching tutorials. Start shipping."
- Footer shows Devini branding and course links

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Devini vibe coding agency transformation"
```

---

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR | 0 issues, 0 critical gaps |
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 0 | — | — |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — |

**VERDICT:** ENG CLEARED — 3 issues found and fixed during review (import typo, dead footer links, fabricated social proof). Plan is ready to implement.
