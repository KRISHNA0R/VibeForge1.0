"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const allImages = [
  { src: "/achievement-photos/1762160343307.jpg", portrait: false },
  { src: "/achievement-photos/1762160344761.jpg", portrait: true },
  { src: "/achievement-photos/1762160348004.jpg", portrait: true },
  { src: "/achievement-photos/1762160417091.jpg", portrait: false },
  { src: "/achievement-photos/1762160482978.jpg", portrait: false },
  { src: "/achievement-photos/1762160531850.jpg", portrait: false },
  { src: "/achievement-photos/1762489477929.jpg", portrait: false },
  { src: "/achievement-photos/1762489477967.jpg", portrait: false },
  { src: "/achievement-photos/1762489659228.jpg", portrait: false },
  { src: "/achievement-photos/1770644193393.jpg", portrait: true },
  { src: "/achievement-photos/1770834968916.jpg", portrait: true },
  { src: "/achievement-photos/1774900702553.jpg", portrait: false },
  { src: "/achievement-photos/1774900702718.jpg", portrait: false },
  { src: "/achievement-photos/1782122517924.jpg", portrait: true },
  { src: "/achievement-photos/1782207738856.jpg", portrait: false },
  { src: "/achievement-photos/1782207738903.jpg", portrait: true },
  { src: "/achievement-photos/1782207738963.jpg", portrait: false },
  { src: "/achievement-photos/1782207738964.jpg", portrait: false },
  { src: "/achievement-photos/1782207739044.jpg", portrait: true },
  { src: "/achievement-photos/1782209145006.jpg", portrait: false },
  { src: "/achievement-photos/1784976624010.jpg", portrait: true },
  { src: "/achievement-photos/1785851120748.jpg", portrait: false },
  { src: "/achievement-photos/1785851126220.jpg", portrait: false },
  { src: "/achievement-photos/1785851127599.jpg", portrait: false },
  { src: "/achievement-photos/1786427959778.jpg", portrait: false },
  { src: "/achievement-photos/1786427959910.jpg", portrait: false },
  { src: "/achievement-photos/1786427960100.jpg", portrait: false },
  { src: "/achievement-photos/1786427964636.jpg", portrait: false },
  { src: "/achievement-photos/1786427971083.jpg", portrait: false },
  { src: "/achievement-photos/1786427971558.jpg", portrait: false },
  { src: "/achievement-photos/1787040601079.jpg", portrait: false },
  { src: "/achievement-photos/1787040601461.jpg", portrait: false },
  { src: "/achievement-photos/1787040601669.jpg", portrait: false },
  { src: "/achievement-photos/1787040601706.jpg", portrait: false },
  { src: "/achievement-photos/1787040602177.jpg", portrait: false },
  { src: "/achievement-photos/1788176063289.jpg", portrait: true },
  { src: "/achievement-photos/1788176067539.jpg", portrait: true },
];

const row1 = allImages.slice(0, Math.ceil(allImages.length / 2));
const row2 = allImages.slice(Math.ceil(allImages.length / 2));

function GalleryCard({ item }: { item: typeof allImages[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative shrink-0 overflow-hidden rounded-2xl border-2 border-[#d4a22f] bg-card-bg backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,162,47,0.4)] ${
        item.portrait
          ? "w-[240px] h-[340px] sm:w-[260px] sm:h-[380px] md:w-[300px] md:h-[440px]"
          : "w-[300px] h-[200px] sm:w-[340px] sm:h-[230px] md:w-[460px] md:h-[300px]"
      }`}
    >
      <img
        src={item.src}
        alt="Achievement"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
          <EyebrowBadge>VIBEFORGE // HALL OF ACHIEVEMENTS</EyebrowBadge>
          <h2 className="max-w-[24ch] font-sans text-3xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
            Built to <span className="text-accent">celebrate.</span>
          </h2>
          <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
            Every milestone matters. From hackathon wins to first product
            launches, these are the moments that define our community.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - moves left */}
      <div ref={containerRef} className="relative mb-4">
        <div className="flex gap-4 items-center px-6 md:px-10 animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((item, i) => (
            <GalleryCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 - moves right */}
      <div className="relative">
        <div className="flex gap-4 items-center px-6 md:px-10 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((item, i) => (
            <GalleryCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 80s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
