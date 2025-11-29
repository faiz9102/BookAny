import {
  bagHand,
  bagP,
  CheckedBaggaeSvg,
  landPlane,
  takeOff,
} from "@/consonants";
import React, { useState } from "react";

function Baggage({ review }) {
  const [departure, setdeparture] = useState(true);

  return (
    <div
      className={`flex-col w-full flex-center gap-[34px]  ${
        review ? "" : "px-[48px] pb-[20px]"
      }`}
    >
      {!review && (
        <div className="flex-center items-center mt-[38px] overflow-hidden justify-between max-w-[483px] w-full h-[55px]">
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
      )}
      <div className="flex flex-col w-full">
        {!review && (
          <p className="text-[22px] mb-[13px] leading-[28px] font-[500] -text--primary-black">
            Flight ~ KHI - ISB
          </p>
        )}
        <div
          className={`flex flex-col  ${review ? "gap-[12px]" : "gap-[8px]"}`}
        >
          <PerSonalItemCard />
          <HandBaggageCard />
          <CheckedBaggae />
        </div>
      </div>
    </div>
  );
}

export default Baggage;

const PerSonalItemCard = () => {
  return (
    <div className="rounded-[21px] hover:shadow-md border -border--devide-line-clr flex-center gap-[24px] w-full p-[13px] relative h-[124px]">
      <div className="max-w-[99px] w-full h-[99px] flex-center rounded-[16px] bg-[#FF50231A]">
        {bagP}
      </div>
      <span className="w-[99px] bg-[#0080601A] h-[29px] flex-center -text--success-1 rounded-[50px] font-[500] text-[16px] absolute top-[13px] right-[13px]">
        Included
      </span>
      <div className="flex flex-col w-full gap-[10px]">
        <p className="text-[22px] leading-[28px] font-[500] -text--primary-black ">
          Personal item
        </p>
        <p className="-text--primary-gray text-[16px] font-[400] leading-[20px]">
          A small bag that must fit under the seat in front of you.
        </p>
      </div>
    </div>
  );
};

const HandBaggageCard = () => {
  return (
    <div className="rounded-[21px] hover:shadow-md border -border--devide-line-clr flex flex-col justify-between items-start w-full p-[13px] relative h-[206px] gap-[22px]">
      <div className="flex items-center justify-between w-full gap-[20px]">
        <div className="bg-[#00DD731A] flex-center max-w-[99px] w-full h-[100px] rounded-[16px]">
          {bagHand}
        </div>
        <span className="w-[129px] bg-[#E7B9441A] h-[29px] flex-center text-[#AA6600] rounded-[50px] font-[500] text-[16px] absolute top-[13px] right-[13px]">
          Not Included
        </span>
        <div className="flex flex-col w-full gap-[10px]">
          <p className="text-[22px] leading-[28px] font-[500] -text--primary-black ">
            Hand baggage
          </p>
          <p className="-text--primary-gray text-[16px] font-[400] leading-[20px]">
            Backpack or handbag that goes in the overhead compartment.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full border-t -border--devide-line-clr pt-[11px] ">
        <div className="flex flex-col px-[9px]">
          <span className="med-16">1x7kg</span>
          <span className="text-[16] font-[400] leading-[20px] -text--primary-gray">
            27 x 52 x 78 cm
          </span>
        </div>
        <div className="flex-center gap-[11px] px-[9px]">
          <span className="-text--success-1 font-[500] text-[18px] leading-[23px]">
            PKR 11,890
          </span>
          <button className="border -border--devide-line-clr -bg--light-gray w-[58px] h-[30px] rounded-[48px] -text--primary-black hover:-bg--primary-black hover:text-white">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckedBaggae = () => {
  const FlexOptions = [
    { weight: "28kg", size: "27 x 52 x 78 cm", price: "+PKR 11,500" },
    { weight: "31kg", size: "27 x 52 x 78 cm", price: "+PKR 17,500" },
  ];

  return (
    <div className="rounded-[21px] hover:shadow-md border -border--devide-line-clr flex flex-col justify-between items-start w-full p-[13px] relative h-[381px] ">
      <div className="flex items-center justify-between w-full gap-[20px]">
        <div className="bg-[#E5F2FC] flex-center max-w-[99px] w-full h-[100px] rounded-[16px]">
          {CheckedBaggaeSvg}
        </div>

        <div className="flex flex-col w-full gap-[10px]">
          <p className="text-[22px] leading-[28px] font-[500] -text--primary-black ">
            Checked Baggage
          </p>
          <p className="-text--primary-gray text-[16px] font-[400] leading-[20px] max-w-[35ch]">
            Regular suitcases or bags, not including sports equipment or other
            special items.
          </p>
        </div>
      </div>

      <div className="w-[457px] h-[66px] rounded-[10px] border -border--devide-line-clr flex-center flex gap-[20px] px-[14px]">
        <div className="flex-center gap-[10px]">
          <CheckBtn />
          <span className="bg-[#7DBCFF1A] rounded-[6px] flex-center w-[56px] h-[29px] -text--brand-clr text-[16px] font-[500] leading-[20px] ">
            Value
          </span>
        </div>
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col">
            <span className="med-16">20kg</span>
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
              27 x 52 x 78 cm
            </span>
          </div>
          <span className="w-[99px] bg-[#0080601A] h-[29px] flex-center -text--success-1 rounded-[50px] font-[500] text-[16px]">
            Included
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[17px]">
        <p className="med-16">
          Upgrade options<span className="-text--success-1">*</span>
        </p>
        <div className="flex flex-col gap-[12px]">
          {FlexOptions.map((it, index) => (
            <FlexOption
              price={it.price}
              size={it.size}
              weight={it.weight}
              key={index}
              noHr={index === FlexOptions.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CheckBtn = ({ val }) => {
  return (
    <button
      className={`w-[20px] h-[20px] hover:-border--primary-black rounded-full -border--devide-line-clr border ${
        val ? "border-[6px] -border--primary-black" : ""
      }`}
    ></button>
  );
};

const FlexOption = ({ weight, size, price, noHr }) => {
  return (
    <>
      <div className="flex gap-[20px] px-[14px] justify-between">
        <div className="flex-center gap-[10px]">
          <CheckBtn />
          <span className="bg-[#7BFF791A] rounded-[6px] flex-center w-[56px] h-[29px] -text--primary-green text-[16px] font-[500] leading-[20px] ">
            Flex
          </span>
        </div>
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col">
            <span className="med-16">{weight}</span>
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
              {size}
            </span>
          </div>
          <span className="-text--success-1 font-[500] text-[18px] leading-[23px]">
            {price}
          </span>
        </div>
      </div>
      {!noHr && <hr className="w-full" />}
    </>
  );
};
