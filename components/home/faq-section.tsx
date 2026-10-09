import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqs } from "@/lib/faqs";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-line bg-ivory-deep/60 py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              id="faq-heading"
              eyebrow="Frequently asked"
              title="Answers before you ask."
              description="General information only. Nothing here is medical advice or a substitute for an in-person examination."
            />
          </Reveal>

          <Reveal className="mt-9 rounded-[1.5rem] border border-line bg-white p-6">
            <MessageCircleQuestion
              aria-hidden="true"
              className="h-6 w-6 text-forest"
            />
            <p className="mt-4 text-[0.92rem] leading-relaxed text-charcoal-soft">
              Still have a question that is not covered here? Send it through
              the booking form and it will be part of your first conversation.
            </p>
            <Link
              href="/#book"
              className="group mt-5 inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
            >
              Ask a question
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-8">
          <FaqAccordion items={faqs} />
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-white px-7 py-8 sm:flex-row sm:items-center sm:px-9">
            <div>
              <h3 className="text-[1.3rem] leading-snug text-forest sm:text-[1.5rem]">
                Ready when you are.
              </h3>
              <p className="mt-2 max-w-lg text-[0.9rem] leading-relaxed text-charcoal-soft">
                Pick a date and time in the demo form below — it takes about
                thirty seconds.
              </p>
            </div>
            <Link
              href="/#book"
              className="group inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
