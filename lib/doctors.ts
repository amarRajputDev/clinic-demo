export type Doctor = {
  slug: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  credentials: string[];
  focuses: string[];
};

/**
 * Entirely fictional practitioners created for this Agentiva concept site.
 * Names, credentials and portraits are demo content only and must not be
 * presented as real, licensed dental professionals.
 */
export const doctors: Doctor[] = [
  {
    slug: "dr-anaya-menon",
    name: "Dr. Anaya Menon",
    role: "Cosmetic & General Dentistry",
    image: "/images/doctor-1.jpg",
    alt: "Demo portrait of a dental practitioner in olive green scrubs",
    bio: "Demo profile: leads consultations focused on conservative cosmetic planning, helping patients understand which changes are realistic and which are not.",
    credentials: [
      "BDS — placeholder credential (demo)",
      "Aesthetic dentistry — placeholder course (demo)",
    ],
    focuses: ["Cosmetic dentistry", "Smile planning", "Whitening"],
  },
  {
    slug: "dr-rheaan-kapoor",
    name: "Dr. Rheaan Kapoor",
    role: "Restorative & General Dentistry",
    image: "/images/doctor-2.jpg",
    alt: "Demo portrait of a dental practitioner in teal scrubs beside a treatment chair",
    bio: "Demo profile: concentrates on restorative work and long-term maintenance, with a preference for preserving natural tooth structure wherever possible.",
    credentials: [
      "BDS — placeholder credential (demo)",
      "Restorative dentistry — placeholder course (demo)",
    ],
    focuses: ["Crowns & bridges", "Implant consultations", "Routine care"],
  },
  {
    slug: "dr-mira-desai",
    name: "Dr. Mira Desai",
    role: "Preventive & Family Dentistry",
    image: "/images/doctor-3.jpg",
    alt: "Demo portrait of a dental practitioner standing in a treatment room",
    bio: "Demo profile: oversees preventive programmes and hygiene coordination, with a particular interest in making first visits comfortable for anxious patients.",
    credentials: [
      "BDS — placeholder credential (demo)",
      "Preventive dentistry — placeholder course (demo)",
    ],
    focuses: ["Preventive care", "Hygiene support", "Family dentistry"],
  },
];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
