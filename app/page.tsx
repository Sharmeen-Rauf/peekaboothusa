import Hero from "@/components/sections/Hero";
import BrandLogos from "@/components/sections/BrandLogos";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import AvailabilityChecker from "@/components/sections/AvailabilityChecker";
import Events from "@/components/sections/Events";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandLogos />
      <WhyChooseUs />
      <Services />
      <AvailabilityChecker />
      <Events />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
