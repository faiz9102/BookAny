import {
  chevronright,
  dashedLine,
  bag,
  meal,
  Line,
  classtype,
  borderRight,
  borderBottom,
  airLogo,
  elipse,
  borderRightSmall,
  explamatory,
  close,
} from "@/consonants";
import { AnimatePresence, color, motion, useAnimate } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AirlinePath from "./AirlinePath";
import Baggage from "./Baggage";
import Cancelation from "./Cancelation";
import FareRules from "./FareRules";
import { CheckBox } from "../../../src/app/search/page";
import CardDetails from "../CardDetails";

function Flights({ returnPage }) {
  const flights = [
    {
      fromLoc: "Karachi (KHI)",
      fromDate: "Mon 13, Aug",
      toLOc: "Islamabad (ISL)",
      toDate: "Fri 21, Dec",
      flightTime: "21h 37m",
      departTime: "4:40 AM",
      offTime: "6:40 AM",
      flightNum: "ER 524",
      airlineName: "TURKISH AIRLINES",
      flightPrice: "405,325",
      Pricetype: "Cheapest 10% OFF",
    },
    {
      fromLoc: "Karachi (KHI)",
      fromDate: "Mon 13, Aug",
      toLOc: "Islamabad (ISL)",
      toDate: "Fri 21, Dec",
      flightTime: "21h 37m",
      departTime: "4:40 AM",
      offTime: "6:40 AM",
      flightNum: "ER 524",
      airlineName: "TURKISH AIRLINES",
      flightPrice: "405,325",
      Pricetype: "Cheapest 10% OFF",
    },

    {
      fromLoc: "Karachi (KHI)",
      fromDate: "Mon 13, Aug",
      toLOc: "Islamabad (ISL)",
      toDate: "Fri 21, Dec",
      flightTime: "21h 37m",
      departTime: "4:40 AM",
      offTime: "6:40 AM",
      flightNum: "ER 524",
      airlineName: "TURKISH AIRLINES",
      flightPrice: "405,325",
      Pricetype: "High Value Fare +5%",
    },
    {
      fromLoc: "Karachi (KHI)",
      fromDate: "Mon 13, Aug",
      toLOc: "Islamabad (ISL)",
      toDate: "Fri 21, Dec",
      flightTime: "21h 37m",
      departTime: "4:40 AM",
      offTime: "6:40 AM",
      flightNum: "ER 524",
      airlineName: "TURKISH AIRLINES",
      flightPrice: "405,325",
      Pricetype: "Cheapest 10% OFF",
    },
    {
      fromLoc: "Karachi (KHI)",
      fromDate: "Mon 13, Aug",
      toLOc: "Islamabad (ISL)",
      toDate: "Fri 21, Dec",
      flightTime: "21h 37m",
      departTime: "4:40 AM",
      offTime: "6:40 AM",
      flightNum: "ER 524",
      airlineName: "TURKISH AIRLINES",
      flightPrice: "405,325",
      Pricetype: "Recommended",
    },
  ];
  return (
    <div className="flex flex-col mt-[16px] max-w-[1128px] w-full m-auto pb-10">
      <div className="flex items-center justify-between max-w-[783px] w-full">
        <h1 className="text-[32px] font-[500] leading-[41px] -text--primary-black">
          Select {returnPage ? "Return" : "Departure"}{" "}
          <span className="text-[26px] leading-[33px] font-[500] -text--primary-gray">
            (KHI-ISB)
          </span>
        </h1>
        <div className="flex gap-[7px] select-none">
          <CheckBox />
          <span className="bk-16">Non-Stop</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[21px] mt-[36px] h-max">
        {flights.map((it, index) => (
          <FlightCard
            key={index}
            index={index}
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
            returnPage={returnPage}
            Pricetype={it.Pricetype}
          />
        ))}
      </div>
    </div>
  );
}

export default Flights;

