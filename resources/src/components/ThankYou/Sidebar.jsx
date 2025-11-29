import { CheckBox } from "@/app/search/page";
import {
  BagLong,
  chevrondownward,
  chevronRight,
  close,
  exclamation,
  landPlane,
  takeOff,
} from "@/consonants";
import { motion, useAnimate } from "framer-motion";
import React, { useState } from "react";
import {
  DonationDialog,
  TravelProtection,
} from "../BookingComponents/AddonComp";
import SeatSelection from "./SeatSelection";

const SideBar = ({ selectedLi, setselectedLi, setsideBarDaialog }) => {
  const [departure, setdeparture] = useState(true);
  const [selectedStates, setselectedStates] = useState({
    departure: {
      "Additional Baggage": [],
      "Special Requests": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Meal Preferences": [
        { text: "Dinner", val: "Kosher" },
        { text: "Breakfast", val: "Continental Breakfast" },
      ],
      "Seat Selection": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Travel Insurance": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Donate for charity": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
    },
    return: {
      "Additional Baggage": [],
      "Special Requests": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Meal Preferences": [
        { text: "Dinner", val: "Gluten-Free" },
        { text: "Breakfast", val: "Vegan Breakfast" },
      ],
      "Seat Selection": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Travel Insurance": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
      "Donate for charity": [
        { text: "Mobility Assistance", val: "Wheelchair Assistance" },
      ],
    },
  });

  const SummaryComp = ({ text, val }) => {
    return (
      <div className="flex items-center justify-between">
        <p className="med-16">
          {text.slice(0, 19)}
          {text.length > 19 ? "..." : ""}
        </p>
        <span className="bk-16">{val}</span>
      </div>
    );
  };

  const ArrNav = {
    "Additional Baggage": {
      summary: (
        <>
          <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Departure</p>
              <div className="flex items-center justify-between">
                <p className="med-16">Additional Baggage</p>
                <span className="bk-16">1x25kg</span>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Return</p>
              <div className="flex items-center justify-between">
                <p className="med-16">Additional Baggage</p>
                <span className="bk-16">1x25kg</span>
              </div>
            </div>
          </div>
        </>
      ),
      comp: <AdditionalBaggage departure={departure} />,
    },
    "Special Requests": {
      summary: (
        <>
          <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Departure</p>
              {selectedStates.departure[selectedLi]?.map((it) => (
                <SummaryComp text={it.text} val={it.val} />
              ))}
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Return</p>
              {selectedStates.return[selectedLi]?.map((it) => (
                <SummaryComp text={it.text} val={it.val} />
              ))}
            </div>
          </div>
        </>
      ),
      comp: (
        <SpecialRequest
          selectedLi={selectedLi}
          setselectedLi={setselectedLi}
          setselectedStates={setselectedStates}
          departure={departure}
          selectedStates={selectedStates}
        />
      ),
    },
    "Meal Preferences": {
      summary: (
        <>
          <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Departure</p>
              {selectedStates.departure[selectedLi]?.map((it) => (
                <SummaryComp text={it.text} val={it.val} />
              ))}
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="med-[16] -text--primary-gray">Return</p>
              {selectedStates.return[selectedLi]?.map((it) => (
                <SummaryComp text={it.text} val={it.val} />
              ))}
            </div>
          </div>
        </>
      ),
      comp: (
        <Meal
          selectedLi={selectedLi}
          setselectedLi={setselectedLi}
          setselectedStates={setselectedStates}
          departure={departure}
          selectedStates={selectedStates}
        />
      ),
    },
    "Seat Selection": {
      summary: (
        <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Departure</p>
            {selectedStates.departure["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Return</p>
            {selectedStates.return["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
        </div>
      ),
      comp: <SeatSelection departure={departure} />,
    },
    "Travel Insurance": {
      summary: (
        <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Departure</p>
            {selectedStates.departure["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Return</p>
            {selectedStates.return["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
        </div>
      ),
      comp: <TravelInsurance />,
    },
    "Donate for charity": {
      summary: (
        <div className="flex flex-col gap-[15px] px-[20px] pt-[23px] pb-[26px]">
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Departure</p>
            {selectedStates.departure["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="med-[16] -text--primary-gray">Return</p>
            {selectedStates.return["Meal Preferences"]?.map((it) => (
              <SummaryComp text={it.text} val={it.val} />
            ))}
          </div>
        </div>
      ),
      comp: <DonationForCharity />,
    },
  };

  const TopBar = () => {
    return (
      <div className="w-full min-h-[118px] flex flex-col border-b -border--devide-line-clr sticky top-0 bg-white z-[200]">
        <span
          onClick={() => setsideBarDaialog(false)}
          className="w-full px-[28px] mt-[29px] flex justify-end cursor-pointer "
        >
          {close}
        </span>
        <ul className="mt-[37px] flex items-center gap-[41px] pl-[59px]">
          {Object.keys(ArrNav).map((it, index) => (
            <li
              onClick={() => {
                setselectedLi(it);
              }}
              key={index}
              className={`text-[16px] font-[500] leading-[20px] cursor-pointer relative [&_span:nth-child(1)]:hover:-bg--light-gray ${
                selectedLi === it ? "-text--primary-black" : "text-[#707070] "
              }`}
            >
              <span className="rounded-[5px] py-1.5 px-[6px] ">{it}</span>

              {selectedLi === it && (
                <span className="w-full absolute bottom-[-20px] h-[1px] -bg--primary-black left-[50%] translate-x-[-50%]"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      id="scroll-none"
      className="flex w-full h-screen -bg--primary-backdrop-clr fixed inset-0 z-[500] justify-end gap-[26px] overflow-y-scroll"
    >
      <button
        onClick={() => setsideBarDaialog(false)}
        className="flex-center h-[44px] w-[44px] rounded-full bg-white sticky top-[106px] [&_svg]:translate-x-[1.5px]"
      >
        {chevronRight}
      </button>
      <div className="flex flex-col bg-white max-w-[1168px] w-full pb-[20px] min-h-screen h-max ">
        <TopBar />
        <div className="flex items-start justify-between pr-[30px] mt-[48px]  ">
          <div className="flex flex-col max-w-[733px] w-full pl-[57px] pr-[57px]">
            <h3 className="text-[22px] leading-[28px] font-[500] -text--primary-black">
              {selectedLi}
            </h3>
            {selectedLi !== "Travel Insurance" &&
              selectedLi !== "Donate for charity" && (
                <div className="flex-center items-center overflow-hidden justify-between w-full h-[55px] mt-[26px]">
                  <button
                    onClick={() => setdeparture(true)}
                    className={`w-[50%] h-full border -border--devide-line-clr hover:-border--primary-black flex-center text-[18px] font-[500] leading-[23px] -text--primary-black rounded-[10px] rounded-tr-none rounded-br-none !border-r-[0.1px] gap-[18px] ${
                      departure
                        ? "border -border--primary-black -bg--light-gray"
                        : ""
                    }`}
                  >
                    {takeOff} Departure
                  </button>
                  <button
                    onClick={() => setdeparture(false)}
                    className={`w-[50%] h-full border -border--devide-line-clr hover:-border--primary-black flex-center text-[18px] font-[500] leading-[23px] -text--primary-black rounded-[10px] rounded-tl-none rounded-bl-none !border-r-[0.1px] gap-[18px] ${
                      !departure
                        ? "border -border--primary-black -bg--light-gray"
                        : ""
                    }`}
                  >
                    {landPlane} Return
                  </button>
                </div>
              )}
            <div className="flex flex-col mt-[29px]">
              {selectedLi && ArrNav[selectedLi]?.comp}
            </div>
            <button
              onClick={() => setsideBarDaialog(false)}
              className="w-[202px] h-[45px] rounded-[8px] -bg--brand-clr med-16 !text-white mt-[35px]"
            >
              Save & Select Return
            </button>
          </div>
          <div className="sticky top-[164px] flex flex-col border-l -border--devide-line-clr pl-[21px]">
            <div className="flex flex-col">
              <h5 className="text-[22px] font-[500] leading-[28px] -text--primary-black">
                Selection Summary
              </h5>
              {selectedLi && ArrNav[selectedLi]?.summary}
            </div>
            <AddonsInvoice />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;

const AddonsInvoice = () => {
  const [scopeMain, animateMain] = useAnimate();
  const [opened, setopened] = useState(false);

  const AnimateFunc = () => {
    if (opened) {
      animateMain(
        scopeMain.current,
        { height: 220 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animateMain(
        "#opener-addons",
        { height: 21 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animateMain(
        "#it-addons",
        { opacity: 0 },
        { duration: 0.3, ease: "easeInOut" }
      );
    } else {
      animateMain(
        scopeMain.current,
        { height: 276 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animateMain(
        "#opener-addons",
        { height: document.querySelector("#opener-addons").scrollHeight },
        { duration: 0.5, ease: "easeInOut" }
      );
      animateMain(
        "#it-addons",
        { opacity: 1 },
        { duration: 1, ease: "easeInOut" }
      );
    }
    setopened(!opened);
  };
  return (
    <div
      ref={scopeMain}
      className="flex w-[384px] h-[220px] pt-[34px] flex-col border-t -border--devide-line-clr"
    >
      <p className="text-[22px] leading-[28px] font-[500] -text--primary-black  px-[20px] ">
        Add-ons Invoice
      </p>
      <div className="flex flex-col mt-[20px] gap-[7px] px-[20px] mb-[20px] ">
        <div className="flex items-center justify-between">
          <span className="med-16">Base fare (1x Adult)</span>
          <span className="-text--primary-black leading-[20px] font-[400] text-[16px]">
            PKR 134,890
          </span>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex-center gap-[6.5px]">
            <span className="med-16">Extra baggage</span>
            <span className="underline text-[14px] font-[500] leading-[18px] underline-offset-2 -text--primary-gray ">
              Edit
            </span>
          </div>
          <span className="-text--primary-black leading-[20px] font-[400] text-[16px]">
            PKR 134,890
          </span>
        </div>
        <div
          id="opener-addons"
          className="flex flex-col h-[21px] overflow-hidden"
        >
          <div
            onClick={AnimateFunc}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex-center gap-[10px]">
              <span className="med-16">Add-ons</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: opened ? "180deg" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="[&_path]:-fill--primary-gray translate-y-0.5 "
              >
                {chevrondownward}
              </motion.span>
            </div>
            <span className="-text--primary-black leading-[20px] font-[500] text-[16px]">
              PKR 4000
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            id="it-addons"
            className="flex flex-col"
          >
            <div className="flex items-center justify-between mt-[7px]">
              <span className="med-16">Travel Protection</span>
              <span className="-text--primary-black leading-[20px] font-[400] text-[16px]">
                PKR 4000
              </span>
            </div>
            <div className="flex items-center justify-between mt-[7px]">
              <span className="med-16">Visa Consultancy</span>
              <span className="-text--primary-gray leading-[20px] font-[400] text-[16px]">
                PKR (FREE)
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between items-center  pt-[18px] border-t -border--devide-line-clr px-[20px]">
        <p className="font-[700] text-[18px] leading-[23px] -text--primary-black">
          Total
        </p>
        <span className="text-[16px] font-[700] leading-[20px] -text--success-1 ">
          PKR 140,900
        </span>
      </div>
    </div>
  );
};

const CardComponent = ({
  text,
  ArrCon,
  Nomargin,
  selectedLi,
  setselectedStates,
  departure,
  selectedStates,
}) => {
  return (
    <div className={`flex flex-col ${Nomargin ? "" : "mt-[30px]"}`}>
      <p className="med-16">{text}</p>
      <div className="flex gap-[8px] mt-[18px] flex-wrap gap-y-[9px]">
        {ArrCon.map((it, index) => (
          <Card
            svg={it.svg}
            text={it.text}
            key={index}
            category={text}
            selectedLi={selectedLi}
            setselectedStates={setselectedStates}
            departure={departure}
            selectedStates={selectedStates}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  svg,
  text,
  category,
  selectedLi,
  setselectedStates,
  departure,
  selectedStates,
}) => {
  let depState = departure ? "departure" : "return";
  const textVal = text.includes(">")
    ? text.slice(0, text.indexOf("<")) + " " + text.slice(text.indexOf(">") + 1)
    : text;
  const selected = selectedStates[depState][selectedLi]?.some(
    (it) => it.val === textVal
  );
  return (
    <div
      onClick={() => {
        if (selected) {
          setselectedStates((e) => {
            let temp = e;
            temp[depState][selectedLi].forEach((ele, index) => {
              if (ele.val === textVal) {
                temp[depState][selectedLi].splice(index, 1);
              }
            });
            return { ...temp };
          });
        } else {
          setselectedStates((e) => {
            let temp = e;
            temp[depState][selectedLi].push({ text: category, val: textVal });
            return { ...temp };
          });
        }
      }}
      className={`w-[148px] h-[138px] rounded-[11px] border -border--devide-line-clr flex-center flex-col gap-[20px] pt-[32px] pb-[12px] relative [&_#exclamatory-info]:hover:flex hover:-border--primary-black cursor-pointer ${
        selected ? "-border--primary-black cs-shadow" : ""
      }`}
    >
      {!selected && (
        <span
          id="exclamatory-info"
          className="absolute top-[9px] right-[9px] hidden"
        >
          {exclamation}
        </span>
      )}
      <span>{svg}</span>
      <span
        className="text-center med-16"
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
    </div>
  );
};

const AdditionalBaggage = ({ departure }) => {
  return (
    <>
      <span className="med-16">
        Select for {departure ? "departure" : "return"}
      </span>
      <div className="flex flex-col border -border--devide-line-clr rounded-[21px] px-[13px] py-[14px] max-w-[619px] h-[344px] mt-[18px]">
        <div className="flex-center gap-[19px] mb-[24px]">
          <span className="bg-[#FFC8531A] flex-center w-[99px] h-[99px] rounded-[16px]">
            {BagLong}
          </span>
          <div className="flex flex-col justify-center gap-[9px]">
            <p className="text-[22x] font-[500] left-0[28px] -text--primary-black">
              Additional baggage
            </p>
            <span className="-text--primary-gray font-[400] text-[16px] leading-[20px] ">
              Backpack or handbag that goes in the overhead compartment.
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-t -border--devide-line-clr h-[69px] px-[9px]">
            <span className="flex flex-col gap-[2px]">
              <span className="text-[16px] leading-[20px] -text--primary-black">
                1x20kg
              </span>
              <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
                27 x 52 x 78 cm
              </span>
            </span>
            <div className="flex-center gap-[11px]">
              <span className="text-[18px] leading-[23px] -text--success-1 font-[500]">
                PKR 11,890
              </span>
              <button className="w-[58px] hover:-bg--primary-black hover:text-white h-[30px] rounded-[48px] -bg--light-gray border -border--devide-line-clr text-[14px] font-[400] leading-[18px] -text--primary-black">
                Add
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center border-t -border--devide-line-clr h-[69px] px-[9px]">
            <span className="flex flex-col gap-[2px]">
              <span className="text-[16px] leading-[20px] -text--primary-black">
                1x20kg
              </span>
              <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
                27 x 52 x 78 cm
              </span>
            </span>
            <div className="flex-center gap-[11px]">
              <span className="text-[18px] leading-[23px] -text--success-1 font-[500]">
                PKR 11,890
              </span>
              <button className="w-[58px] hover:-bg--primary-black hover:text-white h-[30px] rounded-[48px] -bg--light-gray border -border--devide-line-clr text-[14px] font-[400] leading-[18px] -text--primary-black">
                Add
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center border-t -border--devide-line-clr h-[69px] px-[9px]">
            <span className="flex flex-col gap-[2px]">
              <span className="text-[16px] leading-[20px] -text--primary-black">
                1x20kg
              </span>
              <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
                27 x 52 x 78 cm
              </span>
            </span>
            <div className="flex-center gap-[11px]">
              <span className="text-[18px] leading-[23px] -text--success-1 font-[500]">
                PKR 11,890
              </span>
              <button className="w-[58px] hover:-bg--primary-black hover:text-white h-[30px] rounded-[48px] -bg--light-gray border -border--devide-line-clr text-[14px] font-[400] leading-[18px] -text--primary-black">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SpecialRequest = ({
  selectedLi,
  setselectedStates,
  departure,
  selectedStates,
}) => {
  const MobilityAssis = [
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="32" height="32" fill="url(#pattern0_1679_19011)" />
          <defs>
            <pattern
              id="pattern0_1679_19011"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19011"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19011"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Need a <br/> Wheelchair",
      clickFunc: () => {
        // setselectedStates(e => {
        //     let temp = e;
        //     temp[selectedLi].
        // })
      },
    },
    {
      svg: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="37" height="37" fill="url(#pattern0_1679_19038)" />
          <defs>
            <pattern
              id="pattern0_1679_19038"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19038"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19038"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Wheelchair <br/>Assistance",
    },
    {
      svg: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="37" height="37" fill="url(#pattern0_1679_19015)" />
          <defs>
            <pattern
              id="pattern0_1679_19015"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19015"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19015"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Aisle Chair",
    },
    {
      svg: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="33" height="33" fill="url(#pattern0_1679_19017)" />
          <defs>
            <pattern
              id="pattern0_1679_19017"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19017"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19017"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS0SURBVHic7d09iBxlHMfx73mrsdBCiYZI2MulFCwEQSw0OSu1CGIRFRGMoogiWBiDFhYhRizsFPXEQhGCGouIjYX4ghEMsbJWT0Vj8AUsfAmiazGZ3OWSnWdmd555Zp/f7wNbZHfI/rnnuzM7u3u3c8DPwAZ03AJ8Gvk+hsDrwG7gm8j3NbWTwEjosqOVn9p4Q+DrU/f1LbAY+f6mcl7qATIzBD5iddHX/7t3HEB7xi12ryNwAO0ILXJvI3AA01sEPiG8uEPgnujTTMBPAie39glf6LJMDx9wg8DtR4l/ytS2LcCuDu6nyW79FeBB4L+YA02qag9wIOFck9pO/D3AzD/yS70drMeyeeSDA2hqgYwWHxxAEwvAh2S0+OAA6spy8cEB1JHt4oMDCMl68cEBVMl+8SH8QpCqRYpn+8Ma2x6neE1gT8yBGhgBJ4CfgC+AX6o2dgBna7L4AJuBZ6JNM51/gSMUL0Yd5Bx7KB8CztR08ftuHrgBeAM4Bly1fgMHsCq3xV/vauAzYOfaKx3AqnvJd/FLFwFvA9eXVziAVU8BL6UeogMXAO8Am8ABrDUCHgJeSD1IBy6jCN4BrDMCHkFjT3A/sMWngWcr9wRQvLgTcgK4GViJNdAENlLM/ijjH+TnA7eCPxAyzhzwYuD/Ki8rwNZ2xm/VfVTP/Z4PAeOVe4I6h4PycwJbI84ziVcpPtY3zjYHUC2HCI5U3HaFAwhrcnawAHwMbIs6UTN/Vdx2oQOopzw7qBPBkOJdxD5FMFboLGAPxTPJWRIr6jICgIcD25YRLFG8U9hboQAGNbZRkl0EPgQ0l9XhwAFMJpsIHMDksojAAUynyXsHQ+DuuOM05wCmV/d1gmVgX/xxmhkAz6H1TP+7CP9n6OxgmeLNmVGE+7YemQOe58w3XF4+dX0qTzP+zaC/E86VrbURpF58cABJzAG3k37xIRCA0rG/SyPgzdRD1OGzAHEOQJwDEDcADlN8VlzF48CXqYfoiwFwE1oBPJt6gD7xIUCcAxDnAMQ5AHEOQFzopeAfge+7GKRFFwNXph5iVoQCeA14sotBWrSd4jd0rAYfAsQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEhT4VfAdwTReDtOiS1APMklAAi9T78mSbUT4EiHMA4hyAOAcgzgGIG1B8pbjS3wj6PfUAfTKg+E4bE+VDgDgHIM4BiHMA4hyAOAcgbgA8BsynHqRDB4nzxVEzaQDsBzakHqRDn+MATvMhQJwDEOcAxDkAcQ5AnAMQFwrgAMW3X87SZceEPwtJ3gOIcwDiHED+qr7AeuQA8re54rbfHEDeNgE7K27/wQHk63KKdz4vrdjmWOiXQ3N0J3Bt6iEimgcWgNuAjYFt31UM4IHUA/TEV8AHPgToegL4xwFoegs4BH4dQNFRYDcwAgeg5hBwI/BneYUD0LAC3AXsAv5Ye4PiWYCCX4HjFLv7w8D7wMlzbagYwBL+buHTfAgQ5wDEOQBxDkCcAxDnAMSFTgOvA/Z2MUiL/LeNGwgFsIT/iljWfAgQ5wDEOQBxDkCcAxDnAMT9D1rrelhuBBtAAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
      text: "Priority Boarding",
    },
  ];

  const VisualHearing = [
    {
      svg: (
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="0.292969"
            width="30"
            height="30"
            fill="url(#pattern0_1679_19020)"
          />
          <defs>
            <pattern
              id="pattern0_1679_19020"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19020"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19020"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Braille<br/>Safety Cards",
    },
    {
      svg: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="33" height="33" fill="url(#pattern0_1679_19034)" />
          <defs>
            <pattern
              id="pattern0_1679_19034"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19034"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19034"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Hearing<br/> Assistance",
    },
    {
      svg: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="33" height="33" fill="url(#pattern0_1679_19036)" />
          <defs>
            <pattern
              id="pattern0_1679_19036"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19036"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19036"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Sign Language<br/>Interpreter",
    },
  ];

  const MedicalNeeds = [
    {
      svg: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="33" height="33" fill="url(#pattern0_1679_19030)" />
          <defs>
            <pattern
              id="pattern0_1679_19030"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19030"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19030"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Oxygen Supply",
    },
    {
      svg: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="37" height="37" fill="url(#pattern0_1679_19028)" />
          <defs>
            <pattern
              id="pattern0_1679_19028"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19028"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19028"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Medication<br/>Storage",
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="32" height="32" fill="url(#pattern0_1679_19032)" />
          <defs>
            <pattern
              id="pattern0_1679_19032"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1679_19032"
                transform="scale(0.0078125)"
              />
            </pattern>
            <image
              id="image0_1679_19032"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
      text: "Medical<br/>Equipment",
    },
  ];

  return (
    <>
      <span className="med-16 !-text--primary-gray">
        Request for {departure ? "departure" : "return"}
      </span>
      <CardComponent
        text={"Mobility Assistance"}
        ArrCon={MobilityAssis}
        selectedLi={selectedLi}
        setselectedStates={setselectedStates}
        departure={departure}
        selectedStates={selectedStates}
      />
      <CardComponent
        text={"Visual & Hearing Assistance"}
        ArrCon={VisualHearing}
        selectedLi={selectedLi}
        setselectedStates={setselectedStates}
        departure={departure}
        selectedStates={selectedStates}
      />
      <CardComponent
        text={"Medical Needs"}
        ArrCon={MedicalNeeds}
        selectedLi={selectedLi}
        setselectedStates={setselectedStates}
        departure={departure}
        selectedStates={selectedStates}
      />
    </>
  );
};

const Meal = ({ selectedLi, setselectedStates, departure, selectedStates }) => {
  const Dinner = [
    {
      svg: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.083 18.7412C24.083 18.7412 22.7938 18.0895 21.5075 18.0895C19.5752 18.0895 16.9997 20.7033 16.9997 24.6274C16.9997 28.5502 20.5272 31.1654 24.083 31.1654C27.6388 31.1654 31.1663 28.5502 31.1663 24.6274C31.1663 20.7047 28.5908 18.0881 26.6585 18.0881C25.3708 18.0881 24.083 18.7426 24.083 18.7426C24.083 16.7819 25.3722 14.1668 27.9463 14.1668M15.0943 7.08203C16.3636 7.08203 17.3935 6.13003 17.3935 4.95703C17.3935 3.78403 16.3622 2.83203 15.0943 2.83203H7.43009C6.16076 2.83203 5.13226 3.78403 5.13226 4.95703C5.13226 6.13003 6.16076 7.08203 7.43151 7.08203M15.8224 6.97295C17.1768 9.47478 18.2874 11.7329 18.9674 14.1654C19.0231 14.3637 19.0756 14.5634 19.1247 14.7646M14.7727 31.1654H8.96434C3.89126 31.1654 2.83301 30.1879 2.83301 25.4987V19.5161C2.83301 14.6994 4.38851 11.1705 6.66509 6.96161"
            stroke="black"
            stroke-width="2.125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Vegetarian",
    },
    {
      svg: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1458 16.7695C18.5937 19.5141 16.0417 26.2487 16.0417 26.2487C16.0417 26.2487 12.3958 16.7695 8.75 14.582"
            stroke="black"
            stroke-width="2.1875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.2733 11.2664L26.705 15.758C26.985 18.6718 24.8004 21.2661 21.8867 21.5476C19.0283 21.8218 16.4383 19.732 16.1627 16.8736C16.0971 16.1938 16.1661 15.5076 16.3657 14.8544C16.5654 14.2012 16.8917 13.5937 17.3262 13.0666C17.7606 12.5396 18.2946 12.1033 18.8977 11.7826C19.5008 11.4619 20.1611 11.2632 20.841 11.1978L25.6302 10.737C25.7854 10.7223 25.9401 10.7698 26.0604 10.8691C26.1807 10.9683 26.2567 11.1112 26.2719 11.2664"
            stroke="black"
            stroke-width="2.1875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5003 32.0807C25.5547 32.0807 32.0837 25.5518 32.0837 17.4974C32.0837 9.44302 25.5547 2.91406 17.5003 2.91406C9.44595 2.91406 2.91699 9.44302 2.91699 17.4974C2.91699 25.5518 9.44595 32.0807 17.5003 32.0807Z"
            stroke="black"
            stroke-width="2.1875"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Vegan",
    },
    {
      svg: (
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            x="0.923828"
            y="28"
            width="39"
            height="39"
            transform="rotate(-45.2403 0.923828 28)"
            fill="url(#pattern0_1572_9642)"
          />
          <defs>
            <pattern
              id="pattern0_1572_9642"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1572_9642" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_1572_9642"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAADGVJREFUeJztnX3QVUUdxz88QoKooD4WSQ1vM0SA0zSkvYiZJWolmlnJMCaWgxOUMWO+NE7pVBqNjmFvTOaIMooiFjmTOZaYokyRaRgIhFlA+dI4CCSBL8nz9MfeM+z5nd1795w959xzzrOfmZ1nnrt7d/fe7/fs2bezFwJ15gvADmAjMK3LdQmUzFygD+hvhd3A8V2tUaA0pPjBBAMIm/iZTDCogAoG8uF4YBZwLLAfWIMS+DvEddsEjAZGaK/tBmYAT5RS00CuDAEW0f4qj8JTQC/wfpToetwu4H0l1z2QA9fRWXhd/IhpwE5Cn6DWTEU197qI8v8oLDK8P7QENedbxMW7EzgMdY//HUkTfNeQRzBBjVlGXLhjtLhhwCqCCRrN7cRFO07EBxM0nLnEBXuc5FA9mKDBfI2ksL2GdMEEDWQ+ybH/mjbp8zBBWECqCCbx5TjfhK8JNuZQ94AnacQfZnnNxQS9KMH1NC/5Vz/gg6v4BwH3tuJ/D7xNxHcyQW8rXz2uD7ggzw8TSEeaK/8jJJtuVxMswiz+vDw/TCAdae/5E4A3yG6CIH6FyNrh+yLJdYG0Jgjid5ms4kdciJ8JrvSrfsAHX/Ej0phALiB9I2PdA57kJX6EqwneIdL8OmN5AQ/yFj/CxQQjRZr7PcsMpKQo8SNMJtiE2gX0TmC5iLs+p3IDDpjE305+4kdcIspoN/wLc/8lYdu63Qd8OcdyjkDt/HUxwA2mDMK2cBiF2nr9LmAM6godrsW/gnr8ahvwLLAOeLlNfvOBH2P/bvtbaX7qU+lWPVcB7+mQrg/V9H8T+J9nmY3gUOAzwG3AP3C7emTYghLwDOILNLZ7/l9ItgRf8vgMtrn9S1Gtzx3ACuBqYLJHOY3iBGApsJdsotvCLmAxcBVm8Y9CCZaXCWziz8+Q14DgdA48VVNmkL39PEwQxE/BVOC3tBfpv6j76ELgPOBDwHjUVXtEK0wApgPnox7aWA283iFf21DPxwRBfEcGozo8cvUsCq8AS4BTgaEZyzgEOAu1b38fbuJHZDFBEN+RY1AbJkzCbwO+SryHnwe9qEWWx4G7UK2Hy3tcTRDEd+QDwIskhd+Jmix5i0MePSgTjQfe2/o7qojK4maCIL4jp6Lu51L8lSQXSHRGo6ZTlwJPA68Z8uhHjRzWATeh+gouV7kL7UwQxHdkJknhXgMusqQfDMwGHsb+4GWn8AZwX6ts38k0mwm2G14L4gtmkuyRv4TaAi3pQV3t28gmui1sBM72/BwmEwTxO2AS/1/AJEPaY4E/0l7IvcCTwM9RTf3i1t97gfWGsmT4DWoqOSs2EwTxDZjE/ydqzC6ZR3KoFoWtwLXAB1Enc7RjGHAycCPmzmY/albwnIyfKdzzHXEVvwf4IWahHgc+1UqThSGoiaHNhrz7gK+nzC+I74ir+INRkzRSnB2owxXzWgUdghpimtYXXDdfBPEdSSO+3AnTDzyG2iVTBJNRw0hZZqeWIIjviK/4K4CDC67jCJK7cPuAT1vSB/EdSdPhW0hS/CVkv9en5WCSJtiJeXRwN0H8jqQRH1TnTk/7AuYnaovkcJK3gwcM6Z4Uaa4qq4J1Ia34oHbEyBbgfopv/iWTSXYMzxJprhTxi8usYNXJIn7E96mGCeRxLxuIjz56ic9P7CT78nSj8BE/ogomGEJynuAMkUZ2WD9RYv0qSR7iR1TBBOeL8n8l4s8W8QP6NpCn+BHdNsEQ4tPGrwNHavHDiX/mzSXVq3IUIX5Et03wA1H2bBH/mBbXh9qHOKAoUvyIbprgY6Jc+UDIDSL+5BLqVBnKED+iWyY4hPhn/LOIv0DUybaRpXGUKX5Et0ywQStvD/Hh4EmiPgsLrksl6Ib4Ed0wwS9Fefq28Yki7qYC61EJuil+RNkmuEWUNV6LGyXi7iqoDpWgCuJHlGmCH4lypmpxR4q4uwsovxJUSfyIskxwsyhD/8yyBViec9mVoAjxT0PNtPmu9pVhgl+I/N+qxck+wM9yLLcSfJzkvn1f8edpea0Hjvaso2kfwQPktzij7/bdR3wU8GFR7jU5lVkJimr214k8N+P/CFdRLcHBwKvEDaszR5TZmJM8ixK/F/MTPVU1wYkivyUi/noR/1GPsipDkR2+WSRFisIG3G4HU4DPYn7GL28TyB+CnCPiV2txfcT7B7Wk6N6+HFO7mODtwOdRD4G+oKX9N/HVuYhFhnyzmKCH+DN+bxJvpYYTvz1sSZl/5ShjqKd/oa8CC0iezbMB9eDHIuLTsKYw01JOHiY4R7z/QRE/U8TXegRwJsWLL4dM0Rc6j/YitwtT2pTnY4Ie1MKP/t7PiTR3iPgzHfKtJGWID+qQRb2MR1BnAOwim/jP0/kpoawmkL8B+Czqp18iRhDfOLqH8ncw50JZ4h9N51/DaNcvuAZ1XLr++lLHstOaYAzJX/I+T6SRO5hvdqxLpShS/GHAKcD3UMehZj3MoZ8DQ8RraS9KO1xNMJTkOUVriLc0Q4HnRJra/cx7EeJPRT1Pt4p477hT2IFaRJkLjENtqjB1DPUOYR9qdJCGTiboAe4R8XuBd4t8rhBpHk5Zj65ThPiXYz5g2RbWor7IaZgf/TKZQBoiCzYTDANuNcRdKN4/GviPSHNKxrp0haKa/a3YxdpP8hYw1iHPdiZY5FFXkwleMLxmKuM+kaZWv+JhEr8ftYnB9wFM0/P8W4FzUc26fvDjMynytZnA91wfkwn0sIzkdyJHMa+hTimvBTbxo3ALfiYYgWrWZb6XAZ8Ur6V9gOIiQ76u08btsJlgOepRdZ0TSH5/l3uWXxom8U1mKMoEW8T/tmfubYwz5FmkCeToYDKqo6qneZT4vEBlsd3zJ2I+jCEPE/zBkG8U3iT9wxNyUkYPeawitjPBBNTpZXrcczmUWQqdOny2Ezl8TXA4dhOszZDfCkteRZvgQdT3pb+2BzjOs6xScO3tmyY1irwdLEuZTw/x5ncXau3ANE9QVJ9A7/TVYsjnuo3rIJILGnrwPZ5lBKrHL/O9LEUe08R7V7ZeX2DIdz3+8/Gm7WVRn0keElFJXK98W/OfZ0swCLVgY8rX1QRy1u0RVNNsm2mck7GuERNIHlz9OvZl50rhK/4Skocf+ZhgiiGvNCYYi/k20i6clqGeERNI3vNrI/7p+Ivf04rPywSymd5jyFc3wUjUEHEx5luHLfSh1u59fsmr1uJPAnbjL76eLg8TyGnT6dg7hmtRQ0RX0be36jML/85frcWH5Nl2aTp8to5e2vSSIcSv+BdRfYLpmFsCl7AKNR070aF8V8aQXMeoTYcP1IEEeuV3kpyftl35t9JeTJ+WQG6nfhn7Kd2m8AbxFmE//le6pPZXPqgTK/QPIO+Dtiu5k/id3t+pJfi24T0uYQtq7WAs8RVEeTCDL7W/8iM2ceAD7EOdaBHRQ7YrX5KlJXjIkF6G50muE/SjOobniteuS1HfTjTiyo/QNyc8IeJm4y9+RFoTrDSk3YPqGC7gwG5e24yhvDpnZKiziUaJD/GdqXKeXa5f9wNf8SgrjQnGoX6+ZTXqdnAi9l/1sJkgCq+Sz47bxokP8HfiHS19iXI4yQcxfU+1znOeQKfdApJ8ICMLjRQfkjtxZCfmKOpjAttS8hUeeUKDxYdkZ+kZ1IyaTt1MoN8O+ogfyZKWRosPSoi/Ev+AjwKHinR1M8Ey1NM4l3rk03jxI2aQnEatuwl8GTDiR1xCUoSBaoIBJ36EXDvvRz3WdJhINxL4E0kTXOxRtu/aQV6MoSEzfFkZyCYY8OJHDEQTBPEFA8kEQXwLA8EEQfwONNkEQXxHmmiCIH5KmmSCIH5GmmCCIL4ndTZBED8n6miCIH7O1MkEQfyC6JYJBpHczWwzQRC/YMo2QTvxpQmC+CVxNUkRilhK7sF8FJvpfILlmJd0a3seb9UpuiWwXfn3oI5iud0QF678kinKBO3Ej07jOgi7CYL4JZL37cDW7JuOYpuI+TSz0OyXTF4tQQ9wmyEv/cqPCB2+iuHbElyM+5Vv28MXrvwu49MSmMIKwpVfO/IyQRC/xviaIIjfALL2CcI9v0G4mmA4ajg4i+TiThC/5rjeDkyEZr8h2FoC+VSyziTCld8oTCb4G+pq1u/5w1GnkshzDIP4DcBkgn6U2GuBpzCf6RvEbxCXkO6Ez134necbqCAzSB5SYQoPke8pn4EKMRj148p3ok722Ie6FTwN/AQ4qXtVay7/BzXJe9NFefOXAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      ),
      text: "Kosher",
    },
    {
      svg: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6752 14.9847V12.375M18.6752 14.9847V16.4739L18.6945 16.5M18.6752 14.9847C18.6752 15.6131 18.6752 16.1026 18.6945 16.5M18.6945 16.5C18.7192 16.995 18.7729 17.3484 18.8939 17.6536C19.129 18.2462 19.5387 18.722 20.0502 18.997C20.5219 19.25 21.131 19.25 22.3465 19.25H23.4286C23.5469 19.25 23.6046 19.25 23.6431 19.2473C24.5176 19.1799 25.0278 18.0716 24.5919 17.1902L24.475 16.9799L24.4475 16.9345L24.3815 16.8204C23.793 15.8427 22.7274 15.4179 21.7456 15.7713L21.6343 15.8125M18.6752 16.4725V16.5C18.6752 17.0816 18.6752 17.5313 18.6587 17.8956M18.6587 17.8956C18.6381 18.3356 18.5941 18.6519 18.4951 18.9269C18.2545 19.6006 17.7939 20.1369 17.215 20.416C16.7791 20.625 16.2277 20.625 15.125 20.625M18.6587 17.8956L15.7163 14.4375M12.375 12.375V17.875C12.375 18.6043 12.0853 19.3038 11.5695 19.8195C11.0538 20.3353 10.3543 20.625 9.625 20.625"
            stroke="black"
            stroke-width="2.0625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4488 4.61033C14.223 3.78121 14.6107 3.36596 15.0246 3.13496C15.4758 2.88254 15.9843 2.75 16.5013 2.75C17.0184 2.75 17.5268 2.88254 17.9781 3.13496C18.392 3.36596 18.7797 3.78121 19.5552 4.61033C19.9045 4.98433 20.0777 5.17133 20.273 5.32121C20.6991 5.65083 21.2056 5.86064 21.7401 5.92896C21.9835 5.95921 22.2392 5.95096 22.7493 5.93446C23.8851 5.89596 24.4516 5.87671 24.9081 6.00596C25.4055 6.14766 25.8586 6.41399 26.2243 6.77973C26.59 7.14547 26.8564 7.59851 26.9981 8.09596C27.126 8.54971 27.1081 9.11758 27.0682 10.252C27.0517 10.7635 27.0435 11.0192 27.0737 11.2626C27.1425 11.7975 27.3528 12.3035 27.6815 12.7297C27.8327 12.9236 28.0183 13.0982 28.3923 13.4475C29.2215 14.223 29.6367 14.6107 29.8677 15.0246C30.3792 15.9431 30.3792 17.0596 29.8677 17.9781C29.6367 18.392 29.2215 18.7797 28.3923 19.5552C28.0183 19.9045 27.8313 20.0777 27.6815 20.273C27.3518 20.6991 27.142 21.2056 27.0737 21.7401C27.0435 21.9835 27.0517 22.2392 27.0682 22.7493C27.1067 23.8851 27.126 24.4516 26.9967 24.9081C26.8562 25.4061 26.5903 25.8598 26.2243 26.2257C25.8584 26.5916 25.4048 26.8576 24.9067 26.9981C24.453 27.126 23.8851 27.1081 22.7493 27.0682C22.2392 27.0517 21.9835 27.0435 21.7401 27.0737C21.2052 27.1425 20.6992 27.3528 20.273 27.6815C20.0791 27.8327 19.9045 28.0183 19.5552 28.3923C18.7797 29.2215 18.392 29.6367 17.9781 29.8677C17.5268 30.1201 17.0184 30.2527 16.5013 30.2527C15.9843 30.2527 15.4758 30.1201 15.0246 29.8677C14.6107 29.6367 14.223 29.2215 13.4475 28.3923C13.0982 28.0183 12.925 27.8313 12.7297 27.6815C12.3035 27.3518 11.797 27.142 11.2626 27.0737C11.0192 27.0435 10.7635 27.0517 10.252 27.0682C9.11758 27.1067 8.55108 27.126 8.09458 26.9967C7.59653 26.8562 7.14286 26.5903 6.77694 26.2243C6.41102 25.8584 6.14509 25.4048 6.00458 24.9067C5.87671 24.453 5.89458 23.8851 5.93446 22.7493C5.95096 22.2392 5.95921 21.9835 5.92896 21.7401C5.86064 21.2056 5.65083 20.6991 5.32121 20.273C5.16996 20.0791 4.98433 19.9045 4.61033 19.5552C3.78121 18.7797 3.36596 18.392 3.13496 17.9781C2.88254 17.5268 2.75 17.0184 2.75 16.5013C2.75 15.9843 2.88254 15.4758 3.13496 15.0246C3.36596 14.6107 3.78121 14.223 4.61033 13.4475C4.98433 13.0982 5.17133 12.925 5.32121 12.7297C5.65083 12.3035 5.86064 11.797 5.92896 11.2626C5.95921 11.0192 5.95096 10.7635 5.93446 10.252C5.89596 9.11758 5.87671 8.55108 6.00596 8.09458C6.14647 7.59653 6.41239 7.14286 6.77831 6.77694C7.14423 6.41102 7.59791 6.14509 8.09596 6.00458C8.54971 5.87671 9.11758 5.89458 10.252 5.93446C10.7635 5.95096 11.0192 5.95921 11.2626 5.92896C11.7975 5.86021 12.3035 5.64983 12.7297 5.32121C12.9236 5.16996 13.0996 4.98433 13.4488 4.61033Z"
            stroke="black"
            stroke-width="2.0625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Halal",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.001 37.416C32.7042 40.3738 28.4292 42.0067 24 42C14.059 42 6 33.941 6 24C6 19.262 7.83 14.952 10.823 11.737L13.793 14.707C13.9816 14.8892 14.2342 14.99 14.4964 14.9877C14.7586 14.9854 15.0094 14.8802 15.1948 14.6948C15.3802 14.5094 15.4854 14.2586 15.4877 13.9964C15.49 13.7342 15.3892 13.4816 15.207 13.293L12.265 10.351C15.5271 7.5382 19.6927 5.99371 24 6C33.941 6 42 14.059 42 24C42 28.61 40.266 32.817 37.416 36.001L31.622 30.208C31.8724 29.4774 32.0001 28.7103 32 27.938V26C32 25.7829 31.9293 25.5718 31.7987 25.3984C31.6681 25.2251 31.4846 25.0989 31.276 25.039C31.7522 24.075 32 23.0142 32 21.939V20C32 19.8324 31.9579 19.6674 31.8775 19.5203C31.7971 19.3732 31.681 19.2487 31.5399 19.1582C31.3989 19.0677 31.2373 19.0141 31.0701 19.0024C30.9028 18.9906 30.7354 19.0211 30.583 19.091L30.523 19.118C30.838 18.3089 30.9998 17.4483 31 16.58V15C30.9999 14.838 30.9605 14.6785 30.8851 14.5351C30.8097 14.3917 30.7006 14.2688 30.5673 14.1769C30.4339 14.0851 30.2801 14.027 30.1193 14.0076C29.9585 13.9883 29.7954 14.0083 29.644 14.066L27.508 14.879C27.424 14.9107 27.3407 14.9441 27.258 14.979C27.2204 13.181 26.5602 11.4517 25.39 10.086L24.76 9.349C24.6661 9.23922 24.5496 9.15108 24.4184 9.09065C24.2872 9.03022 24.1444 8.99892 24 8.99892C23.8556 8.99892 23.7128 9.03022 23.5816 9.09065C23.4504 9.15108 23.3339 9.23922 23.24 9.349L22.61 10.085C21.439 11.4511 20.7785 13.1812 20.741 14.98C20.6586 14.9451 20.5756 14.9117 20.492 14.88L18.356 14.065C18.2046 14.0073 18.0414 13.9873 17.8804 14.0067C17.7195 14.026 17.5658 14.0842 17.4323 14.1762C17.2989 14.2682 17.1899 14.3913 17.1145 14.5348C17.0392 14.6783 16.9999 14.8379 17 15V16.58C17 17.466 17.167 18.324 17.476 19.118L17.417 19.091C17.2646 19.0211 17.0972 18.9906 16.9299 19.0024C16.7627 19.0141 16.6011 19.0677 16.4601 19.1582C16.319 19.2487 16.2029 19.3732 16.1225 19.5203C16.0421 19.6674 16 19.8324 16 20V21.939C16 23.0142 16.2478 24.075 16.724 25.039C16.5154 25.0989 16.3319 25.2251 16.2013 25.3984C16.0707 25.5718 16 25.7829 16 26V27.939C16.0003 29.2782 16.3847 30.5893 17.1077 31.7166C17.8307 32.8439 18.8619 33.7402 20.079 34.299L23 35.642V38H25V35.641L27.921 34.3C29.0074 33.8012 29.9479 33.0324 30.653 32.067L36.001 37.416ZM44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24ZM24 11.542C24.5383 12.2165 24.9185 13.0032 25.1125 13.8441C25.3065 14.6851 25.3094 15.5588 25.121 16.401C24.687 16.823 24.311 17.298 24 17.815C23.6889 17.2973 23.3121 16.822 22.879 16.401C22.6906 15.5588 22.6935 14.6851 22.8875 13.8441C23.0815 13.0032 23.4617 12.2165 24 11.542ZM23 21.549V21.421C23.0001 20.4075 22.6922 19.4179 22.1172 18.5834C21.5422 17.7489 20.7271 17.1088 19.78 16.748L19 16.451V16.579C18.9999 17.5925 19.3078 18.5821 19.8828 19.4166C20.4578 20.2511 21.2729 20.8912 22.22 21.252L23 21.549ZM25 21.549L25.78 21.252C26.7271 20.8912 27.5422 20.2511 28.1172 19.4166C28.6922 18.5821 29.0001 17.5925 29 16.579V16.451L28.22 16.748C27.2729 17.1088 26.4578 17.7489 25.8828 18.5834C25.3078 19.4179 24.9999 20.4075 25 21.421V21.549ZM25 26.107C25 24.735 25.8 23.488 27.046 22.916L30 21.56V21.939C29.9999 22.8956 29.7254 23.832 29.2091 24.6373C28.6927 25.4425 27.9562 26.0827 27.087 26.482L25 27.44V26.107ZM20.087 22.517C20.9566 22.9164 21.6932 23.557 22.2096 24.3626C22.7259 25.1682 23.0003 26.1051 23 27.062V27.442L20.913 26.483C20.0438 26.0837 19.3073 25.4435 18.7909 24.6383C18.2746 23.833 18.0001 22.8966 18 21.94V21.56L20.087 22.517ZM23 33.44V33.062C23.0001 32.1053 22.7257 31.1686 22.2093 30.3632C21.693 29.5577 20.9564 28.9173 20.087 28.518L18 27.56V27.939C18.0001 28.8956 18.2746 29.832 18.7909 30.6373C19.3073 31.4425 20.0438 32.0827 20.913 32.482L23 33.44ZM25 33.44L27.087 32.482C27.9561 32.0828 28.6925 31.4427 29.2088 30.6377C29.7251 29.8326 29.9997 28.8964 30 27.94V27.56L27.046 28.917C26.4355 29.1972 25.9181 29.6467 25.5555 30.2121C25.1928 30.7776 25 31.4352 25 32.107V33.44Z"
            fill="black"
          />
        </svg>
      ),
      text: "Gluten-Free",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 11C27 11.2652 26.8946 11.5196 26.7071 11.7071C26.5196 11.8946 26.2652 12 26 12C25.7348 12 25.4804 11.8946 25.2929 11.7071C25.1054 11.5196 25 11.2652 25 11C25 10.7348 25.1054 10.4804 25.2929 10.2929C25.4804 10.1054 25.7348 10 26 10C26.2652 10 26.5196 10.1054 26.7071 10.2929C26.8946 10.4804 27 10.7348 27 11ZM29 11C29.2652 11 29.5196 10.8946 29.7071 10.7071C29.8946 10.5196 30 10.2652 30 10C30 9.73478 29.8946 9.48043 29.7071 9.29289C29.5196 9.10536 29.2652 9 29 9C28.7348 9 28.4804 9.10536 28.2929 9.29289C28.1054 9.48043 28 9.73478 28 10C28 10.2652 28.1054 10.5196 28.2929 10.7071C28.4804 10.8946 28.7348 11 29 11ZM31 13C31 13.2652 30.8946 13.5196 30.7071 13.7071C30.5196 13.8946 30.2652 14 30 14C29.7348 14 29.4804 13.8946 29.2929 13.7071C29.1054 13.5196 29 13.2652 29 13C29 12.7348 29.1054 12.4804 29.2929 12.2929C29.4804 12.1054 29.7348 12 30 12C30.2652 12 30.5196 12.1054 30.7071 12.2929C30.8946 12.4804 31 12.7348 31 13ZM23 24C23 23.7348 22.8946 23.4804 22.7071 23.2929C22.5196 23.1054 22.2652 23 22 23C21.7348 23 21.4804 23.1054 21.2929 23.2929C21.1054 23.4804 21 23.7348 21 24V33C21 33.2652 21.1054 33.5196 21.2929 33.7071C21.4804 33.8946 21.7348 34 22 34C22.2652 34 22.5196 33.8946 22.7071 33.7071C22.8946 33.5196 23 33.2652 23 33V24ZM26 23C26.2652 23 26.5196 23.1054 26.7071 23.2929C26.8946 23.4804 27 23.7348 27 24V33C27 33.2652 26.8946 33.5196 26.7071 33.7071C26.5196 33.8946 26.2652 34 26 34C25.7348 34 25.4804 33.8946 25.2929 33.7071C25.1054 33.5196 25 33.2652 25 33V24C25 23.7348 25.1054 23.4804 25.2929 23.2929C25.4804 23.1054 25.7348 23 26 23Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24ZM36.001 37.416C32.7042 40.3738 28.4292 42.0067 24 42C14.059 42 6 33.941 6 24C6 19.262 7.83 14.952 10.823 11.737L14.793 15.707C14.9816 15.8892 15.2342 15.99 15.4964 15.9877C15.7586 15.9854 16.0094 15.8802 16.1948 15.6948C16.3802 15.5094 16.4854 15.2586 16.4877 14.9964C16.49 14.7342 16.3892 14.4816 16.207 14.293L12.265 10.351C15.5271 7.5382 19.6927 5.99371 24 6C33.941 6 42 14.059 42 24C42 28.61 40.266 32.817 37.416 36.001L30.331 28.917L29.805 21.779C29.7751 21.3758 29.664 20.9829 29.4784 20.6237C29.2928 20.2646 29.0366 19.9466 28.725 19.689C28.9016 19.5031 29.0001 19.2564 29 19V18C29 16.6739 28.4732 15.4021 27.5355 14.4645C26.5979 13.5268 25.3261 13 24 13C22.6739 13 21.4021 13.5268 20.4645 14.4645C19.5268 15.4021 19 16.6739 19 18V19C19 19.267 19.105 19.51 19.275 19.689C18.9634 19.9466 18.7072 20.2646 18.5216 20.6237C18.336 20.9829 18.2249 21.3758 18.195 21.779L17.237 34.779C17.2066 35.1906 17.2614 35.604 17.3981 35.9934C17.5347 36.3828 17.7503 36.7398 18.0312 37.0421C18.3121 37.3444 18.6524 37.5855 19.0307 37.7504C19.409 37.9152 19.8173 38.0002 20.23 38H27.772C28.1845 38 28.5926 37.9149 28.9707 37.7501C29.3489 37.5853 29.689 37.3443 29.9698 37.0421C30.2506 36.7399 30.466 36.383 30.6027 35.9938C30.7393 35.6046 30.7943 35.1914 30.764 34.78L30.557 31.97L36.001 37.416ZM26.813 21H21.187C20.9345 21.0001 20.6913 21.0957 20.5064 21.2677C20.3215 21.4396 20.2084 21.6752 20.19 21.927L19.232 34.927C19.222 35.0641 19.2403 35.2018 19.2859 35.3314C19.3314 35.4611 19.4032 35.58 19.4968 35.6807C19.5903 35.7814 19.7036 35.8617 19.8296 35.9166C19.9556 35.9716 20.0916 36 20.229 36H27.771C27.9085 36 28.0446 35.9716 28.1706 35.9166C28.2967 35.8616 28.4101 35.7811 28.5036 35.6803C28.5972 35.5795 28.669 35.4605 28.7145 35.3307C28.76 35.2009 28.7782 35.0632 28.768 34.926L27.81 21.926C27.7913 21.6743 27.6782 21.439 27.4933 21.2673C27.3084 21.0955 27.0654 21.0001 26.813 21ZM27 18H21C21 17.2044 21.3161 16.4413 21.8787 15.8787C22.4413 15.3161 23.2044 15 24 15C24.7956 15 25.5587 15.3161 26.1213 15.8787C26.6839 16.4413 27 17.2044 27 18Z"
            fill="black"
          />
        </svg>
      ),
      text: "Low-Sodium",
    },
    {
      svg: (
        <svg
          width="40"
          height="22"
          viewBox="0 0 40 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.9926 4.88286C40.0236 5.14621 39.9488 5.41109 39.7845 5.61925C39.6202 5.82741 39.38 5.96179 39.1166 5.99286C30.6046 6.99486 24.2066 7.96686 18.8836 14.6249C17.4836 16.3749 16.4186 17.6579 15.5376 18.5829C14.6576 19.5069 13.9056 20.1359 13.1156 20.5249C12.3016 20.9249 11.5286 21.0309 10.6926 21.0479C10.2549 21.0522 9.8171 21.0458 9.37965 21.0289H9.36565C8.84216 21.0111 8.31843 21.0015 7.79465 20.9999C4.89765 20.9999 2.93765 19.2069 1.76065 17.5879C1.0415 16.5893 0.467776 15.4937 0.0566479 14.3339L0.0506478 14.3149L0.0486475 14.3089V14.3069C0.0486475 14.3069 0.0466477 14.3049 0.999648 13.9999L0.0476476 14.3049C-0.00036674 14.1549 -0.012307 13.9958 0.0127979 13.8404C0.0379029 13.685 0.0993439 13.5377 0.192122 13.4105C0.284899 13.2833 0.406392 13.1799 0.546714 13.1085C0.687037 13.0371 0.842224 12.9999 0.999648 12.9999H17.6276C23.4526 5.98286 30.5416 4.98786 38.8826 4.00686C39.146 3.97586 39.4109 4.05074 39.619 4.21501C39.8272 4.37929 39.9616 4.61951 39.9926 4.88286ZM16.0056 14.9999H2.51665C2.73765 15.4309 3.02365 15.9229 3.37965 16.4119C4.38265 17.7929 5.81965 18.9999 7.79465 18.9999C8.41165 18.9999 8.94965 19.0159 9.41765 19.0299H9.43565C9.91465 19.0439 10.3036 19.0549 10.6526 19.0479C11.3306 19.0349 11.7796 18.9539 12.2326 18.7309C12.7106 18.4949 13.2726 18.0619 14.0886 17.2039C14.6246 16.6419 15.2456 15.9239 16.0056 14.9999Z"
            fill="black"
          />
          <path
            d="M1 8.99994H3V10.9999H1V8.99994ZM9 8.99994H11V10.9999H9V8.99994ZM6 8.58594L7.414 9.99994L6 11.4139L4.586 9.99994L6 8.58594ZM14 8.58594L15.414 9.99994L14 11.4139L12.586 9.99994L14 8.58594ZM7 4.99994H9V6.99994H7V4.99994ZM4 4.58594L5.414 5.99994L4 7.41394L2.586 5.99994L4 4.58594ZM8 0.585938L9.414 1.99994L8 3.41394L6.586 1.99994L8 0.585938ZM12 4.58594L13.414 5.99994L12 7.41394L10.586 5.99994L12 4.58594Z"
            fill="black"
          />
        </svg>
      ),
      text: "Diabetic",
    },
    {
      svg: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8809 7.56641C19.1461 7.56641 19.4004 7.67176 19.588 7.8593C19.7755 8.04684 19.8809 8.30119 19.8809 8.56641V15.1664C19.8809 15.4316 19.7755 15.686 19.588 15.8735C19.4004 16.061 19.1461 16.1664 18.8809 16.1664C18.6156 16.1664 18.3613 16.061 18.1738 15.8735C17.9862 15.686 17.8809 15.4316 17.8809 15.1664V8.56641C17.8809 8.30119 17.9862 8.04684 18.1738 7.8593C18.3613 7.67176 18.6156 7.56641 18.8809 7.56641Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7804 13.9056C12.9104 13.6356 14.0634 13.8406 15.2604 14.4586C16.2354 14.9636 16.9274 15.1946 17.4664 15.3056C18.0044 15.4176 18.4324 15.4196 18.9494 15.4196V17.4196H18.9294C18.4134 17.4196 17.8094 17.4196 17.0614 17.2646C16.3044 17.1076 15.4394 16.8026 14.3414 16.2346C13.4634 15.7816 12.8014 15.7176 12.2454 15.8506C11.6614 15.9906 11.0444 16.3806 10.3334 17.1146C8.7014 18.8026 8.1944 20.5406 8.0174 21.8766C7.9174 23.5206 8.2144 26.7666 9.6854 29.9396C10.1854 31.0196 10.8954 32.5096 11.7614 33.6766C12.1934 34.2586 12.6274 34.7066 13.0444 34.9826C13.4494 35.2496 13.7854 35.3226 14.0904 35.2706C17.2134 34.7326 17.8004 34.7196 18.4094 34.7196H19.4464V36.7196H18.3804C17.9584 36.7196 17.4604 36.7196 14.4304 37.2416C13.4904 37.4036 12.6434 37.1146 11.9424 36.6516C11.2534 36.1966 10.6584 35.5456 10.1554 34.8686C9.1504 33.5156 8.3644 31.8446 7.8714 30.7806C6.2334 27.2486 5.8994 23.6436 6.0234 21.7166L6.0264 21.6846L6.0304 21.6526C6.2424 20.0086 6.8744 17.8136 8.8964 15.7246C9.7414 14.8506 10.6794 14.1686 11.7814 13.9046"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6405 11.41C16.1365 12.841 16.9475 14.576 16.9475 15.92C16.9475 16.1852 17.0528 16.4396 17.2404 16.6271C17.4279 16.8146 17.6823 16.92 17.9475 16.92C18.2127 16.92 18.4671 16.8146 18.6546 16.6271C18.8421 16.4396 18.9475 16.1852 18.9475 15.92C18.9475 13.87 17.7795 11.645 16.0225 9.964C14.2445 8.265 11.7435 7 8.89648 7C8.63127 7 8.37691 7.10536 8.18938 7.29289C8.00184 7.48043 7.89648 7.73478 7.89648 8C7.89648 8.26522 8.00184 8.51957 8.18938 8.70711C8.37691 8.89464 8.63127 9 8.89648 9C11.1405 9 13.1645 9.999 14.6395 11.41"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.57491 7.00769C8.83799 6.97488 9.10334 7.04788 9.31261 7.21065C9.52188 7.37342 9.65795 7.61263 9.69091 7.87569C10.1829 11.8057 13.6359 13.8757 16.4249 14.9907C16.6712 15.0892 16.8682 15.2815 16.9726 15.5253C17.0771 15.7691 17.0804 16.0444 16.9819 16.2907C16.8834 16.5369 16.6911 16.734 16.4473 16.8384C16.2035 16.9429 15.9282 16.9462 15.6819 16.8477C12.8129 15.7007 8.34691 13.2437 7.70691 8.12369C7.6741 7.86061 7.7471 7.59527 7.90987 7.38599C8.07264 7.17672 8.31185 7.04065 8.57491 7.00769ZM25.7629 13.9017C24.6109 13.6377 23.4289 13.8357 22.1929 14.4497C21.1729 14.9557 20.4459 15.1897 19.8759 15.3027C19.3059 15.4157 18.8539 15.4177 18.3159 15.4177C18.0507 15.4177 17.7963 15.523 17.6088 15.7106C17.4213 15.8981 17.3159 16.1525 17.3159 16.4177C17.3159 16.6829 17.4213 16.9373 17.6088 17.1248C17.7963 17.3123 18.0507 17.4177 18.3159 17.4177H18.3349C18.8719 17.4177 19.4949 17.4177 20.2649 17.2647C21.0459 17.1097 21.9409 16.8067 23.0809 16.2407C24.0049 15.7827 24.7129 15.7127 25.3169 15.8507C25.9429 15.9947 26.5939 16.3927 27.3339 17.1277C29.0499 18.8307 29.5689 20.5797 29.7479 21.9117C29.7868 22.1714 29.9262 22.4054 30.1362 22.5631C30.3461 22.7209 30.6097 22.7897 30.8699 22.7548C31.1302 22.7198 31.3662 22.584 31.5271 22.3764C31.6881 22.1689 31.7609 21.9064 31.7299 21.6457C31.5079 19.9927 30.8459 17.7957 28.7429 15.7077C27.8619 14.8337 26.8929 14.1597 25.7629 13.9017ZM26.7079 34.2787C26.6133 34.1876 26.5017 34.1161 26.3794 34.0681C26.2571 34.0202 26.1266 33.9968 25.9953 33.9993C25.864 34.0018 25.7345 34.0302 25.6141 34.0827C25.4938 34.1353 25.385 34.2111 25.2939 34.3057C24.5369 35.0917 23.9009 35.3557 23.3629 35.2677C20.1109 34.7297 19.5029 34.7177 18.8779 34.7177C18.6127 34.7177 18.3583 34.823 18.1708 35.0106C17.9833 35.1981 17.8779 35.4525 17.8779 35.7177C17.8779 35.9829 17.9833 36.2373 18.1708 36.4248C18.3583 36.6123 18.6127 36.7177 18.8779 36.7177H18.9059C19.3529 36.7177 19.8729 36.7177 23.0359 37.2407C24.5579 37.4927 25.8209 36.6417 26.7349 35.6927C26.8261 35.5981 26.8978 35.4864 26.9458 35.364C26.9939 35.2416 27.0173 35.111 27.0148 34.9796C27.0123 34.8482 26.9839 34.7185 26.9312 34.5981C26.8786 34.4777 26.8027 34.3698 26.7079 34.2787Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.6512 16.1027C31.6482 17.9127 31.3882 19.8117 31.7872 21.0947C31.8262 21.2202 31.8402 21.352 31.8282 21.4828C31.8162 21.6136 31.7786 21.7408 31.7175 21.857C31.6564 21.9733 31.573 22.0764 31.4721 22.1604C31.3711 22.2444 31.2546 22.3077 31.1292 22.3467C31.0038 22.3857 30.872 22.3997 30.7412 22.3877C30.6104 22.3757 30.4832 22.3381 30.367 22.277C30.2507 22.2159 30.1476 22.1325 30.0636 22.0316C29.9796 21.9307 29.9162 21.8142 29.8772 21.6887C29.2682 19.7297 29.7242 17.2587 30.9022 15.1327C32.0952 12.9807 34.1082 11.0317 36.8272 10.1857C36.9526 10.1467 37.0845 10.1328 37.2153 10.1448C37.3461 10.1567 37.4733 10.1943 37.5895 10.2554C37.7058 10.3165 37.8089 10.3999 37.8929 10.5009C37.9769 10.6018 38.0402 10.7183 38.0792 10.8437C38.1182 10.9692 38.1322 11.101 38.1202 11.2318C38.1082 11.3626 38.0706 11.4898 38.0095 11.606C37.9484 11.7223 37.865 11.8254 37.7641 11.9094C37.6631 11.9934 37.5466 12.0567 37.4212 12.0957C35.2782 12.7617 33.6412 14.3177 32.6512 16.1027Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.7185 17.3806C33.5505 19.0906 31.9705 20.1736 30.6455 20.3936C30.5143 20.4132 30.3883 20.4586 30.2749 20.5274C30.1614 20.5961 30.0628 20.6867 29.9847 20.7939C29.9066 20.9011 29.8506 21.0228 29.82 21.1519C29.7894 21.281 29.7847 21.4148 29.8063 21.5457C29.828 21.6766 29.8754 21.8018 29.9459 21.9142C30.0164 22.0266 30.1086 22.1238 30.217 22.2002C30.3255 22.2766 30.448 22.3306 30.5776 22.3592C30.7071 22.3878 30.841 22.3903 30.9715 22.3666C32.9945 22.0316 34.9985 20.5156 36.3695 18.5086C37.7575 16.4766 38.5965 13.8026 38.1315 10.9936C38.1101 10.864 38.0634 10.7399 37.994 10.6283C37.9246 10.5168 37.834 10.42 37.7272 10.3434C37.6204 10.2669 37.4996 10.2122 37.3716 10.1824C37.2437 10.1525 37.1111 10.1482 36.9815 10.1696C36.8519 10.191 36.7278 10.2377 36.6162 10.3071C36.5047 10.3765 36.4079 10.4672 36.3314 10.574C36.2548 10.6807 36.2001 10.8016 36.1703 10.9295C36.1405 11.0574 36.1361 11.19 36.1575 11.3196C36.5245 13.5336 35.8695 15.6946 34.7175 17.3796"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7812 23C31.1182 23 30.4823 23.2634 30.0135 23.7322C29.5446 24.2011 29.2812 24.837 29.2812 25.5C29.2812 26.163 29.5446 26.7989 30.0135 27.2678C30.4823 27.7366 31.1182 28 31.7812 28C32.4443 28 33.0802 27.7366 33.549 27.2678C34.0179 26.7989 34.2812 26.163 34.2812 25.5C34.2812 24.837 34.0179 24.2011 33.549 23.7322C33.0802 23.2634 32.4443 23 31.7812 23ZM27.2813 25.5C27.2812 24.9091 27.3976 24.3239 27.6238 23.7779C27.8499 23.232 28.1814 22.7359 28.5993 22.318C29.0171 21.9002 29.5132 21.5687 30.0592 21.3425C30.6051 21.1164 31.1903 21 31.7812 21C32.3722 21 32.9574 21.1164 33.5033 21.3425C34.0493 21.5687 34.5454 21.9002 34.9632 22.318C35.3811 22.7359 35.7126 23.232 35.9387 23.7779C36.1649 24.3239 36.2812 24.9091 36.2812 25.5C36.2812 26.6935 35.8071 27.8381 34.9632 28.682C34.1193 29.5259 32.9747 30 31.7812 30C30.5878 30 29.4432 29.5259 28.5993 28.682C27.7554 27.8381 27.2813 26.6935 27.2813 25.5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.8447 18.0886C38.968 18.4916 39.8852 19.3244 40.3945 20.4036C40.9039 21.4829 40.9637 22.7203 40.5607 23.8436C40.5164 23.9672 40.4481 24.0809 40.3599 24.1782C40.2716 24.2755 40.1651 24.3544 40.0463 24.4105C39.9275 24.4666 39.7989 24.4987 39.6677 24.5051C39.5365 24.5115 39.4053 24.4919 39.2817 24.4476C39.1581 24.4033 39.0444 24.335 38.9471 24.2468C38.8498 24.1585 38.7709 24.052 38.7148 23.9332C38.6587 23.8144 38.6266 23.6858 38.6202 23.5546C38.6138 23.4234 38.6334 23.2922 38.6777 23.1686C38.9018 22.5445 38.8688 21.857 38.586 21.2573C38.3032 20.6575 37.7938 20.1947 37.1697 19.9706C36.5457 19.7465 35.8581 19.7795 35.2584 20.0623C34.6586 20.3451 34.1958 20.8545 33.9717 21.4786C33.8776 21.722 33.692 21.9189 33.4547 22.0273C33.2174 22.1358 32.9471 22.1472 32.7015 22.0591C32.4558 21.971 32.2544 21.7904 32.1401 21.5558C32.0258 21.3213 32.0077 21.0513 32.0897 20.8036C32.4929 19.6805 33.3258 18.7635 34.405 18.2544C35.4842 17.7452 36.7215 17.6856 37.8447 18.0886Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.2542 23.1745C37.278 22.8808 38.3727 22.9597 39.3438 23.3971C40.3149 23.8346 41.0994 24.6022 41.5579 25.5635C42.0163 26.5248 42.1191 27.6175 41.8478 28.6475C41.5765 29.6774 40.9488 30.5777 40.0763 31.1885C39.9687 31.2668 39.8466 31.3229 39.7171 31.3534C39.5877 31.384 39.4534 31.3884 39.3222 31.3664C39.191 31.3444 39.0655 31.2964 38.953 31.2253C38.8406 31.1542 38.7435 31.0614 38.6673 30.9522C38.5912 30.8431 38.5377 30.7199 38.5098 30.5898C38.4819 30.4598 38.4802 30.3254 38.5049 30.1947C38.5295 30.064 38.58 29.9395 38.6534 29.8285C38.7268 29.7175 38.8216 29.6223 38.9322 29.5485C39.2074 29.356 39.441 29.1101 39.6191 28.8254C39.7972 28.5406 39.916 28.223 39.9686 27.8913C40.0212 27.5596 40.0065 27.2208 39.9252 26.8949C39.844 26.5691 39.6979 26.2629 39.4958 25.9948C39.2936 25.7266 39.0395 25.502 38.7486 25.3342C38.4577 25.1664 38.136 25.0589 37.8027 25.0182C37.4693 24.9775 37.1312 25.0043 36.8085 25.0972C36.4857 25.19 36.185 25.3469 35.9242 25.5585C35.8223 25.6413 35.7051 25.7033 35.5793 25.7409C35.4534 25.7784 35.3214 25.7908 35.1907 25.7774C35.0601 25.7639 34.9333 25.7248 34.8178 25.6624C34.7022 25.6 34.6001 25.5154 34.5172 25.4135C34.4344 25.3116 34.3724 25.1943 34.3348 25.0685C34.2973 24.9426 34.2849 24.8106 34.2983 24.6799C34.3118 24.5493 34.3509 24.4226 34.4133 24.307C34.4758 24.1914 34.5603 24.0893 34.6622 24.0065C35.1316 23.625 35.6731 23.342 36.2542 23.1745ZM27.7812 28.9985C27.1182 28.9985 26.4823 29.2619 26.0135 29.7307C25.5446 30.1995 25.2812 30.8354 25.2812 31.4985C25.2812 32.1615 25.5446 32.7974 26.0135 33.2662C26.4823 33.7351 27.1182 33.9985 27.7812 33.9985C28.4443 33.9985 29.0802 33.7351 29.549 33.2662C30.0179 32.7974 30.2812 32.1615 30.2812 31.4985C30.2812 30.8354 30.0179 30.1995 29.549 29.7307C29.0802 29.2619 28.4443 28.9985 27.7812 28.9985ZM23.2812 31.4985C23.2812 30.305 23.7554 29.1604 24.5993 28.3165C25.4432 27.4726 26.5878 26.9985 27.7812 26.9985C28.9747 26.9985 30.1193 27.4726 30.9632 28.3165C31.8071 29.1604 32.2812 30.305 32.2812 31.4985C32.2812 32.6919 31.8071 33.8365 30.9632 34.6804C30.1193 35.5244 28.9747 35.9985 27.7812 35.9985C26.5878 35.9985 25.4432 35.5244 24.5993 34.6804C23.7554 33.8365 23.2812 32.6919 23.2812 31.4985Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.7812 29C35.1182 29 34.4823 29.2634 34.0135 29.7322C33.5446 30.2011 33.2812 30.837 33.2812 31.5C33.2812 32.163 33.5446 32.7989 34.0135 33.2678C34.4823 33.7366 35.1182 34 35.7812 34C36.4443 34 37.0802 33.7366 37.549 33.2678C38.0179 32.7989 38.2812 32.163 38.2812 31.5C38.2812 30.837 38.0179 30.2011 37.549 29.7322C37.0802 29.2634 36.4443 29 35.7812 29ZM31.2812 31.5C31.2812 30.3065 31.7554 29.1619 32.5993 28.318C33.4432 27.4741 34.5878 27 35.7812 27C36.9747 27 38.1193 27.4741 38.9632 28.318C39.8071 29.1619 40.2812 30.3065 40.2812 31.5C40.2812 32.6935 39.8071 33.8381 38.9632 34.682C38.1193 35.5259 36.9747 36 35.7812 36C34.5878 36 33.4432 35.5259 32.5993 34.682C31.7554 33.8381 31.2812 32.6935 31.2812 31.5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.7812 35C31.1182 35 30.4823 35.2634 30.0135 35.7322C29.5446 36.2011 29.2812 36.837 29.2812 37.5C29.2812 38.163 29.5446 38.7989 30.0135 39.2678C30.4823 39.7366 31.1182 40 31.7812 40C32.4443 40 33.0802 39.7366 33.549 39.2678C34.0179 38.7989 34.2812 38.163 34.2812 37.5C34.2812 36.837 34.0179 36.2011 33.549 35.7322C33.0802 35.2634 32.4443 35 31.7812 35ZM27.2813 37.5C27.2812 36.9091 27.3976 36.3239 27.6238 35.7779C27.8499 35.232 28.1814 34.7359 28.5993 34.318C29.0171 33.9002 29.5132 33.5687 30.0592 33.3425C30.6051 33.1164 31.1903 33 31.7812 33C32.3722 33 32.9574 33.1164 33.5033 33.3425C34.0493 33.5687 34.5454 33.9002 34.9632 34.318C35.3811 34.7359 35.7126 35.232 35.9387 35.7779C36.1649 36.3239 36.2812 36.9091 36.2812 37.5C36.2812 38.6935 35.8071 39.8381 34.9632 40.682C34.1193 41.5259 32.9747 42 31.7812 42C30.5878 42 29.4432 41.5259 28.5993 40.682C27.7554 39.8381 27.2813 38.6935 27.2813 37.5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.8349 33.9649C37.879 33.8412 37.9471 33.7274 38.0352 33.63C38.1233 33.5326 38.2297 33.4535 38.3484 33.3972C38.4671 33.3409 38.5957 33.3086 38.7268 33.302C38.858 33.2955 38.9892 33.3148 39.1129 33.3589C39.7473 33.5855 40.3228 33.9515 40.7968 34.4301C41.2709 34.9087 41.6314 35.4876 41.8519 36.1242C42.0723 36.7607 42.1471 37.4386 42.0706 38.1079C41.9941 38.7772 41.7683 39.4207 41.4099 39.9911C41.0515 40.5615 40.5696 41.0441 39.9998 41.4034C39.43 41.7627 38.7868 41.9894 38.1177 42.067C37.4485 42.1445 36.7705 42.0708 36.1336 41.8514C35.4967 41.6319 34.9172 41.2722 34.4379 40.7989C34.342 40.7073 34.2653 40.5974 34.2123 40.4758C34.1592 40.3542 34.1309 40.2232 34.129 40.0905C34.1271 39.9579 34.1516 39.8261 34.2011 39.703C34.2506 39.5799 34.3241 39.4679 34.4173 39.3735C34.5105 39.2791 34.6216 39.2042 34.7441 39.1531C34.8665 39.102 34.9979 39.0759 35.1306 39.0761C35.2633 39.0763 35.3946 39.1029 35.5169 39.1544C35.6392 39.2059 35.75 39.2812 35.8429 39.3759C36.1092 39.6389 36.4311 39.8387 36.7849 39.9606C37.1386 40.0826 37.5153 40.1236 37.887 40.0805C38.2588 40.0375 38.6161 39.9116 38.9327 39.712C39.2492 39.5125 39.517 39.2444 39.7161 38.9276C39.9153 38.6108 40.0407 38.2533 40.0833 37.8815C40.1259 37.5097 40.0844 37.1331 39.9621 36.7795C39.8397 36.4258 39.6395 36.1042 39.3762 35.8383C39.1129 35.5723 38.7933 35.3689 38.4409 35.2429C38.3172 35.1988 38.2034 35.1308 38.106 35.0427C38.0086 34.9546 37.9295 34.8482 37.8732 34.7295C37.8169 34.6108 37.7846 34.4822 37.778 34.351C37.7714 34.2198 37.7908 34.0887 37.8349 33.9649Z"
            fill="black"
          />
        </svg>
      ),
      text: "Fruit Platter",
    },
  ];

  const BreakFast = [
    {
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.25 12.7188C29.8776 12.7188 29.5553 12.5827 29.2832 12.3105C29.0111 12.0384 28.875 11.7161 28.875 11.3438C28.875 10.6133 29.0111 9.91146 29.2832 9.23828C29.5553 8.5651 29.9564 7.9707 30.4863 7.45508L32.1836 5.73633C32.7279 5.19206 33 4.54036 33 3.78125C33 3.40885 33.1361 3.08659 33.4082 2.81445C33.6803 2.54232 34.0026 2.40625 34.375 2.40625C34.7474 2.40625 35.0697 2.54232 35.3418 2.81445C35.6139 3.08659 35.75 3.40885 35.75 3.78125C35.75 4.51172 35.6139 5.21354 35.3418 5.88672C35.0697 6.5599 34.6686 7.1543 34.1387 7.66992L32.4414 9.38867C31.8971 9.93294 31.625 10.5846 31.625 11.3438C31.625 11.7161 31.4889 12.0384 31.2168 12.3105C30.9447 12.5827 30.6224 12.7188 30.25 12.7188ZM22 12.7188C21.6276 12.7188 21.3053 12.5827 21.0332 12.3105C20.7611 12.0384 20.625 11.7161 20.625 11.3438C20.625 10.6133 20.7611 9.91146 21.0332 9.23828C21.3053 8.5651 21.7064 7.9707 22.2363 7.45508L23.9336 5.73633C24.4779 5.19206 24.75 4.54036 24.75 3.78125C24.75 3.40885 24.8861 3.08659 25.1582 2.81445C25.4303 2.54232 25.7526 2.40625 26.125 2.40625C26.4974 2.40625 26.8197 2.54232 27.0918 2.81445C27.3639 3.08659 27.5 3.40885 27.5 3.78125C27.5 4.51172 27.3639 5.21354 27.0918 5.88672C26.8197 6.5599 26.4186 7.1543 25.8887 7.66992L24.1914 9.38867C23.6471 9.93294 23.375 10.5846 23.375 11.3438C23.375 11.7161 23.2389 12.0384 22.9668 12.3105C22.6947 12.5827 22.3724 12.7188 22 12.7188ZM39.875 16.5C40.4479 16.5 40.985 16.6074 41.4863 16.8223C41.9876 17.0371 42.4245 17.3307 42.7969 17.7031C43.1693 18.0755 43.4629 18.5124 43.6777 19.0137C43.8926 19.515 44 20.0521 44 20.625V28.875C44 29.4479 43.8926 29.985 43.6777 30.4863C43.4629 30.9876 43.1693 31.4245 42.7969 31.7969C42.4245 32.1693 41.9876 32.4629 41.4863 32.6777C40.985 32.8926 40.4479 33 39.875 33H38.6504C38.6217 33.1003 38.6003 33.1934 38.5859 33.2793C38.5716 33.3652 38.543 33.4512 38.5 33.5371V34.375C38.5 35.3203 38.321 36.2083 37.9629 37.0391C37.6048 37.8698 37.1107 38.6003 36.4805 39.2305C35.8503 39.8607 35.1198 40.3548 34.2891 40.7129C33.4583 41.071 32.5703 41.25 31.625 41.25H23.375C22.2578 41.25 21.2266 40.9993 20.2812 40.498C19.3359 39.9967 18.5482 39.3307 17.918 38.5H7.17578C6.23047 38.5 5.34245 38.321 4.51172 37.9629C3.68099 37.6048 2.95052 37.1178 2.32031 36.502C1.6901 35.8861 1.19596 35.1556 0.837891 34.3105C0.479818 33.4655 0.300781 32.5703 0.300781 31.625V30.25H5.80078C5.80078 29.1185 6.01562 28.0514 6.44531 27.0488C6.875 26.0462 7.4694 25.1725 8.22852 24.4277C8.98763 23.6829 9.86133 23.0885 10.8496 22.6445C11.8379 22.2005 12.9049 21.9857 14.0508 22C14.4805 22 14.8958 22.0358 15.2969 22.1074C15.6979 22.179 16.099 22.2793 16.5 22.4082V13.75H38.5V16.5H39.875ZM14.0508 24.75C13.2917 24.75 12.5827 24.8932 11.9238 25.1797C11.265 25.4661 10.6777 25.86 10.1621 26.3613C9.64648 26.8626 9.2526 27.4427 8.98047 28.1016C8.70833 28.7604 8.5651 29.4766 8.55078 30.25H16.5V25.3516C16.1276 25.1654 15.7409 25.0221 15.3398 24.9219C14.9388 24.8216 14.5091 24.7643 14.0508 24.75ZM7.17578 35.75H16.6504C16.5501 35.3346 16.5 34.8763 16.5 34.375V33H3.28711C3.43034 33.401 3.63086 33.7663 3.88867 34.0957C4.14648 34.4251 4.4401 34.7188 4.76953 34.9766C5.09896 35.2344 5.47135 35.4206 5.88672 35.5352C6.30208 35.6497 6.73177 35.7214 7.17578 35.75ZM17.123 37.1895V37.2109L17.1445 37.2539V37.2324L17.123 37.1895ZM35.75 34.375V16.5H19.25V34.375C19.25 34.9479 19.3574 35.485 19.5723 35.9863C19.7871 36.4876 20.0807 36.9245 20.4531 37.2969C20.8255 37.6693 21.2624 37.9629 21.7637 38.1777C22.265 38.3926 22.8021 38.5 23.375 38.5H31.625C32.1979 38.5 32.735 38.3926 33.2363 38.1777C33.7376 37.9629 34.1745 37.6693 34.5469 37.2969C34.9193 36.9245 35.2129 36.4876 35.4277 35.9863C35.6426 35.485 35.75 34.9479 35.75 34.375ZM41.25 28.875V20.625C41.25 20.2526 41.1139 19.9303 40.8418 19.6582C40.5697 19.3861 40.2474 19.25 39.875 19.25H38.5V30.25H39.875C40.2474 30.25 40.5697 30.1139 40.8418 29.8418C41.1139 29.5697 41.25 29.2474 41.25 28.875Z"
            fill="black"
          />
        </svg>
      ),
      text: "Continental<br/>Breakfast",
    },
    {
      svg: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 17.4C29.25 16.2 33 13.65 33 10.5C33 6.3 26.25 3 18 3C9.75 3 3 6.3 3 10.5C3 14.25 8.55 17.4 15.6 18"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.95 14.25C3.75 15.3 3 16.65 3 18C3 22.2 9.75 25.5 18 25.5H18.45M23.85 24.9C29.25 23.7 33 21.15 33 18C33 16.65 32.25 15.3 31.05 14.25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.95 21.75C3.75 22.8 3 24.15 3 25.5C3 29.7 9.75 33 18 33C26.25 33 33 29.7 33 25.5C33 24.15 32.25 22.8 31.05 21.75"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 24C24 24.7956 23.6839 25.5587 23.1213 26.1213C22.5587 26.6839 21.7956 27 21 27C20.2044 27 19.4413 26.6839 18.8787 26.1213C18.3161 25.5587 18 24.7956 18 24V21C18 19.35 16.65 18 15 17.7C12.3 16.95 10.5 15.3 10.5 13.5C10.5 10.95 13.8 9 18 9C22.2 9 25.5 10.95 25.5 13.5C25.5 14.1 25.35 14.55 25.05 15.15C24.6 15.9 24 16.95 24 17.7V24Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "American<br/>Breakfast",
    },
    {
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 8.25C25.9783 8.25 26.73 9.295 28.4167 11.5867C29.1133 12.5583 29.92 13.64 31.0567 14.7767C31.955 15.675 32.7433 16.3717 33.385 16.94C35.3833 18.6817 35.75 18.9933 35.75 22C35.75 27.3717 35.75 28.1967 32.89 31.0567C29.3333 34.5767 28.1967 35.75 23.8333 35.75C21.78 35.75 21.0833 35.1633 19.965 34.265C18.8283 33.3483 17.2883 32.0833 14.6667 32.0833C9.09333 32.0833 8.25 25.7583 8.25 22C8.25 19.525 9.16667 16.335 11.8617 15.4367C15.125 14.355 16.8667 12.3017 18.26 10.6517C19.7083 8.94667 20.3683 8.25 22 8.25ZM22 5.5C16.5 5.5 16.5 11 11 12.8333C7.11333 14.135 5.5 18.3333 5.5 22C5.5 27.5 7.33333 34.8333 14.6667 34.8333C18.3333 34.8333 18.3333 38.5 23.8333 38.5C29.3333 38.5 31.1667 36.6667 34.8333 33C38.5 29.3333 38.5 27.5 38.5 22C38.5 16.5 36.6667 16.5 33 12.8333C29.3333 9.16667 29.3333 5.5 22 5.5ZM22 14.6667C17.9483 14.6667 14.6667 17.9483 14.6667 22C14.6667 26.0517 17.9483 29.3333 22 29.3333C26.0517 29.3333 29.3333 26.0517 29.3333 22C29.3333 17.9483 26.0517 14.6667 22 14.6667ZM22 18.3333C19.9833 18.3333 18.3333 19.9833 18.3333 22H16.5C16.5 18.975 18.975 16.5 22 16.5V18.3333Z"
            fill="black"
          />
        </svg>
      ),
      text: "Vegetarian<br/>Breakfast",
    },
    {
      svg: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0872 15.8362C25.3759 16.736 24.3647 17.35 23.2382 17.566M26.0872 15.8362C28.1037 13.2617 26.4834 9.79599 24.0368 8.86636C24.6904 5.9187 21.3789 3.08203 16.5905 3.08203C17.8809 3.90528 18.3264 4.91816 18.2817 5.8632C18.0489 10.8089 8.74807 8.06161 10.0215 15.9118M26.0872 15.8362C29.0672 15.8362 32.5468 19.7289 29.8874 23.1237M7.09232 23.1237C4.75361 20.139 7.26344 16.402 10.0215 15.9118M10.0215 15.9118C11.3257 15.6805 12.7502 15.9596 13.8772 16.8414M24.0383 8.86636C23.7855 10.0118 22.9345 11.1727 21.3404 12.1917M4.62565 23.1237L5.90215 27.3432C6.85953 30.5098 7.33898 32.0916 8.56615 33.0042C9.79486 33.9154 11.4491 33.9154 14.7559 33.9154H22.2454C25.5538 33.9154 27.2064 33.9154 28.4352 33.0042C29.6639 32.0931 30.1418 30.5098 31.0992 27.3432L32.3757 23.1237M3.08398 23.1237H33.9173"
            stroke="black"
            stroke-width="2.3125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Vegan<br/>Breakfast",
    },
  ];

  const [customReq, setcustomReq] = useState(false);
  const [scope, animate] = useAnimate();
  const AnimateFunc = () => {
    if (customReq) {
      animate(
        scope.current,
        { height: 24 },
        { duration: 0.7, ease: "easeInOut" }
      );
    } else {
      animate(
        scope.current,
        { height: scope.current.scrollHeight },
        { duration: 0.7, ease: "easeInOut" }
      );
    }
    setcustomReq(!customReq);
  };

  return (
    <>
      <CardComponent
        selectedLi={selectedLi}
        setselectedStates={setselectedStates}
        departure={departure}
        selectedStates={selectedStates}
        text={`Dinner for ${departure ? "departure" : "return"}`}
        ArrCon={Dinner}
        Nomargin={true}
      />
      <CardComponent
        selectedLi={selectedLi}
        setselectedStates={setselectedStates}
        departure={departure}
        selectedStates={selectedStates}
        text={`Breakfast for ${departure ? "departure" : "return"}`}
        ArrCon={BreakFast}
      />
      <motion.div
        initial={{ height: 24 }}
        ref={scope}
        className="flex flex-col gap-[7px] mt-[26px] overflow-hidden"
      >
        <div className="flex gap-[7px] select-none">
          <CheckBox
            clickFunc={() => {
              AnimateFunc();
            }}
          />
          <span className="med-16">
            Additional requests <span className="bk-16">(optinal)</span>
          </span>
        </div>

        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: customReq ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          placeholder='e.g., "No garlic" or "Extra portion'
          className="resize-none py-[9px] px-[14px] mt-[3px] outline-none placeholder:-text--disable-clr placeholder:text-[14px] placeholder:leading-[18px] w-[306px] min-h-[69px] border -border--devide-line-clr -bg--primary-white rounded-[11px]"
        />
      </motion.div>
    </>
  );
};

const TravelInsurance = () => {
  return <TravelProtection />;
};

const DonationForCharity = () => {
  return <DonationDialog />;
};
