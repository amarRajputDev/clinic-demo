import { Armchair, HeartHandshake, ScanLine, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { trustAttributes } from "@/lib/site";

const icons = [Users, ScanLine, HeartHandshake, Armchair];

export function TrustStrip() {
  return (
    <section
      aria-label="Clinic attributes"
      className="border-y border-line bg-ivory-deep/70"
    >
      <div className="shell grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
        {trustAttributes.map((attribute, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              key={attribute.title}
              delay={index * 0.07}
              className="relative py-7 lg:py-8"
            >
              <div className="flex items-start gap-4 pr-4 lg:border-r lg:border-line lg:pr-6 lg:last:border-r-0">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest">
                    {attribute.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-charcoal-soft">
                    {attribute.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
