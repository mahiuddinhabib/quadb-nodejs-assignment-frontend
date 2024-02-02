"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import axios from "axios";
import { ITicker } from "@/types";
import Navbar from "../Navbar";
import Table from "./Table";

const HomePage = () => {
  const [tickers, setTickers] = useState<ITicker[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/tickers/fetch-tickers")
      .then((response) => {
        setTickers(response.data.data);
      });
  }, []);

  // console.log(tickers);

  if (!tickers) return null;

  return (
    <div>
      <Navbar />
      {/* prices */}
      <div className="flex justify-evenly items-center gap-4 mt-6 px-2">
        <div className="text-center text-nowrap">
          <h1 className={`text-[2vh] lg:text-5xl font-bold text-[#3dc6c1]`}>
            0.81%
          </h1>
          <p className="lg:text-xl text-gray-400">5 Min</p>
        </div>
        <div className="text-center text-nowrap">
          <h1 className={`text-[2vh] lg:text-5xl font-bold text-[#3dc6c1]`}>
            0.54%
          </h1>
          <p className="lg:text-xl text-gray-400">1 Hour</p>
        </div>

        <div className="text-center">
          <h2 className="text-gray-400 text-sm lg:text-4xl">
            Best Price to Trade
          </h2>
          <h1 className="text-xl md:text-2xl lg:text-7xl my-4 text-white">
            ₹{tickers[0]?.last}
          </h1>
          <p className="text-gray-400 text-xs lg:text-lg">
            Average BTC/INR net price including commission
          </p>
        </div>
        <div className="text-center text-nowrap">
          <h1 className={`text-[2vh] lg:text-5xl font-bold text-[#3dc6c1]`}>
            4.26%
          </h1>
          <p className="lg:text-xl text-gray-400">1 Day</p>
        </div>
        <div className="text-center text-nowrap">
          <h1 className={`text-[2vh] lg:text-5xl font-bold text-[#3dc6c1]`}>
            10.29%
          </h1>
          <p className="lg:text-xl text-gray-400">7 Day</p>
        </div>
      </div>
      {/* table */}
      <Table tickers={tickers}/>
      {/* footer */}
      <hr className="border-1 border-gray-500 my-4" />
      <div className="flex justify-between text-sm text-gray-400 pb-20 px-4">
        <p>Copyright © 2019 HodlInfo.com</p>
        <Link href={"/"}>Support</Link>
      </div>
      {/* add to home */}
      <div className="fixed bottom-0 min-w-full bg-[#191d28] flex justify-center py-1">
        <button className="border-2 p-[8px] rounded-lg text-[#3DC6C1] border-[#3DC6C1] hover:bg-[#3DC6C1] hover:text-white transition duration-300 ease-in-out">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
};

export default HomePage;
