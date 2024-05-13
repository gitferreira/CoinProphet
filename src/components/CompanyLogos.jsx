import axios from "axios";
import { useEffect, useState } from "react";

const CompanyLogos = ({ className }) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins",
          {
            headers: {
              "X-API-KEY": "2asE5O/mt7V+8vIrqp9fSaMh5DErGYs9kdKXg5ITmj4=",
            },
          }
        );
        const firstFive = response.data.result.slice(0, 5);
        setCurrency(firstFive);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(currency);
  return (
    <div className={className}>

      <ul className="flex">
        {currency.length > 0 &&
          currency.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-center flex-1 h-[8.5rem]"
            >
              <img src={item.icon} width={60} height={60} alt="logo" className="mb-2 " />
              <div className="flex">
                <h6 className="h6 mr-3">{item.name} </h6>
                <h6 className={`${item.priceChange1d > 0 ? "text-green-500" : "text-red-500"} h6 `}> {item.priceChange1d} </h6>
              </div>
              <p> {item.price.toFixed(2)}</p>
            </li>
          ))}
      </ul>
      <h5 className="tagline mt-6 text-center text-n-1/50">
        Making decissions easier for you
      </h5>
    </div>
  );
};

export default CompanyLogos;

{
  /* {companyLogos.map((logo, index) => (
        <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
            <img src={logo} width={134} height={28} alt="logo" />
        </li>
    ))} */
}
