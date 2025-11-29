"use client";
import { chevrondownward, close, plane, search, triangle } from "@/consonants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import LoginDialog from "./Login";
import Three_Btns from "./Three_Btns";
// import SearchBar from "./SearchBar";

function Navbar({ slug }) {
  const [OpenedLan, setOpenedLan] = useState(false);
  const [openLoginDialog, setopenLoginDialog] = useState(false);
  const pathname = "/";
  const [openedSearch, setopenedSearch] = useState(false);
  const openFunc = () => setOpenedLan(true);
  const searchBarRef = useRef();

  const EventFunc = (e) => {
    if (
      !searchBarRef.current.contains(e.target) &&
      e.target.id !== "searchbarActivate"
    ) {
      setopenedSearch(false);
    }
  };

  useEffect(() => {
    if (openedSearch) {
      window.addEventListener("click", EventFunc);
    }
    return () => window.removeEventListener("click", EventFunc);
  }, [openedSearch]);

  return (
    <>
      <AnimatePresence>
        {openLoginDialog && (
          <LoginDialog setopenLoginDialog={setopenLoginDialog} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {OpenedLan && <SelectorLan setOpenedLan={setOpenedLan} />}
      </AnimatePresence>
      <nav
        className={`flex items-start justify-between w-full pl-[48px] pr-[50px] z-[400] h-[82px] border-b -border--devide-line-clr sticky top-0 bg-white ${
          pathname === "/" && !openedSearch ? "back-fil" : ""
        } ${openedSearch ? "border-b-transparent" : ""} `}
      >
        <a
          href={"/"}
          className={`flex flex-col gap-0.5 pt-5  ${
            pathname.includes("search")
              ? "max-w-[485px] w-full"
              : "max-w-[355px] w-full"
          } ${pathname === "/" ? "max-w-[395px] w-full" : ""}`}
        >
          <h1 className="text-[32px] -text--brand-clr [&_span]:-text--primary-black leading-[25px] font-[500]">
            Book<span>any</span>
          </h1>
        </a>

        {pathname.includes("booking") && !pathname.includes("booking-") ? (
          !pathname.includes("thank-you-for-your-booking") && <BookingNav />
        ) : pathname.includes("search") ? (
          <SearchNav setopenedSearch={setopenedSearch} />
        ) : (
          !pathname.includes("account") && (
            <div className="flex items-end justify-between w-[184px]">
              <div className={`relative pt-6`}>
                {!slug && (
                  <span className="absolute top-0 left-[50%] translate-x-[-50%]">
                    {triangle}
                  </span>
                )}

                <button
                  className={`border-none outline-none text-[16px] leading-[20px] flex-center gap-1  ${
                    !slug
                      ? "-text--primary-black font-[500] "
                      : "-text--primary-gray font-[400] "
                  }`}
                >
                  {plane}
                  Flight
                </button>
              </div>
              <div className={`relative pt-6`}>
                {slug === "/Bus" && <span>{triangle}</span>}
                <button
                  className={`border-none hover:-text--primary-black outline-none text-[16px] leading-[20px] ${
                    slug === "/Bus"
                      ? "-text--primary-black font-[500] "
                      : "-text--primary-gray font-[400] "
                  }`}
                >
                  Bus
                </button>
              </div>
              <div className={`relative pt-6`}>
                {slug === "/Visa" && <span>{triangle}</span>}
                <button
                  className={`border-none outline-none hover:-text--primary-black text-[16px] leading-[20px] ${
                    slug === "/Bus"
                      ? "-text--primary-black font-[500] "
                      : "-text--primary-gray font-[400] "
                  }`}
                >
                  Visa
                </button>
              </div>
            </div>
          )
        )}

        <div className="gap-[17px] flex-center place-self-center ">
          <div
            className={`gap-[10px] flex-center [&_svg]:w-[13px] h-[41px] hover:-bg--light-gray ${
              pathname.includes("search") ? "w-[160px]" : "w-[180px]"
            }`}
          >
            {search}
            <input
              placeholder="Search Booking"
              className={`border-none outline-none bg-transparent placeholder:-text--primary-black placeholder:text-[16px] w-[130px] `}
            />
          </div>
          <div className="flex-center">
            {pathname.includes("search") ? (
              <div className="flex items-center gap-[7px] mr-[12px]">
                <span className="w-[25px] h-[25px] rounded-full [&_svg]:w-[25px] [&_svg]:h-[25px]">
                  {
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_766_5911)">
                        <mask
                          id="mask0_766_5911"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="36"
                          height="36"
                        >
                          <path d="M0 0H36V36H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_766_5911)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-6.67969 0H47.3203V36H-6.67969V0Z"
                            fill="#0C590B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M-6.67969 0H6.85547V36H-6.67969V0Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.3848 15.8473L26.191 15.3832L25.0379 17.3027L24.7988 15.0809L22.6191 14.5746L24.6582 13.6605L24.4684 11.4316L25.973 13.091L28.0332 12.2191L26.9152 14.1598L28.3918 15.8473H28.3848Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.2062 21.5156C28.7383 22.5367 28.0731 23.4552 27.249 24.2183C26.4249 24.9814 25.458 25.5741 24.404 25.9622C23.35 26.3504 22.2297 26.5263 21.1074 26.48C19.9852 26.4337 18.8832 26.1659 17.8648 25.6922C15.7986 24.7355 14.1971 22.9973 13.4125 20.8598C12.6279 18.7223 12.7246 16.3607 13.6812 14.2945C14.1563 13.2324 14.8484 12.2814 15.713 11.5028C16.5776 10.7242 17.5956 10.1351 18.7015 9.77344C18.412 10.0145 18.1351 10.2703 17.8718 10.5398C16.5 12.0591 15.7718 14.0516 15.8407 16.0974C15.9096 18.1432 16.7703 20.0822 18.2412 21.5057C19.7121 22.9292 21.6783 23.7259 23.7252 23.7277C25.7721 23.7296 27.7398 22.9365 29.2133 21.5156H29.2062Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_766_5911">
                          <rect width="36" height="36" rx="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
                <button
                  onClick={openFunc}
                  className="med-14 !-text--primary-gray outline-none hover:!-text--primary-black  "
                >
                  Pakistan
                </button>

                <button
                  onClick={openFunc}
                  className="med-14 !leading-[12px] !-text--primary-gray  outline-none bg-white px-[7px] border-x -border--disable-clr hover:!-text--primary-black "
                >
                  PKR
                </button>
                <button
                  onClick={openFunc}
                  className="bg-white border-none outline-none med-14 !-text--primary-gray hover:!-text--primary-black "
                >
                  English
                </button>
              </div>
            ) : (
              <CountrySelect openFunc={openFunc} />
            )}
          </div>
          <button
            onClick={() => {
              setopenLoginDialog(true);
            }}
            className="w-[81px] -text--primary-white -bg--brand-clr fonr-[400] rounded-[8px] h-[41px]"
          >
            Login
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {openedSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[82px] -bg--primary-backdrop-clr z-[200]"
          >
            <div ref={searchBarRef} className="flex flex-col w-full bg-white">
              <Three_Btns />
              {/*<SearchBar setopenedSearch={setopenedSearch} />*/}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

const CountrySelect = ({ openFunc }) => {
  const [selectedCountry, setselectedCountry] = useState({
    PKR: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_766_5911)">
          <mask
            id="mask0_766_5911"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <path d="M0 0H36V36H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_766_5911)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-6.67969 0H47.3203V36H-6.67969V0Z"
              fill="#0C590B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-6.67969 0H6.85547V36H-6.67969V0Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.3848 15.8473L26.191 15.3832L25.0379 17.3027L24.7988 15.0809L22.6191 14.5746L24.6582 13.6605L24.4684 11.4316L25.973 13.091L28.0332 12.2191L26.9152 14.1598L28.3918 15.8473H28.3848Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.2062 21.5156C28.7383 22.5367 28.0731 23.4552 27.249 24.2183C26.4249 24.9814 25.458 25.5741 24.404 25.9622C23.35 26.3504 22.2297 26.5263 21.1074 26.48C19.9852 26.4337 18.8832 26.1659 17.8648 25.6922C15.7986 24.7355 14.1971 22.9973 13.4125 20.8598C12.6279 18.7223 12.7246 16.3607 13.6812 14.2945C14.1563 13.2324 14.8484 12.2814 15.713 11.5028C16.5776 10.7242 17.5956 10.1351 18.7015 9.77344C18.412 10.0145 18.1351 10.2703 17.8718 10.5398C16.5 12.0591 15.7718 14.0516 15.8407 16.0974C15.9096 18.1432 16.7703 20.0822 18.2412 21.5057C19.7121 22.9292 21.6783 23.7259 23.7252 23.7277C25.7721 23.7296 27.7398 22.9365 29.2133 21.5156H29.2062Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_766_5911">
            <rect width="36" height="36" rx="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  });
  return (
    <>
      <div
        onClick={(e) => {
          openFunc();
        }}
        id="country-opener"
        className="relative gap-2 px-3 cursor-pointer flex-center w-[100px]"
      >
        <span className="w-[36px] h-[36px] rounded-full pointer-events-none">
          {selectedCountry[Object.keys(selectedCountry)[0]]}
        </span>
        <p className="-text--primary-black h-[13px] leading-[13px] text-[14px] font-[500] pointer-events-none">
          {Object.keys(selectedCountry)[0]}
        </p>
        <span className="[&_svg]:w-[12px] pointer-events-none">
          {chevrondownward}
        </span>
      </div>
    </>
  );
};

const BookingNav = () => {
  const { selectedWindow, setselectedWindow } = useContext(ContextSearch);
  const liNavs = ["Review", "Add-ons", "Add details", "Payment"];

  return (
    <div className="max-w-[592px] w-full h-[41px]  flex-center place-self-center">
      <ul className="flex items-center gap-[20px] w-full h-full">
        {liNavs.map((it, index) => (
          <>
            <li
              key={index}
              onClick={() => setselectedWindow(index)}
              className={`text-[16px] leading-[20px] flex-center gap-[10px] cursor-pointer relative ${
                selectedWindow < index
                  ? "-text--primary-gray font-[400] [&_span>svg]:hover:-fill--primary-black "
                  : ""
              } ${
                selectedWindow === index
                  ? "-text--primary-black font-[500] "
                  : ""
              } ${
                selectedWindow > index ? "-text--brand-clr font-[500]" : ""
              } `}
            >
              <span
                className={`${
                  selectedWindow === index ? "[&_svg]:-fill--primary-black" : ""
                }  ${selectedWindow > index ? "[&_svg]:fill-[#12CC46]" : ""}`}
              >
                {check}
              </span>
              {it}
              {selectedWindow === index && (
                <span className="w-[102%] h-[2px] absolute bottom-[-33.4px] left-[50%] translate-x-[-49%] -bg--primary-black" />
              )}
            </li>
            {index !== liNavs.length - 1 && <span>{line}</span>}
          </>
        ))}
      </ul>
    </div>
  );
};

const SearchNav = ({ setopenedSearch }) => {
  return (
    <div
      id="searchbarActivate"
      onClick={() => setopenedSearch(true)}
      style={{ boxShadow: "0px 4.68px 17.95px 0px #0000000D" }}
      className="max-w-[486px] w-full h-[47px] [&_*]:pointer-events-none flex items-center border -border--devide-line-clr rounded-[16px] place-self-center cursor-pointer"
    >
      <div className="flex items-center [&_span]:whitespace-nowrap gap-[15px] [&_span]:pl-[17px] [&_span]:font-[500] [&_span]:text-[15px] [&_span]:-text--primary-black [&_span:not(:nth-child(1))]:border-l [&_span]:-border--devide-line-clr ">
        <span>Karachi</span>
        <span>Islamabad</span>
        <span>1 Jul - Aug 5</span>
        <span>Eco - 3 Travaler</span>
      </div>
      <button className="w-[32px] h-[32px] rounded-full -bg--brand-clr [&_path]:fill-white flex-center ml-[13px] mr-[9px]">
        {search}
      </button>
    </div>
  );
};

const SelectorLan = ({ setOpenedLan }) => {
  const SelectComp = ({ type, selectedOpt, flag }) => {
    const Options = [];

    return (
      <div className="flex flex-col gap-[6px]">
        <span className="text-[12px] font-[500] leading-[15px] -text--primary-black w-full flex">
          {type}
        </span>
        <div
          className={`flex flex-col h-[55px] w-full rounded-[10px] border border-[#E5E5E5] pl-[20px] pr-[16px] hover:border-black ${
            flag ? "!pl-[12px]" : ""
          }`}
        >
          <div className="flex items-center justify-between w-full h-[55px]">
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-black flex-center gap-[12px] ">
              {flag && (
                <span className="w-[36px] h-[36px] rounded-full [&_svg]:w-[36px] [&_svg]:h-[36px]">
                  {Pk}
                </span>
              )}
              {selectedOpt}
            </span>
            <span>{chevrondownward}</span>
          </div>
          {Options.map((it, index) => (
            <span key={index}>{it}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 flex-center -bg--primary-backdrop-clr z-[500]"
    >
      <div
        style={{ boxShadow: "8px 8px 25px 0px #00000040" }}
        className="max-w-[391px] w-full h-[580px] pl-[22px] pr-[20px] py-[22px] bg-white rounded-[21px]"
      >
        <div className="flex justify-end w-full">
          <button
            onClick={() => setOpenedLan(false)}
            className="border-none outline-none "
          >
            {close}
          </button>
        </div>
        <p className="text-[22px] font-[700] leading-[28px] -text--primary-black mt-[30px]">
          Regional settings
        </p>
        <div className="flex flex-col gap-[22px] mt-[33px]">
          <SelectComp selectedOpt={"English (UK)"} type={"Language"} />
          <SelectComp selectedOpt={"PKR"} type={"Currency"} />
          <SelectComp
            selectedOpt={"Pakistan"}
            flag={true}
            type={"Country / Region"}
          />
        </div>
        <p className="text-[15px] leading-[22px] -text--primary-black font-[400] mt-[18px]">
          Selecting the country you’re in will give you local deals and
          information.
        </p>
        <button className="h-[53px] text-[18px] leading-[23px] text-white font-[400] -bg--primary-black rounded-[10px] w-full justify-self-end mt-[37px]">
          Save
        </button>
      </div>
    </motion.div>
  );
};

const check = (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="#AAAAAA"
    xmlns="http://www.w3.org/2000/svg"
    stroke="white"
  >
    <circle cx="8" cy="8.5" r="8" fill="inherit" />
    <path
      d="M4.5 9L6.5 11L11.5 6"
      stroke="inherit"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const line = (
  <svg
    width="21"
    height="1"
    viewBox="0 0 21 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="0.5" x2="21" y2="0.5" stroke="#DDDDDD" />
  </svg>
);

const Pk = (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_766_5911)">
      <mask
        id="mask0_766_5911"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <path d="M0 0H36V36H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_766_5911)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-6.67969 0H47.3203V36H-6.67969V0Z"
          fill="#0C590B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-6.67969 0H6.85547V36H-6.67969V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.3848 15.8473L26.191 15.3832L25.0379 17.3027L24.7988 15.0809L22.6191 14.5746L24.6582 13.6605L24.4684 11.4316L25.973 13.091L28.0332 12.2191L26.9152 14.1598L28.3918 15.8473H28.3848Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.2062 21.5156C28.7383 22.5367 28.0731 23.4552 27.249 24.2183C26.4249 24.9814 25.458 25.5741 24.404 25.9622C23.35 26.3504 22.2297 26.5263 21.1074 26.48C19.9852 26.4337 18.8832 26.1659 17.8648 25.6922C15.7986 24.7355 14.1971 22.9973 13.4125 20.8598C12.6279 18.7223 12.7246 16.3607 13.6812 14.2945C14.1563 13.2324 14.8484 12.2814 15.713 11.5028C16.5776 10.7242 17.5956 10.1351 18.7015 9.77344C18.412 10.0145 18.1351 10.2703 17.8718 10.5398C16.5 12.0591 15.7718 14.0516 15.8407 16.0974C15.9096 18.1432 16.7703 20.0822 18.2412 21.5057C19.7121 22.9292 21.6783 23.7259 23.7252 23.7277C25.7721 23.7296 27.7398 22.9365 29.2133 21.5156H29.2062Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_766_5911">
        <rect width="36" height="36" rx="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
