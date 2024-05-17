import { stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";


const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="pricing">
      <div className="container z-2 relative">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1.2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading noBrackets="Start investing with CoinProphet" title="Get the Plan that suits You" />

        <div className="relative ">
            <PricingList />

        </div>

        <div className="flex justify-end mt-10 ">
            <a className="text-xs font-code font-bold tracking-wider uppercase border-b " href="/pricing"> See the full details </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
