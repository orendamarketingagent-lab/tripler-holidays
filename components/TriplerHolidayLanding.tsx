"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Compass,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Handshake,
  Hotel,
  Lock,
  ShieldCheck,
  Truck,
  Users,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const heroStats = [
  { value: "24/7", label: "Journey support" },
  { value: "20+", label: "Staff members" },
  { value: "100+", label: "Vehicles" },
  { value: "100+", label: "Destination partners" }
];

const hotTours = [
  {
    title: "Sigiriya Rock Fortress",
    tag: "Heritage",
    nights: "UNESCO Site",
    price: "Matale District",
    image: "/images/home/sigiriya-4k.jpg",
    offsetY: "0px"
  },
  {
    title: "Ella Nine Arches Bridge",
    tag: "Scenic Highlands",
    nights: "Train Viewpoint",
    price: "Badulla District",
    image: "/images/home/ella-nine-arches-4k.jpg",
    offsetY: "48px"
  },
  {
    title: "Galle Fort Coastline",
    tag: "Colonial + Coastal",
    nights: "UNESCO Site",
    price: "Southern Province",
    image: "/images/home/galle-fort-coastline-4k.jpg",
    offsetY: "-24px"
  },
  {
    title: "Yala National Park",
    tag: "Wildlife Safari",
    nights: "Leopard Habitat",
    price: "South-East Sri Lanka",
    image: "/images/wildlife/yala-wildlife-adventure-4k.jpg",
    offsetY: "32px"
  }
];

const aboutHighlights = [
  {
    icon: Compass,
    label: "Tailored Journey Design",
    detail: "Every route is custom-planned around your travel style, pace and preferences."
  },
  {
    icon: ShieldCheck,
    label: "Reliable Coordination",
    detail: "From airport arrival to return transfer, each detail is professionally managed."
  },
  {
    icon: Users,
    label: "Group + Family Friendly",
    detail: "Flexible planning for couples, families, private groups and corporate teams."
  },
  {
    icon: CheckCircle2,
    label: "End-to-End Support",
    detail: "Single-point support throughout your journey for smoother decisions and comfort."
  }
];

const sriLankaTours = [
  {
    title: "Sigiriya (Lion Rock)",
    subtitle: "Top Attraction",
    duration: "Ideal visit: 3-4 hours",
    route: "Matale District, Central Province",
    image: "/images/home/sigiriya-4k.jpg",
    tags: ["#UNESCO", "#History", "#Must Visit"],
    idealFor: "Culture lovers and first-time visitors",
    href: "/holiday-tours"
  },
  {
    title: "Temple of the Tooth (Kandy)",
    subtitle: "Top Attraction",
    duration: "Ideal visit: 2-3 hours",
    route: "Kandy, Central Province",
    image: "/images/attractions/temple-of-tooth-kandy.jpg",
    tags: ["#Sacred", "#Culture", "#UNESCO"],
    idealFor: "Spiritual and heritage experiences",
    href: "/holiday-tours"
  },
  {
    title: "Nine Arches Bridge & Ella",
    subtitle: "Top Attraction",
    duration: "Ideal visit: Half day",
    route: "Ella, Badulla District",
    image: "/images/home/ella-nine-arches-4k.jpg",
    tags: ["#Scenic", "#Hiking", "#Train Ride"],
    idealFor: "Nature lovers and photographers",
    href: "/holiday-tours"
  },
  {
    title: "Yala National Park",
    subtitle: "Top Attraction",
    duration: "Ideal visit: Full day safari",
    route: "Southern & Uva Provinces",
    image: "/images/wildlife/yala-wildlife-adventure-4k.jpg",
    tags: ["#Wildlife", "#Safari", "#Leopards"],
    idealFor: "Wildlife and adventure travelers",
    href: "/holiday-tours"
  },
  {
    title: "Galle Fort",
    subtitle: "Top Attraction",
    duration: "Ideal visit: 2-4 hours",
    route: "Galle, Southern Province",
    image: "/images/home/galle-fort-coastline-4k.jpg",
    tags: ["#Colonial", "#UNESCO", "#Coastal"],
    idealFor: "Couples and cultural explorers",
    href: "/holiday-tours"
  }
];

