import { useState } from "react";
import Section from "./Section";
import { faq } from "../constants";
import Heading from "./Heading";

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const handleOpen = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Section crosses>
      <div className="relative py-10 lg:py-16 xl:py-20">
        <div className="container flex flex-col">
          <div className="flex align-start text-left justify-start">
            <Heading className="!mx-0" title="Frequently Asked Questions" />
          </div>
          {faq.map((item) => (
            <div className="-mt-8 lg:mt-0" key={item.id}>
              <div className="py-8 border-b border-n-1/5">
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => handleOpen(item.id)}
                >
                  <div className="text-[1.25rem] leading-8">{item.title}</div>
                  <div className="relative w-6 h-6 mt-1 ml-10">
                    <div
                      className={`absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm transition-transform ${
                        openItems[item.id] ? "rotate-45" : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm transition-transform ${
                        openItems[item.id] ? "-rotate-45" : "rotate-90"
                      }`}
                    ></div>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems[item.id] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="body-2 text-n-3">
                    <div className="pt-6">{item.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
