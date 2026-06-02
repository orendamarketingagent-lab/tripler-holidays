"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
  className?: string;
  /** light (default) or dark — for use on dark bg sections */
  theme?: "light" | "dark";
}

export default function AccordionFAQ({
  items,
  className = "",
  theme = "light",
}: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  const isDark = theme === "dark";

  return (
    <div className={`divide-y ${isDark ? "divide-white/12" : "divide-[#111820]/10"} ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-btn-${i}`}
              onClick={() => toggle(i)}
              className={`group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-200 min-h-[56px] px-1 ${
                isDark
                  ? "text-white hover:text-[#D98928]"
                  : "text-[#111820] hover:text-[#D98928]"
              } ${isOpen ? (isDark ? "text-[#D98928]" : "text-[#D98928]") : ""}`}
            >
              <span className={`text-sm font-bold leading-snug sm:text-base ${isOpen ? "text-[#D98928]" : ""}`}>
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                  isOpen
                    ? "bg-[#D98928] text-white"
                    : isDark
                      ? "bg-white/10 text-white/70 group-hover:bg-white/18"
                      : "bg-[#111820]/8 text-[#111820]/60 group-hover:bg-[#111820]/12"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pb-5 pl-1 pr-12 text-sm leading-7 ${
                      isDark ? "text-white/70" : "text-[#111820]/72"
                    }`}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
