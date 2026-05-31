"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ShowcaseSlide = {
  id: number;
  country: string;
  regionAbove: string;
  regionBelow: string;
  description: string;
  cardTitle: string;
  cardSubtitle: string;
  image: string;
  exploreHref: string;
};

const slides: ShowcaseSlide[] = [
  {
    id: 1,
    country: "MALDIVES",
    regionAbove: "THAILAND",
    regionBelow: "MALAYSIA",
    description: "An overwater island escape featuring crystal clear coral reefs, white sand beaches, and luxury resort stays under one flow.",
    cardTitle: "Fihalhohi, Maldives",
    cardSubtitle: "Maldives Blue Horizon",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=84",
    exploreHref: "#maldives-packages"
  },
  {
    id: 2,
    country: "MALAYSIA",
    regionAbove: "MALDIVES",
    regionBelow: "SINGAPORE",
    description: "Outbound city escapes featuring Kuala Lumpur skyline tours, dining, shopping, and comfortable pace transfers.",
    cardTitle: "Kuala Lumpur, Malaysia",
    cardSubtitle: "Kuala Lumpur City Skyline",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=84",
    exploreHref: "#malaysia-packages"
  },
  {
    id: 3,
    country: "SINGAPORE",
    regionAbove: "MALAYSIA",
    regionBelow: "THAILAND",
    description: "Outbound family-friendly breaks with shopping hubs, botanical gardens, and scenic city skyline transfers.",
    cardTitle: "Sentosa, Singapore",
    cardSubtitle: "Singapore Gardens Escape",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=84",
    exploreHref: "#singapore-packages"
  },
  {
    id: 4,
    country: "THAILAND",
    regionAbove: "SINGAPORE",
    regionBelow: "MALDIVES",
    description: "Outbound beach and night escapes covering Bangkok and island clusters with full travel support.",
    cardTitle: "Bangkok, Thailand",
    cardSubtitle: "Thailand Night Pulse",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=84",
    exploreHref: "#thailand-packages"
  }
];

