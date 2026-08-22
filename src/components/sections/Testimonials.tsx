"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Arjun Sharma",
    location: "Delhi",
    quote: "The prompt bible alone saved me hours every week. Went from struggling with features to shipping in 20 minutes.",
    rating: 4,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=AS",
  },
  {
    name: "Priya Nair",
    location: "Bangalore",
    quote: "Notion templates changed how I organize my entire workflow. Quality is top-notch, use them daily.",
    rating: 3,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=PN",
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai",
    quote: "Initially thought it was overpriced. After seeing the UI/UX component pack, genuinely impressed. Worth every rupee.",
    rating: 4,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=RM",
  },
  {
    name: "Sneha Kulkarni",
    location: "Pune",
    quote: "1:1 session fixed my project that was stuck for 2 weeks. Same day fix. Krishna properly knows his craft.",
    rating: 3,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=SK",
  },
  {
    name: "Vikram Patel",
    location: "Hyderabad",
    quote: "Went from zero coding knowledge to launching my first SaaS in 30 days. The vibe coding method actually works.",
    rating: 5,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=VP",
  },
  {
    name: "Ananya Reddy",
    location: "Chennai",
    quote: "The full-stack templates saved me months of learning. Just picked up, customized, and shipped.",
    rating: 4,
    avatar: "https://placehold.co/80x80/0a0a0b/d4a22f?text=AR",
  },
];

const hallOfFame = [
  { name: "Aditya Kumar", score: "98%", course: "Full-Stack Mastery", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=AK", testimonial: "Devini changed my career trajectory." },
  { name: "Meera Joshi", score: "95%", course: "AI/ML Specialization", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=MJ", testimonial: "Best investment in my tech education." },
  { name: "Karthik Nair", score: "92%", course: "Prompt Engineering Pro", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=KN", testimonial: "From confused to confident in 30 days." },
  { name: "Shruti Verma", score: "97%", course: "Deployment & DevOps", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=SV", testimonial: "Finally understand CI/CD properly." },
  { name: "Ravi Teja", score: "94%", course: "System Design", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=RT", testimonial: "Architecture patterns that actually work." },
  { name: "Nisha Agarwal", score: "96%", course: "Vibe Coding Mastery", photo: "https://placehold.co/300x400/0a0a0b/d4a22f?text=NA", testimonial: "The Devini method is genius." },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212,162,47,0.25)" }}
      className="card-surface group flex flex-col gap-4 p-6 transition-all duration-300 hover:border-accent/30"
    >
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border border-white/10" />
        <div>
          <p className="font-sans text-sm font-medium text-foreground">{t.name}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{t.location}</p>
        </div>
      </div>
      <p className="font-sans text-sm leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            weight={i < t.rating ? "fill" : "regular"}
            className={i < t.rating ? "text-accent" : "text-zinc-600"}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FameCard({ student, index }: { student: typeof hallOfFame[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(212,162,47,0.3)" }}
      className="group card-surface relative overflow-hidden border border-white/8 transition-all duration-300 hover:border-accent/30"
    >
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={student.photo}
          alt={student.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4 rounded-full bg-accent/20 px-3 py-1 backdrop-blur-md">
          <span className="font-mono text-[11px] font-bold text-accent">{student.score}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">{student.course}</p>
        <h3 className="font-sans text-lg font-semibold text-foreground mt-1">{student.name}</h3>
        <p className="font-sans text-xs text-zinc-400 mt-2 italic">&ldquo;{student.testimonial}&rdquo;</p>
      </div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: "inset 0 0 40px rgba(212,162,47,0.12)" }} />
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const fameRef = useRef<HTMLDivElement>(null);
  const fameInView = useInView(fameRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <EyebrowBadge>DEVINI // STUDENT VOICES</EyebrowBadge>
            <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              What builders{" "}
              <span className="text-accent">say.</span>
            </h2>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Real people. Real results. No fluff.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section id="hall-of-fame" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <motion.div
            ref={fameRef}
            initial={{ opacity: 0, y: 28 }}
            animate={fameInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <EyebrowBadge>DEVINI // HALL OF FAME</EyebrowBadge>
            <h2 className="max-w-[28ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Top{" "}
              <span className="text-accent">performers.</span>
            </h2>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              Students who scored big. Their scores speak louder than words.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hallOfFame.map((student, i) => (
              <FameCard key={student.name} student={student} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
