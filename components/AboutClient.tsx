"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  Compass,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import CountUpStat from "@/components/CountUpStat";

const heroImage =
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2600&q=90";
const storyImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=84";

const contact = {
  phone: "(011) 293 4924",
  phoneHref: "tel:+94112934924",
  whatsappHref: "https://wa.me/94767161937",
  email: "hello@triplerholidays.com",
  address: "128/7 A.S.P Liyanage Mawatha, Royal Pearl Garden, Wattala"
};

const trustPoints = [
  "Personal planning with one direct coordination team",
  "Over a decade of practical tourism and hospitality experience",
  "Reliable execution for leisure, business and group travel",
  "Clear communication from inquiry to return transfer"
];

const faqs = [
  {
    q: "How soon should I contact you before travel?",
    a: "We recommend reaching out at least 2-4 weeks before travel for better routing and stay options."
  },
  {
    q: "Can you plan both Sri Lanka and outbound trips?",
    a: "Yes. We handle both in-country routes and outbound packages with hotel and transport coordination."
  },
  {
    q: "Do you support group travel and events?",
    a: "Yes. We coordinate conferences, group movements and destination wedding travel logistics."
  }
];

const whatWeDoCards = [
  {
    title: "Handpicked Accommodations",
    description:
      "From luxury beachfront resorts to charming boutique villas and eco-lodges, we curate stays to match your style and budget.",
    icon: Hotel
  },
  {
    title: "Personalized Itineraries",
    description:
      "Your dream trip, your way. We design travel plans around your interests, budget and preferred pace.",
    icon: CalendarDays
  },
  {
    title: "Complete Ground Handling",
    description:
      "From arrival to departure, we manage transport, hotel coordination and activity flow for a seamless journey.",
    icon: Car
  },
  {
    title: "Themed & Special Interest Tours",
    description:
      "Go deeper with focused journeys for nature, culture, spiritual retreats, trekking and photography lovers.",
    icon: Compass
  },
  {
    title: "Expert Local Guides",
    description:
      "Explore with knowledgeable local guides who bring Sri Lanka’s culture, history and hidden gems to life.",
    icon: Users
  },
  {
    title: "Authentic Local Experiences",
    description:
      "Discover village moments, local food culture and real community interactions beyond the usual tourist path.",
    icon: Sparkles
  }
];

const whyTravelersChooseUsCards = [
  {
    title: "Local Expertise",
    description: "Our team knows Sri Lanka deeply and guides you to experiences that feel truly authentic.",
    icon: MapPin
  },
  {
    title: "Transparent Pricing",
    description: "Clear rates with no hidden surprises, so you can plan confidently from day one.",
    icon: CheckCircle2
  },
  {
    title: "Vetted Partners",
    description: "We work with trusted hotels, transport providers and local specialists across each route.",
    icon: ShieldCheck
  },
  {
    title: "Responsive Support",
    description: "Fast support before and during your trip through direct communication with our team.",
    icon: Phone
  },
  {
    title: "Flexible Options",
    description: "Adjustable plans, add-ons and route pacing built around your travel profile.",
    icon: Compass
  },
  {
    title: "Proven Track Record",
    description: "Consistently positive traveler feedback and many returning guests.",
    icon: Star
  }
];

const travelerReviewCards = [
  {
    platform: "TripAdvisor Reviews",
    rating: "4.8/5",
    reviewCount: "1,277 reviews",
    initials: "TA",
    ctaLabel: "Read All TripAdvisor Reviews",
    ctaHref: "/testimonials",
    quotes: [
      "\"Exceptional service and authentic experiences. Triple R made our Sri Lanka dream trip a reality!\"",
      "\"Professional, reliable and incredibly knowledgeable guides. Highly recommended!\""
    ]
  },
  {
    platform: "Google Reviews",
    rating: "4.8/5",
    reviewCount: "1,277 reviews",
    initials: "G",
    ctaLabel: "Read All Google Reviews",
    ctaHref: "/testimonials",
    quotes: [
      "\"Excellent route planning and smooth handovers across every city we visited.\"",
      "\"Strong communication and great support before and during our holiday.\""
    ]
  },
  {
    platform: "Facebook Reviews",
    rating: "4.8/5",
    reviewCount: "1,277 reviews",
    initials: "f",
    ctaLabel: "Read All Facebook Reviews",
    ctaHref: "/testimonials",
    quotes: [
      "\"Very friendly team with practical guidance for hotels, transport and timing.\"",
      "\"Everything was coordinated exactly as promised. We felt supported throughout.\""
    ]
  }
];

const businessRegistrationNumber = "P V 00359539";

