import { collabApps, collabCoins, signupTexts } from "../constants";
import { signup } from "../assets";
import Section from "./Section";
import Button from "./Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import Card from "./Card";
import { check, number2, number3 } from "../assets";
import { numberIcons } from "../constants";
import { Gradient } from "../design/Services";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container flex justify-center">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-2">Sign up now</h2>
          <h5 className="h5 mb-3 md:mb-5 text-n-1/80">
            {" "}
            And effortlessly connect to your favourite platforms{" "}
          </h5>
          <div className="hidden lg:flex justify-start mb-6 ">
            <Button>Try it now</Button>
          </div>
          <ul className="max-w-[22rem] mb-10 md:mb-10">
            {signupTexts.map((item) => (
              <Card
                key={item.id}
                number={numberIcons[item.number]}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>

        </div>

        <div className="hidden xl:flex lg:ml-auto xl:w-[38rem] mt-4  flex-col items-center justify-center">
        <Gradient />
          {/* <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p> */}
          <div className="relative left-1/2 flex w-[40rem] aspect-square border border-n-1 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <ul>
              {collabCoins.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1 rounded-full -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                      alt={item.title}
                      src={item.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative left-1/2 flex w-[25rem] h-[25rem] m-auto border border-n-1 rounded-full -translate-x-[80%] scale-75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-1 rounded-full bg-table-gradient ">
                <div className="w-full h-full first-line:aspect-square m-auto p-[0.2rem]  bg-n-8rounded-full z-2 ">
                  <div className="flex items-center justify-center w-full h-full  rounded-full z-2">
                    <img
                      src={signup}
                      width={300}
                      height={200}
                      alt="logo"
                      className="z-1 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((item, index) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] rounded-full bg-n-7 border border-n-1  -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={item.width}
                        height={item.height}
                        alt={item.title}
                        src={item.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
