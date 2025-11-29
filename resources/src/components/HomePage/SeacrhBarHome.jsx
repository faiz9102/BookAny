"use client";
import React, { useContext } from "react";
import { ContextSearch } from "../MainStateSearchBar/MainStateSearchBar";
import { search } from "@/consonants";

function SeacrhBarHome() {
  const { setopenedSearch } = useContext(ContextSearch);
  return (
    <div
      onClick={() => setopenedSearch(true)}
      id="searchbarActivate"
      style={{
        boxShadow:
          "0px 118px 47px rgba(0, 0, 0, 0.01), 0px 66px 40px rgba(0, 0, 0, 0.02), 0px 29px 29px rgba(0, 0, 0, 0.04), 0px 7px 16px rgba(0, 0, 0, 0.04)",
      }}
      className="flex cursor-pointer rounded-[90px] pl-[28px] pr-[15px] items-center bg-white z-[10] mt-[82px] max-w-[519px] w-full h-[74px] border -border--devide-line-clr"
    >
      <div className="flex-center gap-[18px] w-full pointer-events-none">
        <span className="[&_svg]:w-[18px] [&_svg]:h-[18px]">{search}</span>
        <input
          type="text"
          name="search-flight"
          id="search-flight"
          placeholder="Search Flight"
          disabled
          className="text-[20px] leading-[26px] font-[400] placeholder:-text--disable-clr w-full outline-none disabled:bg-white cursor-pointer pointer-events-none"
        />
      </div>
      <button className="min-w-[96px] h-[47px] rounded-[50px] -bg--brand-clr med-16 !text-white ">
        Search
      </button>
    </div>
  );
}

export default SeacrhBarHome;
