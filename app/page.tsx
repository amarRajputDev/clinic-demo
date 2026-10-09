import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { About } from "@/components/home/about";
import { TreatmentsShowcase } from "@/components/home/treatments-showcase";
import { SignatureFeature } from "@/components/home/signature";
import { Team } from "@/components/home/team";
import { Journey } from "@/components/home/journey";
import { Comfort } from "@/components/home/comfort";
import { FaqSection } from "@/components/home/faq-section";
import { BookingSection } from "@/components/home/booking-section";
import { LocationSection } from "@/components/home/location-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <TreatmentsShowcase />
      <SignatureFeature />
      <Team />
      <Journey />
      <Comfort />
      <FaqSection />
      <BookingSection />
      <LocationSection />
    </>
  );
}
