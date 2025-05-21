import BusinessProcess from "./components/about";
import ServicesSection from "./components/cards";
import BusinessCTA from "./components/contactfooter";
import DownSection from "./components/downhero";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProjectsSection from "./components/projectTitle";
import ProductCarousel from "./components/slider";

export default function Home() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <Hero />
      <BusinessProcess />
      <ProjectsSection />
      <ProductCarousel />
      <DownSection />
      <BusinessCTA />
      <Footer />
    </div>
  );
}
