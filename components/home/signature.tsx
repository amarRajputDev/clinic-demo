import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const details = [
  {
    key: "01",
    title: "Conservative by default",
    body: "We look for the least invasive way to reach your goal, and say so when treatment is not warranted.",
  },
  {
    key: "02",
    title: "Shade and proportion mapping",
    body: "Shape, tone and how your teeth sit within your face are considered together rather than in isolation.",
  },
  {
    key: "03",
    title: "Preview before commitment",
    body: "Where a preview is possible, you see it before any irreversible step is taken.",
  },
];

export function SignatureFeature() {
  return (
    <section
      className="on-dark relative overflow-hidden bg-forest text-ivory"
      aria-labelledby="signature-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full border border-ivory/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full border border-champagne/20"
      />

      <div className="shell relative grid gap-12 py-20 lg:grid-cols-12 lg:gap-14 lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="img-zoom relative overflow-hidden rounded-[2rem] rounded-bl-[8rem] bg-forest-deep">
              <Image
                src="/images/cosmetic-smile.jpg"
                alt="Close-up of a natural, relaxed smile in warm light"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-[20rem] w-full object-cover object-center sm:h-[26rem] lg:h-[34rem]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-champagne/45 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32"
            />
            <p className="mt-5 max-w-md text-[0.75rem] leading-relaxed text-ivory/45">
              Illustrative photography. This demo makes no claims about
              treatment outcomes and shows no before-and-after results.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          <Reveal>
            <p className="eyebrow text-champagne/85">Signature treatment</p>
            <h2
              id="signature-heading"
              className="mt-6 text-[2.1rem] leading-[1.05] text-ivory sm:text-[2.7rem] lg:text-[3rem]"
            >
              Cosmetic dentistry with a{" "}
              <span className="italic text-champagne">lighter touch.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ivory/70">
              A considered cosmetic plan should look like you on your best day —
              not like work that has been done. Every proposal starts with what
              is healthy, what is achievable and what you actually want.
            </p>
          </Reveal>

          <ul className="mt-9 space-y-6">
            {details.map((detail, index) => (
              <Reveal key={detail.key} delay={index * 0.08}>
                <li className="flex gap-5 border-t border-ivory/15 pt-6">
                  <span className="font-display text-[1.05rem] text-champagne/70">
                    {detail.key}
                  </span>
                  <div>
                    <h3 className="text-[1.2rem] text-ivory">{detail.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-ivory/65">
                      {detail.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#book"
              className="group inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-ivory"
            >
              Book a cosmetic consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/treatments/cosmetic-dentistry"
              className="group inline-flex items-center gap-3 rounded-full border border-ivory/35 px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              Read about the treatment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
