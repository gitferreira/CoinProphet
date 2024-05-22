import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import Section from "../components/Section";

const PricingPage = () => {
  return (
    <div className="overflow-hidden">
      <Section
        crosses
        className="overflow-hidden flex flex-col items-center justify-center"
      >
        <div className="w-[40rem] text-center text-wrap mb-15">
          <Heading className="!mb-0" title="Pricing" />{" "}
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8 text-center text-wrap w-[20rem] md:w-[40rem]">
            Choose the Perfect Plan for Your Investment Journey
          </p>
        </div>
        <div className="container z-2 relative">
          <div className="relative ">
            <PricingList />
          </div>
        </div>
      </Section>
      <Faq />
      <Banner />
    </div>
  );
};

export default PricingPage;
