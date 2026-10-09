export const site = {
  name: "AUREL DENTAL",
  tagline: "Confidence Begins With Your Smile.",
  announcement: "Thoughtful Dentistry. Exceptional Smiles.",
  agencyCredit: "Concept website by Agentiva.",
  demoNotice:
    "This is a demonstration website built by Agentiva. The clinic, practitioners, address, phone number, email and opening hours shown here are fictional placeholders.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Patient Care", href: "/#patient-care" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * All contact details below are placeholders for a fictional demo clinic.
 * They must never be presented as real, working business information.
 */
export const contact = {
  addressLines: [
    "Demo address — not a real location",
    "Level 2, Sector 18 Placeholder Tower",
    "Noida, Uttar Pradesh 201301 (placeholder)",
  ],
  phone: "+91 00000 00000 (demo only)",
  phoneHref: "tel:+910000000000",
  email: "hello@aureldental.demo",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM (illustrative)" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM (illustrative)" },
    { day: "Sunday", time: "Closed (illustrative)" },
  ],
};

export const trustAttributes = [
  {
    title: "Personalized Treatment Plans",
    body: "Recommendations shaped around your goals, comfort and pace.",
  },
  {
    title: "Modern Dental Technology",
    body: "Contemporary diagnostic and treatment equipment throughout.",
  },
  {
    title: "Patient-First Approach",
    body: "Time to ask questions before anything begins.",
  },
  {
    title: "Comfortable Care Experience",
    body: "A calm, unhurried environment designed to put you at ease.",
  },
] as const;

export const principles = [
  {
    key: "01",
    title: "Listen",
    body: "Every visit starts with your concerns, your history and what you would like to change — in plain language, without pressure.",
  },
  {
    key: "02",
    title: "Personalize",
    body: "We outline suitable options, sequencing and expected appointment time, so you can decide what feels right for you.",
  },
  {
    key: "03",
    title: "Care",
    body: "Treatment is paced around your comfort, with clear aftercare guidance and an open line for questions between visits.",
  },
] as const;

export const journey = [
  {
    step: "01",
    title: "Book a consultation",
    body: "Choose a date and time that suits you through the demo booking form or by contacting the clinic.",
  },
  {
    step: "02",
    title: "Discuss your concerns",
    body: "A relaxed conversation about what you would like to improve, plus a gentle examination of your oral health.",
  },
  {
    step: "03",
    title: "Receive a personalized plan",
    body: "A written outline of suitable options, expected appointment count and an indicative fee range.",
  },
  {
    step: "04",
    title: "Begin your care journey",
    body: "Start treatment when you are ready, at a pace that suits your schedule and comfort.",
  },
] as const;

export const comfortPoints = [
  {
    title: "Unhurried appointments",
    body: "Consultations are scheduled with enough time for questions, so nothing feels rushed.",
  },
  {
    title: "Clear explanations first",
    body: "Every step is described before it happens. You can pause or stop at any point.",
  },
  {
    title: "A calm physical space",
    body: "Soft lighting, quiet rooms and a waiting area designed to feel closer to a boutique lounge.",
  },
  {
    title: "Transparent costs",
    body: "Fees are discussed up front. You receive a written plan before any treatment begins.",
  },
] as const;
