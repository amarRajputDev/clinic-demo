import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/lib/site";

export function Journey() {
  return (
    <section
      id="patient-care"
      className="shell py-20 lg:py-28"
      aria-labelledby="journey-heading"
    >
      <Reveal>
        <SectionHeading
          id="journey-heading"
          eyebrow="Your patient journey"
          title="Four steps, no surprises."
          description="A simple, predictable path from first enquiry to ongoing care — you always know what happens next."
        />
      </Reveal>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6 lg:gap-10">
        <div
          aria-hidden="true"
          className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-forest/25 via-forest/25 to-forest/10 md:block"
        />

        {journey.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.1} className="relative">
            <li className="relative flex gap-5 md:block">
              {index < journey.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.4rem] top-12 h-[calc(100%+1.5rem)] w-px bg-forest/15 md:hidden"
                />
              ) : null}

              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forest/25 bg-ivory font-display text-[1.05rem] text-forest shadow-[0_0_0_6px_var(--color-ivory)]">
                {step.step}
              </span>

              <div className="md:mt-6">
                <h3 className="text-[1.25rem] leading-snug text-forest">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-charcoal-soft">
                  {step.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
