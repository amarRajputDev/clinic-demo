export type Treatment = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  alt: string;
  focus: string;
  about: string[];
  expects: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    short: "Check-ups, diagnosis and everyday preventive care for the whole family.",
    summary:
      "Routine examinations, hygiene support and early intervention to keep your mouth healthy over time.",
    image: "/images/tr-general.jpg",
    alt: "Dentist providing treatment to a seated patient in a bright clinic",
    focus: "Foundation of care",
    about: [
      "General dentistry is the foundation of everything else we do. Regular examinations give us a chance to spot changes early, explain them clearly and deal with them while they are simple.",
      "Visits are deliberately unhurried. We review your teeth and gums, talk through anything you have noticed, and agree on a realistic preventive routine together.",
    ],
    expects: [
      {
        title: "A conversation first",
        body: "We start by asking what you have noticed and what you would like to understand better.",
      },
      {
        title: "A gentle examination",
        body: "A full check of teeth, gums, bite and soft tissues, with photographs or scans only if useful.",
      },
      {
        title: "A written summary",
        body: "You leave with clear notes on what we found, what can wait and what is worth addressing soon.",
      },
    ],
    faqs: [
      {
        q: "How often should I have a check-up?",
        a: "Intervals vary from person to person. Your dentist will suggest a schedule based on your examination rather than a fixed rule.",
      },
      {
        q: "Will I be told about costs before treatment?",
        a: "Yes. Any recommended treatment is explained with an indicative fee range before you agree to proceed.",
      },
    ],
  },
  {
    slug: "teeth-cleaning",
    name: "Professional Teeth Cleaning",
    short: "A careful polish and scale to remove buildup and refresh your smile.",
    summary:
      "Professional scaling and polishing tailored to your gum health, delivered by a gentle hygienist.",
    image: "/images/tr-cleaning.jpg",
    alt: "Close-up of a dental check-up with instruments near the teeth",
    focus: "Preventive hygiene",
    about: [
      "Professional cleaning removes the plaque and tartar that everyday brushing cannot reach, particularly along the gum line.",
      "Your hygienist adapts the appointment to your sensitivity, so the experience stays comfortable from start to finish.",
    ],
    expects: [
      {
        title: "Gum assessment",
        body: "We check gum health first and note any areas that need extra attention at home.",
      },
      {
        title: "Scale and polish",
        body: "Buildup is removed carefully, followed by a polish to leave teeth feeling smooth and clean.",
      },
      {
        title: "Home-care guidance",
        body: "Practical, specific advice on brushing technique, interdental cleaning and products that suit you.",
      },
    ],
    faqs: [
      {
        q: "Does teeth cleaning damage enamel?",
        a: "Carried out professionally, cleaning removes deposits from the tooth surface and does not remove healthy enamel.",
      },
      {
        q: "How long does the appointment take?",
        a: "Most hygiene visits are scheduled within 30 to 45 minutes, depending on your needs.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    short: "Thoughtful aesthetic treatments planned around your natural features.",
    summary:
      "Veneers, bonding, contouring and smile design — always planned conservatively and realistically.",
    image: "/images/tr-cosmetic.jpg",
    alt: "Portrait of a woman smiling outdoors in soft natural light",
    focus: "Signature treatment",
    about: [
      "Cosmetic dentistry is about balance rather than perfection. We look at proportion, shade, symmetry and how your teeth sit within your face before suggesting anything.",
      "Every plan begins with a preview of what is realistically achievable, so expectations and outcomes stay aligned.",
    ],
    expects: [
      {
        title: "Smile assessment",
        body: "Photographs and a shade analysis help us understand what you would like to change.",
      },
      {
        title: "A staged proposal",
        body: "Options are set out in order of complexity, from minimal to more involved, with trade-offs explained.",
      },
      {
        title: "Preview and consent",
        body: "Where appropriate, you see a visual preview before any irreversible step is taken.",
      },
    ],
    faqs: [
      {
        q: "Is cosmetic treatment suitable for everyone?",
        a: "Not always. Suitability depends on your gum health, bite and existing restorations, which we assess during consultation.",
      },
      {
        q: "Will results look natural?",
        a: "Natural-looking outcomes are the goal. We plan shade and shape around your face rather than a standard template.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Professionally supervised whitening with shade guidance and aftercare.",
    summary:
      "Clinic-supervised whitening options discussed openly, including realistic expectations and sensitivity management.",
    image: "/images/tr-whitening.jpg",
    alt: "Close-up of a smile with bright, healthy-looking teeth",
    focus: "Brightening",
    about: [
      "Whitening lightens the natural shade of your teeth. How much is achievable depends on your starting shade and the cause of any discolouration.",
      "We explain the likely range of change before you begin, and build in sensitivity management where needed.",
    ],
    expects: [
      {
        title: "Shade record",
        body: "We record your current shade so progress can be measured rather than guessed.",
      },
      {
        title: "Supervised protocol",
        body: "You receive clear instructions on wear time, frequency and what to avoid during treatment.",
      },
      {
        title: "Review and top-up advice",
        body: "A follow-up confirms how you tolerated the treatment and how to maintain the result.",
      },
    ],
    faqs: [
      {
        q: "How long does whitening take to work?",
        a: "Timelines vary with the method chosen and your starting shade. Your dentist will outline a realistic timeframe at consultation.",
      },
      {
        q: "Can whitening cause sensitivity?",
        a: "Some people experience temporary sensitivity. We plan around this and adjust the protocol if it occurs.",
      },
    ],
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    short: "Discreet, removable aligners planned with digital smile mapping.",
    summary:
      "A sequence of transparent, removable aligners to gradually reposition teeth, monitored at planned intervals.",
    image: "/images/tr-aligners.jpg",
    alt: "A person holding a clear dental aligner in a clinic",
    focus: "Alignment",
    about: [
      "Clear aligners are a discreet alternative to fixed braces for many common alignment concerns. Each aligner is worn for a set period before moving to the next.",
      "Progress is reviewed at planned appointments so any deviation from the plan is caught early.",
    ],
    expects: [
      {
        title: "Digital scan",
        body: "A quick scan maps your current alignment without traditional impression trays.",
      },
      {
        title: "A staged sequence",
        body: "You receive your aligners in stages, with clear guidance on daily wear and removal.",
      },
      {
        title: "Scheduled reviews",
        body: "Progress check-ins confirm your teeth are tracking as anticipated.",
      },
    ],
    faqs: [
      {
        q: "Are clear aligners suitable for every case?",
        a: "Complex movements may be better served by other approaches. Suitability is assessed from your scan and examination.",
      },
      {
        q: "How many hours a day must aligners be worn?",
        a: "Wear time is prescribed per case. Following it closely is the single biggest factor in staying on schedule.",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    short: "Crowns, bridges and implants to rebuild comfort and function.",
    summary:
      "Repairing damaged or missing teeth with restorations planned for durability, function and a natural appearance.",
    image: "/images/tr-restorative.jpg",
    alt: "Two dental clinicians reviewing a digital dental scan on a screen",
    focus: "Rebuilding",
    about: [
      "Restorative treatment replaces or repairs tooth structure that has been lost to decay, wear or injury.",
      "Material choice, bite and long-term maintenance are discussed openly so the restoration fits your wider plan.",
    ],
    expects: [
      {
        title: "Detailed assessment",
        body: "Imaging and examination establish how much healthy structure remains and what is worth preserving.",
      },
      {
        title: "Material discussion",
        body: "Options and their trade-offs — appearance, longevity, cost — are set out before preparation begins.",
      },
      {
        title: "Fit and follow-up",
        body: "Restorations are checked carefully for fit and comfort, then reviewed at a later visit.",
      },
    ],
    faqs: [
      {
        q: "How do I know which restoration I need?",
        a: "That is decided after examination and imaging. We explain the options and the reasoning behind the recommendation.",
      },
      {
        q: "Can I spread treatment over time?",
        a: "In most cases yes. Phased treatment is common and we will plan the sequence with you.",
      },
    ],
  },
];

export const treatmentOptions = [
  ...treatments.map((t) => t.name),
  "Not sure yet — please advise",
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
