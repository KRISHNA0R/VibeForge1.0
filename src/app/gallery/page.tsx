import { Navbar } from "@/components/ui/Navbar";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
