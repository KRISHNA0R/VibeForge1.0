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

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
            <EyebrowBadge>VIBEFORGE // STUDENT VOICES</EyebrowBadge>
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


    </>
  );
}
