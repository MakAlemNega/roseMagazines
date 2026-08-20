import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MemoryKeeping from "./sections/MemoryKeeping";
import CustomMagazine from "./sections/CustomMagazine";
import MagazineTemplates from "./sections/MagazineTemplates";
import MagazineClub from "./sections/MagazineClub";

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
      </main>
    </>
  );
}
