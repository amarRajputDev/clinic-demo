"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: readonly Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.q} className="py-1">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors"
              >
                <span
                  className={cn(
                    "font-display text-[1.15rem] leading-snug transition-colors duration-300 sm:text-[1.35rem]",
                    open
                      ? "text-forest"
                      : "text-charcoal group-hover:text-forest",
                  )}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                    open
                      ? "rotate-45 border-forest bg-forest text-ivory"
                      : "border-forest/25 text-forest group-hover:border-forest/60",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="accordion-panel"
              data-open={open ? "true" : "false"}
            >
              <div>
                <p className="max-w-2xl pb-7 pr-10 text-[0.95rem] leading-relaxed text-charcoal-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