export default function AboutClient() {
  return (
    <main className="scandi-page light-mode-travel min-h-screen text-[#111820] font-manrope">
      <SiteHeader variant="transparent" ctaLabel="Enquire Now" />

      <section
        className="photo-text-hero hero-screen relative h-[100svh] w-full overflow-hidden text-white"
        data-hero-pin
        data-hero-pin-distance="108"
      >
        <img
          src={heroImage}
          alt="Luxury destination landscape"
          className="absolute inset-0 h-full w-full object-cover"
          data-parallax="12"
          data-hero-media
        />
        <div className="absolute inset-0 bg-[#082B49]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B49]/34 via-[#082B49]/42 to-[#082B49]/62" />
        <div className="grain-overlay" />

        <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-end justify-center px-6 pb-14 sm:px-8 sm:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl text-center"
            data-hero-content
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="font-space mt-5 text-4xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl"
            >
              A Travel Brand Built On
              <br />
              <span className="text-[#D98928]">Passion, Precision and Trust</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#F5F1E8]/92"
            >
              Triple R Holidays creates seamless and memorable travel experiences across Sri Lanka
              and beyond, combining startup energy with experienced execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Playfair_Display'] fluid-title font-bold text-[#111820]">
                A Team Of Real Experts And Travelers
              </h2>
              <div className="mt-4 max-w-3xl space-y-4 text-sm leading-8 text-[#111820]/76 sm:text-base">
                <p>
                  A team of real experts and travelers with a passion for Sri Lanka for over a decade in the tourism
                  business, Triple R Holidays has representatives in all major destinations across the country and
                  represents some of the most esteemed travel agencies in Europe and other parts of the world.
                </p>
                <p>
                  We offer an extensive list of tour programs and hotels all over Sri Lanka, an experienced team to
                  assist and accommodate your travel needs the best we can, a one-stop service for easy travel
                  arrangements, trusted partner agencies in Southeast Asian countries, and the best holiday experience
                  of a lifetime.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 }
                }
              }}
              className="grid gap-4 sm:grid-cols-[0.62fr_1fr]"
            >
              <motion.article 
                variants={{
                  hidden: { opacity: 0, scale: 0.94, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="overflow-hidden rounded-[20px] border border-[#111820]/16 bg-[#F5F1E8]/90"
              >
                <div className="expand-image relative h-[290px]" data-expand-image>
                  <img src={storyImage} alt="Travel team experience" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1E8]/74 via-[#F5F1E8]/14 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D98928]">Our story</p>
                    <p className="mt-1 font-['Playfair_Display'] text-2xl font-semibold leading-tight">
                      Fresh Startup
                    </p>
                  </div>
                </div>
              </motion.article>

              <motion.article 
                variants={{
                  hidden: { opacity: 0, scale: 0.94, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="overflow-hidden rounded-[20px] border border-[#111820]/16 bg-[#F5F1E8]/90"
              >
                <div className="expand-image relative h-[290px]" data-expand-image>
                  <img src={heroImage} alt="Luxury destination landscape detail" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1E8]/74 via-[#F5F1E8]/8 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D98928]">Our approach</p>
                    <p className="mt-1 font-['Playfair_Display'] text-2xl font-semibold leading-tight">
                      Seasoned Delivery
                    </p>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          </div>

          <motion.article 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="rounded-[20px] border border-[#111820]/16 bg-[#F5F1E8]/90 p-6 shadow-[0_20px_46px_rgba(17,24,32,0.14)] sm:p-8"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D98928]">Why Clients Trust Us</span>
            <div className="mt-5 space-y-3">
              {trustPoints.map(point => (
                <div
                  key={point}
                  className="flex items-start gap-3 border-b border-[#111820]/12 pb-3 last:border-b-0 last:pb-0"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D98928]" />
                  <p className="text-sm leading-7 text-[#111820]/84">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <CountUpStat value={72} suffix="+" label="Destinations" />
              <CountUpStat value={10} suffix="+" label="Daily Tours" delay={0.05} />
              <CountUpStat value={20} suffix="+" label="Events Per Month" delay={0.1} />
              <CountUpStat value={10000} suffix="+" label="Happy Customers" delay={0.15} />
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              What We <span className="text-[#D98928]">Do</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
              We offer comprehensive travel solutions designed to make your Sri Lankan adventure unforgettable.
            </p>
          </motion.div>

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
            {whatWeDoCards.map(item => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                  }}
                  className="scandi-soft-card relative overflow-hidden border border-[#111820]/12 p-6"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#D98928]/12 blur-2xl" />
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-[10px] bg-[#D98928]/20 text-[#D98928]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative z-10 mt-4 text-2xl font-extrabold leading-tight text-[#111820]">{item.title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-[#111820]/78">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              Why Travelers <span className="text-[#D98928]">Choose Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
              Discover the Triple R difference. We are committed to making your Sri Lankan journey exceptional.
            </p>
          </motion.div>

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
            {whyTravelersChooseUsCards.map(item => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 95, damping: 15 } }
                  }}
                  className="scandi-soft-card border border-[#111820]/12 p-6 text-center"
                >
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#D98928]/18 text-[#D98928]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold text-[#111820]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#111820]/78">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              Trust & <span className="text-[#D98928]">Recognition</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#111820]/78 sm:text-base">
              Your peace of mind is our priority. We maintain high standards of professionalism and reliability.
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="mx-auto mt-10 max-w-3xl scandi-soft-card border border-[#111820]/12 p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#D98928]/18 text-[#D98928]">
                <BadgeCheck className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#111820]">Legal Business Entity</h3>
                <p className="mt-1 text-sm leading-7 text-[#111820]/78">
                  Registered under the Companies Act, Sri Lanka
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">Business Registration Number</p>
              <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-[#111820]/16 bg-white/72 px-5 py-3">
                <span className="text-lg font-black text-[#111820]">BR No:</span>
                <span className="text-lg font-bold text-[#111820]">{businessRegistrationNumber}</span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-space fluid-title font-bold uppercase text-[#111820]">
              What Our Travelers <span className="text-[#D98928]">Say</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {travelerReviewCards.map(card => (
              <motion.article
                key={card.platform}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
                }}
                className="scandi-soft-card border border-[#111820]/12 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#D98928]/16 text-lg font-black text-[#D98928]">
                    {card.initials}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#111820]">{card.platform}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#111820]/80">
                      {card.rating} ({card.reviewCount})
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {card.quotes.map(quote => (
                    <p key={quote} className="text-sm italic leading-7 text-[#111820]/80">
                      {quote}
                    </p>
                  ))}
                </div>

                <a
                  href={card.ctaHref}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#111820]/16 bg-white/70 px-5 text-xs font-bold uppercase tracking-[0.16em] text-[#111820] transition hover:border-[#D98928] hover:text-[#D98928]"
                >
                  {card.ctaLabel}
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 85, damping: 15 }}
          className="mx-auto grid max-w-7xl items-center gap-8 rounded-[24px] border border-[#111820]/16 bg-[#F5F1E8]/92 p-7 shadow-[0_22px_50px_rgba(17,24,32,0.14)] lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <h2 className="font-['Playfair_Display'] fluid-title font-bold text-[#111820]">
              Let&apos;s Plan Your Next Journey
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#111820]/76 sm:text-base">
              Share your destination, dates and travel style. We will map out a premium,
              practical itinerary built around your goals.
            </p>
            <a
              href={contact.whatsappHref}
              className="premium-cta mt-6 inline-flex min-h-11 items-center justify-center px-6 text-sm font-bold uppercase tracking-wide transition"
              data-cursor-magnetic
            >
              Talk To Our Team
            </a>
          </div>
          <div className="expand-image overflow-hidden rounded-[18px] border border-[#111820]/12" data-expand-image>
            <img src={storyImage} alt="Travel experience visual" className="h-[300px] w-full object-cover sm:h-[360px]" />
          </div>
        </motion.div>
      </section>

      <section id="contact" className="px-4 py-10 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-7xl">
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
            className="grid gap-4"
          >
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="scandi-soft-card p-5"
            >
              <a href={contact.phoneHref} className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#D98928]/12 text-[#D98928]">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">Hotline</span>
                  <span className="block text-base font-bold">{contact.phone}</span>
                </span>
              </a>
            </motion.article>

            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="scandi-soft-card p-5"
            >
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#D98928]/12 text-[#D98928]">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">Email</span>
                  <span className="block text-base font-bold break-all">{contact.email}</span>
                </span>
              </a>
            </motion.article>

            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="scandi-soft-card p-5"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#D98928]/12 text-[#D98928]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">Office</span>
                  <span className="block text-base font-bold leading-7">{contact.address}</span>
                </span>
              </div>
            </motion.article>

            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="scandi-soft-card p-5"
            >
              <a href={contact.whatsappHref} className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[10px] bg-[#D98928]/12 text-[#D98928]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/58">Fast support</span>
                  <span className="block text-base font-bold">WhatsApp priority response</span>
                </span>
              </a>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-10 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-space fluid-title font-bold uppercase">Quick Answers</h2>
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
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {faqs.map(item => (
              <motion.article 
                key={item.q} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="scandi-soft-card p-5"
              >
                <h3 className="font-space text-xl font-bold uppercase leading-tight">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 scandi-text-muted">{item.a}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