export default function HolidayToursHeroShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !trackRef.current) return;

    let pinTrigger: ScrollTrigger | null = null;

    const createTrigger = () => {
      if (pinTrigger) pinTrigger.kill();

      const bgBanners = gsap.utils.toArray<HTMLElement>(".bg-banner-image", containerRef.current);
      const textBlocks = gsap.utils.toArray<HTMLElement>(".text-details-block", containerRef.current);
      const cardItems = gsap.utils.toArray<HTMLElement>(".destination-card-item", containerRef.current);
      const trackEl = trackRef.current;

      if (bgBanners.length === 0 || textBlocks.length === 0 || cardItems.length === 0 || !trackEl) return;

      const isMobile = window.innerWidth < 1024;
      const containerWidth = trackEl.parentElement ? trackEl.parentElement.offsetWidth : 0;
      if (containerWidth === 0) return; // Wait until container size is known

      const cardWidth = cardItems[0].offsetWidth || (isMobile ? 220 : 280);
      const gap = isMobile ? 16 : 24;
      // Center active card if container is wider than the card, otherwise use small default offset
      const alignOffset = containerWidth > cardWidth ? (containerWidth - cardWidth) / 2 : 16;

      // Calculate track translation positions to align the active card at offset from viewport start
      const positions = slides.map((_, i) => {
        return alignOffset - i * (cardWidth + gap);
      });

      // Set initial state
      gsap.set(bgBanners, { opacity: 0 });
      gsap.set(bgBanners[0], { opacity: 1 });

      gsap.set(textBlocks, { opacity: 0, y: 30, display: "none" });
      gsap.set(textBlocks[0], { opacity: 1, y: 0, display: "flex" });

      gsap.set(cardItems, { opacity: 0.5, scale: 0.92 });
      gsap.set(cardItems[0], { opacity: 1, scale: 1.08 });

      gsap.set(trackEl, { x: positions[0] });

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      const snapStep = 1 / (total - 1);

      pinTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 3.6}`,
        pin: true,
        scrub: 1.1,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        snap: {
          snapTo: snapStep,
          duration: { min: 0.2, max: 0.55 },
          delay: 0.05,
          directional: true,
          ease: "power2.out"
        },
        onUpdate: (self) => {
          const currentIndex = Math.min(total - 1, Math.max(0, Math.round(self.progress * (total - 1))));
          setActiveIndex(previous => (previous === currentIndex ? previous : currentIndex));
        }
      });
      pinTriggerRef.current = pinTrigger;

      // Add timeline tweens for smooth scrubbing transitions
      for (let i = 0; i < total - 1; i++) {
        const transStart = i;

        // Translate track
        tl.to(trackEl, {
          x: positions[i + 1],
          ease: "power2.inOut",
          duration: 1
        }, transStart);

        // Cross-fade backgrounds
        tl.to(bgBanners[i], { opacity: 0, duration: 1 }, transStart)
          .to(bgBanners[i + 1], { opacity: 1, duration: 1 }, transStart);

        // Slide and fade texts with timeline-native display toggling for perfect reversibility
        tl.to(textBlocks[i], { opacity: 0, y: -26, duration: 0.42 }, transStart)
          .set(textBlocks[i], { display: "none" }, transStart + 0.42)
          .set(textBlocks[i + 1], { display: "flex" }, transStart + 0.18)
          .to(textBlocks[i + 1], { opacity: 1, y: 0, duration: 0.72 }, transStart + 0.18);

        // Update card styles
        tl.to(cardItems[i], { opacity: 0.5, scale: 0.92, duration: 1 }, transStart)
          .to(cardItems[i + 1], { opacity: 1, scale: 1.08, duration: 1 }, transStart);
      }
    };

    // Use ResizeObserver to monitor actual rendering layout changes dynamically
    const resizeObserver = new ResizeObserver(() => {
      createTrigger();
    });

    if (trackRef.current && trackRef.current.parentElement) {
      resizeObserver.observe(trackRef.current.parentElement);
    }

    return () => {
      if (pinTrigger) pinTrigger.kill();
      pinTriggerRef.current = null;
      resizeObserver.disconnect();
    };
  }, [total]);

  const scrollToSlide = (index: number) => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const pinTrigger = pinTriggerRef.current;
    const startScroll = pinTrigger?.start ?? containerRef.current.offsetTop;
    const endScroll = pinTrigger?.end ?? startScroll + window.innerHeight * 3.6;
    const scrollHeight = Math.max(1, endScroll - startScroll);
    const targetScroll = startScroll + (index / (total - 1)) * scrollHeight;

    const lenisScroll = (window as any).__lenis;
    if (lenisScroll && typeof lenisScroll.scrollTo === "function") {
      lenisScroll.scrollTo(targetScroll, {
        duration: 0.9,
        lerp: 0.1
      });
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const nextSlide = () => {
    const nextIdx = (activeIndex + 1) % total;
    scrollToSlide(nextIdx);
  };

  const prevSlide = () => {
    const prevIdx = (activeIndex - 1 + total) % total;
    scrollToSlide(prevIdx);
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#082B49]">
      <div ref={stickyRef} className="hero-screen header-safe-top relative w-full overflow-hidden font-jakarta flex items-center">
        
        {/* Background Slide Images Stack */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.country}
              className="bg-banner-image absolute inset-0 h-full w-full object-cover"
            />
          ))}
        </div>

        <div className="cinematic-dark-overlay pointer-events-none absolute inset-0 z-10" />
        <div className="grain-overlay z-10" />

        {/* Left Vertical Timeline Dots Rail */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20 hidden md:flex pointer-events-auto">
          <div className="relative w-px h-64 bg-white/15 flex flex-col justify-between items-center py-2">
            {slides.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToSlide(i)}
                  className="relative group focus:outline-none flex items-center justify-center h-4 w-4 pointer-events-auto"
                >
                  {isActive ? (
                    <motion.div
                      layoutId="activeDotOutline"
                      className="absolute h-9 w-9 rounded-full border border-white/25 bg-white/10 flex items-center justify-center text-[10px] font-bold text-white z-10 shadow-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {i + 1}
                    </motion.div>
                  ) : null}
                  <span
                    className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-transparent scale-0" : "bg-white/40 group-hover:bg-white group-hover:scale-125"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Inner Content Grid */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-8 md:pl-28 md:pr-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* Left Columns Destination Text Details Stack */}
          <div className="relative min-h-[360px] w-full flex items-center max-w-[460px]">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="text-details-block absolute inset-x-0 flex flex-col justify-center text-white"
              >
                {/* Region Above Indicator */}
                <span className="block text-xs font-extrabold uppercase tracking-[0.25em] text-white/40">
                  {slide.regionAbove}
                </span>

                {/* Active Destination Headline */}
                <h1 className="font-space font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter mt-1 lg:mt-2 leading-none">
                  {slide.country}
                </h1>

                {/* Description Text */}
                <p className="mt-3 lg:mt-4 max-w-md text-xs sm:text-sm lg:text-base leading-relaxed text-[#F5F1E8] font-medium opacity-80">
                  {slide.description}
                </p>

                {/* Explore Teal CTA Button */}
                <div className="mt-5 lg:mt-8">
                  <Link
                    href={slide.exploreHref}
                    className="inline-flex items-center gap-3 bg-[#D98928] hover:bg-[#D98928] text-white px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-[8px] font-bold uppercase tracking-wide text-xs transition duration-300 shadow-xl group pointer-events-auto"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Region Below Indicator */}
                <span className="block text-xs font-extrabold uppercase tracking-[0.25em] text-white/40 mt-8">
                  {slide.regionBelow}
                </span>
              </div>
            ))}
          </div>

          {/* Spacer to reserve vertical space for mobile layout stacking and desktop column spacing */}
          <div className="h-[250px] lg:h-[450px]" />

        </div>

        {/* Right Horizontal Cards Viewport (stretching from center to screen edge) */}
        <div 
          className="absolute left-0 lg:left-[50%] right-0 bottom-24 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 h-[340px] lg:h-[450px] overflow-hidden block z-20 pointer-events-none destinations-viewport-mask"
        >
          <div ref={trackRef} className="flex gap-4 lg:gap-6 items-center pointer-events-auto h-full">
            {slides.map((slide, i) => (
              <div key={slide.id} className="destination-card-item flex flex-col gap-2 lg:gap-3 shrink-0">
                <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-white/50 pl-2">
                  {slide.cardTitle}
                </span>
                <motion.div
                  onClick={() => scrollToSlide(i)}
                  className="relative w-[220px] h-[290px] lg:w-[280px] lg:h-[370px] rounded-[20px] lg:rounded-[24px] overflow-hidden border border-white/10 bg-[#082B49]/80 text-left pointer-events-auto shrink-0 transition cursor-pointer"
                >
                  <img
                    src={slide.image}
                    alt={slide.cardTitle}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="absolute top-3 right-3 lg:top-4 lg:right-4 h-8 w-8 lg:h-9 lg:w-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-md grid place-items-center text-white hover:bg-white hover:text-black transition"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 lg:bottom-5 lg:left-5 lg:right-5 text-white">
                    <p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-[#D98928]">
                      {slide.cardSubtitle}
                    </p>
                    <p className="font-space text-base lg:text-lg font-extrabold uppercase mt-0.5 lg:mt-1 leading-tight">
                      {slide.country}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Controls & Progress */}
        <div className="absolute bottom-10 left-8 right-8 md:left-28 md:right-12 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 w-72">
            <span className="text-xs font-extrabold text-white/50 tracking-wider">0{activeIndex + 1}</span>
            <div className="relative flex-1 h-0.5 bg-white/15 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#D98928] rounded-full"
                animate={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-xs font-extrabold text-white/50 tracking-wider">0{total}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
