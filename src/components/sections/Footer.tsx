import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-background px-6 py-14 md:px-10 md:py-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <Image
                src="/logo.jpg"
                alt="VibeForge"
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover ring-1 ring-white/15"
              />
              VibeForge
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              © VibeForge — Vibe Coding Academy. Built for builders, by builders.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-3">
            {[
              ["Gallery", "Student achievements", "/gallery"],
              ["Mentors", "Meet your mentors", "/mentors"],
              ["Reviews", "Student voices", "/testimonials"],
              ["Pricing", "Pick your plan", "/pricing"],
              ["Contact", "Chat on WhatsApp", "https://wa.me/919073347571?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20course"],
            ].map(([name, note, href]) => (
              <a key={name} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026.08.23 · VibeForge v1.0 · AI Engine Online</span>
          <span>Vibe coding education — all rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
