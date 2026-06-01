"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { destinations } from "@/lib/content";
import SiteHeader from "@/components/SiteHeader";
import HolidayToursHeroShowcase from "@/components/HolidayToursHeroShowcase";

const contact = {
  phone: "(011) 293 4924",
  whatsappHref: "https://wa.me/94767161937",
  email: "hello@triplerholidays.com"
};

const outboundPackageVoice: Record<
  string,
  {
    title: string;
    duration: string;
    teaser: string;
    location: string;
    audience: string;
    quoteStart: string;
  }
> = {
  "Kuala Lumpur": {
    title: "Kuala Lumpur Skyline Escape",
    duration: "3 Nights 4 Days",
    teaser: "A polished city break with skyline views, shopping boulevards and easy day flow.",
    location: "Malaysia",
    audience: "Ideal for couples, friends and first-time outbound travellers",
    quoteStart: "From flexible seasonal rates"
  },
  Singapore: {
    title: "Singapore City Delights",
    duration: "3 Nights 4 Days",
    teaser: "Iconic attractions, efficient routes and family-friendly experiences in one seamless plan.",
    location: "Singapore",
    audience: "Ideal for families, professionals and compact premium trips",
    quoteStart: "Quote on request"
  },
  Maldives: {
    title: "Maldives Blue Horizon Retreat",
    duration: "4 Nights 5 Days",
    teaser: "Luxury island downtime with handpicked stays, lagoon views and resort comfort.",
    location: "Maldives",
    audience: "Ideal for honeymooners and celebration travel",
    quoteStart: "From resort-led seasonal rates"
  },
  Thailand: {
    title: "Bangkok & Phuket Signature Escape",
    duration: "4 Nights 5 Days",
    teaser: "A vibrant Thailand combination with Bangkok city highlights and Phuket island experiences in one smooth route.",
    location: "Thailand",
    audience: "Ideal for groups, young couples and fun-first departures",
    quoteStart: "Quote on request"
  }
};

const internationalPackages = destinations.map(destination => ({
  title: outboundPackageVoice[destination.city]?.title ?? destination.city,
  city: destination.city,
  location: outboundPackageVoice[destination.city]?.location ?? destination.country,
  duration: outboundPackageVoice[destination.city]?.duration ?? "4 Nights 5 Days",
  teaser:
    outboundPackageVoice[destination.city]?.teaser ??
    "Custom outbound journeys designed around your preferred travel pace.",
  audience:
    outboundPackageVoice[destination.city]?.audience ??
    "Ideal for all outbound travellers",
  quoteStart:
    outboundPackageVoice[destination.city]?.quoteStart ?? "Quote on request",
  image: destination.image,
  badge: destination.accent,
  href: contact.whatsappHref
}));

const outboundCategories = [
  {
    title: "City Breaks",
    note: "Kuala Lumpur and Singapore short-haul trips",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1300&q=84"
  },
  {
    title: "Island Luxury",
    note: "Maldives private and premium resort plans",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1300&q=84"
  },
  {
    title: "Family Discovery",
    note: "Thailand and Singapore fun-first itineraries",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1300&q=84"
  },
  {
    title: "Weekend Escapes",
    note: "Fast outbound trips from Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1501556424050-d4816356b73e?auto=format&fit=crop&w=1300&q=84"
  }
];

const outboundWhyBook = [
  "Clear outbound planning from visa timeline to return flight",
  "Efficient city-centered routes for shorter travel windows",
  "Hotel and transfer coordination matched to your budget band",
  "Single-point WhatsApp support until your trip is complete"
];

const maldivesTourCopy = {
  pretitle: "Island Journeys",
  title: "Maldives Tours",
  description:
    "Escape to the Maldives, where crystal-clear waters meet powdery white sands and luxurious overwater villas await. Explore vibrant coral reefs, indulge in world-class spa treatments, and savor fresh seafood under starry skies. Whether it’s a romantic getaway or a peaceful retreat, the Maldives offers serenity, beauty, and unforgettable memories. Perfect for honeymooners, solo travelers, or families seeking paradise just a short flight away."
};

