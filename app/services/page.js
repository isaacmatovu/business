import BusinessServices from "../components/Services/BusinessServices";
import ServiceCards from "../components/Services/cardsService";
import HeroService from "../components/Services/HeroService";

export default function Page() {
  return (
    <div>
      <HeroService />
      <BusinessServices />
      <ServiceCards />
    </div>
  );
}
