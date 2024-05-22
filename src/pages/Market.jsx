import axios from "axios";
import Section from "../components/Section";
import Banner from "../components/Banner";

import { useEffect, useState } from "react";
import Heading from "../components/Heading";

const Market = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins?limit=20",
          {
            headers: {
              "X-API-KEY": "2asE5O/mt7V+8vIrqp9fSaMh5DErGYs9kdKXg5ITmj4=",
            },
          }
        );
        setCurrency(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section className="flex flex-col items-center justify-center">
          <div className="w-[40rem] text-center text-wrap">
            <Heading className="!mb-0" title="Real-Time Market Data" />{" "}
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8 text-center text-wrap w-[20rem] md:w-[40rem]">
              Stay Ahead of the Market with Live Updates and Comprehensive
              Insights
            </p>
          </div>
          <div className="w-1/3 mb-2">
            <input
              type="text"
              placeholder=" Search by Cryptocurrency"
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 bg-n-9/10 backdrop-blur border border-n-1/10 rounded-3xl my-3 w-full text-left "
            />
          </div>
          <table>
            <thead className="text-center  ">
              <tr>
                <td colSpan="7">
                  <div className="bg-table-gradient rounded-[1rem] flex justify-between">
                    <th className="w-[10rem] py-[1rem] hidden lg:table-cell ">
                      Rank
                    </th>
                    <th className="w-[10rem] py-[1rem] ">Name</th>
                    <th className="w-[10rem] py-[1rem] hidden lg:table-cell">
                      {" "}
                      Symbol
                    </th>
                    <th className="w-[10rem] py-[1rem] hidden lg:table-cell">
                      Market Cap
                    </th>
                    <th className="w-[10rem] py-[1rem] ">Price</th>
                    <th className="w-[10rem] py-[1rem] hidden lg:table-cell">
                      Available Supply
                    </th>
                    <th className="w-[10rem] py-[1rem] hidden lg:table-cell">
                      Volume (24h){" "}
                    </th>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="text-center items-center justify-center mt-10 mb-10 ">
              {currency
                .filter((val) => {
                  return val.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((val) => {
                  return (
                    <tr
                      key={val.id}
                      className="border-b hover:bg-table-gradient "
                    >
                      <td className="w-[10rem] p-5 hidden lg:table-cell  ">
                        {val.rank}{" "}
                      </td>
                      <td className="w-[10rem]  p-5 flex flex-col items-center">
                        <img
                          src={val.icon}
                          alt="icon"
                          width={40}
                          height={40}
                          className="p-2"
                        />
                        <p>{val.name} </p>
                      </td>
                      <td className="w-[10rem]  p-5 hidden lg:table-cell">
                        {val.symbol}
                      </td>
                      <td className="w-[10rem]  p-5 hidden lg:table-cell">
                        {val.marketCap}
                      </td>
                      <td className="w-[10rem]  p-5">
                        ${val.price.toFixed(2)}
                      </td>
                      <td className="w-[10rem]  p-5 hidden lg:table-cell">
                        {val.availableSupply}
                      </td>
                      <td className="w-[10rem] p-5 hidden lg:table-cell ">
                        {val.volume.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Section>
        <Banner />
      </div>
    </>
  );
};

export default Market;
