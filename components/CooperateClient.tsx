"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarRange,
  CheckCircle2,
  Clock3,
  Compass,
  Hotel,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const cooperationOptions = [
  {
    title: "Destination Management Services",
    description:
      "Be a trusted DMC partner for international agencies with itinerary, transport, and accommodation coordination.",
    icon: Compass
  },
  {
    title: "Travel Agency Cooperation",
    description:
      "Collaborate with local and global agencies to sell curated Sri Lanka tour products confidently.",
    icon: Users
  },
  {
    title: "Corporate Travel Solutions",
    description:
      "Support business travel, MICE programs, and executive movement with tailored corporate planning.",
    icon: BriefcaseBusiness
  },
  {
    title: "Hotel & Resort Tie-ups",
    description:
      "Partner with hotels and resorts to unlock preferred rates and route-aligned stay options.",
    icon: Hotel
  },
  {
    title: "Affiliate Cooperations",
    description:
      "Work with creators and digital partners to promote Sri Lanka experiences to targeted audiences.",
    icon: Star
  },
  {
    title: "Custom Itinerary Support",
    description:
      "Build flexible package structures that match partner requirements, seasonal demand, and client preferences.",
    icon: ShieldCheck
  }
];

const benefits = [
  {
    title: "Licensed & Registered",
    description: "Accredited inbound operations with structured, reliable execution standards.",
    icon: CheckCircle2
  },
  {
    title: "Competitive Rates",
    description: "Strong local supplier relationships for value-based, partner-friendly pricing.",
    icon: CalendarRange
  },
  {
    title: "Wide Cooperation Network",
    description: "Established collaboration across transport, stays, activities, and local support.",
    icon: Users
  },
  {
    title: "24/7 Local Support",
    description: "Round-the-clock assistance for guests, groups, and corporate travel requests.",
    icon: Clock3
  },
  {
    title: "Flexible Options",
    description: "Adaptable route, hotel, and activity planning to match your customer profile.",
    icon: Compass
  },
  {
    title: "Dedicated Manager",
    description: "One clear point of contact for faster updates and smooth partner communication.",
    icon: ShieldCheck
  }
];

const partnershipSteps = [
  {
    title: "Submit Inquiry",
    description: "Fill out our partnership form with your company details and cooperation goals."
  },
  {
    title: "Receive Proposal",
    description: "Get a customized proposal with route support, services, and competitive B2B rates."
  },
  {
    title: "Begin Collaboration",
    description: "Start working together while our local team manages operations and partner support."
  }
];

export default function CooperateClient() {
  return (
    <main className="scandi-page min-h-screen text-[#111820] font-manrope">
      <SiteHeader variant="transparent" ctaLabel="Cooperate With Us" ctaHref="/about#contact" />

      <section className="photo-text-hero hero-screen relative h-[100svh] w-full overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=84"
          alt="Corporate cooperation background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#082B49]/55" />
        <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-center px-6 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              Cooperate With Us
            </span>
            <h1 className="font-space mt-5 text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Cooperation & Grow
              <br />
              <span className="text-[#D98928]">Programs</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#F5F1E8]/92">
              Cooperation solutions designed for travel professionals, agencies, and corporate teams.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 rounded-[24px] border border-[#111820]/12 bg-white/62 px-6 py-12 shadow-[0_20px_48px_rgba(17,24,32,0.08)] backdrop-blur-sm sm:px-10">
            <div className="text-center">
              <h2 className="font-space text-4xl font-black uppercase text-[#111820] sm:text-5xl">
                <span className="text-[#D98928]">How</span> It Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#111820]/72 sm:text-base">
                Simple steps to start a successful partnership with us
              </p>
            </div>

            <div className="relative mt-14">
              <div className="absolute left-12 right-12 top-7 hidden h-[3px] bg-gradient-to-r from-[#D98928]/30 via-[#D98928] to-[#D98928]/30 md:block" />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="grid gap-10 md:grid-cols-3"
              >
                {partnershipSteps.map((step, index) => (
                  <motion.article
                    key={step.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                    }}
                    className="relative text-center"
                  >
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#D98928]/55 bg-[#D98928] text-2xl font-black text-white shadow-[0_12px_30px_rgba(217,137,40,0.32)]">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#111820]">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-[220px] text-sm leading-7 text-[#111820]/72 sm:text-base">
                      {step.description}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              Cooperation Options
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
              Explore our range of cooperation opportunities tailored to travel professionals.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {cooperationOptions.map(item => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                  }}
                  className="scandi-soft-card border border-[#111820]/14 p-6 text-center"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#D98928]/22 text-[#D98928]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-[#111820]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#111820]/78">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              Why Cooperate With Triple R Holidays
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
              Discover the advantages of collaborating with a dependable Sri Lanka travel partner.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } }
            }}
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {benefits.map(item => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                  }}
                  className="scandi-soft-card border border-[#111820]/14 p-6 text-center"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#111820]/8 text-[#D98928]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-[#111820]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#111820]/78">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
