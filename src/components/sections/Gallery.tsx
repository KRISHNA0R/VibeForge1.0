"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const achievements = [
  { id: 1, label: "Hackathon Win", subtitle: "ZSI Regional Winner" },
  { id: 2, label: "National Finalist", subtitle: "EIBS 2.0 IITKGP" },
  { id: 3, label: "Student Launch", subtitle: "First Product Shipped" },
  { id: 4, label: "Community", subtitle: "500+ Builders" },
  { id: 5, label: "Workshop", subtitle: "Vibe Coding Bootcamp" },
  { id: 6, label: "Collaboration", subtitle: "Open Source Contributions" },
  { id: 7, label: "Recognition", subtitle: "Industry Partnership" },
  { id: 8, label: "Growth", subtitle: "10x Student Results" },
];

function GalleryCard({ item }: { item: (typeof achievements)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,162,47,0.4)" }}
      className="group relative shrink-0 w-[320px] h-[220px] overflow-hidden rounded-2xl border border-white/8 bg-card-bg backdrop-blur-xl transition-all duration-300 hover:border-accent/30"
    >
      <img
        src={`https://placehold.co/600x400/0a0a0b/d4a22f?text=${encodeURIComponent(item.label)}`}
        alt={item.label}
        className="h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          {item.subtitle}
        </p>
        <h3 className="font-sans text-lg font-semibold text-foreground mt-1">
          {item.label}
        </h3>
      </div>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: "inset 0 0 40px rgba(212,162,47,0.15)" }}
      />
    </motion.div>
  );
}

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="gallery"
      className="relative border-t border-white/5 bg-background py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col gap-6"
        >
          <EyebrowBadge>DEVINI // HALL OF ACHIEVEMENTS</EyebrowBadge>
          <h2 className="max-w-[24ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Built to <span className="text-accent">celebrate.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            Every milestone matters. From hackathon wins to first product
            launches, these are the moments that define our community.
          </p>
        </motion.div>
      </div>

      {/* Marquee scroll */}
      <div ref={containerRef} className="relative">
        <div className="flex gap-6 px-6 md:px-10 animate-marquee hover:[animation-play-state:paused]">
          {[...achievements, ...achievements].map((item, i) => (
            <GalleryCard key={`${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-6">
        <div className="flex gap-6 px-6 md:px-10 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...achievements, ...achievements]
            .reverse()
            .map((item, i) => (
              <GalleryCard key={`rev-${item.id}-${i}`} item={item} />
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