function SriLankaShowcase() {
  const [active, setActive] = useState(0);
  const tour = sriLankaTours[active];

  const goNext = useCallback(() => setActive(i => (i + 1) % sriLankaTours.length), []);
  const goPrev = useCallback(() => setActive(i => (i - 1 + sriLankaTours.length) % sriLankaTours.length), []);

  useEffect(() => {
    const timer = window.setInterval(goNext, 4500);
    return () => window.clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#111820]/14 bg-[#F5F1E8]/80 backdrop-blur-md p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D98928]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-[#D98928]/8 blur-3xl pointer-events-none" />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center relative z-10">
          {/* Left: text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">
                  <span className="h-px w-8 bg-[#D98928]" />
                  {tour.subtitle}
                </span>
                <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">{tour.title}</h2>
                <div className="mt-4 flex items-center gap-3 text-sm text-[#111820]/70">
                  <Clock3 className="h-4 w-4 text-[#D98928]" />
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                <p className="mt-4 text-sm leading-8 text-[#111820]/75 max-w-lg">{tour.route}</p>
                <p className="mt-3 text-xs text-[#111820]/55 italic">Ideal for: {tour.idealFor}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tour.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#111820]/5 border border-[#111820]/10 text-[#111820]/80">{tag}</span>
                  ))}
                </div>
                <div className="mt-8">
                  <a href={tour.href} className="inline-flex items-center gap-3 bg-[#111820] hover:bg-[#D98928] text-white pl-7 pr-2 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md group">
                    Choose Tour
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#111820] transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-2">
              {sriLankaTours.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-8 bg-[#D98928]" : "w-2 bg-[#111820]/20 hover:bg-[#111820]/40"}`} aria-label={`Slide ${i + 1}`} />
              ))}
              <span className="ml-3 text-xs font-bold text-[#111820]/40">{String(active + 1).padStart(2, '0')} / {String(sriLankaTours.length).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Right: square image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square overflow-hidden rounded-[32px] border-[6px] border-[#F5F1E8] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img key={tour.image} src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <AnimatePresence mode="wait">
                <motion.div key={`lbl-${active}`} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center w-full px-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                  <p className="text-xs font-bold uppercase tracking-wider">{tour.subtitle}</p>
                  <p className="text-lg font-space font-extrabold uppercase mt-1">Sri Lanka</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button onClick={goPrev} className="absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#F5F1E8] shadow-lg border border-[#111820]/10 hover:bg-[#111820] hover:text-white transition z-20 cursor-pointer" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={goNext} className="absolute right-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-[#111820] text-white shadow-lg hover:bg-[#D98928] transition z-20 cursor-pointer" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TriplerHolidayLanding() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [customTourForm, setCustomTourForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax layering
      gsap.utils.toArray<HTMLElement>(".parallax-layer").forEach(layer => {
        const depth = Number(layer.dataset.depth ?? "12");
        gsap.to(layer, {
          yPercent: depth,
          ease: "none",
          scrollTrigger: {
            trigger: layer.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Subtle float animation for cards
      gsap.utils.toArray<HTMLElement>(".float-tour-card").forEach((card, index) => {
        gsap.to(card, {
          y: -8 - (index % 2) * 5,
          duration: 2.5 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="scandi-page light-mode-travel min-h-screen overflow-x-hidden text-[#111820]">
      <div ref={pageRef} className="scandi-panel relative">
        <SiteHeader variant="transparent" ctaLabel="Find a Tour" ctaHref="/holiday-tours" />

        {/* 1. HERO SECTION */}
        <section className="hero-mobile header-safe-top relative w-full overflow-hidden text-white bg-[#082B49]">
          <video
            className="parallax-layer absolute -top-[15%] left-0 h-[130%] w-full object-cover brightness-90 contrast-110 saturate-110"
            data-depth="12"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/home%20hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#082B49]/66 via-[#082B49]/50 to-[#082B49]/86" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#082B49]/95 via-[#082B49]/70 to-transparent" />

          <div className="absolute inset-0 z-20 flex items-end justify-center pb-10 text-center sm:pb-[14vh] lg:pb-[16vh]">
            <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 }
                }
              }}
              className="mx-auto max-w-md sm:max-w-3xl lg:max-w-4xl"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                }}
                className="font-space text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl text-white drop-shadow-[0_4px_12px_rgba(8,43,73,0.5)]"
              >
                Escape Into
                <br />
                <span className="text-[#D98928]">Extraordinary</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#F5F1E8]/90 sm:text-base sm:leading-8 drop-shadow-[0_2px_10px_rgba(8,43,73,0.5)]"
              >
                Discover Sri Lanka & Beyond through refined travel experiences.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-7 sm:gap-3"
              >
                <a
                  href="/holiday-tours"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-[#D98928] py-2 pl-5 pr-2 text-[11px] font-bold uppercase tracking-wider text-[#111820] shadow-lg transition-all duration-300 hover:bg-[#D98928] group sm:gap-3 sm:pl-6 sm:text-[11px]"
                >
                  Choose Tour
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#111820] transition-transform duration-300 group-hover:rotate-45 sm:h-8 sm:w-8">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </a>

                <a
                  href="/about#contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#082B49] sm:min-h-11 sm:px-5 sm:text-[11px]"
                >
                  Plan My Trip
                </a>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </section>

        {/* 2. STATS SECTION */}
        <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-16">
          <div className="absolute inset-0 bg-[#F5F1E8]/54" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {heroStats.map(stat => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  whileHover={{ y: -4 }}
                  className="scandi-soft-card border border-[#111820]/14 p-4 sm:p-6"
                >
                  <p className="font-space text-2xl font-bold text-[#D98928] sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#111820]/60 sm:text-xs">{stat.label}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TOP ATTRACTION COLLAGE GRID WITH CURVED TRAIL */}
        <section className="relative px-4 py-12 sm:px-6 sm:py-20 overflow-hidden">
          
          {/* Curve route line winding behind collage cards */}
          <svg className="absolute inset-x-0 top-1/4 w-full h-[60%] pointer-events-none opacity-30 hidden md:block" viewBox="0 0 1440 600" fill="none">
            <path
              d="M 100,100 C 400,200 450,450 780,250 C 1100,50 1200,450 1380,350"
              stroke="#D98928"
              strokeWidth="2.5"
              strokeDasharray="6 10"
              className="route-dash"
            />
          </svg>

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                  <span className="h-px w-9 bg-[#D98928]" />
                  Sri Lanka
                </span>
                <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">
                  Top <span className="inline-block rounded-full bg-[#F5F1E8]/80 border border-[#111820]/12 px-6 py-1.5 shadow-sm text-[#D98928] leading-none">Attractions</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#111820]/82">
                Handpicked Sri Lankan highlights and signature destinations curated for unforgettable journeys.
              </p>
            </div>

            {/* Collage Grid of Offset Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="hide-scrollbar snap-carousel mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
            >
              {hotTours.map((tour, index) => (
                <motion.article
                  key={tour.title}
                  variants={{
                    hidden: { opacity: 0, y: 36, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 85, damping: 14 } }
                  }}
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="group relative aspect-[3/4] min-w-[80vw] snap-start overflow-hidden rounded-[28px] border border-[#111820]/15 bg-[#F5F1E8] shadow-xl sm:min-w-0"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
                  </div>

                  {/* Top tag badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D98928] backdrop-blur-md">
                    {tour.tag}
                  </span>

                  {/* Circle arrow hover overlay */}
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white border border-white/25 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300 z-10">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>

                  {/* Bottom Text metadata block */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[11px] font-bold text-[#D98928] tracking-wider uppercase">{tour.nights}</p>
                        <h3 className="font-space text-lg font-extrabold uppercase mt-1 leading-tight tracking-wide">{tour.title}</h3>
                      </div>
                      <p className="text-sm font-black uppercase text-[#D98928] tracking-wider shrink-0">{tour.price}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 7. ABOUT & HIGHLIGHTS GRID */}
        <section className="relative overflow-hidden bg-[#082B49] px-4 py-14 text-[#F5F1E8] sm:px-6 lg:py-24">
          <img
            src="/images/home/ella-nine-arches-4k.jpg"
            alt="Sri Lanka scenic travel experience"
            className="absolute inset-y-0 right-0 hidden h-full w-[46%] object-cover opacity-28 lg:block"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#082B49_0%,rgba(8,43,73,0.96)_48%,rgba(8,43,73,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,137,40,0.18),transparent_34%),radial-gradient(circle_at_78%_80%,rgba(245,241,232,0.08),transparent_32%)]" />
          <div className="grain-overlay opacity-35" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
              }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                <span className="h-px w-9 bg-[#D98928]" />
                About Us
              </span>
              <h2 className="mt-5 font-space text-4xl font-bold uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
                Crafting Exceptional Travel Experiences
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-[#F5F1E8]/82 sm:text-base">
                At Triple R Holidays, we transform travel ideas into unforgettable experiences. Backed by expertise in tourism and hospitality, we create personalized journeys that are seamless, memorable, and tailored to your needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F5F1E8]/18 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F5F1E8]/88 backdrop-blur-md">
                  Premium Service Standards
                </div>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D98928]/55 bg-[#D98928] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#111820] transition hover:bg-[#F5F1E8]"
                >
                  Our Story
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1
                  }
                }
              }}
              className="border-y border-[#F5F1E8]/18 bg-[#061F35]/42 backdrop-blur-md"
            >
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.96 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                    }}
                    className="group grid gap-4 border-b border-[#F5F1E8]/14 px-4 py-6 last:border-b-0 sm:grid-cols-[72px_1fr_42px] sm:items-start sm:px-6 lg:px-8"
                  >
                    <div className="flex items-center justify-between sm:block">
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-[#D98928]/45 bg-[#D98928]/12 text-[#D98928] transition group-hover:bg-[#D98928] group-hover:text-[#111820]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F1E8]/42 sm:hidden">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-white">{item.label}</p>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-[#F5F1E8]/72">{item.detail}</p>
                    </div>
                    <span className="hidden text-right text-[11px] font-bold uppercase tracking-[0.22em] text-[#F5F1E8]/42 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 9. WHY TRAVELERS TRUST US */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/60 via-[#F5F1E8]/80 to-[#F5F1E8]/60" />
          <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#D98928]/8 blur-[100px] pointer-events-none" />
          <div className="absolute -right-24 bottom-1/4 h-56 w-56 rounded-full bg-[#082B49]/6 blur-[80px] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="text-center"
            >
              <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
                Trust & <span className="text-[#D98928]">Recognition</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
                Your peace of mind is our priority. We maintain high standards of professionalism and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
              className="mt-12"
            >
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="scandi-soft-card border border-[#111820]/14 p-7 max-w-3xl w-full"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#D98928]/20 text-[#D98928]">
                      <BadgeCheck className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#111820]">Legal Business Entity</h3>
                      <p className="mt-1 text-sm leading-7 text-[#111820]/78">
                        Registered under the Companies Act, Sri Lanka
                      </p>

                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">
                          Business Registration Number
                        </p>
                        <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-[#111820]/16 bg-white/72 px-5 py-2.5">
                          <span className="text-lg font-black text-[#111820]">BR No:</span>
                          <span className="text-lg font-bold text-[#111820]">P V 00359539</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 10. PAYMENT SECURITY */}
        <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:py-20">
          <div className="relative mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-3">
                <CreditCard className="h-6 w-6 text-[#D98928]" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#111820]">
                  Payment Security
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid gap-8 md:grid-cols-2 items-center"
            >
              {/* Left: Security badges */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="space-y-4"
              >
                <div className="scandi-soft-card border border-[#111820]/14 p-5 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#2F5D50]/15 text-[#2F5D50]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold text-[#111820]">100% Secure Online Payments</p>
                </div>
                <div className="scandi-soft-card border border-[#111820]/14 p-5 flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#D98928]/15 text-[#D98928]">
                    <Lock className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-bold text-[#111820]">SSL Encrypted Transactions</p>
                </div>
              </motion.div>

              {/* Right: Payment methods */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="text-center"
              >
                <p className="text-base font-bold text-[#111820] mb-5">We Are Accepting</p>
                <div className="flex flex-wrap items-center justify-center gap-5">
                  {/* 40% Advance Payment Badge */}
                  <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[#D98928]/30 bg-[#D98928]/10 px-4 py-3">
                    <span className="text-lg font-extrabold text-[#D98928]">40%</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#D98928]">Advance Payment</span>
                  </div>

                  {/* Visa */}
                  <div className="flex h-14 w-20 items-center justify-center rounded-xl border border-[#111820]/10 bg-white p-2 shadow-sm">
                    <svg viewBox="0 0 780 500" className="h-8 w-auto" aria-label="Visa">
                      <path d="M293.2 348.7l33.4-195.7h53.4l-33.4 195.7zM540.7 157.2c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.5-90.2 64.5-.3 28.1 26.5 43.7 46.8 53.1 20.8 9.6 27.8 15.7 27.7 24.3-.1 13.1-16.6 19.1-31.9 19.1-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 56.2 0 92.7-26.2 93.1-66.8.2-22.3-14-39.2-44.8-53.2-18.6-9.1-30.1-15.1-30-24.3 0-8.1 9.7-16.8 30.6-16.8 17.4-.3 30.1 3.5 39.9 7.5l4.8 2.3 7.4-42.4zM676 153h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.3 179.4h56.1s9.2-24.1 11.3-29.4c6.1 0 60.7.1 68.5.1 1.6 6.9 6.5 29.3 6.5 29.3H722L676 153zm-65.9 125.9c4.4-11.3 21.4-54.7 21.4-54.7-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.3 46.9 12.4 56.5h-44.5zM209.8 153l-52.3 133.5-5.6-27.1c-9.7-31.2-39.9-65.1-73.7-82l47.8 171.2 56.6-.1 84.2-195.5h-57z" fill="#082B49"/>
                      <path d="M131.9 153H46.5l-.7 4c67 16.2 111.4 55.3 129.7 102.2l-18.7-90c-3.2-12.2-12.6-15.8-24.9-16.2z" fill="#D98928"/>
                    </svg>
                  </div>

                  {/* Mastercard */}
                  <div className="flex h-14 w-20 items-center justify-center rounded-xl border border-[#111820]/10 bg-white p-2 shadow-sm">
                    <svg viewBox="0 0 780 500" className="h-8 w-auto" aria-label="Mastercard">
                      <circle cx="310" cy="250" r="170" fill="#D98928"/>
                      <circle cx="470" cy="250" r="170" fill="#F2B24D"/>
                      <path d="M390 120.8a169.5 169.5 0 0 0-80 129.2 169.5 169.5 0 0 0 80 129.2 169.5 169.5 0 0 0 80-129.2 169.5 169.5 0 0 0-80-129.2z" fill="#A65E35"/>
                    </svg>
                  </div>

                  {/* American Express */}
                  <div className="flex h-14 w-20 items-center justify-center rounded-xl border border-[#111820]/10 bg-[#082B49] p-2 shadow-sm">
                    <span className="text-[9px] font-extrabold uppercase leading-tight text-white text-center tracking-wider">American Express</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 11. MEMBERSHIPS & PARTNERSHIPS */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/50 via-[#F5F1E8]/75 to-[#F5F1E8]/50" />
          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Handshake className="h-6 w-6 text-[#D98928]" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#111820]">
                  Memberships & Partnerships
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {/* Local Expertise */}
              <motion.article
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="scandi-soft-card border border-[#111820]/14 p-7 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#D98928]/18 text-[#D98928]">
                  <Users className="h-7 w-7" />
                </span>
                <h4 className="mt-5 font-space text-xl font-extrabold uppercase text-[#111820]">
                  Local Expertise
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#111820]/75">
                  Sri Lanka&apos;s largest network of local experts
                </p>
                <span className="mt-4 inline-block rounded-full bg-[#D98928]/12 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D98928]">
                  Trusted Collaborators
                </span>
              </motion.article>

              {/* Hotel Partners */}
              <motion.article
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="scandi-soft-card border border-[#111820]/14 p-7 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#D98928]/18 text-[#D98928]">
                  <Hotel className="h-7 w-7" />
                </span>
                <h4 className="mt-5 font-space text-xl font-extrabold uppercase text-[#111820]">
                  Hotel Partners
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#111820]/75">
                  Partnerships with 500+ luxury hotels and resorts
                </p>
                <span className="mt-4 inline-block rounded-full bg-[#D98928]/12 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D98928]">
                  Trusted Partner
                </span>
              </motion.article>

              {/* Premium Transport */}
              <motion.article
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="scandi-soft-card border border-[#111820]/14 p-7 text-center sm:col-span-2 lg:col-span-1"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#D98928]/18 text-[#D98928]">
                  <Truck className="h-7 w-7" />
                </span>
                <h4 className="mt-5 font-space text-xl font-extrabold uppercase text-[#111820]">
                  Premium Transport
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#111820]/75">
                  Air-conditioned private transfers and vehicles
                </p>
                <span className="mt-4 inline-block rounded-full bg-[#D98928]/12 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D98928]">
                  Official Travel Partner
                </span>
              </motion.article>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-center text-sm leading-7 text-[#111820]/68 max-w-2xl mx-auto"
            >
              We are proud members of leading travel associations and maintain partnerships with major hotels.
            </motion.p>
          </div>
        </section>

        {/* 12. EXCLUSIVE CUSTOMIZED TOUR */}
        <section id="custom-tour" className="relative overflow-hidden px-4 py-12 sm:px-6 lg:py-24 border-t border-[#111820]/10 bg-gradient-to-b from-[#F5F1E8]/30 to-[#F5F1E8]/70">
          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">
                Looking for an
              </span>
              <h2 className="font-space text-2xl sm:text-5xl font-black uppercase mt-3 text-[#111820]">
                Exclusive Customized Tour?
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left column: Contact Card & Map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 16 }}
                className="flex flex-col h-full rounded-[28px] bg-[#111820] text-white p-7 sm:p-9 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative background blur */}
                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#D98928]/12 blur-[100px] pointer-events-none" />
                <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-[#1E7C8A]/10 blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-space text-2xl font-bold uppercase text-[#D98928] mb-3">
                      Get Expert Travel Advice
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 mb-8 max-w-sm">
                      Planning a trip can be exciting but also overwhelming with so many options available.
                    </p>

                    {/* Direct Info */}
                    <div className="space-y-5 mb-8">
                      <a href="tel:+94112934924" className="flex items-center gap-4 group">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#D98928] group-hover:bg-[#D98928] group-hover:text-white transition-all duration-300">
                          <Phone className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-white/90 group-hover:text-[#D98928] transition">(011) 293 4924</span>
                      </a>
                      <a href="mailto:hello@triplerholidays.com" className="flex items-center gap-4 group">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#D98928] group-hover:bg-[#D98928] group-hover:text-white transition-all duration-300">
                          <Mail className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-white/90 group-hover:text-[#D98928] transition break-all">hello@triplerholidays.com</span>
                      </a>
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#D98928]/20 text-[#D98928] shrink-0">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <span className="text-sm leading-relaxed text-white/80">
                          128/7 A.S.P Liyanage Mawatha,<br />Royal Pearl Garden, Wattala,<br />Sri Lanka
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Embedded interactive Google Map */}
                  <div className="h-48 w-full rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-inner mb-6 min-h-[190px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.228498877561!2d79.88871037599026!3d6.98235281765451!2m3!1f0!2f0!3f0!3m2!1i1024!2i769!4f13.1!3m3!1m2!1s0x3ae25a2428387063%3A0xe54e60dc6c18f1fa!2sWattala!5e0!3m2!1sen!2slk!4v1716942000000!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full object-cover"
                      title="Triple R Holidays Location Map"
                    ></iframe>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4">
                    <a href="https://facebook.com" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/80 hover:bg-[#D98928] hover:text-white transition duration-300" aria-label="Facebook">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/triplerholidays.lk" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/80 hover:bg-[#D98928] hover:text-white transition duration-300" aria-label="Instagram">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/80 hover:bg-[#D98928] hover:text-white transition duration-300" aria-label="LinkedIn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right column: Form Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 16 }}
                className="scandi-soft-card border border-[#111820]/14 p-7 sm:p-9 bg-[#F5F1E8]/70 backdrop-blur-md shadow-lg"
              >
                <h3 className="font-space text-2xl font-bold uppercase text-[#111820] mb-6">
                  Let&apos;s Plan Your Dream Journey
                </h3>

                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="h-16 w-16 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50] mb-4">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h4 className="font-space text-xl font-bold uppercase text-[#111820]">Inquiry Sent!</h4>
                      <p className="mt-2 text-sm text-[#111820]/75 max-w-sm leading-relaxed">
                        Thank you for planning your journey with us. Our travel experts will get in touch with you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitSuccess(false)}
                        className="mt-6 text-xs font-bold uppercase tracking-wider text-[#D98928] hover:text-[#F2B24D] transition cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        setTimeout(() => {
                          setIsSubmitting(false);
                          setSubmitSuccess(true);
                          setCustomTourForm({ name: "", email: "", message: "" });
                        }, 1200);
                      }}
                      className="space-y-5"
                    >
                      <div>
                        <label htmlFor="custom-name" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="custom-name"
                          required
                          value={customTourForm.name}
                          onChange={(e) => setCustomTourForm({ ...customTourForm, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="custom-email" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="custom-email"
                          required
                          value={customTourForm.email}
                          onChange={(e) => setCustomTourForm({ ...customTourForm, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="custom-message" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                          Message
                        </label>
                        <textarea
                          id="custom-message"
                          required
                          rows={4}
                          value={customTourForm.message}
                          onChange={(e) => setCustomTourForm({ ...customTourForm, message: e.target.value })}
                          placeholder="Describe your dream travel plan, number of passengers, dates, destinations..."
                          className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200 resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full min-h-12 rounded-xl bg-[#111820] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-[#D98928] disabled:opacity-50 transition duration-300 shadow-md shadow-[#111820]/10 cursor-pointer"
                      >
                        {isSubmitting ? "Submitting..." : (
                          <>
                            Submit Request
                            <Send className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
