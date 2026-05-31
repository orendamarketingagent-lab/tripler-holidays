"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  key: "home" | "tours" | "services" | "cooperate" | "about" | "testimonials";
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "tours",
    label: "Tours",
    href: "/holiday-tours",
    children: [
      { label: "Sri Lanka Tours", href: "/holiday-tours" },
      { label: "Outbound Tours", href: "/outbound-tours" }
    ]
  },
  { key: "services", label: "Our Services", href: "/services" },
  { key: "cooperate", label: "Cooperate", href: "/cooperate" },
  { key: "testimonials", label: "Testimonials", href: "/testimonials" },
  { key: "about", label: "About Us", href: "/about" }
];

type SiteHeaderProps = {
  variant?: "transparent" | "solid";
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SiteHeader({
  variant = "solid",
  ctaLabel = "Find a Tour",
  ctaHref = "/holiday-tours"
}: SiteHeaderProps) {
  const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerShellRef = useRef<HTMLDivElement>(null);
  const headerBarRef = useRef<HTMLDivElement>(null);
  const transparent = variant === "transparent";
  const isToursRoute =
    pathname === "/holiday-tours" ||
    pathname === "/outbound-tours" ||
    pathname.startsWith("/package/");

  useEffect(() => {
    if (!transparent) {
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    if (!open) {
      setMobileToursOpen(false);
    }
  }, [open]);

  const transparentHeader = transparent && !scrolled && !open;
  const blurredHeader = transparent && (scrolled || open);

  const isItemActive = (item: NavItem) => {
    if (item.key === "tours") return isToursRoute;
    return pathname === item.href;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncHeaderHeight = () => {
      const shell = headerShellRef.current;
      const bar = headerBarRef.current;
      if (!shell || !bar) return;

      const shellStyles = window.getComputedStyle(shell);
      const topPadding = parseFloat(shellStyles.paddingTop || "0");
      const barHeight = bar.getBoundingClientRect().height;
      const measuredHeight = Math.ceil(topPadding + barHeight + 2);
      if (measuredHeight === 0) return;

      const root = document.documentElement;
      root.style.setProperty("--site-header-height", `${measuredHeight}px`);
      root.style.setProperty("--site-header-offset", `${measuredHeight}px`);
    };

    syncHeaderHeight();

    const shell = headerShellRef.current;
    if (!shell) return;

    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncHeaderHeight) : null;
    resizeObserver?.observe(shell);
    if (headerBarRef.current) {
      resizeObserver?.observe(headerBarRef.current);
    }
    window.addEventListener("resize", syncHeaderHeight, { passive: true });

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, [pathname, transparent, ctaLabel]);

  return (
    <div
      ref={headerShellRef}
      className="fixed inset-x-0 top-0 z-50 w-full pointer-events-none"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <header
        className={`relative w-full pointer-events-auto transition-[background-color,backdrop-filter] duration-300 ${
          transparentHeader
            ? "bg-transparent shadow-none"
            : blurredHeader
              ? "bg-[rgba(8,43,73,0.36)] backdrop-blur-xl shadow-[0_10px_24px_rgba(8,43,73,0.22)]"
              : "bg-[rgba(8,43,73,0.48)] backdrop-blur-lg shadow-[0_8px_20px_rgba(8,43,73,0.2)]"
        }`}
      >
        <div ref={headerBarRef} className="relative z-10 mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="inline-flex"
            onClick={() => setOpen(false)}
          >
            <Image
              src={`${imageBasePath}/images/tripler-holidays-logo-trimmed.png`}
              alt="Triple R Holidays"
              width={220}
              height={69}
              className="h-8 w-auto opacity-95 [filter:brightness(0)_invert(1)] sm:h-9"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navItems.map(item => {
              const active = isItemActive(item);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative pb-1 text-sm font-normal uppercase tracking-[0.18em] transition-colors duration-200 ${
                      active ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white/90" />
                    )}
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.key} className="group relative pb-2">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-label={`${item.label} menu`}
                    className={`relative inline-flex items-center gap-1.5 pb-1 text-sm font-normal uppercase tracking-[0.18em] transition-colors duration-200 ${
                      active ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-white/90" />
                    )}
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </button>

                  <div className="pointer-events-none invisible absolute left-1/2 top-[calc(100%+4px)] z-50 w-64 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-white/22 bg-[linear-gradient(155deg,rgba(8,43,73,0.94),rgba(17,24,32,0.92))] p-2 shadow-[0_18px_36px_rgba(8,43,73,0.45)] backdrop-blur-xl">
                      {item.children.map(child => {
                        const childActive =
                          pathname === child.href ||
                          (child.href === "/holiday-tours" && pathname.startsWith("/package/"));
                        return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-xl px-3.5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                            childActive
                              ? "bg-white/16 text-white"
                              : "text-white/90 hover:bg-white/12 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={ctaHref}
              className="hidden sm:inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-xs font-normal uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-white hover:text-[#082B49]"
            >
              {ctaLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/about#contact"
              className="grid h-10 w-10 place-items-center rounded-full text-white/90 transition duration-300 hover:text-white"
            >
              <User className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-white transition-all duration-300 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(current => !current)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/15 bg-[rgba(8,43,73,0.82)] px-5 py-4">
                {navItems.map(item => {
                  const active = isItemActive(item);

                  if (!item.children) {
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-md px-2 py-3 text-sm font-normal uppercase tracking-[0.14em] transition ${
                          active
                            ? "bg-white/12 text-white"
                            : "text-white/90 hover:bg-white/8 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.key} className="rounded-md">
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between rounded-md px-2 py-3 text-sm font-normal uppercase tracking-[0.14em] transition ${
                          active || mobileToursOpen
                            ? "bg-white/12 text-white"
                            : "text-white/90 hover:bg-white/8 hover:text-white"
                        }`}
                        onClick={() => setMobileToursOpen(current => !current)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileToursOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileToursOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map(child => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded-md px-2 py-2.5 text-xs font-normal uppercase tracking-[0.12em] text-white/90 transition hover:bg-white/10 hover:text-white"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <Link
                  href={ctaHref}
                  className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 text-sm font-normal uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-white hover:text-[#082B49]"
                  onClick={() => setOpen(false)}
                >
                  {ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
