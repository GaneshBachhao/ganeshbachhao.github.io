import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CareerEvolution from "./components/CareerEvolution/CareerEvolution";
import Skills from "./components/Skills/Skills";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
// import TechnologyCarousel from "./components/TechnologyCarousel/TechnologyCarousel";
// import ArchitectureGallery from "./components/ArchitectureGallery/ArchitectureGallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import ArchitectureShowcase from "./components/ArchitectureShowcase/ArchitectureShowcase";
import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
import ArchitecturePrinciples from "./components/ArchitecturePrinciples/ArchitecturePrinciples";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CareerEvolution />
      <CareerTimeline />
      <Skills />
      <ArchitecturePrinciples />
      <FeaturedProjects />
      <ArchitectureShowcase />
      {/* <TechnologyCarousel />
      <ArchitectureGallery /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
