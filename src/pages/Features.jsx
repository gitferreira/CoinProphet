import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import { SecondaryHero } from "../components/SecondaryHero";
import Section from "../components/Section";

const Features = () => {
  return (
    <div className="overflow-hidden">
      <Section
        crosses
        className="overflow-hidden flex flex-col items-center justify-center"
      >
        <SecondaryHero />
      </Section>
      <Benefits />
      <Banner />
    </div>
  );
};

export default Features;
