import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Contact details, clinic hours and the demo appointment form for the AUREL DENTAL concept website. All details shown are fictional placeholders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title={
          <>
            Let&apos;s start with a <span className="italic">conversation.</span>
          </>
        }
        description="Reach the clinic through the details below, or fill in the demo appointment form. Everything on this page is placeholder information for a fictional practice."
        image={{
          src: "/images/clinic-green.jpg",
          alt: "A bright dental treatment room with green accents and modern equipment",
        }}
      />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[1.75rem] border border-line bg-white p-7 sm:p-9">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-forest/65">
                AUREL DENTAL — demo details
              </p>

              <dl className="mt-7 space-y-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/70 text-forest">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                      Address — placeholder
                    </dt>
                    <dd className="mt-2 text-[0.98rem] leading-relaxed text-charcoal">
                      Level 2, Sector 18 Placeholder Tower
                      <br />
                      Noida, Uttar Pradesh 201301 (placeholder)
                      <span className="mt-1 block text-[0.8rem] text-charcoal-soft">
                        Not a real or visitable address.
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/70 text-forest">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                      Phone — demo only
                    </dt>
                    <dd className="mt-2 text-[0.98rem] text-charcoal">
                      {contact.phone}
                      <span className="mt-1 block text-[0.8rem] text-charcoal-soft">
                        Placeholder number — no calls can be placed.
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/70 text-forest">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                      Email — demo only
                    </dt>
                    <dd className="mt-2 break-all text-[0.98rem] text-charcoal">
                      {contact.email}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/70 text-forest">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                      Hours — illustrative
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {contact.hours.map((row) => (
                        <span
                          key={row.day}
                          className="flex flex-wrap justify-between gap-x-6 gap-y-1 text-[0.92rem] text-charcoal"
                        >
                          <span className="font-medium">{row.day}</span>
                          <span className="text-charcoal-soft">{row.time}</span>
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              <Link
                href="/treatments"
                className="group mt-8 inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
              >
                Browse treatments first
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ivory-deep">
              <div
                className="rule-grid absolute inset-0 opacity-70"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/20"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/25"
              />

              <div className="relative flex flex-1 flex-col items-center justify-center p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lift">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="mt-5 font-display text-[1.5rem] leading-tight text-forest sm:text-[1.75rem]">
                  Map placeholder
                </p>
                <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-charcoal-soft">
                  {site.demoNotice}
                </p>
              </div>

              <div className="relative flex flex-col gap-3 border-t border-line bg-white/80 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.8rem] leading-relaxed text-charcoal-soft">
                  Directions are disabled until a real address is configured.
                </p>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="Demo only — no real location configured"
                  className="inline-flex h-11 shrink-0 cursor-not-allowed items-center gap-2 rounded-full border border-forest/20 px-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest/45"
                >
                  <Navigation className="h-4 w-4" />
                  Get directions
                  <span className="sr-only">(disabled — demo only)</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="book"
        className="on-dark relative overflow-hidden bg-forest text-ivory"
        aria-labelledby="contact-book-heading"
      >
        <div
          aria-hidden="true"
          className="rule-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="shell relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-5 lg:self-start">
            <Reveal>
              <p className="eyebrow text-champagne/85">Appointment request</p>
              <h2
                id="contact-book-heading"
                className="mt-6 text-[2.1rem] leading-[1.05] text-ivory sm:text-[2.6rem]"
              >
                Your smile deserves{" "}
                <span className="italic text-champagne">thoughtful care.</span>
              </h2>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ivory/70">
                Complete the form and it will be validated in your browser. No
                data is transmitted, stored or sent to anyone — this is a
                demonstration of how a live booking flow would behave.
              </p>
              <p className="mt-8 border-l border-champagne/40 pl-4 text-[0.85rem] leading-relaxed text-ivory/60">
                Do not include medical history, symptoms or any sensitive
                personal information in a demo form.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
