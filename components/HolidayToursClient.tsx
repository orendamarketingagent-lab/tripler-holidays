"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Car,
  Hotel,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  MapPin
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import AccordionFAQ from "@/components/AccordionFAQ";

const contact = {
  phone: "(011) 293 4924",
  whatsappHref: "https://wa.me/94767161937",
  email: "hello@triplerholidays.com"
};

const sriLankanPics = {
  hillCountry: "/images/srilankan-pics/IMG_9822.jpg",
  templeBuddha: "/images/srilankan-pics/IMG_0777.jpg",
  templeRows: "/images/srilankan-pics/IMG_0775.jpg",
  cityTemple: "/images/srilankan-pics/IMG_1581.jpg",
  beachBlue: "/images/srilankan-pics/IMG_0016.jpg",
  beachSunset: "/images/srilankan-pics/IMG_3479.jpg",
  luxuryCoast: "/images/srilankan-pics/IMG_6911.jpg",
  riverSafari: "/images/srilankan-pics/IMG_1254.jpg",
  wildlifeElephant: "/images/srilankan-pics/IMG_0070.jpg",
  safariRoad: "/images/srilankan-pics/IMG_0043.jpg",
  peraheraElephant: "/images/srilankan-pics/IMG_6800.jpg",
  peraheraUmbrella: "/images/srilankan-pics/IMG_7964.jpg"
};

