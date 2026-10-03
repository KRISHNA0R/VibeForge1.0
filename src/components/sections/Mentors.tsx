"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LinkedinLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const mentors = [
  {
    name: "Krrish Kumar",
    title: "Software Engineer & AI/ML Researcher",
    photo: "/achievement-photos/krrishmentor.jpg",
    university: "B.Tech Cybersecurity @ UEM | Software Engineer Intern @ Spiral Compute",
    achievements: [
      "ZSI 111-Hour Hackathon 2026 — Regional Winner, Digha",
      "ZSI National Semifinalist — Best Presentation Award",
      "Sanchalan 2026 — Finalist, Army Institute of Management, Kolkata",
      "PitchFund E-Summit IIT (ISM) Dhanbad — Selected for Next Round",
      "IIT Hyderabad — Climate Data Analytics & ML Research Intern",
      "Spiral Compute — Software Engineer Intern",
      "ORBITO — Frontend Engineer / Lead",
      "Built 2-2-1 XOR Neural Network with PyTorch",
      "AI Agent / Loop Engineering Research",
      "Computer Vision — Face Detection & Real-Time Blurring",
    ],
    skills: ["Python", "PyTorch", "React", "TypeScript", "AI/ML", "Cybersecurity", "Backend", "DevOps"],
    social: {
      linkedin: "https://www.linkedin.com/in/krrishbuilds/",
      instagram: "#",
    },
  },
  {
    name: "Krishna R",
    title: "Founder & Lead Mentor",
    photo: "/achievement-photos/1762160344761.jpg",
    university: "B.Tech CSE @ Amity University Kolkata | 3x National Hackathon Finalist",
    achievements: [
      "ZSI 111-Hour Hackathon 2026 — Regional Winner, Digha",
      "ZSI National Semifinal — Best Presentation Award",
      "National Wildlife Hackathon 2025 — Finalist",
      "Handloom Hackathon 2026 — Top 100 / Top 25, IIT Delhi",
      "CATALYST 24-Hour AI Hackathon — Special Mention",
      "Snap Syntax 3.0, Jadavpur University — Finalist",
      "IIT Kharagpur — Campus Ambassador",
      "IIT Delhi eDC — Campus Ambassador",
      "PaisaTrack — Full-Stack Expense Tracker (Deployed)",
      "Personal Portfolio — Next.js, TypeScript, Framer Motion",
    ],
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Firebase", "UI/UX", "Cloud", "DevOps"],
    social: {
      linkedin: "https://www.linkedin.com/in/krishnarsoftwareengineer00000/",
      instagram: "#",
      whatsapp: "https://wa.me/919073347571",
    },
  },
];

function MentorCard({ mentor, index }: { mentor: typeof mentors[0]; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.05 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.12 }}
      whileHover={{ boxShadow: "0 0 60px rgba(212,162,47,0.18)" }}
      className={`group relative card-surface grid overflow-hidden border border-white/8 transition-all duration-500 hover:border-accent/35 md:grid-cols-[minmax(280px,340px)_1fr] ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-70 ${
          reverse ? "right-0" : "left-0"
        }`}
      />

      <div className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-auto md:min-h-full md:[direction:ltr]">
        <img
          src={mentor.photo}
          alt={mentor.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.04] md:absolute md:inset-0 md:object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
        <div
          className={`absolute inset-0 hidden md:block ${
            reverse
              ? "bg-gradient-to-l from-transparent via-transparent to-black/50"
              : "bg-gradient-to-r from-transparent via-transparent to-black/50"
          }`}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 80px rgba(212,162,47,0.12)" }}
        />

        <div className="absolute bottom-4 left-4 right-4 md:hidden">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
            {mentor.title}
          </p>
          <h3 className="mt-1 font-sans text-2xl font-bold tracking-tight text-white">
            {mentor.name}
          </h3>
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-200 backdrop-blur-md">
          0{index + 1} / 0{mentors.length}
        </div>
      </div>

      <div className="relative flex flex-col gap-6 p-5 sm:p-7 md:gap-7 md:p-8 md:[direction:ltr] lg:p-10">
        <div className="hidden md:block">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(212,162,47,0.8)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
              {mentor.title}
            </p>
          </div>
          <h3 className="font-sans text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {mentor.name}
          </h3>
          <p className="mt-2 max-w-[52ch] font-sans text-sm leading-relaxed text-zinc-400">
            {mentor.university}
          </p>
        </div>

        <p className="font-sans text-sm leading-relaxed text-zinc-400 md:hidden">
          {mentor.university}
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Achievements
            </h4>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              {mentor.achievements.length} wins
            </span>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {mentor.achievements.map((a, i) => (
              <li
                key={a}
                className="group/item flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-accent/25 hover:bg-accent/[0.04]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 font-mono text-[9px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[13px] leading-snug text-zinc-300">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {mentor.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 transition-colors duration-300 group-hover:border-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 border-t border-white/[0.06] pt-5">
          {mentor.social.linkedin && (
            <a
              href={mentor.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <LinkedinLogo size={14} weight="fill" />
              LinkedIn
              <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
          {mentor.social.instagram && mentor.social.instagram !== "#" && (
            <a
              href={mentor.social.instagram}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <InstagramLogo size={14} weight="fill" />
              Instagram
              <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
          {mentor.social.whatsapp && (
            <a
              href={mentor.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur-md transition-all duration-300 hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <WhatsappLogo size={14} weight="fill" />
              WhatsApp
              <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Mentors() {
  return (
    <section id="mentors" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col gap-6"
        >
          <EyebrowBadge>VIBEFORGE // MEET YOUR MENTORS</EyebrowBadge>
          <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Learn from{" "}
            <span className="text-accent">builders.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            Real experience, not theory. Our mentors have won hackathons, shipped
            products, and trained hundreds of developers.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
