import AboutSection from "../components/About/abouthero";
import AboutHero from "../components/About/hero";
import VideoPlayer from "../components/About/videogallery";

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <VideoPlayer />
    </div>
  );
}
