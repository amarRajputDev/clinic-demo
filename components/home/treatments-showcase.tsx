import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { treatments } from "@/lib/treatments";
import { cn } from "@/lib/utils";

const layout = [
  "md:col-span-2 lg:col-span-4 h-[23rem] sm:h-[26rem]",
  "md:col-span-1 lg:col-span-2 h-[23rem] sm:h-[26rem]",
  "md:col-span-1 lg:col-span-2 h-[20rem] sm:h-[23rem]",
  "md:col-span-1 lg:col-span-2 h-[20rem] sm:h-[23rem]",
  "md:col-span-1 lg:col-span-2 h-[20rem] sm:h-[23rem]",
  "md:col-span-3 lg:col-span-6 h-[17rem] sm:h-[19rem]",
];

export function TreatmentsShowcase() {
  return (
    <section
      id="treatments"
      className="border-t border-line bg-ivory py-20 lg:py-28"
      aria-labelledby="treatments-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="treatments-heading"
            eyebrow="Treatments"
            title="Care for every stage of your smile."
            description="Six core treatment pathways, each explained in plain language so you know what to expect before you commit to anything."
            action={
              <Link
                href="/treatments"
                className="group inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
              >
                View all treatments
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:grid-cols-6">
          {treatments.map((treatment, index) => (
            <Reveal
              key={treatment.slug}
              delay={Math.min(index * 0.06, 0.3)}
              className={cn(layout[index])}
            >
              <Link
                href={`/treatments/${treatment.slug}`}
                className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-[1.75rem] bg-forest"
              >
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-forest/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 border border-ivory/10 transition-colors duration-500 group-hover:border-champagne/50"
                  style={{ borderRadius: "inherit" }}
                />

                <div className="relative p-6 sm:p-7">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-champagne/90">
                    {treatment.focus}
                  </p>
                  <h3 className="mt-2.5 text-[1.5rem] leading-tight text-ivory sm:text-[1.7rem]">
                    {treatment.name}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-[0.88rem] leading-relaxed text-ivory/75">
                    {treatment.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-champagne">
                    Explore treatment
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-champagne/35 px-7 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h3 className="text-[1.35rem] leading-snug text-forest sm:text-[1.6rem]">
              Not sure which treatment you need?
            </h3>
            <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-charcoal-soft">
              That is exactly what a consultation is for. Describe your concern
              and we will explain the sensible options.
            </p>
          </div>
          <Link
            href="/#book"
            className="group inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
