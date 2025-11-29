"use client";
import AddonComp from "@/components/BookingComponents/AddonComp";
import ContactComp from "@/components/BookingComponents/ContactComp";
import PaymentComp from "@/components/BookingComponents/PaymentComp";
import ReviewComp from "@/components/BookingComponents/ReviewComp";
import { DetailsCard } from "@/components/FlightsCard/Flights";
import LoginDialog from "@/components/LginDialog";
import { ContextSearch } from "@/components/MainStateSearchBar/MainStateSearchBar";
import {
  airline,
  bag,
  borderRightSm,
  borderTop,
  chevrondownward,
  chevronleft,
  classtype,
  meal,
  takeOff,
} from "@/consonants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext, useEffect, useState } from "react";

function page() {
  const { selectedWindow, setselectedWindow } = useContext(ContextSearch);
  const [OpenedLoginDialog, setOpenedLoginDialog] = useState(false);
  const router = useRouter();

  const windows = {
    0: { name: "Review", compon: <ReviewComp /> },
    1: { name: "Add-ons", compon: <AddonComp /> },
    2: { name: "Contact details", compon: <ContactComp /> },
    3: { name: "Payment", compon: <PaymentComp /> },
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenedLoginDialog(true);
    }, 2000);
  }, []);

  return (
    <section className="max-w-[1173px] w-full m-auto">
      <AnimatePresence>
        {OpenedLoginDialog && (
          <LoginDialog setOpenedLoginDialog={setOpenedLoginDialog} />
        )}
      </AnimatePresence>
      <div className="flex items-start justify-start gap-[125px]">
        <div className="max-w-[620px] w-full flex flex-col pt-[78px] pb-[10px] ">
          <div className="relative flex items-center justify-between">
            <Link
              href={"/"}
              className="absolute left-[-45px] w-[41px] h-[41px] rounded-full flex-center hover:-bg--light-gray"
            >
              {chevronleft}
            </Link>
            <h1 className="leading-[33px] -text--primary-black text-[26px] font-[500]">
              {windows[selectedWindow].name === "Review"
                ? "Review your trip"
                : windows[selectedWindow].name}
            </h1>
            <span className="text-[16px] leading-[20px] font-[400] -text--primary-gray">
              Finish booking in{" "}
              <span className="text-[16px] font-[500] leading-[20px] -text--error-1">
                03:58:48
              </span>
            </span>
          </div>
          {windows[selectedWindow].compon}
          <button
            onClick={async () => {
              if (selectedWindow < 3) {
                setselectedWindow((e) => e + 1);
              } else {
                await router.push("/thank-you-for-your-booking");
                setTimeout(() => {
                  setselectedWindow(0);
                }, 5000);
              }
            }}
            className="w-[173px] h-[55px] rounded-[8px] -bg--brand-clr med-16 !text-white mt-[45px]"
          >
            Countinue
          </button>
        </div>
        <PriceCalculation selectedWindow={selectedWindow} />
      </div>
    </section>
  );
}

export default page;

const PriceCalculation = ({ selectedWindow }) => {
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
      className={` flex flex-col top-[147px] ${
        selectedWindow < 2 ? "sticky" : "mt-[61px]"
      }`}
    >
      <div
        ref={scopeMain}
        style={{ boxShadow: "0px 9.27px 42.86px 0px #00000020" }}
        className="flex w-[384px] h-[220px] py-[18px] rounded-[12px] flex-col border -border--devide-line-clr"
      >
        <p className="text-[22px] leading-[28px] font-[500] -text--primary-black  px-[20px] ">
          Price
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
      {selectedWindow > 1 && (
        <div className="flex flex-col w-full pb-5">
          <CardPart />
          <CardPart />
        </div>
      )}
    </div>
  );
};

const CardPart = () => {
  const [detailsDialog, setdetailsDialog] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex-center gap-[9px]">
        <AnimatePresence>
          {detailsDialog && <DetailsCard setdetailsDialog={setdetailsDialog} />}
        </AnimatePresence>
        <span className="flex-center [&_svg]:absolute h-[137px] overflow-hidden relative">
          {borderTop}
          <span className="w-[43px] z-[10] h-[43px] rounded-full -bg--success-1 [&_path]:fill-white flex-center">
            {takeOff}
          </span>
        </span>
        <button className="w-[175px] h-[47px] rounded-[47px] -bg--primary-black text-white text-[15px] font-[500] leading-[19px]">
          Mon 13, Aug 2024
        </button>
        <button
          onClick={() => {
            setdetailsDialog(true);
          }}
          className="w-[137px] hover:-bg--primary-black hover:text-white hover:-border--primary-black rounded-[47px] h-[47px] border -border--devide-line-clr text-[15px] font-[500] leading-[19px] -text--primary-black "
        >
          Travel details
        </button>
      </div>
      <div className="flex flex-col w-full overflow-hidden rounded-[12px] shadow-2xl max-w-[384px] h-[145px] border -border--devide-line-clr ">
        <div className="-bg--light-gray flex pt-[4.6px] pb-[6.6px] px-[17px] justify-between">
          <div className="flex-center gap-[7px] ">
            <span className="w-[21px] h-[21px] rounded-full [&_svg]:w-[21px] [&_svg]:h-[21px]">
              {airline}
            </span>
            <span className="text-[14px] leading-[18px] font-[500] -text--primary-black">
              TURKISH AIRLINES
            </span>
          </div>
          <span className="-text--success-1 text-[12px] leading-[15px] font-[400]">
            Departure
          </span>
        </div>
        <div className="flex items-center justify-between px-[19px] mt-[11px]">
          <span className="text-[18px] font-[500] leading-[23px] -text--primary-black">
            4:40 AM
          </span>
          <span className="text-[15px] flex items-center gap-[11px] font-[400] leading-[19px] -text--primary-black">
            {borderRightSm}
            21h 37m
            {borderRightSm}
          </span>{" "}
          <span className="text-[18px] font-[500] leading-[23px] -text--primary-black">
            6:40 AM
          </span>
        </div>
        <div className="flex items-center px-[19px] mt-[6px] justify-between [&_svg]:text-[14px] [&_svg]:font-[400] [&_svg]:leading-[18px] [&_svg]:-text--primary-black">
          <span>Karachi (KHI)</span>
          <span>(Non-stop)</span>
          <span>Dubai (DXB)</span>
        </div>
        <div className="mt-[16px] flex items-center justify-start pl-[19px] pr-[12px] border-t -border--devide-line-clr w-full">
          <button className="flex items-center -text--primary-black gap-[5px] pr-[9px] text-[14px] leading-[18px] [&_svg]:w-[13px] h-[37px] pb-[5px]">
            {bag}
            Total: 20kg Pcs 1
          </button>
          <button className="flex items-center -text--primary-black gap-[5px] border-x px-[10px] -border--devide-line-clr text-[14px] leading-[18px] [&_svg]:w-[17px] h-[37px] pb-[5px]">
            {meal} ML Included
          </button>
          <button className="flex items-center -text--primary-black gap-[5px] pl-[11px] text-[14px] leading-[18px] [&_svg]:w-[13px] h-[37px] pb-[5px]">
            {classtype} Economy
          </button>
        </div>
      </div>
    </div>
  );
};
