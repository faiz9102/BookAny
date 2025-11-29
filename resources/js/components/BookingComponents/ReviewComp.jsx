"use client";
import React, { useState } from "react";
import AirlinePath from "@/components/FlightsCard/AirlinePath";
import Baggage from "@/components/FlightsCard/Baggage";
import Cancelation from "@/components/FlightsCard/Cancelation";
import FareRules from "@/components/FlightsCard/FareRules";
import {
  airline,
  bag,
  borderLong,
  chevronleft,
  classtype,
  elipse,
  landPlane,
  meal,
  takeOff,
} from "@/consonants";
import Link from "next/link";
function ReviewComp() {
  const [departure, setdeparture] = useState(false);
  const [selectedTab, setselectedTab] = useState("Flight Intinery");
  const ulComponents = {
    "Flight Intinery": <AirlinePath review={true} />,
    "Baggage options": <Baggage review={true} />,
    Cancellation: <Cancelation review={true} />,
    "Fare details": <FareRules review={true} />,
  };

  return (
    <>
      <div className="flex flex-col w-full gap-[33px]">
        <div className="flex-center items-center mt-[25px] overflow-hidden justify-between w-full h-[55px]">
          <button
            onClick={() => setdeparture(true)}
            className={`w-[50%] h-full border -border--devide-line-clr hover:-border--primary-black flex-center text-[18px] font-[500] leading-[23px] -text--primary-black rounded-[10px] rounded-tr-none rounded-br-none !border-r-[0.1px] gap-[18px] ${
              departure ? "border -border--primary-black -bg--light-gray" : ""
            }`}
          >
            {takeOff} Departure
          </button>
          <button
            onClick={() => setdeparture(false)}
            className={`w-[50%] h-full border -border--devide-line-clr hover:-border--primary-black flex-center text-[18px] font-[500] leading-[23px] -text--primary-black rounded-[10px] rounded-tl-none rounded-bl-none !border-r-[0.1px] gap-[18px] ${
              !departure ? "border -border--primary-black -bg--light-gray" : ""
            }`}
          >
            {landPlane} Return
          </button>
        </div>
        <FlightCard
          fromLoc={"Karachi (KHI)"}
          fromDate={"Mon 13, Aug"}
          toLOc={"Islamabad (ISL)"}
          toDate={"Fri 21, Dec"}
          flightTime={"21h 37m"}
          departTime={"4:40 AM"}
          offTime={"6:40 AM"}
          flightNum={"ER 524"}
          airlineName={"TURKISH AIRLINES"}
          flightPrice={"405,325"}
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
          ulComponents={ulComponents}
        />
      </div>
      <div className="flex flex-col w-full gap-[29px] mt-[31px]">
        <h2 className="flex font-[500] text-[26px] leading-[33px] -text--primary-black">
          {selectedTab}
        </h2>
        <div className="w-full">{selectedTab && ulComponents[selectedTab]}</div>
      </div>
    </>
  );
}

export default ReviewComp;

const FlightCard = ({
  fromLoc,
  toLOc,
  fromDate,
  flightTime,
  toDate,
  departTime,
  offTime,
  selectedTab,
  setselectedTab,
  ulComponents,
}) => {
  return (
    <div className="w-full h-[347px] rounded-[16px] border -border--devide-line-clr shadow-xl">
      <div className="flex py-[9px] justify-between items-center h-[66px] pl-[18px] pr-[35px] w-full">
        <div className="gap-[12px] flex-center  ">
          <span className="w-[47px] h-[47px] rounded-full">{airline}</span>
          <p className="med-16 !font-[700]">TURKISH AIRLINES</p>
          <span className="w-[55px] ml-[7px] leading-[22px] text-center rounded-[4px] -bg--light-gray text-[14px] font-[400] -text--primary-black">
            ER 524
          </span>
        </div>
        <Link href={"/search"} className="underline med-16 underline-offset-2">
          Change Depart
        </Link>
      </div>
      <div className="w-full pb-[20px] h-[215px] border-y -border--devide-line-clr pt-[27px]">
        <div className="flex items-start justify-between pr-[35px] pl-[32px]  w-full">
          <div className="flex flex-col gap-[4px] max-w-[200px] w-full">
            <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
              {fromLoc}
            </p>
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
              {fromDate}
            </span>
          </div>
          <div className="relative flex flex-col translate-y-[-4px] ">
            {elipse}
            <span className="text-[14px] font-[400] leading-[18px] -text--primary-black">
              {flightTime}
            </span>
          </div>
          <div className="flex items-end flex-col gap-[4px] max-w-[200px] w-full">
            <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
              {toLOc}
            </p>
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
              {toDate}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center pr-[35px] pl-[32px]">
          <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
            {departTime}
          </span>
          <div className="flex-center">
            <span className="absolute ">{borderLong}</span>
            <span className="-bg--primary-black text-white w-[85px] h-[28px] flex-center z-[20] rounded-[52px] text-[14px] font-[400] leading-[18px]">
              Non-stop
            </span>
          </div>
          <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
            {offTime}
          </span>
        </div>
        <div className="flex items-center justify-start mt-[15px] px-[20px] gap-[10px]">
          <button className="flex-center -text--primary-black gap-[13px] border h-[41px] px-[16px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px] w-full">
            {bag}
            Total: 20kg Pcs 1
          </button>
          <button className="flex-center -text--primary-black gap-[11px] border h-[41px] px-[19px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px] w-full ">
            {meal} Meal Included
          </button>
          <button className="flex-center -text--primary-black gap-[12px] border h-[41px] px-[19px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px] w-full ">
            {classtype} Economy
          </button>
        </div>
      </div>
      <div className="flex-center  w-full px-[19px] h-[66px]">
        {Object.keys(ulComponents).map((it, index) => (
          <button
            key={index}
            onClick={() => setselectedTab(it)}
            className={`px-[19px] h-[41px] rounded-[8px] text-[16px] leading-[20px] font-[500] border hover:-text--primary-black   ${
              selectedTab === it
                ? "-border--devide-line-clr -text--primary-black -bg--light-gray"
                : "-text--primary-gray border-transparent"
            }`}
          >
            {it}
          </button>
        ))}
      </div>
    </div>
  );
};
