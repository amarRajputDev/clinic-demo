import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { getTreatment, treatments } from "@/lib/treatments";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatment not found" };
  return {
    title: treatment.name,
    description: `${treatment.summary} Learn what to expect at AUREL DENTAL (concept demo clinic).`,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const others = treatments
    .filter((item) => item.slug !== treatment.slug)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-ivory-deep">
        <div className="shell py-10 lg:py-14">
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest/70 transition-colors hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All treatments
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow text-forest/70">{treatment.focus}</p>
              <h1 className="mt-6 text-[2.3rem] leading-[1.04] text-forest sm:text-[3rem] lg:text-[3.5rem]">
                {treatment.name}
              </h1>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-charcoal-soft">
                {treatment.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#book"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
                >
                  Book a consultation
                  <CalendarDays className="h-4 w-4" />
                </Link>
                <Link
                  href="/treatments"
                  className="group inline-flex h-12 items-center gap-3 rounded-full border border-forest/30 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-forest/5"
                >
                  Compare treatments
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <Reveal className="lg:col-span-5">
              <div className="img-zoom relative overflow-hidden rounded-[2rem] rounded-tr-[7rem] bg-sage shadow-hair">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  width={1100}
                  height={733}
                  priority
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="h-[16rem] w-full object-cover object-center sm:h-[20rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[1.9rem] leading-tight text-forest sm:text-[2.3rem]">
                About this treatment
              </h2>
              <div className="mt-6 space-y-5">
                {treatment.about.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-[1rem] leading-relaxed text-charcoal-soft"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-7 rounded-2xl border border-champagne-deep/60 bg-champagne/40 px-5 py-4 text-[0.85rem] leading-relaxed text-charcoal-soft">
                This is general information for a fictional demo clinic. It is
                not medical advice and cannot tell you whether a treatment is
                right for you — only an in-person examination can do that.
              </p>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-[1.9rem] leading-tight text-forest sm:text-[2.3rem]">
                What to expect
              </h2>
              <ol className="mt-7 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-3">
                {treatment.expects.map((expect, index) => (
                  <li key={expect.title} className="bg-ivory p-6">
                    <span className="font-display text-[0.95rem] text-forest/45">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-[1.1rem] leading-snug text-forest">
                      {expect.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-charcoal-soft">
                      {expect.body}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-[1.9rem] leading-tight text-forest sm:text-[2.3rem]">
                Questions people ask
              </h2>
              <div className="mt-6">
                <FaqAccordion items={treatment.faqs} />
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-32">
              <div className="rounded-[1.75rem] border border-line bg-white p-7 sm:p-8">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-forest/65">
                  At a glance
                </p>
                <h2 className="mt-3 text-[1.5rem] leading-snug text-forest">
                  {treatment.name}
                </h2>

                <dl className="mt-6 space-y-4 border-t border-line pt-6">
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
                      Category
                    </dt>
                    <dd className="mt-1 text-[0.95rem] text-charcoal">
                      {treatment.focus}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
                      Consultation
                    </dt>
                    <dd className="mt-1 text-[0.95rem] text-charcoal">
                      Required before any plan is confirmed
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal-soft">
                      Indicative fees
                    </dt>
                    <dd className="mt-1 text-[0.95rem] text-charcoal">
                      Discussed at consultation — none are listed on this demo
                    </dd>
                  </div>
                </dl>

                <Link
                  href="/#book"
                  className="group mt-7 flex h-12 items-center justify-center gap-3 rounded-full bg-forest text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
                >
                  Request an appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[1.7rem] leading-tight text-forest sm:text-[2.1rem]">
              Other treatments
            </h2>
            <Link
              href="/treatments"
              className="group inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 0.07}>
                <Link
                  href={`/treatments/${other.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="img-zoom relative h-36 overflow-hidden bg-sage">
                    <Image
                      src={other.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 92vw, 30vw"
                      className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.2rem] leading-snug text-forest">
                      {other.name}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-charcoal-soft">
                      {other.short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest">
                      Explore treatment
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
