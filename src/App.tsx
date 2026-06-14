import Navbar from "./components/Navbar/Navbar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CareerEvolution from "./components/CareerEvolution/CareerEvolution";
import TechnicalExpertise from "./components/Skills/TechnicalExpertise";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
// import TechnologyCarousel from "./components/TechnologyCarousel/TechnologyCarousel";
// import ArchitectureGallery from "./components/ArchitectureGallery/ArchitectureGallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import ArchitectureShowcase from "./components/ArchitectureShowcase/ArchitectureShowcase";
// import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
// import ArchitecturePrinciples from "./components/ArchitecturePrinciples/ArchitecturePrinciples";

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <FeaturedProjects />
      <TechnicalExpertise />
      <CareerEvolution />
      {/* <CareerTimeline /> */}
      {/* <ArchitecturePrinciples /> */}
      <ArchitectureShowcase />
      {/* <TechnologyCarousel />
      <ArchitectureGallery /> */}
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
