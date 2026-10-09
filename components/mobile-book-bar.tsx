"use client";

import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/15 bg-ivory/95 px-4 py-3 backdrop-blur-lg lg:hidden">
      <div className="flex items-center gap-3">
        <Link
          href="/contact"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/25 text-forest transition-colors hover:bg-forest/5"
          aria-label="Call the demo clinic"
        >
          <Phone className="h-4 w-4" />
        </Link>
        <Link
          href="/#book"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-forest text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
        >
          Book a consultation
          <CalendarDays className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
