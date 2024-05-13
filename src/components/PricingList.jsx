import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import Heading from "./Heading";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full px-6 bg-n-8 border-2 border-n-6 rounded-[2rem] lg:w-auto py-4 odd:border-n-1  first:!border-n-6  [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:!text-color-3 h-[50rem]"
          >
            {item.cta && <Heading tag= "Most Popular" className="absolute -top-[2rem] left-[48rem] "/>}
            <h4 className="h4 mb-4 text-center">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className="w-full mb-6"
              href={
                item.price ? "/pricing" : "mailto:contactus@gitferreira.com"
              }
              white={!!item.price}
            >
              {item.price ? "Get Started" : "Contact"}
            </Button>
            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PricingList;
