import Section from "./Section";
import Button from "./Button";
import { Gradient } from "../design/Services";
import { Rings } from "../design/Hero";
import { MouseParallax } from "react-just-parallax";
import Lottie from "lottie-react";
import serverAnimation from "../assets/server-animation.json";

const Banner = ({ parallaxRef }) => {
  return (
    <Section crosses className="flex flex-col justify-center items-center">
      <Rings />
  
      <div className="w-1/5 mb-1">
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}> 
        <Lottie animationData={serverAnimation} /></MouseParallax>
      </div>

      <div className="relative z-1 max-w-[30rem] mx-auto text-center  ">
        <h1 className="h2 mb-3">
        Join the Future of Crypto Investing <br />
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
          Upgrade your strategies and maximize your benefits with CoinProphet,
          the crypto investment bot.
        </p>
        <Button href="/pricing" white>
          Start Now
        </Button>
      </div>

      <Gradient />
    </Section>
  );
};

export default Banner;
