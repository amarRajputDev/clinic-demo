import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { doctors } from "@/lib/doctors";

export function Team() {
  return (
    <section
      id="team"
      className="border-t border-line bg-ivory-deep/60 py-20 lg:py-28"
      aria-labelledby="team-heading"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            id="team-heading"
            eyebrow="Meet the dental team"
            title="People you will actually get to know."
            description="Three fictional practitioners created for this concept site. Names, credentials and photographs are demo content and do not represent real licensed professionals."
            action={
              <Link
                href="/doctors"
                className="group inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-forest transition-colors hover:border-forest"
              >
                All demo profiles
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.slug} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-shadow duration-500 hover:shadow-lift">
                <div className="relative overflow-hidden bg-sage">
                  <div className="img-zoom">
                    <Image
                      src={doctor.image}
                      alt={doctor.alt}
                      width={900}
                      height={1200}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                      className="h-[20rem] w-full object-cover object-top sm:h-[22rem]"
                    />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/95 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-forest backdrop-blur">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Demo profile
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-forest/60">
                    {doctor.role}
                  </p>
                  <h3 className="mt-2 text-[1.5rem] leading-tight text-forest">
                    {doctor.name}
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-charcoal-soft">
                    {doctor.bio}
                  </p>

                  <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
                    {doctor.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="flex items-start gap-2 text-[0.8rem] text-charcoal-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-forest/50"
                        />
                        {credential}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {doctor.focuses.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-forest/15 bg-sage/50 px-3 py-1.5 text-[0.68rem] font-medium text-forest"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/doctors#${doctor.slug}`}
                    className="group/link mt-6 inline-flex items-center justify-between border-t border-line pt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest"
                  >
                    View profile
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-white px-7 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h3 className="text-[1.35rem] leading-snug text-forest sm:text-[1.6rem]">
              Want to meet your dentist before you commit?
            </h3>
            <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-charcoal-soft">
              A first consultation is a conversation. Ask anything, and decide
              afterwards whether you would like to continue.
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
