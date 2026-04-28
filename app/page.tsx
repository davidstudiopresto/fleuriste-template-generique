import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Creations from "./components/Creations";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import SectionDivider from "./components/SectionDivider";
import Filigrane from "./components/Filigrane";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Creations />
        <div className="flex justify-center py-10 md:py-14 bg-[var(--white)]">
          <Filigrane size={180} />
        </div>
        <About />
        <Gallery />
        <div className="flex justify-center py-10 md:py-14 bg-[var(--white)]">
          <Filigrane size={180} />
        </div>
        <Reviews />
        <Visit />
      </main>
    </>
  );
}
