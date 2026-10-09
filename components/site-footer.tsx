import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";
import { treatments } from "@/lib/treatments";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="on-dark relative overflow-hidden bg-forest-deep text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full border border-ivory/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[18rem] w-[18rem] rounded-full border border-ivory/10"
      />

      <div className="shell relative py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo className="text-ivory" markClassName="text-champagne" />
            <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed text-ivory/65">
              A premium dental and cosmetic clinic concept built around calm
              consultations, clear explanations and treatment plans that move at
              your pace.
            </p>
            <p className="mt-6 max-w-sm border-l border-champagne/40 pl-4 font-display text-lg italic text-champagne">
              Confidence Begins With Your Smile.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ivory/50">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.92rem] text-ivory/80 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#book"
                  className="link-underline text-[0.92rem] text-ivory/80 transition-colors hover:text-champagne"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ivory/50">
              Treatments
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {treatments.map((treatment) => (
                <li key={treatment.slug}>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="link-underline inline-flex items-center gap-1.5 text-[0.92rem] text-ivory/80 transition-colors hover:text-champagne"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-ivory/50">
              Demo contact
            </h2>
            <address className="mt-5 space-y-4 not-italic text-[0.92rem] leading-relaxed text-ivory/75">
              <p>
                {contactBlock()}
              </p>
              <p>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/45">
                  Phone (demo only)
                </span>
                +91 00000 00000
              </p>
              <p>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/45">
                  Email (demo only)
                </span>
                hello@aureldental.demo
              </p>
            </address>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-champagne"
            >
              Contact page
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.78rem] text-ivory/55">
            © {year} AUREL DENTAL — fictional demo clinic. All contact details
            on this site are placeholders.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem]">
            <li>
              <Link
                href="/privacy"
                className="link-underline text-ivory/70 transition-colors hover:text-champagne"
              >
                Privacy policy (demo)
              </Link>
            </li>
            <li>
              <Link
                href="/privacy#terms"
                className="link-underline text-ivory/70 transition-colors hover:text-champagne"
              >
                Terms (demo)
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-ivory/40">
          Concept website by Agentiva.
        </p>
      </div>
    </footer>
  );
}

function contactBlock() {
  return (
    <>
      <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/45">
        Demo address — not a real location
      </span>
      Level 2, Sector 18 Placeholder Tower
      <br />
      Noida, Uttar Pradesh 201301 (placeholder)
    </>
  );
}
