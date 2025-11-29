import React from "react";
import { InputComponent } from "../BookingComponents/ContactComp";

function NewsLetter() {
  return (
    <div className="max-w-[1128px] h-[238px] px-[55px] flex justify-between mt-[153px] m-auto items-center -bg--brand-clr rounded-[20px] ">
      <div className="">
        <h3 className="leading-[54px] text-[42px] font-[500] text-white">
          Subscribe Newsletter
        </h3>
        <p className="bk-16 !text-white max-w-[30ch]">
          Subscribe now to know about our new deals, offers and travel prices
        </p>
      </div>
      <div className="flex-center gap-[11px]">
        <InputComponent
          placeholder={"Enter email address"}
          minWidth={"349px"}
        />
        <button className="-bg--primary-black w-[120px] h-[57px] rounded-[8px] med-18 !text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