const thailandTourCollection = [
  {
    title: "Explore Bangkok",
    duration: "3 Nights 4 Days",
    image:
      "https://travelco.lk/wp-content/uploads/2023/03/thailand-1.jpg",
    details: [
      "3 nights accommodation",
      "All transfers",
      "Free travel insurance",
      "Dream World with Snow Town + lunch",
      "Dinner cruise with buffet dinner",
      "City and temple tour"
    ]
  },
  {
    title: "Bangkok & Phuket",
    duration: "4 Nights 5 Days",
    image:
      "https://travelco.lk/wp-content/uploads/2023/01/Thailand.jpg",
    details: [
      "2 nights in Bangkok",
      "2 nights in Phuket",
      "All transfers",
      "Daily breakfast",
      "Phi Phi Island tour",
      "Siam Niramit Phuket show",
      "Dream World with Snow Town",
      "Dinner cruise with international buffet"
    ]
  }
];

const singaporeTourCollection = [
  {
    title: "Exciting Singapore",
    duration: "3 Nights 4 Days",
    image:
      "https://travelco.lk/wp-content/uploads/2023/01/Singapore-2.jpg",
    details: [
      "3 nights accommodation",
      "All transfers",
      "Universal Studios Singapore",
      "Gardens by the Bay with both domes",
      "Drive-through Singapore city tour"
    ]
  },
  {
    title: "Amazing Singapore",
    duration: "4 Nights 5 Days",
    image:
      "https://travelco.lk/wp-content/uploads/2022/06/Singapore.png",
    details: [
      "3 nights accommodation",
      "All transfers",
      "Universal Studios Singapore",
      "Half-day city tour",
      "Sentosa cable car",
      "Madame Tussauds with Images of Singapore",
      "Boat ride, SkyHelix and 4D Marvel",
      "Gardens by the Bay with both domes"
    ]
  },
  {
    title: "Singapore & Malaysia",
    duration: "5 Nights 6 Days",
    image:
      "https://travelco.lk/wp-content/uploads/2023/01/Singapore-1.jpg",
    details: [
      "2 nights in Singapore",
      "3 nights in Malaysia",
      "All transfers",
      "Universal Studios Singapore",
      "Singapore to Malaysia coach transfer",
      "Sunway Lagoon Theme Park",
      "Genting Highlands"
    ]
  }
];

const malaysiaTourCollection = [
  {
    title: "KL + Cameron Highlands",
    duration: "4 Days 3 Nights",
    image:
      "https://oscarholidays.com.my/wp-content/uploads/2024/05/1-52-900x600.jpg",
    details: [
      "Shared accommodation in selected hotels",
      "Daily breakfast",
      "AC transfers with English-speaking chauffeur",
      "Kuala Lumpur half-day city tour with KL Tower observation deck",
      "Mossy Forest and Coral Hill experience",
      "Strawberry farm, Lavender Park and Butterfly Park visits"
    ]
  },
  {
    title: "KL + Sunway Lagoon + Genting",
    duration: "4 Days 3 Nights",
    image:
      "https://oscarholidays.com.my/wp-content/uploads/2024/05/2-49-900x600.jpg",
    details: [
      "Shared accommodation in selected hotels",
      "Daily breakfast",
      "AC transfers with English-speaking chauffeur",
      "Kuala Lumpur half-day city tour with KL Tower observation deck",
      "Sunway Lagoon 6 theme parks access",
      "Genting Highlands day tour with return cable car ride"
    ]
  },
  {
    title: "Malaysia Grand Discovery",
    duration: "14 Days 13 Nights",
    image:
      "https://oscarholidays.com.my/wp-content/uploads/2024/05/4-48-900x600.jpg",
    details: [
      "Shared accommodation in selected hotels",
      "Daily breakfast",
      "AC coach transfers with English-speaking chauffeur",
      "Kuala Lumpur city tour with Twin Towers and KL Tower access",
      "Genting Highlands with indoor and outdoor theme park entry",
      "Taman Negara, Langkawi and Kuala Selangor experiences"
    ]
  }
];

const maldivesTourCollection = [
  {
    title: "Maldives Luxe Escape",
    subtitle: "For the Ultimate Indulgence",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Maldives Explorer",
    subtitle: "For the Adventurous Soul",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Maldives Serenity Retreat",
    subtitle: "For Wellness & Rejuvenation",
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Maldives Family Fun",
    subtitle: "For All Ages",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=82"
  }
];