const FlightCard = ({
  fromLoc,
  toLOc,
  fromDate,
  flightTime,
  toDate,
  departTime,
  offTime,
  flightNum,
  airlineName,
  flightPrice,
  index,
  returnPage,
  Pricetype,
}) => {
  const router = useRouter() ?? {};
  const params = useSearchParams() ?? {};
  const [isSafari, setisSafari] = useState(true);
  const [clicked, setclicked] = useState(false);
  const [detailsDialog, setdetailsDialog] = useState(false);
  const [scope, animate] = useAnimate();
  const [open, setopen] = useState(false);
  const Colors = {
    "Cheapest 10% OFF": "#04B101",
    "High Value Fare +5%": "#D72C0D",
    Recommended: "#007BFF",
  };

  useEffect(() => {
    setisSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (clicked) {
      animate(
        scope.current,
        { height: document.querySelector("#cd-wF").scrollHeight },
        { duration: 0.7, ease: "easeInOut" }
      );
    } else {
      animate(
        scope.current,
        { height: 215 },
        { duration: 0.7, ease: "easeInOut" }
      );
    }
  }, [clicked]);

  const NextFunc = () => {
    if (params.get("return")) {
      router.push("/booking");
    } else {
      router.push("/search?return=true");
      setclicked(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {detailsDialog && <DetailsCard setdetailsDialog={setdetailsDialog} />}
      </AnimatePresence>
      {/* <link rel="prefetch" href="/Subtract.svg" as="image" /> */}
      <div
        className={`flex items-center w-full gap-[21px] [&>span.arrow]:hover:flex will-change-transform transition-all duration-[1s] ease-in-out
          ${clicked ? "anim-card " : ""}
        `}
      >
        <motion.div
          ref={scope}
          animate={{
            height: 215,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            background:
              !clicked &&
              `linear-gradient(to ${clicked ? "top" : "left"}, #FFFFFF00 ${
                clicked ? "80" : "90"
              }% , ${Colors[Pricetype]} ${clicked ? "20" : "10"}% )`,
          }}
          className={`flex items-center w-full rounded-[16px] max-w-[785px] ${
            !clicked
              ? "border -border--devide-line-clr  hover:-border--primary-black"
              : "flex-col overflow-hidden "
          }`}
        >
          {/* <span className="absolute max-w-[775px] w-full h-[180px] shadow-2xl left-[0] z-[1]  " /> */}

          {!clicked ? (
            <>
              <div
                style={{ backgroundColor: Colors[Pricetype] }}
                className="w-[33px] h-full flex-center rounded-[16px] rounded-tr-none rounded-br-none z-[20]"
              >
                <span className="absolute rotate-[-90deg] text-[16px] font-[400] leading-[20px] text-white whitespace-nowrap">
                  {Pricetype}
                </span>
              </div>
              <div
                id={`card-flight-getter-${index}`}
                // ${
                //   clicked
                //     ? `border -border--primary-gray ${
                //         isSafari ? "card-flight-safari" : "card-flight"
                //       }`
                //     : ""
                // }
                className={`w-full h-full rounded-[16px] flex-center relative bg-white`}
              >
                <LeftCard
                  clicked={clicked}
                  fromLoc={fromLoc}
                  toLOc={toLOc}
                  fromDate={fromDate}
                  flightTime={flightTime}
                  toDate={toDate}
                  departTime={departTime}
                  offTime={offTime}
                  flightNum={flightNum}
                  airlineName={airlineName}
                  flightPrice={flightPrice}
                />
                <RightCard
                  clicked={clicked}
                  setdetailsDialog={setdetailsDialog}
                  fromLoc={fromLoc}
                  toLOc={toLOc}
                  fromDate={fromDate}
                  flightTime={flightTime}
                  toDate={toDate}
                  departTime={departTime}
                  offTime={offTime}
                  flightNum={flightNum}
                  airlineName={airlineName}
                  flightPrice={flightPrice}
                  returnPage={returnPage}
                  clr={Colors[Pricetype]}
                />
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              id="cd-wF"
              className="relative w-full"
            >
              <div
                style={{ backgroundColor: Colors[Pricetype] }}
                className="w-full min-h-[43px] flex-center rounded-t-[16px] z-[-1] absolute"
              >
                <span className="text-[16px] font-[400] leading-[20px] text-white whitespace-nowrap">
                  {Pricetype}
                </span>
              </div>

              <div className="flex flex-col w-full bg-white border border-black rounded-[16px] mt-[33px] z-[20]">
                <div className="flex flex-row justify-between w-full h-[152px] border-b -border--devide-line-clr">
                  <div key={"baggages"} className="w-full">
                    <div className="flex items-start justify-between px-[34px] pl-[30px] pt-[27px]">
                      <div className="flex flex-col gap-[4px] max-w-[200px] w-full">
                        <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                          {fromLoc}
                        </p>
                        <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
                          {fromDate}
                        </span>
                      </div>
                      <div className="relative flex flex-col ">
                        {elipse}
                        <span className="text-[14px] font-[400] leading-[18px] -translate-y-[4px] -text--primary-black">
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
                    <div className="w-full mt-[0px] flex justify-between items-center px-[36px] pl-[30px]">
                      <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
                        {departTime}
                      </span>
                      <div className="flex-center">
                        <span className="absolute max-w-[246px] w-full">
                          {
                            <svg
                              width="246"
                              height="1"
                              viewBox="0 0 246 1"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="4.37114e-08"
                                y1="0.5"
                                x2="246"
                                y2="0.500022"
                                stroke="#222222"
                                strokeDasharray="4 4"
                              />
                            </svg>
                          }
                        </span>
                        <span className="-bg--primary-black text-white w-[85px] h-[28px] flex-center z-[20] rounded-[52px] text-[14px] font-[400] leading-[18px]">
                          Non-stop
                        </span>
                      </div>
                      <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
                        {offTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    {borderRight}
                    <div
                      className="flex flex-col min-w-[195px] max-w-[195px]"
                      key={"baggage"}
                    >
                      <div className="w-full px-[9px] py-[10px] flex flex-col ">
                        <span className="text-[14px] font-[400] -text--primary-black leading-[18px] flex-center w-[55px] h-[22px] rounded-[4px] -bg--light-gray ">
                          {flightNum}
                        </span>
                        <div className="flex-col flex-center gap-[9px]">
                          <span>{airLogo}</span>
                          <p className="font-[700] text-[16px] leading-[20px] -text--primary-black">
                            {airlineName}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="[&_line]:-stroke--devide-line-clr">
                          {borderBottom}
                        </span>
                        <div className="flex-center w-full h-[38px] px-[23px]">
                          <button
                            onClick={() => setclicked(false)}
                            className="flex-center flex-row  !-text--primary-gray med-15 gap-[3px]"
                          >
                            Hide{" "}
                            <motion.span
                              initial={{
                                rotate: clicked ? 270 : 90,
                                scale: 0.9,
                              }}
                              className="w-[16px] h-[16px] flex-center [&_path]:-fill--primary-gray "
                            >
                              {chevronright}
                            </motion.span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDetails
                  setdetailsDialog={setdetailsDialog}
                  NextFunc={NextFunc}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
        <motion.span
          animate={{ rotate: clicked ? "-180deg" : "0" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onClick={() => {
            setclicked(!clicked);
            console.log("clicked");
          }}
          className={`arrow w-[44px] h-[44px] cursor-pointer rounded-full -bg--brand-clr [&_path]:fill-white [&_svg]:translate-x-[1px] hidden justify-center items-center ${
            clicked ? "!flex" : ""
          }`}
        >
          {chevronright}
        </motion.span>
      </div>
    </>
  );
};

const DetailsCard = ({ setdetailsDialog }) => {
  const [selectedSt, setselectedSt] = useState(0);
  const liArr = ["Flight Info", "Baggage", "Cancellation", "Fare Rules"];

  const LiComponent = ({ text, index, clickFunc }) => (
    <li
      onClick={() => {
        clickFunc && clickFunc();
      }}
      className={`relative text-[16px] font-[500] leading-[20px] pb-[16px] cursor-pointer hover:-text--primary-black [&_span:nth-child(1)]:hover:-bg--light-gray ${
        index !== selectedSt ? "text-[#707070]" : "-text--primary-black"
      }`}
    >
      <span className="rounded-[5px] py-1.5 px-[6px] ">{text}</span>
      {index === selectedSt && (
        <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[90%] -bg--primary-black h-[2px] " />
      )}
    </li>
  );

  const ulComponents = {
    0: <AirlinePath />,
    1: <Baggage />,
    2: <Cancelation />,
    3: <FareRules />,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 top-0 left-0 flex items-start justify-end w-full -bg--primary-backdrop-clr z-[600]"
    >
      <motion.div
        // initial={{ x: "100%" }}
        // animate={{ x: "0" }}
        // exit={{ x: "100%" }}
        // transition={{ duration: 0.5, ease: "backInOut" }}
        id="scroll-none"
        className="flex flex-col bg-white pt-[23px] max-w-[581px] w-full h-screen relative overflow-y-scroll"
      >
        <span
          onClick={() => setdetailsDialog(false)}
          className="flex items-center justify-end w-full  pr-[25px] cursor-pointer"
        >
          {close}
        </span>
        <ul className="flex px-[49px] border-b -border--devide-line-clr gap-[35px] mt-[22px]">
          {liArr.map((it, index) => (
            <LiComponent
              text={it}
              index={index}
              clickFunc={() => setselectedSt(index)}
            />
          ))}
        </ul>
        {ulComponents[selectedSt]}
      </motion.div>
    </motion.div>
  );
};

const LeftCard = ({
  clicked,
  fromLoc,
  toLOc,
  fromDate,
  flightTime,
  toDate,
  departTime,
  offTime,
}) => {
  return (
    <div className="w-full h-full z-[20]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        key={"baggages"}
        className=""
      >
        <div className="flex items-start justify-between px-[34px] pl-[30px] pt-[27px]">
          <div className="flex flex-col gap-[4px] max-w-[200px] w-full">
            <p className="text-[16px] font-[500] leading-[20px] -text--primary-black">
              {fromLoc}
            </p>
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
              {fromDate}
            </span>
          </div>
          <div className="relative flex flex-col ">
            {elipse}
            <span className="text-[14px] font-[400] leading-[18px] -translate-y-[4px] -text--primary-black">
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
        <div className="w-full mt-[0px] flex justify-between items-center px-[36px] pl-[30px]">
          <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
            {departTime}
          </span>
          <div className="flex-center">
            <span className="absolute max-w-[215px] w-full">{dashedLine}</span>
            <span className="-bg--primary-black text-white w-[85px] h-[28px] flex-center z-[20] rounded-[52px] text-[14px] font-[400] leading-[18px]">
              Non-stop
            </span>
          </div>
          <span className="text-[32px] font-[500] leading-[41px] -text--primary-black">
            {offTime}
          </span>
        </div>
        <div className="flex items-center justify-start mt-[15px] px-[20px] gap-[9px]">
          <button className="flex items-center -text--primary-black gap-[13px] border h-[41px] px-[16px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px]  ">
            {bag}
            Total: 20kg Pcs 1
          </button>
          <button className="flex items-center -text--primary-black gap-[11px] border h-[41px] px-[19px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px] w-[163px] ">
            {meal} Meal Included
          </button>
          <button className="flex items-center -text--primary-black gap-[12px] border h-[41px] px-[19px] -border--devide-line-clr rounded-[8px] text-[14px] leading-[18px] w-[163px] ">
            {classtype} Economy
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const RightCard = ({ clicked, flightNum, airlineName, flightPrice, clr }) => {
  return (
    <div className="min-w-[195px] max-w-[195px] h-full flex z-[20]">
      <span className="relative flex-center">
        {/* {clicked && (
          <>
            <span
              style={{ border: "1px solid #6a6a6a" }}
              className="absolute top-[-11px] left-[50%] translate-x-[-50%] w-[25px] h-[25px] rounded-full border -border--primary-gray border-t-transparent border-l-transparent rotate-[45deg] z-[15] "
            ></span>

            <span
              style={{ border: "12px solid #6a6a6a" }}
              className="absolute bottom-[-11px] left-[50%] translate-x-[-49.2%] w-[25px] h-[25px] rounded-full  border -border--primary-gray border-b-transparent border-r-transparent rotate-[45deg] "
            ></span>
          </>
        )} */}
        {clicked ? borderRightSmall : borderRight}
      </span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-col w-full gap-[18px] "
        key={"baggage"}
      >
        <div className="w-full px-[9px] py-[10px] flex flex-col ">
          <span className="text-[14px] font-[400] -text--primary-black leading-[18px] flex-center w-[55px] h-[22px] rounded-[4px] -bg--light-gray ">
            {flightNum}
          </span>
          <div className="flex-col flex-center gap-[9px]">
            <span>{airLogo}</span>
            <p className="font-[700] text-[16px] leading-[20px] -text--primary-black">
              {airlineName}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center h-full">
          <span>{borderBottom}</span>
          <div className="flex items-start mt-[14px] w-full h-full px-[23px]">
            <div className="flex flex-col">
              <p
                style={{ color: clr }}
                className="font-[700] text-[26px] leading-[30px]"
              >
                Rs {flightPrice}
              </p>
              <span className="text-[12px] font-[500] leading-[15px] -text--primary-black">
                Round Trip
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { DetailsCard };