const buildMailtoHref = (subject: string, fields: Array<[string, string]>) => {
  const body = fields
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const sriLankaHeroImage =
  "/images/holiday-tours-hero-4k-v2.jpg";

const inCountryPackages = [
  {
    id: 1,
    title: "Sri Lanka Grand Multi-City Tour",
    duration: "14 nights / 15 days",
    route: "Veyangoda, Sigiriya, Trincomalee, Kandy, Nuwara Eliya, Yala, Mirissa, Bentota, Colombo",
    image: sriLankanPics.cityTemple,
    badge: "Signature island route",
    idealFor: "Groups, families and first-time visitors",
    highlights: ["Sigiriya Rock", "Kandy heritage", "Tea country", "Yala safari", "South coast beaches"],
    href: contact.whatsappHref
  },
  {
    id: 2,
    title: "Cultural Triangle & Kandy",
    duration: "5 nights / 6 days",
    route: "Dambulla, Sigiriya, Matale, Kandy",
    image: sriLankanPics.templeBuddha,
    badge: "Ancient kingdoms",
    idealFor: "History lovers and compact group tours",
    highlights: ["Cave Temple", "Village tour", "Spice garden", "Temple of the Tooth"],
    href: contact.whatsappHref
  },
  {
    id: 3,
    title: "Hill Country Scenic Escape",
    duration: "4 nights / 5 days",
    route: "Kandy, Ramboda, Nuwara Eliya, Ella",
    image: sriLankanPics.hillCountry,
    badge: "Highland escape",
    idealFor: "Couples, families and slow scenic travel",
    highlights: ["Tea factory", "Waterfalls", "Gregory Lake", "Nine Arch Bridge"],
    href: contact.whatsappHref
  },
  {
    id: 4,
    title: "South Coast Beach Trail",
    duration: "5 nights / 6 days",
    route: "Mirissa, Weligama, Galle, Hikkaduwa, Bentota",
    image: sriLankanPics.beachSunset,
    badge: "Coastal trail",
    idealFor: "Beach breaks, friends and leisure groups",
    highlights: ["Whale watching", "Surfing", "Galle Fort", "Madu River safari"],
    href: contact.whatsappHref
  }
];

const sriLankaInclusions = [
  { title: "Private chauffeur tours", icon: Car },
  { title: "Handpicked local hotels", icon: Hotel },
  { title: "Flexible route dates", icon: CalendarDays },
  { title: "On-ground Sri Lanka support", icon: Users }
];

const sriLankaWhyBook = [
  "Deep local route planning for travel rhythm and comfort",
  "Trusted hotel network across cultural, hill and beach zones",
  "Driver-guide coordination with real-time local support",
  "Flexible options for couples, families and group departures"
];

const sriLankaGallery = [
  {
    image: "/images/home/sigiriya-4k.jpg",
    alt: "Sigiriya Rock Fortress rising above Sri Lankan forest",
    position: "center 42%"
  },
  {
    image: "/images/home/ella-nine-arches-4k.jpg",
    alt: "Nine Arch Bridge in Ella surrounded by hill country greenery",
    position: "center 48%"
  },
  {
    image: "/images/attractions/home-carousel/yala-national-park.jpg",
    alt: "Sri Lankan leopard on safari in Yala National Park",
    position: "center 52%"
  },
  {
    image: "/images/home/galle-fort-coastline-4k.jpg",
    alt: "Galle Fort coastline and ocean views in Sri Lanka",
    position: "center 52%"
  }
];

const sriLankaReviews = [
  {
    name: "Ishan + Dilki",
    text: "Our Sri Lanka route felt perfectly balanced between culture, hills and beach. Transfers were seamless."
  },
  {
    name: "Tharushi Family",
    text: "Kids loved the wildlife days and we loved the pace. Every stay and handover was properly managed."
  },
  {
    name: "Ahamed Group",
    text: "Local planning was strong from day one. We enjoyed Sri Lanka without dealing with route stress."
  }
];

const sriLankaFaqs = [
  {
    q: "Can I customize the Sri Lanka route?",
    a: "Yes. We customize the route sequence, hotel class and activities based on your preferred pace."
  },
  {
    q: "Do you provide private transport inside Sri Lanka?",
    a: "Yes. Private chauffeur transport is planned end-to-end for the full route."
  },
  {
    q: "How fast can we receive a Sri Lanka plan?",
    a: "Share travel dates and traveller count, and we will send your first route draft quickly."
  }
];

export default function HolidayToursClient() {
  const [inquiryForm, setInquiryForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    travelType: "",
    travelCategory: "",
    numberOfDays: "",
    preferredActivities: "",
    additionalNotes: ""
  });
  const [isInquirySubmitting, setIsInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  return (
    <main className="holiday-page-bg light-mode-travel min-h-screen text-[#111820] font-manrope">
      <SiteHeader variant="transparent" ctaLabel="Get Quote" ctaHref="/holiday-tours#tour-quote" />

      <section
        className="photo-text-hero hero-mobile relative w-full overflow-hidden text-white [--hero-image-brightness:0.78]"
        data-hero-pin
        data-hero-pin-distance="108"
      >
        <img
          src={sriLankaHeroImage}
          alt="Clear Sri Lanka landscape"
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
          data-parallax="12"
          data-hero-media
        />
        <div className="absolute inset-0 bg-[#082B49]/36" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B49]/22 via-[#082B49]/24 to-[#082B49]/52" />

        <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-center px-6 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl text-center"
            data-hero-content
          >
            <h1 className="font-space text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl text-white drop-shadow-[0_4px_12px_rgba(8,43,73,0.5)]">
              Discover <span className="text-[#D98928]">Sri Lanka</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#F5F1E8]/90 sm:text-base sm:leading-8">
              Curated island journeys across heritage cities, misty highlands, wildlife parks and sunlit coastlines.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-white/90 sm:text-base">
              Culture, Wildlife, Highlands, Beaches.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#tour-quote"
                className="inline-flex items-center gap-3 rounded-full bg-[#D98928] py-2 pl-6 pr-2 text-[11px] font-bold uppercase tracking-wider text-[#111820] shadow-lg transition-all duration-300 hover:bg-[#F2B24D] group"
              >
                Get a Quote
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#111820] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="in-country" className="scroll-mt-24 bg-transparent px-4 py-12 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Travel Themes Section */}
          <div id="travel-themes" className="scroll-mt-28 py-10">
            <div className="text-center mb-10">
              <h3 className="font-space text-3xl sm:text-4xl font-black uppercase text-[#111820]">
                Travel <span className="text-[#D98928]">Themes</span>
              </h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } }
              }}
              className="hide-scrollbar snap-carousel flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
            >
              {[
                {
                  title: "Cultural Exploration",
                  desc: "Walk through sacred cities, temple traditions and living heritage with comfortable local guidance.",
                  image: sriLankanPics.templeRows
                },
                {
                  title: "Wildlife Adventures",
                  desc: "Plan safari days around Sri Lanka's national parks, birdlife, elephants and big-cat territory.",
                  image: sriLankanPics.wildlifeElephant
                },
                {
                  title: "Beach Getaways",
                  desc: "Slow down on Sri Lankan beaches with surf towns, lagoon sunsets and easy coastal stays.",
                  image: sriLankanPics.beachBlue
                },
                {
                  title: "Luxury Retreats",
                  desc: "Shape the route around boutique stays, private transport and quieter premium experiences.",
                  image: sriLankanPics.luxuryCoast
                }
              ].map(theme => (
                <motion.article
                  key={theme.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="scandi-soft-card group min-w-[82vw] snap-start overflow-hidden border border-[#111820]/10 bg-white/40 sm:min-w-0"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5 bg-white/40">
                    <h4 className="font-space text-lg font-bold uppercase text-[#111820] group-hover:text-[#D98928] transition duration-200">
                      {theme.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#111820]/75">
                      {theme.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <section className="bg-transparent px-0 py-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scandi-soft-card p-6 sm:p-7"
              >
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                  <span className="h-px w-9 bg-[#D98928]" />
                  Sri Lanka Tour Inclusions
                </span>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {sriLankaInclusions.map(item => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="holiday-card-soft p-5 text-center flex flex-col items-center">
                        <Icon className="h-6 w-6 text-[#D98928]" />
                        <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#111820]/90">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Spacer */}
          <div className="h-16" />

          {/* Existing packages heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">
              <MapPin className="h-3.5 w-3.5" />
              Sri Lanka
            </span>
            <h3 className="font-space text-2xl sm:text-4xl font-black uppercase mt-2 text-[#111820]">
              Sri Lanka Tour Packages
            </h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="hide-scrollbar snap-carousel mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden"
          >
            {inCountryPackages.map(pkg => (
              <motion.article
                key={`mobile-${pkg.id}`}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                className="min-w-[82vw] snap-start"
              >
                <Link
                  href={pkg.href}
                  className="group relative block min-h-[320px] overflow-hidden rounded-[22px] border border-[#111820]/15 bg-[#082B49]"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.08)_contrast(1.04)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute left-3 right-3 top-3 z-20 inline-flex w-fit max-w-[calc(100%-1.5rem)] flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-2xl border border-[#D98928]/80 bg-[#082B49]/95 px-2.5 py-1 text-[9px] font-black uppercase leading-4 tracking-[0.08em] text-white shadow-[0_8px_22px_rgba(8,43,73,0.35)] backdrop-blur-sm">
                    <span>{pkg.duration}</span>
                    <span className="text-[#D98928]">/</span>
                    <span className="text-[#F2B24D]">{pkg.badge}</span>
                  </span>
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-4 pt-20 text-white">
                    <h3 className="font-space max-w-[15rem] text-base font-extrabold uppercase leading-tight min-[380px]:max-w-[17rem]">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[10px] leading-5 text-white/75">{pkg.route}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Dynamic 3-Column Mosaic Grid Layout */}
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
            className="mt-12 hidden grid-cols-1 gap-6 items-stretch md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            
            {/* Column 1: Package 1 (Tall Card) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
              }}
              className="flex flex-col h-full min-h-[480px]"
            >
              <Link 
                href={inCountryPackages[0].href} 
                className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-[32px] border border-[#111820]/15 bg-[#082B49] text-left p-8 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(17,24,32,0.22)]"
              >
                <img
                  src={inCountryPackages[0].image}
                  alt={inCountryPackages[0].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.08)_contrast(1.04)]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                <span className="absolute left-6 right-6 top-6 inline-flex w-fit max-w-[calc(100%-3rem)] flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-[#D98928]/80 bg-[#082B49]/95 px-3.5 py-1.5 text-[10px] font-black uppercase leading-4 tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(8,43,73,0.35)] backdrop-blur-sm">
                  <span>{inCountryPackages[0].duration}</span>
                  <span className="text-[#D98928]">/</span>
                  <span className="text-[#F2B24D]">{inCountryPackages[0].badge}</span>
                </span>

                <div className="relative z-10 text-white">
                  <h3 className="font-space text-2xl lg:text-3xl font-extrabold uppercase mt-1 leading-tight">
                    {inCountryPackages[0].title}
                  </h3>
                  <p className="mt-3 text-xs lg:text-sm text-white/70 leading-relaxed max-w-sm line-clamp-3">
                    {inCountryPackages[0].route}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#D98928]">
                    Ideal for: {inCountryPackages[0].idealFor}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Column 2: Package 2 & Package 3 (Stacked Medium Cards) */}
            <div className="flex flex-col gap-6 h-full justify-between">
              
              {/* Package 2 (Medium Card) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="flex flex-col flex-1 min-h-[228px]"
              >
                <Link 
                  href={inCountryPackages[1].href} 
                  className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-[32px] border border-[#111820]/15 bg-[#082B49] text-left p-6 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(17,24,32,0.22)]"
                >
                  <img
                    src={inCountryPackages[1].image}
                    alt={inCountryPackages[1].title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.08)_contrast(1.04)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute left-6 right-6 top-6 inline-flex w-fit max-w-[calc(100%-3rem)] flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-[#D98928]/80 bg-[#082B49]/95 px-3.5 py-1.5 text-[10px] font-black uppercase leading-4 tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(8,43,73,0.35)] backdrop-blur-sm">
                    <span>{inCountryPackages[1].duration}</span>
                    <span className="text-[#D98928]">/</span>
                    <span className="text-[#F2B24D]">{inCountryPackages[1].badge}</span>
                  </span>
                  <div className="relative z-10 text-white">
                    <h3 className="font-space text-xl font-extrabold uppercase mt-1 leading-tight">
                      {inCountryPackages[1].title}
                    </h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed line-clamp-2">
                      {inCountryPackages[1].route}
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Package 3 (Medium Card) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="flex flex-col flex-1 min-h-[228px]"
              >
                <Link 
                  href={inCountryPackages[2].href} 
                  className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-[32px] border border-[#111820]/15 bg-[#082B49] text-left p-6 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(17,24,32,0.22)]"
                >
                  <img
                    src={inCountryPackages[2].image}
                    alt={inCountryPackages[2].title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.08)_contrast(1.04)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute left-6 right-6 top-6 inline-flex w-fit max-w-[calc(100%-3rem)] flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-[#D98928]/80 bg-[#082B49]/95 px-3.5 py-1.5 text-[10px] font-black uppercase leading-4 tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(8,43,73,0.35)] backdrop-blur-sm">
                    <span>{inCountryPackages[2].duration}</span>
                    <span className="text-[#D98928]">/</span>
                    <span className="text-[#F2B24D]">{inCountryPackages[2].badge}</span>
                  </span>
                  <div className="relative z-10 text-white">
                    <h3 className="font-space text-xl font-extrabold uppercase mt-1 leading-tight">
                      {inCountryPackages[2].title}
                    </h3>
                    <p className="mt-2 text-xs text-white/70 leading-relaxed line-clamp-2">
                      {inCountryPackages[2].route}
                    </p>
                  </div>
                </Link>
              </motion.div>

            </div>

            {/* Column 3: Package 4 (Tall Card) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
              }}
              className="flex flex-col h-full min-h-[480px] md:col-span-2 lg:col-span-1"
            >
              <Link 
                href={inCountryPackages[3].href} 
                className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-[32px] border border-[#111820]/15 bg-[#082B49] text-left p-8 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(17,24,32,0.22)]"
              >
                <img
                  src={inCountryPackages[3].image}
                  alt={inCountryPackages[3].title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.08)_contrast(1.04)]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                <span className="absolute left-6 right-6 top-6 inline-flex w-fit max-w-[calc(100%-3rem)] flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-[#D98928]/80 bg-[#082B49]/95 px-3.5 py-1.5 text-[10px] font-black uppercase leading-4 tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(8,43,73,0.35)] backdrop-blur-sm">
                  <span>{inCountryPackages[3].duration}</span>
                  <span className="text-[#D98928]">/</span>
                  <span className="text-[#F2B24D]">{inCountryPackages[3].badge}</span>
                </span>

                <div className="relative z-10 text-white">
                  <h3 className="font-space text-2xl lg:text-3xl font-extrabold uppercase mt-1 leading-tight">
                    {inCountryPackages[3].title}
                  </h3>
                  <p className="mt-3 text-xs lg:text-sm text-white/70 leading-relaxed max-w-sm line-clamp-3">
                    {inCountryPackages[3].route}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#D98928]">
                    Ideal for: {inCountryPackages[3].idealFor}
                  </p>
                </div>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>



      <section className="bg-transparent px-4 py-12 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.article
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="scandi-soft-card p-6 sm:p-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                <span className="h-px w-9 bg-[#D98928]" />
                Why choose us
              </span>
              <h3 className="font-space fluid-title mt-4 font-bold uppercase">
                Sri Lanka Planning Expertise
              </h3>
              <div className="mt-5 space-y-3">
                {sriLankaWhyBook.map(item => (
                  <div key={item} className="flex items-start gap-3 rounded-[12px] border border-[#111820]/14 bg-black/[0.04] p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D98928]" />
                    <p className="text-sm leading-7 text-[#111820]/84">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="scandi-soft-card p-6 sm:p-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                <span className="h-px w-9 bg-[#D98928]" />
                Sri Lanka gallery
              </span>
              <h3 className="font-space fluid-title mt-4 font-bold uppercase">
                Island Highlights
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {sriLankaGallery.map(({ image, alt, position }) => (
                  <div key={image} className="expand-image overflow-hidden rounded-[12px] border border-white/14" data-expand-image>
                    <img
                      src={image}
                      alt={alt}
                      className="h-32 w-full object-cover md:h-36"
                      style={{ objectPosition: position }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-transparent px-4 py-12 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
                <span className="h-px w-9 bg-[#D98928]" />
                Testimonials
              </span>
              <h2 className="font-space fluid-title mt-4 font-bold uppercase">
                WHAT OUR TRAVELLERS SAY
              </h2>
            </div>
          </motion.div>

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
            className="hide-scrollbar snap-carousel mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0"
          >
            {sriLankaReviews.map(item => (
              <motion.article
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="scandi-soft-card min-w-[82vw] snap-start p-4 sm:min-w-0 sm:p-6"
              >
                <div className="flex items-center gap-1 text-[#D98928]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`${item.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#111820]/78">{item.text}</p>
                <p className="font-space mt-5 text-lg font-bold uppercase">{item.name}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-transparent px-4 py-20 sm:px-6 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl rounded-[22px] border border-white/16 bg-navy-glass p-6 shadow-[0_30px_84px_rgba(2,8,23,0.46)] backdrop-blur-md text-white sm:p-8 lg:p-10"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
            <Sparkles className="h-4 w-4" />
            Sri Lanka FAQ
          </div>
          <h2 className="font-space fluid-title mt-4 font-bold uppercase">
            Before Your Sri Lanka Trip
          </h2>
          <AccordionFAQ
            items={sriLankaFaqs}
            theme="dark"
            className="mt-8"
          />
        </motion.div>
      </section>


      <section id="tour-quote" className="scroll-mt-28 bg-transparent px-4 pb-20 sm:px-6 lg:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 85, damping: 15 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-[#111820]/14 bg-[#F5F1E8]/70 backdrop-blur-md p-6 sm:p-10 shadow-xl text-[#111820]"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              <span className="h-px w-9 bg-[#D98928]" />
              Tailor Your Experience
            </span>
            <h2 className="font-space text-2xl sm:text-4xl font-bold uppercase mt-3">
              Request Your Custom Itinerary
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#111820]/70">
              Our travel experts will review your request and get back to you within 24 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {inquirySuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-[#D98928]/15 flex items-center justify-center text-[#D98928] mb-4">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h4 className="font-space text-2xl font-bold uppercase text-[#111820]">Request Received!</h4>
                <p className="mt-2 text-sm text-[#111820]/75 max-w-md leading-relaxed">
                  Thank you for sharing your dream travel plans with Triple R Holidays. We are already mapping out your custom itinerary and will reach out on WhatsApp/Email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySuccess(false)}
                  className="mt-6 text-xs font-bold uppercase tracking-wider text-[#D98928] hover:text-[#F2B24D] transition cursor-pointer"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsInquirySubmitting(true);
                  window.location.href = buildMailtoHref("Sri Lanka Tour Inquiry - Triple R Holidays", [
                    ["Full Name", inquiryForm.fullName],
                    ["Email", inquiryForm.email],
                    ["Mobile Number", inquiryForm.mobileNumber],
                    ["Travel Type", inquiryForm.travelType],
                    ["Travel Category", inquiryForm.travelCategory],
                    ["Number of Days", inquiryForm.numberOfDays],
                    ["Preferred Activities", inquiryForm.preferredActivities],
                    ["Additional Notes", inquiryForm.additionalNotes]
                  ]);

                  window.setTimeout(() => {
                    setIsInquirySubmitting(false);
                    setInquirySuccess(true);
                    setInquiryForm({
                      fullName: "",
                      email: "",
                      mobileNumber: "",
                      travelType: "",
                      travelCategory: "",
                      numberOfDays: "",
                      preferredActivities: "",
                      additionalNotes: ""
                    });
                  }, 300);
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="inquiry-fullname" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Full Name<span className="text-[#D98928] ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry-fullname"
                      required
                      value={inquiryForm.fullName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, fullName: e.target.value })}
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Email Address<span className="text-[#D98928] ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      id="inquiry-email"
                      required
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Mobile Number */}
                  <div className="md:col-span-1">
                    <label htmlFor="inquiry-mobile" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Mobile Number<span className="text-[#D98928] ml-0.5">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center justify-center rounded-xl border border-[#111820]/15 bg-white/50 px-3 text-xs font-bold text-[#111820]/80">
                        LK +94
                      </div>
                      <input
                        type="tel"
                        id="inquiry-mobile"
                        required
                        value={inquiryForm.mobileNumber}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, mobileNumber: e.target.value })}
                        placeholder="Mobile Number"
                        className="w-full min-w-0 rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                      />
                    </div>
                  </div>

                  {/* Travel Type */}
                  <div>
                    <label htmlFor="inquiry-type" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Travel Type<span className="text-[#D98928] ml-0.5">*</span>
                    </label>
                    <select
                      id="inquiry-type"
                      required
                      value={inquiryForm.travelType}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, travelType: e.target.value })}
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] outline-none focus:border-[#D98928] focus:bg-white transition duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Travel Type</option>
                      <option value="Family Holiday">Family Holiday</option>
                      <option value="Honeymoon / Couple">Honeymoon / Couple</option>
                      <option value="Solo Journey">Solo Journey</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Corporate / Incentive">Corporate / Incentive</option>
                    </select>
                  </div>

                  {/* Travel Category */}
                  <div>
                    <label htmlFor="inquiry-category" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Travel Category<span className="text-[#D98928] ml-0.5">*</span>
                    </label>
                    <select
                      id="inquiry-category"
                      required
                      value={inquiryForm.travelCategory}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, travelCategory: e.target.value })}
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] outline-none focus:border-[#D98928] focus:bg-white transition duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Travel Category</option>
                      <option value="Sri Lanka In-Country">Sri Lanka In-Country Tour</option>
                      <option value="Outbound Holiday">Outbound Holiday</option>
                      <option value="Custom Mixed Route">Custom Mixed Route</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {/* Number of Days */}
                  <div>
                    <label htmlFor="inquiry-days" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Number of Days
                    </label>
                    <input
                      type="number"
                      id="inquiry-days"
                      min={1}
                      value={inquiryForm.numberOfDays}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, numberOfDays: e.target.value })}
                      placeholder="Number Of Days"
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200"
                    />
                  </div>

                  {/* Preferred Activities */}
                  <div className="md:col-span-2">
                    <label htmlFor="inquiry-activities" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                      Preferred Activities
                    </label>
                    <select
                      id="inquiry-activities"
                      value={inquiryForm.preferredActivities}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, preferredActivities: e.target.value })}
                      className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] outline-none focus:border-[#D98928] focus:bg-white transition duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Preferred Activities</option>
                      <option value="Cultural Heritage & Ancient Temples">Cultural Heritage & Ancient Temples</option>
                      <option value="Wildlife Safari & Nature Reserves">Wildlife Safari & Nature Reserves</option>
                      <option value="Beach Relaxation & Surfing">Beach Relaxation & Surfing</option>
                      <option value="Hill Country Trekking & Tea Estates">Hill Country Trekking & Tea Estates</option>
                      <option value="Adventure Sports & Water Rafting">Adventure Sports & Water Rafting</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="inquiry-notes" className="block text-xs font-bold uppercase tracking-wider text-[#111820]/80 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={4}
                    value={inquiryForm.additionalNotes}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, additionalNotes: e.target.value })}
                    placeholder="Additional Notes"
                    className="w-full rounded-xl border border-[#111820]/15 bg-white/50 px-4 py-3.5 text-sm text-[#111820] placeholder-[#111820]/40 outline-none focus:border-[#D98928] focus:bg-white transition duration-200 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-end">
                  <button
                    type="submit"
                    disabled={isInquirySubmitting}
                    className="w-full sm:w-auto min-h-[52px] rounded-full bg-[#111820] text-white px-8 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#D98928] disabled:opacity-50 transition duration-300 shadow-md shadow-[#111820]/10 cursor-pointer"
                  >
                    {isInquirySubmitting ? "Submitting..." : (
                      <>
                        Request Your Custom Itinerary
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

    </main>
  );
}
