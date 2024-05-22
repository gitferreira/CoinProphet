import secondaryHero from "../assets/secondaryHero-animation.json";
import Lottie from "lottie-react";
import { Gradient } from "../design/Services";
import { grid } from "../assets";
import Button from "./Button";
import Tagline from "./Tagline";
import heroBackground from "../assets/hero/cryptobotBg.png";
import Done from "./Done";

export const SecondaryHero = () => {
  return (
    <div className="flex flex-col mt-[4rem] md:flex-row md:mt-0  items-start justify-center w-2/3 ">
      <div className="relative flex flex-col full items-start text-start justify-start   ">
        <div className="flex items-start justify-start text-left mx-0 w-full">
          <h2 className="h2 text-left mb-3">Core Features</h2>
        </div>

        <p className="w-2/3 text-n-1/70 text-lg text-left mb-3">
          Discover a Comprehensive Suite of Features Designed to Elevate Your
          Crypto Investment Strategies
        </p>

        <div className="flex items-start justify-start mt-4 ">
          <Button className="!mx-0 justify-start" href="/features">
            {" "}
            Learn More
          </Button>{" "}
        </div>
        <Gradient />
        <Lottie
          animationData={secondaryHero}
          className="w-[45rem] -mt-[3rem] -ml-[10rem] rotate-12"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center relative mt-10 ">
        <div className="relative  p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
          <div className="absolute top-0 left-0 max-w-full">
            <img
              className="w-full"
              src={grid}
              width={550}
              height={550}
              alt="Grid"
            />
          </div>
          <div className="relative z-1">
            <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
              <Tagline>FEATURED</Tagline>
            </div>

            <div className="mb-10 -my-10 w-[80%] flex items-center mx-auto">
              <img src={heroBackground} alt="heroBackground" />
            </div>
            <h4 className="h4 mb-4">AI Powered Trading</h4>
            <p className="body-2 text-n-1/70">
              Unlock the full potential of your investments with our Pro Plan.
              Experience the power of AI-driven trading and maximize your
              returns effortlessly. Try it now!
            </p>
          </div>
        </div>
        <div className="flex justify-end items-end w-full">
          <Done title="Try it now purchasing the PRO plan!" className="hidden  xl:flex mt-8 bg-table-gradient hover:bg-n-9 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
