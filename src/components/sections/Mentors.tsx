"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const mentors = [
  {
    name: "Krishna R",
    title: "Founder & Lead Mentor",
    photo: "https://placehold.co/400x500/0a0a0b/d4a22f?text=Krishna+R",
    university: "Amity University Kolkata",
    achievements: [
      "ZSI Hackathon Regional Winner (Govt of India)",
      "EIBS 2.0 National Hackathon Finalist (IIT KGP)",
      "Wii National Hackathon Finalist (Govt of India)",
      "Full-Stack Developer & UI/UX Designer",
      "100+ Students Trained in Vibe Coding",
    ],
    skills: ["React", "Next.js", "UI/UX", "AI/ML", "System Design"],
    social: {
      linkedin: "#",
      instagram: "#",
      whatsapp: "https://wa.me/919073347571",
    },
  },
  {
    name: "Co-Mentor",
    title: "Technical Mentor",
    photo: "https://placehold.co/400x500/0a0a0b/d4a22f?text=Co-Mentor",
    university: "Partner Institution",
    achievements: [
      "Specialized in AI-Assisted Development",
      "Open Source Contributor",
      "Workshop Facilitator",
      "Curriculum Designer",
      "Student Success Coach",
    ],
    skills: ["Python", "AI/ML", "DevOps", "Backend", "Database"],
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
];

function MentorCard({ mentor, index }: { mentor: typeof mentors[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.15 }}
      whileHover={{ boxShadow: "0 0 50px rgba(212,162,47,0.2)" }}
      className="group card-surface flex flex-col overflow-hidden border border-white/8 transition-all duration-300 hover:border-accent/30 md:flex-row"
    >
      <div className="relative h-[250px] w-full shrink-0 overflow-hidden md:h-[400px] md:w-[350px]">
        <img
          src={mentor.photo}
          alt={mentor.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
          style={{ boxShadow: "inset 0 0 60px rgba(212,162,47,0.1)" }} />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-5 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {mentor.title}
          </p>
          <h3 className="font-sans text-3xl font-bold tracking-tight text-foreground mt-2">
            {mentor.name}
          </h3>
          <p className="font-sans text-sm text-zinc-400 mt-1">{mentor.university}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
            Achievements
          </h4>
          <ul className="flex flex-col gap-2">
            {mentor.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2 font-sans text-sm text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(212,162,47,0.7)]" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {mentor.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {mentor.social.linkedin && (
            <a href={mentor.social.linkedin} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all hover:bg-white/[0.1]">
              LinkedIn <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
          {mentor.social.instagram && (
            <a href={mentor.social.instagram} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all hover:bg-white/[0.1]">
              Instagram <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
          {mentor.social.whatsapp && (
            <a href={mentor.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur-md transition-all hover:bg-accent/20">
              WhatsApp <ArrowUpRight size={12} weight="bold" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Mentors() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mentors" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col gap-6"
        >
          <EyebrowBadge>DEVINI // MEET YOUR MENTORS</EyebrowBadge>
          <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Learn from{" "}
            <span className="text-accent">builders.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            Real experience, not theory. Our mentors have won hackathons, shipped
            products, and trained hundreds of developers.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
