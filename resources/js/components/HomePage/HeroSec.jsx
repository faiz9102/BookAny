"use client";
import React from "react";
import { Line, search } from "@/consonants";
import SeacrhBarHome from "./SeacrhBarHome";

function HeroSec() {
  return (
    <section className="w-full min-h-[calc(86px-100vh)]">
      <div className="flex justify-center w-full h-full">
        <div className="max-w-[152px] w-full">
          <span className="absolute top-[0px] ">{Line}</span>
        </div>
        <div className="relative flex ml-[48px] max-w-[172px] w-full pt-[267px]">
          <div className="w-[172px] h-[172px] rounded-full ">
            <img
              src={"/home-page/image-1.png"}
              alt="view"
              width={172}
              height={172}
              quality={100}
            />
          </div>
        </div>
        <MainContent />
        <div className="flex flex-col max-w-[357px] w-full pt-[94px] gap-[180px] pl-[36px]">
          <div className="w-[205px] h-[205px] rounded-full ml-[61px]">
            <img
              src={"/home-page/image-2.png"}
              alt="view"
              width={205}
              height={205}
              quality={100}
            />
          </div>
          <div className="w-[172px] h-[172px] rounded-full">
            <img
              src={"/home-page/image-3.png"}
              alt="view"
              width={205}
              height={205}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
const MainContent = () => {
  return (
    <div className="flex flex-col pt-[114px] items-center justify-start w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-[36px] leading-[36px] -text--primary-black font-[700] text-center">
          Want to Easily
        </h1>
        <h1 className="text-[75px] font-[700] leading-[98px] -text--primary-black">
          Bookany <span className="-text--brand-clr">Flight</span>
        </h1>
        <p className="mt-[15px] -text--primary-black text-[16px] font-[400] leading-[20px] text-center max-w-[589px] ">
          Book Any offers the easiest way to search and book flights, ensuring
          <br /> a smooth experience from start to finish. Your journey starts
          with us today!
        </p>
      </div>
      {/*<SeacrhBarHome />*/}
      <div
        style={{
          backgroundImage: "url(/home-page/map-bg.png)",
          backgroundPosition: "center",
          backgroundSize: "860px",
        }}
        className="max-w-[892px] w-full h-[394px] bg-no-repeat bg-contain relative top-[-14px] flex items-end justify-center"
      >
        <img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          src={"/home-page/plane-homepage.png"}
          alt="plane-front"
          width={892}
          height={283}
          className="max-w-[892px] w-full h-auto mb-[29px] "
        />
      </div>
    </div>
  );
};
