"use client";
import Flights from "@/components/FlightsCard/Flights";
import {
  airline,
  ArrowsBoth,
  bag,
  borderSmall,
  check,
  chevrondownward,
  classtype,
  dashedLine,
  elipse,
  filter,
  meal,
} from "@/consonants";
import { motion, useAnimate } from "framer-motion";
// import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Suspense } from "react";

function page() {
  return (
    <section className="w-full ">
      <Suspense>
        <SuspenseModel />
      </Suspense>
    </section>
  );
}

export default page;

const SuspenseModel = () => {
  const params = useSearchParams() ?? "";
  const prices = [
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
  ];
  return (
    <div className="flex flex-col">
      <PricesShower prices={prices} />
      <Filters />
      <div className="flex flex-col w-full ">
        {params.get("return") && (
          <ReturnCard
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
          />
        )}
        <Flights returnPage={params.get("return")} />
      </div>
    </div>
  );
};

const PricesShower = ({ prices }) => {
  return (
    <div className="w-full h-[80px] flex-center pt-2 border-b -border--devide-line-clr">
      {prices.map((it) => {
        return (
          <div className="w-[152px] h-[64px] flex-col outline-none flex-center ">
            <button className="hover:-bg--primary-black hover:text-white rounded-[8px] -text--primary-gray h-[29px] w-[129px] flex-center  -bg--light-gray text-[16px] font-[400] leading-[20px]">
              {it.dateString}
            </button>
            <span className="text-[18px] leading-[23px] font-[500] -text--primary-black">
              Rs {it.price}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const Filters = () => {
  const [selectedType, setselectedType] = useState(["All"]);
  const [scope, animate] = useAnimate();
  const [highLow, sethighLow] = useState(false);
  const [open, setopen] = useState(false);

  const PriceBtn = ({ type, clr, price, selectClr }) => {
    return (
      <button
        onClick={() => {
          if (selectedType.includes(type)) {
            setselectedType((e) => {
              e.forEach((ele, index) => {
                if (ele === type) e.splice(index, 1);
              });
              return [...e];
            });
          } else {
            setselectedType((e) => [...e, type]);
          }
        }}
        className={`hover:-border--primary-gray hover:-text--primary-black  px-4 h-[41px] -text--primary-gray rounded-[8px] text-[16px] font-[500] leading-[20px] -bg--light-gray border -border--devide-line-clr ${
          selectedType.includes(type)
            ? "-bg--primary-black hover:-border--devide-line-clr text-white hover:text-white "
            : ""
        }`}
      >
        {type} ~ (
        <span style={{ color: selectedType === type ? selectClr : clr }}>
          PKR {price}
        </span>
        )
      </button>
    );
  };

  const LowHigh = ({ highLow, sethighLow }) => {
    return (
      <button
        onClick={() => sethighLow(!highLow)}
        className="flex-center hover:-text--primary-black [&_path]:hover:-stroke--primary-black gap-[10px] w-[124px] -text--primary-gray h-[42px] text-[16px] leading-[20px] font-[500] rounded-[8px] border -border--primary-gray bg-white ml-[11px]"
      >
        {highLow ? <>{ArrowsBoth} High-Low</> : <>Low-High {ArrowsBoth}</>}
      </button>
    );
  };

  const AnimFunc = () => {
    if (!open) {
      animate(
        scope.current,
        {
          height: scope.current.scrollHeight + "px",
          borderColor: "#DDDDDD",
        },
        { duration: 0 }
      );
      animate(
        scope.current,
        {
          borderColor: "#DDDDDD",
        },
        { duration: 0.8 }
      );
      animate(
        "#filter-div",
        { opacity: 1 },
        { duration: 0.5, ease: "easeInOut" }
      );
    } else {
      animate(scope.current, { height: "42px" }, { duration: 0 });
      animate(
        scope.current,
        {
          borderColor: "#6a6a6a",
        },
        { duration: 0.8 }
      );
      animate(
        "#filter-div",
        { opacity: 0 },
        { duration: 0.5, ease: "easeInOut" }
      );
    }

    setopen(!open);
  };

  return (
    <div className="w-full gap-2.5 mt-[26px] flex-center">
      <button
        onClick={() => {
          if (selectedType.includes("All")) {
            setselectedType((e) => {
              e.forEach((ele, index) => {
                if (ele === "All") e.splice(index, 1);
              });
              return [...e];
            });
          } else {
            setselectedType((e) => [...e, "All"]);
          }
        }}
        className={`w-[107px] h-[41px] rounded-[8px] -text--primary-gray text-[16px] font-[500] leading-[20px] hover:-border--primary-gray hover:-text--primary-black -bg--light-gray border -border--devide-line-clr ${
          selectedType.includes("All")
            ? "-bg--primary-black hover:-border--devide-line-clr border text-white hover:text-white "
            : ""
        }`}
      >
        All Flights
      </button>
      <PriceBtn
        selectClr={"#7DBCFF"}
        clr={"#007BFF"}
        price={"129,678"}
        type={"Best"}
      />
      <PriceBtn
        price={"129,678"}
        selectClr={"#7BFF79"}
        clr={"#04B101"}
        type={"Cheapest"}
      />
      <PriceBtn
        price={"129,678"}
        selectClr={"#FF8E7A"}
        clr={"#E4183D"}
        type={"Fastest"}
      />
      <div className="flex-center gap-[9px]">
        <LowHigh highLow={highLow} sethighLow={sethighLow} />
        <div className="relative w-[221px] h-[42px]">
          <motion.div
            ref={scope}
            onMouseEnter={AnimFunc}
            onMouseLeave={AnimFunc}
            className="absolute overflow-hidden flex flex-col px-3 pt-[11px] pb-[15px] w-[221px] h-[42px] border -border--primary-gray rounded-[8px]"
          >
            <div className="flex items-center justify-between w-full cursor-pointer">
              <span
                className={`gap-2 flex-center text-[16px] med-16 -text--primary-black`}
              >
                {filter} Filters
              </span>
              <span
                className={`cursor-pointer ${
                  open ? "rotate-[180deg]" : "rotate-[0]"
                } transition-all duration-500`}
              >
                {chevrondownward}
              </span>
            </div>
            <Filter />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Filter = () => {
  const changeFunc = (e) => {
    let val = e.target.value;
    e.target.style.background = `linear-gradient(to right, #007bff ${val}%, #dddddd 0%)`;
  };
  const arr = [
    "12:00AM - 6:00AM",
    "12:00AM - 6:00AM",
    "12:00AM - 6:00AM",
    "12:00AM - 6:00AM",
  ];

  return (
    <motion.div
      id="filter-div"
      initial={{ opacity: 0 }}
      className="flex flex-col w-full gap-[22px] px-1 mt-8 z-[30]"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3.5">
          <p className="med-16">Price range</p>
          <input type="range" onChange={changeFunc} max={100} />
        </div>
        <div className="flex items-center justify-between">
          <span className="-text--primary-gray text-[12px] font-[500] leading-[15px]">
            PKR <br />
            190,000
          </span>
          <span className="w-[125px] h-[48px] rounded-[8px] border -border--devide-line-clr med-16 flex-center ">
            PKR 232,789
          </span>
        </div>
      </div>
      <ListComponent list={["Non-Stop", "01 Stop", "02 Stop"]} text={"Stops"} />
      <ListComponent list={arr} text={"Arrival  time"} />
      <ListComponent list={arr} text={"Departure time"} />
      <ListComponent
        list={["PIA", "Emirates", "Qatar Airways", "Eithad Airways"]}
        text={"Airlines"}
      />
    </motion.div>
  );
};

const ListComponent = ({ text, list }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="med-16">{text}</p>

      <ul className="flex flex-col gap-[2px]">
        {list.map((it, index) => (
          <li
            className="flex items-center gap-[7px] -text--primary-black"
            key={index}
          >
            <CheckBox />
            <spa>{it}</spa>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CheckBox = ({ clickFunc }) => {
  const [checked, setchecked] = useState(false);
  return (
    <div
      onClick={() => {
        setchecked(!checked);
        clickFunc && clickFunc();
      }}
      className={`border -border--devide-line-clr hover:-border--primary-black cursor-pointer flex-center w-[20px] h-[20px] rounded-[5px] ${
        checked ? "-bg--primary-black" : ""
      }`}
    >
      <span
        className={`${
          !checked
            ? "hidden"
            : "flex-center [&_svg]:fill-white [&_svg]:w-[20px] [&_svg]:h-[20px]"
        }`}
      >
        {check}
      </span>
    </div>
  );
};

const ReturnCard = ({
  fromLoc,
  fromDate,
  toLOc,
  toDate,
  flightTime,
  departTime,
  offTime,
}) => {
  return (
    <>
      <div className="pt-[28px] sticky top-[81px] bg-white z-[100] rounded-b-[16px] w-full">
        <div className="max-w-[1128px] m-auto">
          <div
            style={{
              boxShadow:
                "0px 7px 16px 0px #0000000A, 0px 29px 29px 0px #0000000A, 0px 66px 40px 0px #00000005, 0px 118px 47px 0px #00000003, 0px 184px 52px 0px #00000000",
            }}
            className="flex items-center pl-[24px] h-[127px] max-w-[784px] w-full rounded-[16px] border -border--primary-black "
          >
            <span className="w-[44px] h-[44px] rounded-full ">{airline}</span>
            <div className="w-full h-full flex-center">
              <div className="flex-col w-full flex-center gap-[5px] pt-[20px] pb-[15px]">
                <div className="flex items-start justify-between w-full pr-[19px] pl-[22px] ">
                  <div className="flex flex-col gap-[1px] max-w-[200px] w-full">
                    <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                      {fromLoc}
                    </p>
                    <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
                      {fromDate}
                    </span>
                  </div>
                  <div className="relative flex flex-col translate-y-[-6px]">
                    <span className="[&_svg]:w-[55px]">{elipse}</span>
                    <span className="text-[14px] font-[400] leading-[0] translate-y-[-2px]  bottom-0  -text--primary-black">
                      {flightTime}
                    </span>
                  </div>
                  <div className="flex items-end flex-col gap-[1px] max-w-[200px] w-full">
                    <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                      {toLOc}
                    </p>
                    <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
                      {toDate}
                    </span>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center pr-[19px] pl-[22px]">
                  <span className="text-[22px] font-[500] leading-[28px] -text--primary-black">
                    {departTime}
                  </span>
                  <div className="relative flex-center">
                    <span className="absolute">{borderSmall}</span>
                    <span
                      style={{ boxShadow: "0px 3px 11.5px 0px #0000000D" }}
                      className="-bg--primary-black text-white w-[85px] h-[28px] flex-center z-[20] rounded-[52px] text-[14px] font-[400] leading-[18px]"
                    >
                      Non-stop
                    </span>
                  </div>
                  <span className="text-[22px] font-[500] leading-[28px] -text--primary-black">
                    {offTime}
                  </span>
                </div>
              </div>

              <div className="flex max-w-[297px] w-full  h-full">
                <div className="flex flex-col h-full border-x -border--devide-line-clr max-w-[147px] w-full">
                  <button className="flex items-center -text--primary-black gap-[10px] border-b h-[42.3px] px-[14px] -border--devide-line-clr text-[14px] leading-[18px] w-full ">
                    {bag}
                    20kg Pcs 1
                  </button>
                  <button className="flex items-center -text--primary-black gap-[8px] border-b h-[42.3px] pl-[13px] -border--devide-line-clr text-[14px] leading-[18px] w-full ">
                    {meal} Meal Included
                  </button>
                  <button className="flex items-center -text--primary-black gap-[10px] h-[42.3px] px-[13px] text-[14px] leading-[18px] w-full ">
                    {classtype} Economy
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-full ">
                  <div className="h-full flex-center">
                    <a
                      href={"/search"}
                      className="w-[93px] h-[41px] rounded-[8px] -bg--brand-clr med-16 !text-white text-center flex-center "
                    >
                      Change
                    </a>
                  </div>

                  <span className="flex-center max-h-[42.5px] h-full w-full text-[18px] leading-[23px] text-[#04B101] font-[700] border-t border-[#04B101] border-dashed">
                    Rs 405,325
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="max-w-[1128px] w-full mt-[30px] mb-[20px] mx-auto">
        {borderFull}
      </span>
    </>
  );
};

const borderFull = (
  <svg
    width="785"
    height="1"
    viewBox="0 0 785 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="0.5" x2="785" y2="0.5" stroke="black" />
  </svg>
);

export { CheckBox };
