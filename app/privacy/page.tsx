import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy (Demo)",
  description:
    "A demonstration privacy policy and terms notice for the AUREL DENTAL concept website. This is placeholder legal copy, not real legal advice.",
};

const sections = [
  {
    id: "what-we-collect",
    title: "1. What this website collects",
    body: [
      "Nothing. This concept site has no backend, no database and no analytics service. The appointment form validates and displays your input locally in your browser, then discards it when the page is refreshed or closed.",
      "No name, phone number, email address, appointment preference or message is transmitted to any server, and nothing is written to persistent storage.",
    ],
  },
  {
    id: "sensitive-information",
    title: "2. Sensitive information",
    body: [
      "Real dental websites must handle health data with particular care. Because this is a demonstration, please do not enter medical history, symptoms, diagnoses or any other sensitive personal information into any form on this site.",
      "A production version would require explicit consent, encryption in transit, restricted access, a defined retention period and a documented deletion process.",
    ],
  },
  {
    id: "third-parties",
    title: "3. Third parties and cookies",
    body: [
      "This demo does not set advertising or analytics cookies, does not embed a map, does not load social media widgets and does not include third-party tracking scripts.",
      "Photography is served locally from this project and is used under a free stock-image licence for demonstration purposes.",
    ],
  },
  {
    id: "fictional-content",
    title: "4. Fictional content notice",
    body: [
      "AUREL DENTAL is a fictional clinic created by Agentiva. The practitioners, credentials, address, phone number, email address, opening hours, treatments and any other details on this site are placeholders.",
      "Nothing on this website should be treated as a real business, a genuine medical service or professional health advice.",
    ],
  },
  {
    id: "your-rights",
    title: "5. Your rights on a live site",
    body: [
      "On a real clinic website you would be entitled to request access to, correction of or deletion of any personal data held about you, and to withdraw marketing consent at any time.",
      "Because this demo stores no data, there is nothing to access, correct or delete. You can verify this by inspecting your browser's developer tools after submitting the form.",
    ],
  },
  {
    id: "contact",
    title: "6. Questions",
    body: [
      "For questions about this demonstration website, please contact Agentiva. The placeholder clinic contact details shown on this site do not reach anyone.",
    ],
  },
];

const terms = [
  {
    title: "A. Demonstration only",
    body: "This website is a design and engineering demonstration. It does not offer dental services, does not accept appointments and does not enter into any agreement with visitors.",
  },
  {
    title: "B. No medical advice",
    body: "All content is general and illustrative. It is not a diagnosis, a treatment recommendation or a substitute for an in-person examination by a qualified dentist.",
  },
  {
    title: "C. No outcome promises",
    body: "No clinical result, treatment outcome, timeframe or price is promised anywhere on this site. Illustrative photography does not depict real results from this clinic.",
  },
  {
    title: "D. Availability",
    body: "The site is provided as-is for evaluation purposes. It may be taken offline, rewritten or rebranded at any time without notice.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy & terms"
        title={
          <>
            Demo policy, <span className="italic">plainly written.</span>
          </>
        }
        description="Placeholder legal copy for a concept website. It explains exactly what this demo does and does not do with your information."
      />

      <section className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-[1.5rem] border border-champagne-deep/60 bg-champagne/40 p-6">
                <Info className="h-5 w-5 text-forest" />
                <p className="mt-4 text-[0.9rem] leading-relaxed text-charcoal-soft">
                  This is <strong className="text-forest">placeholder legal
                  copy</strong> written for a fictional clinic. It is not legal
                  advice and would need to be replaced before any real site
                  goes live.
                </p>
              </div>

              <nav aria-label="On this page" className="mt-8">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-forest/65">
                  On this page
                </p>
                <ul className="mt-4 space-y-2.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="link-underline text-[0.9rem] text-charcoal-soft transition-colors hover:text-forest"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#terms"
                      className="link-underline text-[0.9rem] text-charcoal-soft transition-colors hover:text-forest"
                    >
                      Terms of use (demo)
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal className="space-y-12">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-[1.6rem] leading-tight text-forest sm:text-[1.9rem]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className="text-[1rem] leading-relaxed text-charcoal-soft"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}

              <article id="terms" className="scroll-mt-32 border-t border-line pt-12">
                <p className="eyebrow text-forest/70">Terms of use</p>
                <h2 className="mt-5 text-[1.6rem] leading-tight text-forest sm:text-[1.9rem]">
                  Demo terms
                </h2>
                <dl className="mt-6 space-y-6">
                  {terms.map((term) => (
                    <div key={term.title}>
                      <dt className="text-[1.05rem] font-medium text-forest">
                        {term.title}
                      </dt>
                      <dd className="mt-2 text-[1rem] leading-relaxed text-charcoal-soft">
                        {term.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>

            <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-line bg-white px-7 py-8 sm:flex-row sm:items-center sm:px-9">
              <p className="max-w-lg text-[0.95rem] leading-relaxed text-charcoal-soft">
                Concept website by Agentiva — a demonstration of how a premium
                clinic site could look and behave.
              </p>
              <Link
                href="/"
                className="group inline-flex h-12 shrink-0 items-center gap-3 rounded-full bg-forest px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-forest-mid"
              >
                Back to homepage
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
