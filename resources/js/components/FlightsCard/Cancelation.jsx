import { landPlane, plus, takeOff } from "@/consonants";
import React from "react";

function Cancelation({ review }) {
  return (
    <div
      className={`w-full flex flex-col gap-[51px] ${
        review ? "" : "px-[47px] py-[36px] "
      }`}
    >
      <div className="flex flex-col gap-[39px] ">
        {!review && (
          <p className="font-[500] text-[32px] leading-[41px] -text--primary-black">
            Cancellation Fee
          </p>
        )}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-[11px]">
              <span className="flex-center w-full max-w-[43px] h-[43px] rounded-full -bg--success-1 [&_path]:fill-white">
                {takeOff}
              </span>
              <div className="flex items-center justify-between w-full">
                <p className="med-16">Departure flight</p>
                <span className="flex font-[400] text-[14px] leading-[16px] -text--primary-black">
                  Price per passenger
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] mt-[16px]">
              <PriceCmponent price={"PKR 8000"} text={"Before departure"} />
              <PriceCmponent price={"PKR 8000"} text={"After departure"} />
            </div>
          </div>
          <div className="flex flex-col mt-[47px]">
            <div className="flex items-center justify-between gap-[11px]">
              <span className="flex-center w-full max-w-[43px] h-[43px] rounded-full bg-[#D72C0D] [&_path]:fill-white">
                {landPlane}
              </span>
              <div className="flex items-center justify-between w-full">
                <p className="med-16">Return flight</p>
                <span className="flex font-[400] text-[14px] leading-[16px] -text--primary-black">
                  Price per passenger
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] mt-[16px]">
              <PriceCmponent price={"PKR 8000"} text={"Before departure"} />
              <PriceCmponent price={"PKR 8000"} text={"After departure"} />
              <div className="flex items-center justify-between w-full">
                <p className="font-[500] text-[16px] leading-[20px] -text--primary-gray">
                  Additional Information
                </p>
                {plus}
              </div>
              <hr className="w-full -bg--devide-line-clr " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[33px]">
        <p className="font-[500] text-[32px] leading-[41px] -text--primary-black">
          {review ? "Date Change" : "Change fee"}
        </p>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between w-full ">
            <p className="med-16">Times</p>
            <span className="-text--primary-black leading-[16px] text-[14px] font-[400]">
              within the same class
            </span>
          </div>
          <div className="flex flex-col gap-[12px]">
            <PriceCmponent price={"PKR 30,000"} text={"After departure"} />
            <PriceCmponent
              price={"PKR 25,000"}
              text={"Within 48 Hours before flight departure."}
            />
            <PriceCmponent
              price={"PKR 30,000"}
              text={"Up to 48 hours before flight departure."}
            />
            <div className="flex items-center justify-between w-full">
              <p className="font-[500] text-[16px] leading-[20px] -text--primary-gray">
                Additional Information
              </p>
              {plus}
            </div>
            <hr className="w-full -bg--devide-line-clr " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancelation;

const PriceCmponent = ({ text, price }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <p className="med-16 !font-[400]">{text}</p>
        <span className="med-16">{price}</span>
      </div>
      <hr className="w-full -bg--devide-line-clr " />
    </>
  );
};
