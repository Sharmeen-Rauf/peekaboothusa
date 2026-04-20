import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamic imports for below-the-fold components
const Stats = dynamic(() => import("@/components/sections/Stats"));
const BrandLogos = dynamic(() => import("@/components/sections/BrandLogos"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Services = dynamic(() => import("@/components/sections/Services"));
const AvailabilityChecker = dynamic(() => import("@/components/sections/AvailabilityChecker"));
const Events = dynamic(() => import("@/components/sections/Events"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const LocationsMap = dynamic(() => import("@/components/sections/LocationsMap"));
const VirtualBooth = dynamic(() => import("@/components/sections/VirtualBooth"));

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandLogos />
      <WhyChooseUs />
      <Services />
      <VirtualBooth />
      <AvailabilityChecker />
      <Events />
      <Gallery />
      <Testimonials />
      <Contact />
      <LocationsMap />
    </>
  );
}
