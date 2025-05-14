import BusinessProcess from "./components/about";
import ServicesSection from "./components/cards";
import Header from "./components/header";
import Hero from "./components/hero";
import ProjectsSection from "./components/projectTitle";
import PortfolioCarousel from "./components/slider";

export default function Home() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <Hero />
      <BusinessProcess />
      <ProjectsSection />
      <PortfolioCarousel />
    </div>
  );
}
