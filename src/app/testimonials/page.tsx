import { Navbar } from "@/components/ui/Navbar";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
