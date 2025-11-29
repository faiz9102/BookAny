"use client";
import { check, close, CoinCollec } from "@/consonants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function Coins() {
  const [colect, setcolect] = useState(false);
  return (
    <div className="flex flex-col mt-[51px] pb-[10px]">
      <AnimatePresence>
        {colect && <CoinCardCollector day={1} setcolect={setcolect} />}
      </AnimatePresence>
      <div className="w-[516px] h-[104px] rounded-[15px] border hover:shadow-lg border-[#E5E5E5] flex justify-between items-center pl-[31px] pr-[23px]">
        <div className="flex flex-col gap-[3px]">
          <h1 className="text-[12px] font-[500] leading-[15px] -text--primary-black ">
            Flyer Coins
          </h1>
          <p className="text-[26px] font-[700] leading-[33px] -text--primary-black">
            800 Coins
          </p>
        </div>
        <button
          onClick={() => setcolect(true)}
          className="w-[138px] h-[45px] -bg--success-1 rounded-[8px] text-[16px] font-[500] leading-[20px] text-white"
        >
          Collect Coins
        </button>
      </div>
      <div className="flex flex-col mt-[28px] gap-[14px]">
        <h2 className="text-[26px] leading-[33px] font-[500] -text--primary-black">
          Redeem Coins
        </h2>
        <CoinsCard />
        <CoinsCard />
        <CoinsCard />
      </div>
    </div>
  );
}

export default Coins;

const CoinsCard = () => {
  return (
    <div className="flex items-center hover:shadow-lg justify-between pl-[24px] pr-[22px] w-[516px] h-[93px] rounded-[15px] border border-[#E5E5E5]">
      <p className="text-[22px] font-[500] leading-[28px] text-[#F09F00]">
        800 Coins
      </p>
      <span className="text-[26px] leading-[33px] font-[700] -text--primary-black">
        =
      </span>
      <div className="flex-center gap-[20px]">
        <span className="text-[22px] font-[500] leading-[28px] -text--primary-black">
          PKR 50
        </span>
        <button className="w-[118px] h-[45px] text-[16px] font-[500] leading-[20px] text-white -bg--brand-clr rounded-[8px]">
          Redeem
        </button>
      </div>
    </div>
  );
};

const CoinCardCollector = ({ day, setcolect }) => {
  const days = [1, 2, 3, 4, 5, 6];

  const DaySt = ({ added, cDay, tD }) => {
    return (
      <div
        className={`flex items-center gap-[2px] flex-col w-[69px] h-[77px] border rounded-[8px] pt-[5px] ${
          added ? "-border--primary-black" : ""
        } ${tD ? "-border--brand-clr" : ""}`}
      >
        <span>{CoinCollec}</span>
        {added ? (
          <span className="bg-[#12CC46] flex-center w-[16px] h-[16px] rounded-full">
            {check}
          </span>
        ) : (
          <p className="med-16">{5 * cDay}+</p>
        )}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 flex-center -bg--primary-backdrop-clr w-full z-[400]"
    >
      <div className="w-[516px] h-[303px] bg-white pt-[25px] pl-[30px] pb-[30px] pr-[15px] rounded-[15px] relative">
        <button
          onClick={() => setcolect(false)}
          className="outline-none absolute top-[20px] right-[20px]"
        >
          {close}
        </button>
        <div className="flex flex-col gap-[7px]">
          <h3 className="text-[26px] font-[700] leading-[33px] -text--primary-black">
            Day {day} Streak
          </h3>
          <p className="-text--primary-gray text-[14px] font-[500] leading-[18px]">
            Come back everyday to get free points
          </p>
        </div>
        <div className="flex-center gap-[8px] mt-[17px]">
          {days.map((it) => (
            <div className="flex flex-col gap-[9px] items-center">
              <DaySt added={it === 1} tD={it === 2} cDay={it} />
              <span className="bk-14 !-text--primary-gray">Day {it}</span>
            </div>
          ))}
        </div>
        <button className="w-[138px] h-[45px] -bg--success-1 rounded-[8px] med-16 !text-white mt-[23px]">
          Collect Coins
        </button>
      </div>
    </motion.div>
  );
};
