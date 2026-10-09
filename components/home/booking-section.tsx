import { Check, Lock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";

const bullets = [
  "No obligation — a consultation is a conversation, not a commitment.",
  "Clear indicative pricing discussed before anything begins.",
  "A written plan you can take away and think about.",
];

export function BookingSection() {
  return (
    <section
      id="book"
      className="on-dark relative overflow-hidden bg-forest text-ivory"
      aria-labelledby="book-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-32 h-[34rem] w-[34rem] rounded-full border border-ivory/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-10 h-[24rem] w-[24rem] rounded-full border border-ivory/10"
      />
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="shell relative grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-32">
          <Reveal>
            <p className="eyebrow text-champagne/85">Book an appointment</p>
            <h2
              id="book-heading"
              className="mt-6 text-[2.2rem] leading-[1.04] text-ivory sm:text-[2.8rem] lg:text-[3.2rem]"
            >
              Your smile deserves{" "}
              <span className="italic text-champagne">thoughtful care.</span>
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ivory/70">
              Tell us when suits you and what you would like to discuss. On a
              live site the reception team would confirm your appointment within
              one working day.
            </p>

            <ul className="mt-9 space-y-4 border-t border-ivory/15 pt-8">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-[0.94rem] leading-relaxed text-ivory/75"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-champagne/25 text-champagne">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-start gap-2.5 text-[0.8rem] leading-relaxed text-ivory/55">
              <Lock className="mt-0.5 h-4 w-4 shrink-0" />
              Demo environment: this form does not collect, store or transmit
              any personal or health information.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <BookingForm />
          <p className="mt-5 flex items-center gap-2 text-[0.75rem] text-ivory/55">
            <Sparkles className="h-3.5 w-3.5" />
            Demo submission flow — success and error states are both
            interactive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
