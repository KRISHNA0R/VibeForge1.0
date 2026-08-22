import { Navbar } from "@/components/ui/Navbar";
import { Mentors } from "@/components/sections/Mentors";
import { Footer } from "@/components/sections/Footer";

export default function MentorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Mentors />
      </main>
      <Footer />
    </>
  );
}
