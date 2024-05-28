import axios from "axios";
import Section from "./Section";

import { useEffect, useState } from "react";

const Table = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins?limit=10",
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
    <Section className="hidden xl:flex flex-col items-center justify-center ">
      <h2 className="h2">Real Time Market Update</h2>
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
                <th className="w-[10rem] py-[1rem] ">Rank</th>
                <th className="w-[10rem] py-[1rem] ">Name</th>
                <th className="w-[10rem] py-[1rem]"> Symbol</th>
                <th className="w-[10rem] py-[1rem] ">Market Cap</th>
                <th className="w-[10rem] py-[1rem] ">Price</th>
                <th className="w-[10rem] py-[1rem] ">Available Supply</th>
                <th className="w-[10rem] py-[1rem]">Volume (24h) </th>
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
                <tr key={val.id} className="border-b  hover:bg-table-gradient ">
                  <td className="w-[10rem] p-5  ">{val.rank} </td>
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
                  <td className="w-[10rem]  p-5">{val.symbol}</td>
                  <td className="w-[10rem]  p-5">{val.marketCap}</td>
                  <td className="w-[10rem]  p-5">${val.price.toFixed(2)}</td>
                  <td className="w-[10rem]  p-5">{val.availableSupply}</td>
                  <td className="w-[10rem] p-5 ">{val.volume.toFixed(2)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Section>
  );
};

export default Table;
