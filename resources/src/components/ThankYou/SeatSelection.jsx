import { chevrondownward, starS, toArrows, unKown } from "@/consonants";
import { motion, useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function SeatSelection({ departure }) {
  return (
    <>
      <span className="med-16">
        Select Seat for {departure ? "departure" : "return"}
      </span>

      <div className="flex flex-col w-full mt-[17px]">
        <DropDown flightNm={"KHI-DXB"} duration={"2hrs, 30mins"} border={false}>
          <SeatSelectionComp />
        </DropDown>
        <DropDown flightNm={"KHI-DXB"} duration={"2hrs, 30mins"} border={true}>
          <SeatSelectionComp rounded={true} />
        </DropDown>
      </div>
    </>
  );
}

export default SeatSelection;

const DropDown = ({ children, flightNm, duration, border }) => {
  const [opened, setopened] = useState(false);
  const [scope, animate] = useAnimate();

  const AnimFunc = async () => {
    setopened(!opened);
    if (opened) {
      await animate(scope.current, { overflow: "hidden" }, { duration: 0 });
      animate(
        scope.current,
        { height: 54 },
        { duration: 0.5, ease: "easeInOut" }
      );
    } else {
      await animate(
        scope.current,
        { height: scope.current.scrollHeight + 2 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animate(scope.current, { overflow: "unset" }, { duration: 0 });
    }
  };

  return (
    <div
      ref={scope}
      className={`flex flex-col h-[54px] hover:border hover:-border--primary-black border -border--devide-line-clr overflow-hidden ${
        border
          ? "rounded-b-[12px] border-t-transparent"
          : "rounded-t-[12px] py-[0.5px]"
      } ${opened ? "!-border--primary-black" : ""}`}
    >
      <div
        onClick={AnimFunc}
        className={`flex items-center justify-between min-h-[54px] pr-[16px] pl-[23px] cursor-pointer overflow-hidden ${
          opened ? "-bg--light-gray border-b -border--primary-black" : ""
        } ${border ? "" : "rounded-t-[12px] py-[0.5px]"}`}
      >
        <span className="med-16">{flightNm}</span>
        <div className="flex gap-[15px]">
          <span className="bk-16">
            Flight duration <span className="font-[500]">({duration})</span>
          </span>
          <motion.span
            animate={{ rotate: opened ? "180deg" : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex-center"
          >
            {chevrondownward}
          </motion.span>
        </div>
      </div>
      {children}
    </div>
  );
};

const SeatSelectionComp = ({
  selectedSeat,
  stRate,
  prfRate,
  elRate,
  rounded,
}) => {
  const [ln, setln] = useState(14);
  const [selectedOrder, setselectedOrder] = useState("30-48");
  const options = [
    { text: "Selected", pdL: 0, value: "Seat - ?", svg: unKown },
    {
      text: "Standard",
      top: true,
      pdL: "75px",
      value: "PKR 4890",
      svg: (
        <span className="w-[10px] h-[10px] -bg--brand-clr rounded-full flex"></span>
      ),
    },
    {
      text: "Preferred",
      top: true,
      pdL: "48px",
      value: "PKR 8790",
      svg: (
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21591 0.941332L9.02587 2.58067C9.12464 2.78074 9.27066 2.95372 9.45129 3.08469C9.63193 3.21565 9.84175 3.30064 10.0626 3.33231L11.8639 3.59149C12.1251 3.62404 12.3715 3.7306 12.5742 3.89859C12.7768 4.06658 12.9271 4.28901 13.0075 4.53964C13.0879 4.79027 13.0949 5.05866 13.0277 5.31315C12.9606 5.56764 12.8221 5.79763 12.6285 5.97599L11.3326 7.27192C11.1727 7.42759 11.0532 7.61987 10.9843 7.83212C10.9155 8.04437 10.8993 8.2702 10.9374 8.49008L11.2484 10.2849C11.2801 10.5357 11.2424 10.7903 11.1394 11.0211C11.0363 11.2519 10.8719 11.4499 10.664 11.5937C10.4561 11.7374 10.2127 11.8213 9.96042 11.8361C9.70811 11.851 9.45657 11.7963 9.23321 11.6781L7.61979 10.8292C7.42011 10.7237 7.19768 10.6685 6.97183 10.6685C6.74598 10.6685 6.52354 10.7237 6.32387 10.8292L4.71044 11.6781C4.48322 11.7983 4.2268 11.8525 3.97035 11.8342C3.71389 11.816 3.4677 11.7262 3.25978 11.5749C3.05185 11.4237 2.89053 11.2172 2.79418 10.9788C2.69782 10.7405 2.67029 10.4799 2.71472 10.2266L3.01926 8.43177C3.05973 8.21346 3.04668 7.9886 2.98122 7.77645C2.91577 7.56429 2.79987 7.37116 2.64345 7.2136L1.34752 5.91768C1.16383 5.73829 1.03381 5.51121 0.9721 5.26198C0.910386 5.01274 0.919421 4.75123 0.998188 4.50685C1.07695 4.26248 1.22233 4.04491 1.41797 3.87863C1.61361 3.71234 1.85176 3.60393 2.10564 3.56558L3.91345 3.30639C4.13395 3.27366 4.34331 3.18826 4.52378 3.05742C4.70425 2.92657 4.85052 2.75415 4.95019 2.55476L5.75366 0.915414C5.87132 0.68909 6.0494 0.4998 6.26813 0.368561C6.48686 0.237321 6.73768 0.169267 6.99275 0.171951C7.24782 0.174636 7.49715 0.247956 7.71307 0.383771C7.92899 0.519586 8.10304 0.712581 8.21591 0.941332Z"
            fill="#FF8E7A"
          />
        </svg>
      ),
    },
    {
      text: "Extra legroom",
      top: true,
      pdL: "40px",
      value: "PKR 18,678",
      svg: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3346 0.414062H4.66797C3.5408 0.414063 2.45979 0.861829 1.66276 1.65886C0.865735 2.45589 0.417969 3.53689 0.417969 4.66406V10.3307C0.417969 11.4579 0.865735 12.5389 1.66276 13.3359C2.45979 14.133 3.5408 14.5807 4.66797 14.5807H10.3346C11.4618 14.5807 12.5428 14.133 13.3398 13.3359C14.1369 12.5389 14.5846 11.4579 14.5846 10.3307V4.66406C14.5846 3.53689 14.1369 2.45589 13.3398 1.65886C12.5428 0.861829 11.4618 0.414063 10.3346 0.414062ZM6.94172 9.06281L5.6738 10.3307L6.23339 10.8903C6.33086 10.9898 6.39686 11.1157 6.42314 11.2525C6.44942 11.3892 6.43482 11.5306 6.38116 11.6591C6.3275 11.7876 6.23715 11.8974 6.12142 11.9749C6.00569 12.0523 5.86971 12.0939 5.73047 12.0945H4.45547C4.04217 12.0945 3.6458 11.9303 3.35356 11.6381C3.06132 11.3458 2.89714 10.9494 2.89714 10.5361V9.26823C2.89783 9.12839 2.93991 8.99188 3.01806 8.87591C3.09622 8.75994 3.20695 8.6697 3.3363 8.61656C3.46597 8.5632 3.60856 8.54953 3.746 8.57727C3.88345 8.60501 4.00957 8.67292 4.10839 8.7724L4.66797 9.33198L5.93589 8.06406C6.00173 7.99767 6.08008 7.94498 6.16639 7.90901C6.25271 7.87305 6.34529 7.85454 6.4388 7.85454C6.53231 7.85454 6.62489 7.87305 6.71121 7.90901C6.79753 7.94498 6.87587 7.99767 6.94172 8.06406C7.07365 8.19678 7.1477 8.37631 7.1477 8.56344C7.1477 8.75057 7.07365 8.9301 6.94172 9.06281ZM12.1055 5.72656C12.1062 5.86761 12.0648 6.00566 11.9865 6.12302C11.9083 6.24038 11.7968 6.33171 11.6663 6.38531C11.5807 6.41918 11.4892 6.43602 11.3971 6.4349C11.3039 6.43543 11.2115 6.41757 11.1252 6.38232C11.0389 6.34707 10.9604 6.29513 10.8942 6.22948L10.3346 5.6699L9.06672 6.93781C9.00087 7.0042 8.92253 7.0569 8.83621 7.09286C8.74989 7.12882 8.65731 7.14734 8.5638 7.14734C8.47029 7.14734 8.37771 7.12882 8.29139 7.09286C8.20508 7.0569 8.12673 7.0042 8.06089 6.93781C7.92896 6.8051 7.85491 6.62557 7.85491 6.43844C7.85491 6.25131 7.92896 6.07178 8.06089 5.93906L9.33589 4.66406L8.76922 4.0974C8.67175 3.99796 8.60575 3.872 8.57946 3.73526C8.55318 3.59852 8.56778 3.45706 8.62145 3.32857C8.67511 3.20009 8.76545 3.09027 8.88118 3.01284C8.99691 2.93541 9.13289 2.8938 9.27214 2.89323H10.5471C10.9599 2.89509 11.3551 3.05987 11.647 3.35171C11.9388 3.64355 12.1036 4.03884 12.1055 4.45156V5.72656Z"
            fill="#008060"
          />
        </svg>
      ),
    },
  ];

  const SelectedPrices = ({ text, value, svg, pdL, top }) => {
    return (
      <div style={{ paddingLeft: pdL }} className={`flex-center gap-[6px] `}>
        <div className={`${top ? "place-self-start mt-[5px]" : ""}`}>{svg}</div>
        <div className="flex flex-col">
          <p className="med-16 !-text--primary-gray !leading-[16px]">{text}</p>
          <span className="med-14">{value}</span>
        </div>
      </div>
    );
  };

  const headers = {
    0: ["A", "B", "C"],
    1: ["D", "E", "F"],
    2: ["G", "H", "I"],
    3: "Economy",
  };

  const BoxS = ({ num, selected }) => {
    return (
      <div className="flex flex-wrap gap-[2px]">
        {Array.from({ length: num }, (_, i) => i + 1).map((it) => (
          <div
            key={it}
            className={`w-[5px] h-[5px] border-[1px] -border--devide-line-clr bg-white ${
              selected ? "-bg--disable-clr -border--primary-gray" : ""
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className={`flex flex-col w-full`}>
      <div className="flex items-center h-[69px] pr-[26px] pl-[18px] w-full">
        {options.map((it, index) => (
          <SelectedPrices
            key={index}
            svg={it.svg}
            text={it.text}
            value={it.value}
            pdL={it.pdL}
            top={it.top}
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-[66px] w-full border-y -border--devide-line-clr py-[3px] h-[22px] pl-[56px] pr-[41px]">
        {Object.keys(headers).map((it) => {
          return typeof headers[it] === "string" ? (
            <span className="text-[12px] leading-[15px] font-[500] -text--primary-black">
              {headers[it]}
            </span>
          ) : (
            <ul className="flex gap-[31px]">
              {headers[it]?.map((it) => (
                <li className="text-[12px] leading-[15px] font-[500] -text--primary-black">
                  {it}
                </li>
              ))}
            </ul>
          );
        })}
      </div>
      <div className={`flex `}>
        <div className="flex flex-col">
          <div className="flex">
            <div className="min-w-[22px] flex items-center border-r -border--devide-line-clr flex-col gap-[24px] pt-[21px] pb-[25px]">
              {Array.from({ length: ln }, (_, i) => i + 1).map((it, index) => (
                <span className="med-12" key={index}>
                  {it}
                </span>
              ))}
            </div>
            <div className="flex px-[23px] pt-[14px] pb-[18px] gap-[48px]">
              <ReturnSeats ln={ln} name={"line-1-"} />
              <ReturnSeats ln={ln} name={"line-2-"} />
              <ReturnSeats ln={ln} name={"line-3-"} />
            </div>
          </div>
          <button
            className={`w-full h-[29px] flex-center -bg--light-gray border-t -border--devide-line-clr ${
              rounded ? "rounded-b-[12px]" : ""
            }`}
          >
            {chevrondownward}
          </button>
        </div>
        <div
          className={`w-full flex items-center flex-col justify-between border-l -bg--light-gray -border--devide-line-clr pt-[8px] pb-[12px] ${
            rounded ? "rounded-b-[12px]" : ""
          }`}
        >
          <div className="w-[88px] h-[436px] gap-[1px] flex flex-col ">
            <span
              className="w-full h-[78px] flex !bg-bottom !bg-no-repeat"
              style={{ background: 'url("/topRounded.png")' }}
            ></span>
            <div className="w-full h-[78px] flex flex-col justify-between items-center bg-white contrast-[0.65] px-[7px] pt-[4px] pb-[2px]">
              <div className="flex-center gap-[7px] ">
                <BoxS num={27} />
                <BoxS num={27} />
                <BoxS num={27} />
              </div>
              <span className="-text--devide-line-clr text-[12px] font-[400] leading-[15px]">
                Business
              </span>
            </div>
            <div
              onClick={() => setselectedOrder("16-29")}
              className={`w-full gap-[3px] flex-center flex-col h-[120px] hover:contrast-[0.8] bg-white border-x -border--primary-black hover:border-transparent cursor-pointer px-[7px] pt-[4px] pb-[2px] ${
                selectedOrder === "16-29" ? "contrast-[0.8] border-none" : ""
              }`}
            >
              <div className="flex-center gap-[7px] ">
                <BoxS num={42} />
                <BoxS num={42} />
                <BoxS num={42} />
              </div>
              <span className="-text--primary-black text-[12px] font-[400] leading-[15px]">
                16-29
              </span>
            </div>
            <div
              onClick={() => setselectedOrder("30-48")}
              className={`w-full gap-[3px] flex-center flex-col h-[157px] hover:contrast-[0.8] bg-white border-x -border--primary-black hover:border-transparent cursor-pointer px-[7px] pt-[4px] pb-[2px] ${
                selectedOrder === "30-48" ? "contrast-[0.8] border-none" : ""
              }`}
            >
              <div className="flex-center gap-[7px] ">
                <BoxS num={57} />
                <BoxS num={57} />
                <BoxS num={57} />
              </div>
              <span className="-text--primary-black text-[12px] font-[400] leading-[15px]">
                30-48
              </span>
            </div>
          </div>
          <button className="-bg--primary-black w-[100px] h-[36px] rounded-[5px] bk-14 !text-white ">
            Next Flight
          </button>
        </div>
      </div>
    </div>
  );
};

const DialogCLick = ({
  text,
  seatName,
  svg,
  des,
  className,
  setshowDialoag,
}) => {
  return (
    <div className={`flex-col flex-center w-max ${className}`}>
      <div
        style={{ boxShadow: "0px 2px 13px 0px #00000021" }}
        className="w-[312px] h-[215px] border  -border--devide-line-clr flex flex-col rounded-[10px] bg-white"
      >
        <div className="h-[72px] w-full pl-[17px] flex flex-col py-[11px]">
          <div className="flex gap-[3px]">
            <h2 className="cl-h1">{seatName}</h2>
            <span className=" [&_svg]:w-[14px] [&_svg]:h-[14px] mt-[3px] ">
              {svg}
            </span>
          </div>
          <p className="bk-14">{text}</p>
        </div>
        <div className="h-[85px] pl-[17px] flex flex-col justify-center gap-[7px] border-y -border--devide-line-clr  ">
          {des?.map((it) => (
            <p className="bk-12">{it}</p>
          ))}
        </div>
        <div className="pt-[11px] flex items-center justify-end pr-[11px] ">
          <button
            onClick={() => setshowDialoag(false)}
            className="text-white -bg--brand-clr w-[113px] h-[36px] rounded-[5px] "
          >
            Select Seat
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-7px] triangle "></div>
    </div>
  );
};

const ReturnSeats = ({ ln, name }) => {
  const SpSvg = ({ svg, des, text, seatName, id }) => {
    const [showDialoag, setshowDialoag] = useState(false);
    const dialogRef = useRef();

    const CloseFunc = (e) => {
      if (e.target.id !== id && !dialogRef.current.contains(e.target)) {
        setshowDialoag(false);
      }
    };

    useEffect(() => {
      if (showDialoag) {
        window.addEventListener("click", CloseFunc);
      }
      return () => window.removeEventListener("click", CloseFunc);
    }, [showDialoag]);

    return (
      <div ref={dialogRef} className="relative flex-center w-[31px] h-[31px]">
        {showDialoag && (
          <DialogCLick
            des={des}
            text={text}
            seatName={seatName}
            className="absolute z-[20] top-[-229px]"
            svg={svg}
            setshowDialoag={setshowDialoag}
          />
        )}
        <button
          id={id}
          onClick={() => setshowDialoag(!showDialoag)}
          className={`w-[31px] h-[31px] rounded-[4.2px] border -border--devide-line-clr [&_svg]:pointer-events-none flex-center cursor-pointer outline-none hover:-border--primary-black ${
            showDialoag ? "-border--primary-black" : ""
          }`}
        >
          {svg}
        </button>
      </div>
    );
  };

  return (
    <div className="flex w-[109px] gap-[8px] flex-wrap">
      {Array.from({ length: ln * 3 }, (_, i) => i + 1).map((it) => (
        <SpSvg
          key={it}
          des={
            it <= 3 * 3
              ? [
                  "Seat has direct access to the aisle",
                  "Non-refundable if your travel plans change",
                  "Wheelchair accessible",
                ]
              : it <= 6 * 3
              ? [
                  "Seat has direct access to the aisle",
                  "Non-refundable if your travel plans change",
                  "Window seat",
                ]
              : [
                  "In the center",
                  "Non-refundable if your travel plans change",
                  "Left side seat",
                ]
          }
          text={
            it <= 3 * 3
              ? "Wheelchair accessible"
              : it <= 6 * 3
              ? "Right side seat"
              : "Center Seat"
          }
          seatName={it <= 3 * 3 ? "40F" : it <= 6 * 3 ? "67K" : "125C"}
          svg={
            it <= 3 * 3 ? (
              toArrows
            ) : it <= 6 * 3 ? (
              starS
            ) : it <= ln * 3 ? (
              <span className="w-[10px] h-[10px] -bg--brand-clr rounded-full flex"></span>
            ) : (
              ""
            )
          }
          id={name + "-" + it}
        />
      ))}
    </div>
  );
};
