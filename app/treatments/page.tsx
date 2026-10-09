import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore the six core treatment pathways offered at AUREL DENTAL — general dentistry, professional cleaning, cosmetic dentistry, teeth whitening, clear aligners and restorative dentistry.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatment directory"
        title={
          <>
            Six ways we look after <span className="italic">your smile.</span>
          </>
        }
        description="Each treatment is explained in plain language, with what to expect and the questions most people ask. Nothing here is a diagnosis or a personal recommendation."
        image={{
          src: "/images/clinic-room.jpg",
          alt: "A bright, clean dental treatment room with a modern chair by a window",
        }}
      />

      <section className="shell py-16 lg:py-24" aria-label="Treatment list">
        <ol className="border-t border-line">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.slug} delay={Math.min(index * 0.05, 0.25)}>
              <li>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 transition-colors duration-300 hover:bg-white sm:gap-8 sm:px-4"
                >
                  <span className="font-display text-[0.95rem] text-forest/45">
                    0{index + 1}
                  </span>

                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                    <div className="min-w-0 sm:w-[42%]">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-forest/60">
                        {treatment.focus}
                      </p>
                      <h2 className="mt-2 text-[1.35rem] leading-tight text-forest transition-colors duration-300 group-hover:text-forest-mid sm:text-[1.7rem]">
                        {treatment.name}
                      </h2>
                    </div>

                    <p className="min-w-0 flex-1 text-[0.92rem] leading-relaxed text-charcoal-soft">
                      {treatment.summary}
                    </p>

                    <div className="img-zoom hidden h-24 w-44 shrink-0 overflow-hidden rounded-2xl bg-sage lg:block">
                      <Image
                        src={treatment.image}
                        alt=""
                        width={440}
                        height={280}
                        sizes="176px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/25 text-forest transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-ivory">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-champagne/35 px-7 py-9 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-[1.4rem] leading-snug text-forest sm:text-[1.7rem]">
              Still weighing up your options?
            </h2>
            <p className="mt-2 max-w-xl text-[0.94rem] leading-relaxed text-charcoal-soft">
              A consultation is the fastest way to get a straight answer about
              what makes sense for your situation.
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
      </section>
    </>
  );
}
