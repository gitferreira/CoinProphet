import { service1, service2, service3, check } from "../assets";
import { dashboardFeatures, avatarIcons } from "../constants";

import Heading from "./Heading";
import Section from "./Section";

import { Gradient } from "../design/Services";
import Button from "./Button";
import Done from "./Done";
import Notification from "./Notification";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="A Platform Built for Investors"
          text="CoinProphet unleashes the power of AI in crypto investments."
        />

        <div className="relative">
          <div className="relative z-1 flex items-start h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 hidden h-full pointer-events-none sm:flex md:w-3/5 sm:w-2/5 xsm:w-2/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Powerfull Dashboard"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[16rem] sm:ml-auto ml-0">
              <h4 className="h4 mb-4">Powerfull Dashboard</h4>
              <p className="body-2 mb-[3rem] text-n-1/70">
                Experience unparalleled ease and efficiency with our intuitive
                dashboard
              </p>
              <ul className="body-2 mb-6">
                {dashboardFeatures.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={item.number} />
                    <p className="ml-4">{item.title}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <Button>Live Preview</Button>
              </div>
            </div>

            <Done
              title="Mobile app ready - Don't miss out on opportunities!"
              className=" hidden absolute xl:flex xl:-right-[15rem] xl:bottom-8 xl:-translate-x-1/2"
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">AI Recommendations</h4>
                <p className="body-2 mb-[3rem] text-n-1/70">
                  Unlock the power of AI for tailored investment suggestions,
                  guiding you towards smarter and more profitable investment
                  decisions
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Engaging Community</h4>
                <p className="body-2 mb-[2rem] text-n-1/70">
                  Join our thriving community of like-minded investors, where
                  you can share insights, learn from others, and stay updated on
                  the latest market trends and strategies.
                </p>

                <ul className="flex items-center justify-between">
                  {avatarIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-full flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10  md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={560} height={560} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="community"
                />
              </div>
              <Notification
                className="hidden absolute top-[82%] left-[85%] w-[18rem] xl:flex"
                title="Recent investments"
              />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
