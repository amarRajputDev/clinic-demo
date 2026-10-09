import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-forest/10"
      />
      <div className="shell relative flex min-h-[62vh] flex-col justify-center py-24">
        <p className="eyebrow text-forest/70">404</p>
        <h1 className="mt-6 max-w-2xl text-[2.4rem] leading-[1.05] text-forest sm:text-[3.2rem]">
          This page is not part of the <span className="italic">demo.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-charcoal-soft">
          The link you followed does not match any page on this concept website.
          Everything that does exist is linked from the navigation above.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
          >
            <Home className="h-4 w-4" />
            Back to homepage
          </Link>
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-3 rounded-full border border-forest/30 px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-forest/5"
          >
            <Search className="h-4 w-4" />
            Browse treatments
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
