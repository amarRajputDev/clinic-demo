import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the three fictional practitioners featured on the AUREL DENTAL concept website. All names, credentials and photographs are demo content.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the dental team"
        title={
          <>
            Practitioners you can <span className="italic">talk to.</span>
          </>
        }
        description="Every profile on this page is fictional demo content created for an agency concept site. These are not real licensed dental professionals and nothing here should be read as a genuine credential."
        image={{
          src: "/images/doctor-standing.jpg",
          alt: "Demo portrait of a dental practitioner standing in a clinic",
        }}
      />

      <section className="shell py-16 lg:py-24" aria-label="Practitioner profiles">
        <div className="space-y-14 lg:space-y-20">
          {doctors.map((doctor, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal key={doctor.slug}>
                <article
                  id={doctor.slug}
                  className="grid scroll-mt-32 gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div
                    className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div className="img-zoom relative overflow-hidden rounded-[2rem] bg-sage shadow-hair">
                      <Image
                        src={doctor.image}
                        alt={doctor.alt}
                        width={900}
                        height={1200}
                        sizes="(max-width: 1024px) 92vw, 38vw"
                        className="h-[22rem] w-full object-cover object-top sm:h-[26rem]"
                      />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/95 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-forest backdrop-blur">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Fictional demo profile
                      </span>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 lg:self-center ${
                      reversed ? "lg:order-1 lg:col-start-1" : ""
                    }`}
                  >
                    <p className="eyebrow text-forest/70">{doctor.role}</p>
                    <h2 className="mt-5 text-[1.9rem] leading-tight text-forest sm:text-[2.4rem]">
                      {doctor.name}
                    </h2>
                    <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-charcoal-soft">
                      {doctor.bio}
                    </p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/65">
                          Placeholder qualifications
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {doctor.credentials.map((credential) => (
                            <li
                              key={credential}
                              className="flex items-start gap-2 text-[0.9rem] leading-relaxed text-charcoal"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest/50"
                              />
                              {credential}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/65">
                          Focus areas
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {doctor.focuses.map((focus) => (
                            <span
                              key={focus}
                              className="rounded-full border border-forest/15 bg-sage/50 px-3 py-1.5 text-[0.72rem] font-medium text-forest"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/#book"
                      className="group mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
                    >
                      Book with this practitioner
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-white px-7 py-9 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-[1.4rem] leading-snug text-forest sm:text-[1.7rem]">
              See the whole clinic experience
            </h2>
            <p className="mt-2 max-w-xl text-[0.94rem] leading-relaxed text-charcoal-soft">
              Treatments, patient journey, comfort commitments and the demo
              booking flow — all on one page.
            </p>
          </div>
          <Link
            href="/"
            className="group inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
          >
            Back to the homepage
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
