import Section from "./Section";
import robot from "../assets/hero/cryptobot.png";
import bubble9 from "../assets/bubbles/portfolio.png";
import heroBackground from "../assets/hero/cryptobotBg.png";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Done from "./Done";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Bubble from "./Bubble";

const Hero = () => {
  const parallaxRef = useRef();

  return (
    <Section
      className="pt-[1rem] -mt-[5.25rem] -mb-[9rem]"
      crosses

      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[30rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h2 mb-3">
            &ldquo;Discover smarter crypto investing&rdquo; <br />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
            Upgrade your strategies and maximize your benefits with CoinProphet,
            the crypto investment bot.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md: scale-[1] md:-translate-y-[20%] lg:-transalte-y-[23%] "
                  alt="heroImage"
                  width={1024}
                  height={490}
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <Done title = "Analyzing real-time data." className="hidden absolute right-[40%] bottom-5 md:left-[110%] md:top-[10%] md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 xl:flex  " />
                  <Done title = "Comparing cryptos for optimal investments." className="hidden absolute right-[40%] bottom-5 md:left-[110%] md:top-[25%] md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 xl:flex  " />
                  <Generating className="hidden absolute right-[40%] bottom-5 md:left-[110%] md:top-[40%] md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 xl:flex  " />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Bubble
                    image={bubble9}
                    height={200}
                    width={450}
                    className="top-[%] -left-[30.75%] "
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute top-[70%] -left-[20.75%] w-[18rem] xl:flex"
                    title="Recent investments"
                  />
                </ScrollParallax>
              </div>
              <BackgroundCircles />
            </div>
            <Gradient />
          </div>

          <div className="absolute left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
            <img
              src={heroBackground}
              alt="backgroundHero"
              className="w-[70%] hidden absolute left-[14.7%] top-[25rem] opacity-10 lg:opacity-10 xl:block border-b border-n-1"
              width={1440}
              height={1800}
            />
          </div>
        </div>
        <CompanyLogos className="hidden relative z-10 -mt-10 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
