import Link from "next/link";
import Image from "next/image";

const contact = {
  phone: "(011) 293 4924",
  phoneHref: "tel:+94112934924",
  email: "hello@triplerholidays.com",
  address: "128/7 A.S.P Liyanage Mawatha, Royal Pearl Garden, Wattala",
  instagramHref: "https://www.instagram.com/triplerholidays.lk?igsh=MXFpcWt4ZTliYjdwbw=="
};

const navItems = [
  { label: "Sri Lanka Tours", href: "/holiday-tours" },
  { label: "Outbound Tours", href: "/outbound-tours" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/about#contact" }
];

export default function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-footer-dark text-white shadow-2xl backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 sm:py-8">
        
        {/* Top Section */}
        <div className="flex flex-col items-center border-b border-white/10 pb-6 text-center">
          <Link
            href="/"
            className="rounded-lg p-1 transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/tripler-holidays-logo-trimmed.png"
              alt="Triple R Holidays"
              width={240}
              height={116}
              className="h-10 w-auto brightness-0 invert sm:h-12"
            />
          </Link>
          <p className="mt-3 max-w-md text-[11px] leading-5 text-white/60">
            Seamless travel planning for Sri Lanka tours, outbound holidays, hotels,
            transport, events and destination weddings.
          </p>
        </div>

        {/* Center Menu Links (centered pill style matching screenshot footer) */}
        <div className="flex flex-wrap justify-center gap-4 py-6 sm:gap-8 sm:py-7">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#D98928] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact info grid */}
        <div className="grid gap-4 border-t border-white/5 pt-6 text-center text-[11px] text-white/50 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#D98928]">Call Us</p>
            <a href={contact.phoneHref} className="block mt-2 font-semibold hover:text-white transition">
              {contact.phone}
            </a>
          </div>
          <div>
            <p className="font-bold uppercase tracking-widest text-[#D98928]">Email Us</p>
            <a href={`mailto:${contact.email}`} className="block mt-2 font-semibold hover:text-white transition break-all">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="font-bold uppercase tracking-widest text-[#D98928]">Our Office</p>
            <p className="mt-2 font-semibold">{contact.address}</p>
          </div>
          <div className="flex items-center justify-center">
            <a
              href={contact.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:border-[#D98928] hover:text-[#D98928]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-6 text-center text-[10px] font-bold uppercase tracking-wider text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>Triple R Holidays Pvt Ltd. All Rights Reserved.</p>
          <p>Designed for seamless journeys across Sri Lanka and beyond.</p>
        </div>
      </div>
    </footer>
  );
}
