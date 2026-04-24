import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Peek-A-Booth PK | #1 Photo Booth Rental Company in Pakistan",
  description: "Pakistan's most trusted photo booth rental company. We offer premium photo booth rentals for weddings, birthdays, corporate events & more in Karachi, Lahore, Islamabad & Multan. Book now!",
};

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
      <LocationsMap />
      
      {/* SEO Footer Text Section */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-white/30 text-[10px] md:text-xs leading-relaxed text-center font-medium">
            Peek-A-Booth PK is Pakistan&apos;s leading photo booth rental company, offering premium photo booth experiences for weddings, birthdays, corporate events, and private parties across Karachi, Lahore, Islamabad, and Multan. Whether you&apos;re looking for a 360 photo booth, open air photo booth, Vogue magazine booth, or digital photo booth — we have the perfect setup for your next event. Book your photo booth rental today and make your event truly unforgettable.
          </p>
        </div>
      </section>
    </>
  );
}
