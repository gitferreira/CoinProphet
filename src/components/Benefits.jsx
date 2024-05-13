import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useRef } from "react";

const Benefits = () => {
  return (
    <Section id="features" crosses>
      <div className="relative container z-2 mt-[10rem] lg:-mt-[2rem]">
        <Heading className="md:max-w-md lg:max-w-2xl !mb-1 text-center" title="Features" />
        <p className="body-1 max-w-3xl mx-auto text-n-1/80 mb-[5rem] lg:mb-12 w-1/2 text-center">
        Explore the array of features CoinProphet offers to revolutionize your crypto investment journey.
        </p>
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]  rounded-l-[2rem] rounded-b-[2rem] shadow-2xl bg-table-gradient "
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none  rounded-l-[2rem] rounded-b-[2rem] bg-reverse-table-gradient border border-n-1 border-3xl  ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-1/80">{item.text} </p>

                <div className="flex items-center mt-auto absolute bottom-[1rem] right-[1rem]">
                  <img
                    src={item.iconUrl}
                    width={70}
                    height={70}
                    alt={item.title}
                    className="border border-n-1 rounded-full shadow-xl"
                  />
                </div>
              </div>

              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-40">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt="image"
                      className="w-full h-full object-cover top-[20rem]"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
