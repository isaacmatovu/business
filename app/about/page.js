import AboutSection from "../components/About/abouthero";
import Features from "../components/About/Features";
import AboutHero from "../components/About/hero";
import Banner from "../components/About/promotional";
import VideoPlayer from "../components/About/videogallery";

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <VideoPlayer />
      <Features />
      <Banner />
    </div>
  );
}
