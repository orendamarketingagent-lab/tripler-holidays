"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
};

export default function CountUpStat({
  value,
  suffix,
  label,
  delay = 0
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: latest => setDisplayValue(Math.round(latest))
    });

    return () => controls.stop();
  }, [delay, inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className="cinematic-card cursor-magnetic scandi-soft-card px-5 py-6"
    >
      <div className="text-3xl font-semibold tracking-normal text-[#111820] md:text-4xl">
        {new Intl.NumberFormat("en-US").format(displayValue)}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium leading-6 text-[#111820]/68">{label}</p>
    </motion.div>
  );
}
