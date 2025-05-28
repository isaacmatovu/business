import BusinessProcess from "./components/Home/about";
import ServicesSection from "./components/Home/cards";
import BusinessCTA from "./components/Home/contactfooter";
import DownSection from "./components/Home/downhero";
import Hero from "./components/Home/hero";
import HeroBackground from "./components/Home/HeroBackground";
import ProjectsSection from "./components/Home/projectTitle";
import ProductCarousel from "./components/Home/slider";

export default function Home() {
  return (
    <div>
      <HeroBackground />
      <ServicesSection />
      <Hero />
      <BusinessProcess />
      <ProjectsSection />
      <ProductCarousel />
      <DownSection />
      <BusinessCTA />
    </div>
  );
}
