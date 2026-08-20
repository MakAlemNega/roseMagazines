import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MemoryKeeping from "./sections/MemoryKeeping";
import CustomMagazine from "./sections/CustomMagazine";
import MagazineTemplates from "./sections/MagazineTemplates";
import MagazineClub from "./sections/MagazineClub";
import Testimonials from "./sections/Testimonials";
import Socials from "./sections/Socials";
import FinalCTA from "./sections/FinalCTA";
import Newsletter from "./sections/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MemoryKeeping />
        <CustomMagazine />
        <MagazineTemplates />
        <MagazineClub />
        <Testimonials />
        <Socials />
        <FinalCTA />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
