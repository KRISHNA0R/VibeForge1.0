import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { Gallery } from "@/components/sections/Gallery";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Tools } from "@/components/sections/Tools";
import { Mentors } from "@/components/sections/Mentors";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <Gallery />
        <SystemsNominal />
        <Tools />
        <Mentors />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
