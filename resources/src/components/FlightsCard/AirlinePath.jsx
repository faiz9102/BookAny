import { traficLight, airline, borderTop, planeDown } from "@/consonants";
import React from "react";

function AirlinePath({ review }) {
  const stops = [{ name: "Layover", time: "12 Hours : 13 minutes" }];
  return (
    <div className={`flex flex-col ${review ? "" : "px-[49px] pt-[25px]"}`}>
      <AirlineShow />
      <div className="flex flex-col border-b -border--devide-line-clr mb-[35px]">
        {stops.map((it, index) => (
          <div className="flex justify-between items-center pt-[27px] pb-[30px] w-full">
            <div className="flex ">
              {traficLight}
              <div className="flex-center pl-[40px] gap-[15px]">
                <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
                  {it.name}
                </span>
                <span className="w-[188px] h-[31px] flex-center rounded-[60px] text-[16px] leading-[20px] font-[500] text-[#C92155] bg-[#FDF0F0]">
                  {it.time}
                </span>
              </div>
            </div>
            <span className="w-[78px] flex-center h-[31px] rounded-[60px] -bg--primary-black text-white text-[14px] font-[500] leading-[18px]">
              Stop {index + 1}
            </span>
          </div>
        ))}
      </div>
      <AirlineShow />
    </div>
  );
}

export default AirlinePath;

const AirlineShow = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between ">
        <div className="flex-center gap-[24px]">
          <span className="w-[59px] flex-center rounded-full h-[59px] border border-black">
            {airline}
          </span>
          <h2 className="text-[32px] leading-[41px] -text--primary-black font-[500]">
            Turkish Airline
          </h2>
        </div>
        <span className="w-[88px] flex-center h-[36px] border -border--primary-black text-[14px] -text--primary-black font-[400] leading-[18px] rounded-[32px] ">
          CH 568
        </span>
      </div>
      <div className="flex w-full pb-[31px] border-b -border--devide-line-clr  mt-[23px]">
        <div className="flex items-center flex-col w-[59px] gap-[7px]">
          <span className="w-[22px] h-[22px] rounded-full border-2 -border--primary-black"></span>
          <span className="flex-center">
            {borderTop}
            <span className="absolute">{planeDown}</span>
          </span>
          <span className="w-[22px] h-[22px] rounded-full border-2 -border--primary-black"></span>
        </div>
        <div className="ml-[29px] w-full flex flex-col">
          <div>
            <p className="med-16">Karachi (KHI)</p>
            <span className="text-[16px] leading-[20px] font-[400] -text--primary-black">
              Jinnah International Airport
            </span>
          </div>
          <span className="med-16 mt-[12px]  ">4:35 PM - Monday 13, Aug</span>
          <p className="mt-[43px] text-[16px] font-[400] leading-[20px] -text--primary-black">
            Duration{" "}
            <span className="bg-[#EAF8FB] ml-[9px] px-3.5 py-1 rounded-[60px] w-[188px] h-[31px] text-[16px] font-[500] leading-[20px] text-[#21B59D]">
              02 Hours : 10 minutes
            </span>
          </p>
          <div className="mt-[50px]">
            <p className="med-16">Karachi (KHI)</p>
            <span className="text-[16px] leading-[20px] font-[400] -text--primary-black">
              Jinnah International Airport
            </span>
          </div>
          <span className="med-16 mt-[12px] -text--primary-black ">
            4:35 PM - Monday 13, Aug
          </span>
        </div>
      </div>
    </div>
  );
};
