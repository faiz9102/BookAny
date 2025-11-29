"use client";
import React from "react";
import { airline } from "@/consonants";
function Bookings() {
  return (
    <div className="flex flex-wrap gap-[17px] mt-[39px] w-full">
      <BookingCard
        airlineName={"KHI - ISB"}
        status={{ name: "Confirmed", clr: "#008060", bg: "#0080601A" }}
      />
      <BookingCard
        airlineName={"KHI - ISB"}
        status={{ name: "Pending", clr: "#007BFF", bg: "#007BFF1A" }}
      />
      <BookingCard
        airlineName={"KHI - ISB"}
        status={{ name: "Canceled", clr: "#D72C0D", bg: "#D72C0D1A" }}
      />
    </div>
  );
}

export default Bookings;

const BookingCard = ({ airlineName, status }) => {
  return (
    <div
      style={{ boxShadow: "2px 4px 8px 0px #0000000D" }}
      className="max-w-[506px] w-full h-[291px] rounded-[10px] border -border--devide-line-clr-2 flex flex-col"
    >
      <div className="flex border-b px-[19px] -border--devide-line-clr-2 border-dashed items-center justify-between h-[75px] w-full">
        <DtShower name={"Booking R-N"} val={"00435302485943"} />
        <div className="flex-center gap-[19px] ">
          <div className="flex-center gap-[7px]">
            <span className="w-[20px] h-[20px] [&_svg]:w-[20px] [&_svg]:h-[20px]">
              {airline}
            </span>
            <p className="med-16">{airlineName}</p>
          </div>
          <span
            style={{
              borderColor: status.clr,
              background: status.bg,
              color: status.clr,
            }}
            className="text-[14px] leading-[18px] font-[700] w-[108px] h-[31px] rounded-[7px] border flex-center"
          >
            {status.name}
          </span>
        </div>
      </div>
      <div className="h-[142px] w-full flex justify-between pl-[19px] pr-[48px] pt-[19px] pb-[24px]">
        <div className="flex gap-[21px] flex-col">
          <DtShower name={"Passenger"} val={"Jamshed Ali"} />
          <DtShower name={"Flight No."} val={"KL098776"} />
        </div>
        <div className="flex gap-[21px] flex-col">
          <DtShower name={"Seat Number"} val={"129C"} />
          <DtShower name={"Date"} val={"Mon, 23 Aug"} />
        </div>
        <div className="flex gap-[21px] flex-col">
          <DtShower name={"Arrival airports"} val={"5:10 PM"} />
          <DtShower name={"Flight Time"} val={"6:35 PM"} />
        </div>
      </div>
      <div className="flex gap-[12px] pt-[18px] pb-[18px] pl-[21px] border-t -border--devide-line-clr-2 h-[74px]">
        <button className="w-[163px] bk-14 h-[36px] border -border--primary-black rounded-[32px] hover:-bg--primary-black hover:text-white">
          Download E-ticket
        </button>
        <button className="w-[190px] bk-14 h-[36px] border -border--primary-black rounded-[32px] hover:-bg--primary-black hover:text-white">
          View & Modify Booking
        </button>
      </div>
    </div>
  );
};

const DtShower = ({ name, val }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="text-[12px] font-[500] leading-[15px] -text--primary-gray">
        {name}
      </span>
      <p className="med-16">{val}</p>
    </div>
  );
};

export { BookingCard };
