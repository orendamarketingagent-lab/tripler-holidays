"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  Compass,
  Heart,
  Hotel,
  PlaneTakeoff,
  PlayCircle
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const contact = {
  whatsapp: "0767161937",
  whatsappHref: "https://wa.me/94767161937"
};

const services = [
  {
    title: "Inbound Tours",
    description:
      "Private and group programs across Sri Lanka with heritage, wildlife, hill country and coastal highlights.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f0e?auto=format&fit=crop&w=1200&q=84",
    points: ["Islandwide route planning", "Comfortable pacing", "On-tour support"]
  },
  {
    title: "Outbound Tours",
    description:
      "International holiday planning to Kuala Lumpur, Singapore, Maldives and Thailand with practical execution.",
    icon: PlaneTakeoff,
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=84",
    points: ["Destination combinations", "Flight + transfer flow", "Family and group support"]
  },
  {
    title: "Hotel Bookings",
    description:
      "Hotel recommendations matched to route, comfort level and travel style for consistent journey quality.",
    icon: Hotel,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=84",
    points: ["City and resort options", "Flexible room categories", "Route-aware suggestions"]
  },
  {
    title: "Conference & Events",
    description:
      "Travel logistics for meetings, conferences and business gatherings with reliable guest movement.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=84",
    points: ["Venue travel coordination", "Group transport flow", "Clear timeline planning"]
  },
  {
    title: "Destination Weddings",
    description:
      "Travel execution for wedding celebrations including guest stays, transfer schedules and trip comfort.",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=84",
    points: ["Guest travel setup", "Hotel room blocks", "Celebration logistics"]
  },
  {
    title: "Transportation",
    description:
      "Cars, vans and coaches for airport transfers, tours and events from arrival to departure.",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=84",
    points: ["Airport pickup", "Private vehicles", "Islandwide transfers"]
  }
];

const process = [
  "Share dates, group size and service needs.",
  "Receive a practical plan with route and support structure.",
  "Confirm and travel with a single coordination point."
];

const serviceHighlights = [
  "Unified planning from inquiry to return transfer",
  "Professional support for leisure and business travel",
  "Flexible service combinations for every group size"
];

const heroHookSentence = "One Team. Every Detail. Zero Stress.";
const servicesHeroImage =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2600&q=90";

const serviceOverviewParagraph =
  "With strong local travel experience in Sri Lanka, Triple R Holidays delivers professionally curated, tailor-made services for travelers from around the world. Our service range covers bespoke tour planning, handpicked stays, guided cultural and wildlife excursions, reliable transport, and practical support for business and event travel. Whether you travel solo, as a couple, with family, or in a larger group, each journey is designed to showcase Sri Lanka's rich heritage and landscapes with comfort, clarity, and responsible travel practices.";

