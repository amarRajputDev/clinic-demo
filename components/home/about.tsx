import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { principles } from "@/lib/site";

export function About() {
  return (
    <section className="shell py-20 lg:py-28" aria-labelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] rounded-tl-[7rem] border border-forest/20"
            />
            <div className="img-zoom relative overflow-hidden rounded-[2rem] rounded-tl-[7rem] bg-sage shadow-hair">
              <Image
                src="/images/about-consult.jpg"
                alt="A dental professional talking with a patient in a bright, contemporary treatment room"
                width={1500}
                height={1000}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-[22rem] w-full object-cover object-center sm:h-[28rem] lg:h-[34rem]"
              />
            </div>

            <div className="absolute -bottom-6 right-3 w-40 rounded-2xl border border-line bg-champagne/70 p-4 backdrop-blur-sm sm:right-6 sm:w-48">
              <p className="font-display text-[1.9rem] leading-none text-forest">
                01:01
              </p>
              <p className="mt-2 text-[0.7rem] leading-snug text-charcoal-soft">
                Unhurried, one-to-one consultation time — illustrative only.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-4">
          <Reveal>
            <p className="eyebrow text-forest/70">About the clinic</p>
            <h2
              id="about-heading"
              className="mt-6 text-[2.1rem] leading-[1.05] text-forest sm:text-[2.7rem] lg:text-[3.1rem]"
            >
              Dentistry that puts you first.
            </h2>
            <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-charcoal-soft">
              AUREL DENTAL is a concept practice built around a simple idea:
              patients make better decisions when they feel heard. Visits are
              unhurried, explanations are plain-spoken, and nothing proceeds
              until you are comfortable with the plan.
            </p>
            <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-charcoal-soft">
              The environment borrows more from boutique hospitality than from a
              hospital corridor — soft light, quiet rooms and a team that
              remembers your name.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-6">
            {principles.map((principle, index) => (
              <Reveal key={principle.key} delay={index * 0.08}>
                <li className="flex gap-5 border-t border-line pt-6">
                  <span className="font-display text-[1.05rem] text-forest/45">
                    {principle.key}
                  </span>
                  <div>
                    <h3 className="text-[1.3rem] text-forest">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[0.94rem] leading-relaxed text-charcoal-soft">
                      {principle.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-10">
            <Link
              href="/#patient-care"
              className="group inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
            >
              Discover our approach
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
