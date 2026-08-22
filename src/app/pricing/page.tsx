import { Navbar } from "@/components/ui/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
