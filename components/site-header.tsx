"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonSizes, buttonTones, baseButton } from "@/components/button-link";
import { cn } from "@/lib/utils";
import { contact, nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="relative z-40 bg-forest text-ivory">
        <div className="shell flex h-9 items-center justify-between gap-4">
          <p className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ivory/80 sm:text-[0.65rem] sm:tracking-[0.26em]">
            Mon–Sat · 9:00 AM – 7:00 PM
            <span className="hidden sm:inline"> · illustrative hours</span>
          </p>
          <p className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-champagne sm:text-[0.65rem] sm:tracking-[0.26em]">
            Thoughtful Dentistry. Exceptional Smiles.
          </p>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-ivory/85 shadow-[0_10px_40px_-32px_rgba(24,61,53,0.75)] backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between gap-6 transition-all duration-500",
            scrolled ? "h-16 lg:h-[4.5rem]" : "h-20 lg:h-[5.5rem]",
          )}
        >
          <Link
            href="/"
            aria-label="AUREL DENTAL — home"
            className="shrink-0"
            onClick={closeDrawer}
          >
            <Logo compact={scrolled} overline="Product by Agentiva" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium tracking-[0.02em] transition-colors duration-300",
                    active ? "text-forest" : "text-charcoal-soft hover:text-forest",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-forest transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#book"
              className={cn(baseButton, buttonSizes.sm, buttonTones.forest, "group")}
            >
              Book Consultation
              <CalendarDays className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              baseButton,
              "h-10 w-10 shrink-0 border border-forest/25 px-0 text-forest hover:bg-forest/5 lg:hidden",
            )}
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? "Close navigation menu" : "Open navigation menu"}
            </span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={drawerId}
            ref={panelRef}
            className="on-dark fixed inset-0 z-[60] flex flex-col bg-forest text-ivory lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="shell flex h-20 shrink-0 items-center justify-between">
              <Logo className="text-ivory" markClassName="text-champagne" compact />
              <button
                ref={closeRef}
                type="button"
                onClick={closeDrawer}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory/10"
              >
                <span className="sr-only">Close navigation menu</span>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="shell flex flex-1 flex-col justify-center overflow-y-auto py-4"
            >
              {nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDrawer}
                  className="group flex items-center justify-between border-b border-ivory/15 py-4 font-display text-[1.75rem] leading-tight text-ivory transition-colors hover:text-champagne sm:text-[2rem]"
                >
                  <span>{item.label}</span>
                  <span className="flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                    0{index + 1}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              ))}
            </nav>

            <div className="shell shrink-0 space-y-4 pb-8">
              <Link
                href="/#book"
                onClick={closeDrawer}
                className={cn(baseButton, buttonSizes.lg, buttonTones.ivory, "w-full")}
              >
                Book Consultation
                <CalendarDays className="h-4 w-4" />
              </Link>
              <p className="text-center text-[0.7rem] leading-relaxed text-ivory/55">
                {contact.addressLines[2]}
                <br />
                Demo contact details only.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