export default function ServicesClient() {

  return (
    <main className="scandi-page light-mode-travel min-h-screen text-[#111820] font-manrope">
      <SiteHeader variant="transparent" ctaLabel="Enquire Now" />

      <section
        className="photo-text-hero hero-screen relative h-[100svh] w-full overflow-hidden text-white"
        data-hero-pin
        data-hero-pin-distance="115"
      >
        <img
          src={servicesHeroImage}
          alt="Luxury travel view"
          className="absolute inset-0 h-full w-full object-cover"
          data-parallax="12"
          data-hero-media
        />
        <div className="absolute inset-0 bg-[#082B49]/56" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B49]/36 via-[#082B49]/40 to-[#082B49]/62" />
        <div className="grain-overlay" />

        <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-center px-6 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl text-center"
            data-hero-content
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D98928]">
              Premium Services
            </span>
            <h1 className="font-space mt-5 text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl">
              Travel Services,
              <br />
              <span className="text-[#D98928]">Built Around You</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#F5F1E8]/92">
              From inbound and outbound tours to hotels, transport, conferences and destination weddings, we coordinate every layer so clients can travel with clarity and comfort.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-white/90 sm:text-base">
              {heroHookSentence}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid rounded-[18px] border border-[#111820]/12 bg-white/62 shadow-[0_20px_48px_rgba(17,24,32,0.08)] backdrop-blur-sm md:grid-cols-3"
          >
            {serviceHighlights.map(item => (
              <motion.article
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="border-b border-[#111820]/12 px-6 py-5 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-sm leading-7 text-[#111820]/74">{item}</p>
                <span className="mt-3 inline-flex text-[11px] font-bold uppercase tracking-[0.16em] text-[#D98928]">
                  More Details
                </span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-space text-5xl font-bold uppercase text-[#111820] sm:text-6xl"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-10 max-w-4xl text-base leading-9 text-[#111820]/72"
          >
            {serviceOverviewParagraph}
          </motion.p>
        </div>
      </section>

      <section id="services-core" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">What we provide</span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">Core Service Portfolio</h2>
            <p className="mt-5 text-base leading-8 text-[#111820]/65">Each service is delivered through a practical route-first method, keeping logistics clean and the client experience premium.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D98928]/30 via-[#111820]/15 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative mb-28 last:mb-0 lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="absolute left-6 top-2 z-10 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="relative">
                      <span className="block h-3.5 w-3.5 rounded-full bg-[#D98928] shadow-[0_0_12px_rgba(166,94,53,0.4)]" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#D98928]/30" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                  <div className={`pl-16 lg:pl-0 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:col-start-2"}`}>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">Service {String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-space mt-3 text-3xl font-bold uppercase tracking-tight text-[#111820] sm:text-4xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-8 text-[#111820]/60 max-w-md" style={{ marginLeft: isEven ? 'auto' : undefined }}>{service.description}</p>
                    <div className={`mt-5 flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : ""}`}>
                      {service.points.map(point => (
                        <span key={point} className="inline-flex items-center gap-1.5 rounded-full border border-[#111820]/12 bg-[#111820]/5 px-3 py-1.5 text-[11px] font-semibold text-[#111820]/70">{point}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`mt-8 pl-16 lg:mt-0 lg:pl-0 ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1 lg:pr-16"}`}>
                    <div className="relative">
                      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="relative overflow-hidden rounded-2xl border border-[#111820]/12 shadow-[0_24px_60px_rgba(17,24,32,0.15)]">
                        <img src={service.image} alt={service.title} className="w-full aspect-[16/10] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1E8]/50 via-transparent to-transparent" />
                        <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-[#111820]/18 bg-[#F5F1E8]/80 text-[#D98928] backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className={`absolute -bottom-6 w-28 h-28 overflow-hidden rounded-xl border-4 border-[#F5F1E8] shadow-xl ${isEven ? "-left-4" : "-right-4"}`}>
                        <img src={service.image} alt="" className="h-full w-full object-cover scale-[1.6]" style={{ objectPosition: index % 3 === 0 ? 'top right' : index % 3 === 1 ? 'center' : 'bottom left' }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 max-w-lg">
            <p className="text-sm leading-8 text-[#111820]/50">No need to worry about routes, schedules, or finding places — everything is already organized. We&apos;ll show you where to go, what to see, and where to stay, so you can simply <span className="italic text-[#D98928] font-semibold">enjoy the journey.</span></p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F5F1E8] via-[#F5F1E8] to-[#F5F1E8]">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D98928]">Our Process</span>
            <h2 className="font-space fluid-title mt-4 font-bold uppercase text-[#111820]">How We Deliver</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#111820]/65">Travel execution built with practical planning and a single coordination rhythm.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }} className="relative mx-auto max-w-5xl">
            <div className="flex items-end justify-center gap-4 sm:gap-5">
              <motion.div variants={{ hidden: { opacity: 0, y: 30, rotate: -3 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="w-24 sm:w-32 shrink-0 self-end">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-square"><img src={services[0].image} alt="Inbound" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="w-28 sm:w-36 shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg bg-[#D98928] p-1 aspect-[3/4]"><img src={services[1].image} alt="Outbound" className="h-full w-full object-cover rounded-xl transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } } }} className="w-48 sm:w-64 shrink-0">
                <div className="overflow-hidden rounded-3xl shadow-2xl border border-[#111820]/10 aspect-square"><img src={services[2].image} alt="Hotels" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="hidden sm:block w-28 sm:w-32 shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-[3/4]"><img src={services[3].image} alt="Events" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30, rotate: 3 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="hidden md:block w-24 sm:w-28 shrink-0 self-start mt-6">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-square"><img src={services[4].image} alt="Weddings" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
            </div>
            <div className="flex items-start justify-center gap-4 sm:gap-5 mt-4 sm:mt-5">
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="hidden sm:block w-28 sm:w-36 shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-[4/3]"><img src={services[5].image} alt="Transport" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="w-24 sm:w-28 shrink-0 mt-4">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-square"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" alt="Travel" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="w-32 sm:w-40 shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-[3/4]"><img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80" alt="Beach" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="w-28 sm:w-36 shrink-0 mt-2">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-[#111820]/8 aspect-[4/5]"><img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80" alt="Nature" className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30, rotate: 2 }, visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 14 } } }} className="hidden md:block w-28 sm:w-32 shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-lg bg-[#D98928] p-1 aspect-square"><img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80" alt="Mountains" className="h-full w-full object-cover rounded-xl transition duration-500 hover:scale-105" /></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }} className="mt-20 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div key={step} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D98928]/20 bg-[#D98928]/8 text-[#D98928] font-space text-lg font-bold">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-4 text-sm leading-7 text-[#111820]/80 max-w-xs mx-auto">{step}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
            <a href={contact.whatsappHref} className="inline-flex items-center gap-3 bg-[#111820] hover:bg-[#D98928] text-white pl-7 pr-2 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg group">
              Plan Service Package
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#111820] transition-transform duration-300 group-hover:rotate-45"><ArrowRight className="h-4 w-4" /></span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
