"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = { children: React.ReactNode };

export function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.16,
      duration: 0.8,
      wheelMultiplier: 1.25,
      touchMultiplier: 1.4,
      smoothWheel: true,
      syncTouch: true,
      anchors: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
