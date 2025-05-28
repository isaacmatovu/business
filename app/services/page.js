import BusinessCTA from "../components/Home/contactfooter";
import BusinessServices from "../components/Services/BusinessServices";
import ServiceCards from "../components/Services/cardsService";
import GreenCard from "../components/Services/green";
import HeroCards from "../components/Services/HeroCards";
import HeroService from "../components/Services/HeroService";

export default function Page() {
  return (
    <div>
      <HeroService />
      <BusinessServices />
      <ServiceCards />
      <HeroCards />
      <GreenCard />
      <div className="relative z-10 -mt-11 sm:-mt-28">
        <BusinessCTA />
      </div>
    </div>
  );
}
