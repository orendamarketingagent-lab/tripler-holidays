"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      // Use lerp-based smoothing for steadier frame-to-frame motion during heavy scroll scenes.
      duration: prefersReducedMotion ? 0.01 : undefined,
      easing: undefined,
      lerp: prefersReducedMotion ? 1 : 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      syncTouch: !prefersReducedMotion,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 1.5,
      wheelMultiplier: 0.78,
      touchMultiplier: 0.95,
      anchors: true
    });

    (window as any).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return <>{children}</>;
}
