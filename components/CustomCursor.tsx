"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    const aura = auraRef.current;
    if (!cursor || !aura) return;

    const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power2.out" });
    const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power2.out" });
    const setAuraX = gsap.quickTo(aura, "x", { duration: 0.7, ease: "power3.out" });
    const setAuraY = gsap.quickTo(aura, "y", { duration: 0.7, ease: "power3.out" });

    const onFirstMove = (e: MouseEvent) => {
      gsap.set([cursor, aura], { x: e.clientX, y: e.clientY, opacity: 1 });
      window.removeEventListener("mousemove", onFirstMove);
    };
    window.addEventListener("mousemove", onFirstMove);

    const onMouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setAuraX(e.clientX);
      setAuraY(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onFirstMove);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        document.body.classList.add("cursor-active");
      } else {
        document.body.classList.remove("cursor-active");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [pathname]);

  return (
    <>
      <div ref={cursorRef} className="cinematic-cursor hidden lg:block" />
      <div ref={auraRef} className="cinematic-cursor-aura hidden lg:block" />
    </>
  );
}
