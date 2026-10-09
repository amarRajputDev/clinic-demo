import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { comfortPoints } from "@/lib/site";

export function Comfort() {
  return (
    <section
      id="comfort"
      className="border-t border-line bg-ivory py-20 lg:py-28"
      aria-labelledby="comfort-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="img-zoom relative overflow-hidden rounded-[2rem] rounded-br-[7rem] bg-sage shadow-hair">
              <Image
                src="/images/comfort-mirror.jpg"
                alt="A dentist and a relaxed patient smiling together while reviewing results in a hand mirror"
                width={1300}
                height={867}
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="h-[20rem] w-full object-cover object-center sm:h-[26rem] lg:h-[30rem]"
              />
            </div>

            <figure className="mt-6 rounded-[1.5rem] border border-dashed border-forest/30 bg-ivory-deep/70 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-forest/70">
                  Sample layout
                </p>
                <span className="rounded-full border border-forest/25 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-forest/70">
                  Placeholder
                </span>
              </div>
              <blockquote className="mt-4 flex gap-4">
                <Quote
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-forest/35"
                />
                <p className="font-display text-[1.1rem] italic leading-relaxed text-charcoal-soft">
                  “A real, verified patient review would sit here — nothing is
                  fabricated for this demo.”
                </p>
              </blockquote>
              <figcaption className="mt-4 text-[0.75rem] text-charcoal-soft/75">
                This site shows no star ratings, review counts or patient
                testimonials.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <Reveal>
            <SectionHeading
              id="comfort-heading"
              eyebrow="Patient experience"
              title="Your comfort comes first."
              description="Rather than publishing invented reviews, we would rather show you exactly how a visit feels — from the moment you sit down to the note you take home."
            />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2">
            {comfortPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.07}>
                <div className="h-full bg-ivory p-6 transition-colors duration-500 hover:bg-white">
                  <span className="font-display text-[0.95rem] text-forest/45">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-[1.15rem] leading-snug text-forest">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-charcoal-soft">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9">
            <Link
              href="/#faq"
              className="group inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
            >
              Read common questions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