const outboundGallery = internationalPackages.slice(0, 4).map(pkg => pkg.image);

const outboundReviews = [
  {
    name: "Shenali + Team",
    text: "Our KL and Singapore plan was clear and smooth. Transfers, hotels and timing were exactly right."
  },
  {
    name: "Kasun Perera",
    text: "Maldives planning was fast and transparent. We got premium options with no confusion."
  },
  {
    name: "Minali Joseph",
    text: "Outbound support was great even during travel days. Response time on WhatsApp was excellent."
  }
];

const outboundFaqs = [
  {
    q: "Can you plan outbound trips from Sri Lanka?",
    a: "Yes. We handle outbound holiday planning including city flow, hotels and transfer coordination."
  },
  {
    q: "Do you help with visa timing guidance?",
    a: "Yes. We align your itinerary with the right timeline so travel documents can be prepared smoothly."
  },
  {
    q: "How do we start an outbound booking?",
    a: "Send dates, destination and traveller count. We then share route options and hotel tiers."
  }
];

export default function OutboundToursClient() {
  const [inquiryForm, setInquiryForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    travelType: "",
    travelCategory: "Outbound Holiday",
    numberOfDays: "",
    preferredActivities: "",
    additionalNotes: ""
  });
  const [isInquirySubmitting, setIsInquirySubmitting] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  return (
    <main className="holiday-page-bg light-mode-travel min-h-screen text-[#111820] font-manrope">
      <SiteHeader variant="transparent" ctaLabel="Enquire Now" />
      <HolidayToursHeroShowcase />

      {/* Travel Styles */}
      <section className="bg-transparent px-4 py-20 sm:px-6 lg:py-24">
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
                Outbound categories
              </span>
              <h2 className="font-space fluid-title mt-4 font-bold uppercase">
                Outbound Travel Styles
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
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {outboundCategories.map(item => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="scandi-soft-card group overflow-hidden"
              >
                <div className="expand-image relative h-52 overflow-hidden" data-expand-image>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/92 via-[#111820]/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-space text-2xl font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm scandi-text-muted">{item.note}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Malaysia Tours Block */}
      <section id="malaysia-packages" className="scroll-mt-24 bg-transparent px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              <span className="h-px w-9 bg-[#D98928]" />
              Malaysia Tours
            </span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">
              Malaysia Packages
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#111820]/76 sm:text-base">
              Curated Malaysia journeys that blend city energy, mountain escapes and family-friendly attractions into one smooth travel flow.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 }
              }
            }}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {malaysiaTourCollection.map(item => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="scandi-soft-card overflow-hidden border border-[#111820]/14 bg-white/60"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#D98928] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#111820]">
                    {item.duration}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-space text-2xl font-extrabold uppercase text-[#111820]">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.details.map(detail => (
                      <li key={detail} className="flex items-start gap-2 text-sm leading-7 text-[#111820]/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D98928]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111820] px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#D98928]"
                  >
                    Get Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-center text-sm leading-8 text-[#111820]/78 sm:text-base"
          >
            Need something more tailored? We can customize your Malaysia holiday based on your preferences and travel style.
          </motion.p>
        </div>
      </section>

      {/* Thailand Tours Block */}
      <section id="thailand-packages" className="scroll-mt-24 bg-transparent px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              <span className="h-px w-9 bg-[#D98928]" />
              Thailand Tours
            </span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">
              Bangkok + Phuket Packages
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#111820]/76 sm:text-base">
              Flexible Thailand outbound plans built around popular Bangkok and Phuket routes, with curated inclusions and easy support.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 }
              }
            }}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {thailandTourCollection.map(item => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="scandi-soft-card overflow-hidden border border-[#111820]/14 bg-white/60"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#D98928] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#111820]">
                    {item.duration}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-space text-2xl font-extrabold uppercase text-[#111820]">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.details.map(detail => (
                      <li key={detail} className="flex items-start gap-2 text-sm leading-7 text-[#111820]/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D98928]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111820] px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#D98928]"
                  >
                    Get Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-center text-sm leading-8 text-[#111820]/78 sm:text-base"
          >
            Or we can customize your holiday based on your preferences, travel pace and stay style.
          </motion.p>
        </div>
      </section>

      {/* Singapore Tours Block */}
      <section id="singapore-packages" className="scroll-mt-24 bg-transparent px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              <span className="h-px w-9 bg-[#D98928]" />
              Singapore Tours
            </span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">
              Singapore Package Collection
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#111820]/76 sm:text-base">
              Smart Singapore itineraries designed for easy sightseeing, family-friendly attractions and smooth transfers from start to return.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 }
              }
            }}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {singaporeTourCollection.map(item => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="scandi-soft-card overflow-hidden border border-[#111820]/14 bg-white/60"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#D98928] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#111820]">
                    {item.duration}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-space text-2xl font-extrabold uppercase text-[#111820]">{item.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {item.details.map(detail => (
                      <li key={detail} className="flex items-start gap-2 text-sm leading-7 text-[#111820]/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D98928]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111820] px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#D98928]"
                  >
                    Get Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-3xl text-center text-sm leading-8 text-[#111820]/78 sm:text-base"
          >
            Or we can customize your Singapore holiday based on your preferences, travel pace and activity interests.
          </motion.p>
        </div>
      </section>

      {/* Maldives Tours Block */}
      <section id="maldives-packages" className="scroll-mt-24 bg-transparent px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              <span className="h-px w-9 bg-[#D98928]" />
              {maldivesTourCopy.pretitle}
            </span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">
              {maldivesTourCopy.title}
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#111820]/76 sm:text-base">
              {maldivesTourCopy.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.05 }
              }
            }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {maldivesTourCollection.map(item => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="scandi-soft-card overflow-hidden border border-[#111820]/14 bg-white/60"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-space text-xl font-extrabold uppercase text-[#111820]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#111820]/72">{item.subtitle}</p>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#D98928] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#F2B24D]"
                  >
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
            className="mt-10 text-center"
          >
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#111820] px-8 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#D98928]"
            >
              Get Maldives Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Expertise & Gallery */}
      <section className="bg-transparent px-4 py-20 sm:px-6 lg:py-24">
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
                Outbound Trip Delivery, End To End
              </h3>
              <div className="mt-5 space-y-3">
                {outboundWhyBook.map(item => (
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
                Outbound gallery
              </span>
              <h3 className="font-space fluid-title mt-4 font-bold uppercase">
                International Tour Highlights
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {outboundGallery.map(image => (
                  <div key={image} className="expand-image overflow-hidden rounded-[12px] border border-white/14" data-expand-image>
                    <img src={image} alt="Outbound travel scene" className="h-32 w-full object-cover md:h-36" />
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-transparent px-4 py-20 sm:px-6 lg:py-24">
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
                Reviews
              </span>
              <h2 className="font-space fluid-title mt-4 font-bold uppercase">
                What Travellers Say
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
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {outboundReviews.map(item => (
              <motion.article
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="scandi-soft-card p-6"
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

      {/* Outbound FAQ Section */}
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
            Outbound FAQ
          </div>
          <h2 className="font-space fluid-title mt-4 font-bold uppercase">
            Before Your Outbound Trip
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {outboundFaqs.map(item => (
              <motion.article
                key={item.q}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                className="scandi-soft-card p-5 text-[#111820]"
              >
                <h3 className="font-space text-xl font-bold uppercase leading-tight">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 scandi-text-muted">{item.a}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-transparent px-4 pb-20 sm:px-6 lg:pb-24">
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
                  setTimeout(() => {
                    setIsInquirySubmitting(false);
                    setInquirySuccess(true);
                    setInquiryForm({
                      fullName: "",
                      email: "",
                      mobileNumber: "",
                      travelType: "",
                      travelCategory: "Outbound Holiday",
                      numberOfDays: "",
                      preferredActivities: "",
                      additionalNotes: ""
                    });
                  }, 1200);
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
                      <option value="Outbound Holiday">Outbound Holiday</option>
                      <option value="Sri Lanka In-Country">Sri Lanka In-Country Tour</option>
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

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isInquirySubmitting}
                    className="min-h-12 rounded-full bg-[#111820] text-white px-8 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#D98928] disabled:opacity-50 transition duration-300 shadow-md shadow-[#111820]/10 cursor-pointer"
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
