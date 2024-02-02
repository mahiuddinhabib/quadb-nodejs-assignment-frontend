import React from 'react';
import brandLogo from "@/assets/HODLINFO.logo.png";
import telegramLogo from "@/assets/telegram.logo.png";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-8 pt-8 text-nowrap">
      <Image src={brandLogo} alt="brand logo" height={50} />
      <div className="flex justify-center items-center gap-3">
        <select
          name="currency"
          id="currency"
          className="py-2 px-3 bg-[#2e3241] text-white rounded-xl"
        >
          <option value="INR">INR</option>
        </select>
        <select
          name="crypto"
          id="crypto"
          className="py-2 px-3 bg-[#2e3241] text-white rounded-xl"
        >
          <option value="btc">BTC</option>
          <option value="btc">BTC</option>
          <option value="btc">BTC</option>
          <option value="btc">BTC</option>
          <option value="btc">BTC</option>
        </select>
        <button className="py-[6px] px-3 bg-[#2e3241] text-white rounded-xl uppercase">
          buy btc
        </button>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div>
          <span className="p-[5px] border-[3.5px] border-[#3dc6c1] text-[#3dc6c1] rounded-full font-bold">
            60
          </span>
        </div>
        <button className="bg-[#3dc6c1] text-white p-2 rounded-md flex justify-center items-center gap-2">
          <Image src={telegramLogo} alt="telegram logo" width={20} />
          <span>Connect Telegram</span>
        </button>
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="switch" type="checkbox" className="peer sr-only" />
          <label htmlFor="switch" className="hidden"></label>
          <div className="peer h-6 w-11 rounded-full bg-[#2e3241] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-[#2e3241] after:bg-[#3dc6c1] after:transition-all after:content-[''] peer-checked:bg-[#3dc6c1] peer-checked:after:translate-x-full peer-checked:after:border-[#2e3241] peer-focus:ring-[#3dc6c1]"></div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;