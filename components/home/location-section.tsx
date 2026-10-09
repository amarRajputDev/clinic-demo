import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contact } from "@/lib/site";

export function LocationSection() {
  return (
    <section
      id="location"
      className="border-t border-line bg-ivory py-20 lg:py-28"
      aria-labelledby="location-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="location-heading"
            eyebrow="Location & contact"
            title="Find us in Noida."
            description="All address, phone, email and opening-hour details below are fictional placeholders created for this demonstration website."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[1.75rem] border border-line bg-white p-7 sm:p-9">
              <dl className="space-y-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/70 text-forest">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                      Demo address — placeholder
                    </dt>
                    <dd className="mt-2 text-[0.98rem] leading-relaxed text-charcoal">
                      {contact.addressLines.slice(1).map((line, index) => (
                        <span key={line} className="block">
                          {line}
                          {index === 0 ? <br /> : null}
                        </span>
                      ))}
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
                    <dd className="mt-2 text-[0.98rem] break-all text-charcoal">
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
                      Clinic hours — illustrative
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
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
              >
                Open the contact page
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ivory-deep">
              <div className="rule-grid absolute inset-0 opacity-70" aria-hidden="true" />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/20"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/25"
              />

              <div className="relative flex flex-1 flex-col items-center justify-center p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lift">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="mt-5 font-display text-[1.5rem] leading-tight text-forest sm:text-[1.75rem]">
                  Map placeholder
                </p>
                <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-charcoal-soft">
                  No map is embedded because this fictional clinic has no real
                  location. A live site would embed Google Maps here once an
                  address is confirmed.
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
      </div>
    </section>
  );
}
