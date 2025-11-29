"use client";
import {
  addons,
  airline,
  airlineWhite,
  bag,
  borderBig,
  check,
  chevrondownward,
  classtype,
  close,
  copyIcon,
  EmergencySvg,
  masterCard,
  meal,
  QRCode,
  seatsSvg,
} from "@/consonants";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { CheckBox } from "../search/page";
import SideBar from "@/components/ThankYou/Sidebar";
import Link from "next/link";

function page() {
  const [sideBarDaialog, setsideBarDaialog] = useState(false);
  const [selectedLi, setselectedLi] = useState("Additional Baggage");

  return (
    <section className="flex w-full min-h-screen">
      <AnimatePresence>
        {sideBarDaialog && (
          <SideBar
            selectedLi={selectedLi}
            setselectedLi={setselectedLi}
            setsideBarDaialog={setsideBarDaialog}
          />
        )}
      </AnimatePresence>
      <div className="flex justify-between max-w-[1127px] w-full m-auto min-h-screen">
        <div className="flex items-center flex-col pt-[66px] max-w-[619px] w-full">
          <div className="flex-col w-full flex-center">
            <Image
              src={"/success.gif"}
              alt="success"
              width={186}
              height={186}
            />
            <h1 className="text-[26px] font-[500] leading-[33px] text-black">
              Thank you, Jamshed Ali!
            </h1>
            <p className="mt-[8px] text-[16px] font-[400] leading-[20px] text-black">
              Your booking is confirmed!
            </p>
          </div>
          <div className="flex gap-[16px] pt-[38px] pb-[45px] border-y -border--devide-line-clr mt-[58px]">
            <div className="w-[50%] flex flex-col gap-[7px]">
              <span className="med-16">Booking Reference Number</span>
              <div
                style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
                className="flex justify-between items-center w-[301px] h-[59px] rounded-[12px] border -border--devide-line-clr"
              >
                <span className="ml-[20px] text-[18px] font-[500] leading-[23px] -text--primary-black ">
                  0087655323452345
                </span>
                <span className="w-[40px] h-[41px] rounded-[8px] -bg--brand-clr flex-center mr-[9.6px] cursor-pointer">
                  {copyIcon}
                </span>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-[7px]">
              <span className="med-16">Order ID</span>
              <div
                style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
                className="flex justify-between items-center w-[301px] h-[59px] rounded-[12px] border -border--devide-line-clr"
              >
                <span className="ml-[20px] text-[18px] font-[500] leading-[23px] -text--primary-black ">
                  765876587
                </span>
                <span className="w-[40px] h-[41px] rounded-[8px] -bg--brand-clr flex-center mr-[9.6px] cursor-pointer">
                  {copyIcon}
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[618px] w-full pt-[38px] pb-[58px] border-b -border--devide-line-clr">
            <h2 className="text-[26px] -text--primary-black leading-[33px] font-[500] mb-[19px]">
              E-Ticket
            </h2>
            <Ticket />
            <div className="flex gap-[9px] mt-[23px] ">
              <button className="text-[14px] hover:bg-black hover:text-white rounded-[32px] leading-[18px] font-[400] -text--primary-black w-[128px] h-[38px] border -border--primary-black">
                Download
              </button>
              <button className="text-[14px] hover:bg-black hover:text-white rounded-[32px] leading-[18px] font-[400] -text--primary-black w-[128px] h-[38px] border -border--primary-black">
                Send to email
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <FlightDetails />

            <OpnerComp name={"Passenger Information"} zIndex={10}>
              <InfoCard />
            </OpnerComp>
            <OpnerComp
              name={"Add-ons"}
              zIndex={20}
              spanText={
                "Extra Baggage, Special Request, Meal Preferences, Seat Selection, other"
              }
            >
              <div className="flex flex-col gap-[11px] w-full">
                {addons.map((it) => (
                  <AddonCard
                    clr={it.clr}
                    details={it.details}
                    selected={it.selected}
                    svg={it.svg}
                    title={it.title}
                    sideBarDaialog={sideBarDaialog}
                    setsideBarDaialog={setsideBarDaialog}
                    setselectedLi={setselectedLi}
                  />
                ))}
              </div>
            </OpnerComp>
            <OpnerComp name={"Payment Summary (Paid)"} zIndex={30}></OpnerComp>
            <OpnerComp name={"Loyalty Program"} zIndex={40}></OpnerComp>
          </div>
          <div className="w-full flex gap-[12px] items-center mt-[68px] pb-[10px]">
            <Link
              href={"/"}
              className="flex-center text-white font-[500] text-[16px] leading-[20px] -bg--brand-clr w-[173px] h-[55px] rounded-[8px]"
            >
              Back To Home
            </Link>
            <button className="-text--primary-black font-[500] leading-[20px] border -border--primary-black w-[173px] h-[55px] rounded-[8px]">
              Manage booking
            </button>
          </div>
        </div>
        <div className="max-w-[384px] w-full h-max mt-[84px] sticky top-[164px]">
          <div
            style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
            className="w-[384px]  pt-[18px] pb-[12px] h-[369px] rounded-[12px] border -border--devide-line-clr -bg--primary-white"
          >
            <h2 className="text-[22px] font-[500] leading-[28px] -text--primary-black px-[20px]">
              Summary
            </h2>
            <div className="flex flex-col gap-[7px] mt-[20px] px-[20px]">
              <TicketSpan name={"Base fare (1x Adult)"} val={"PKR 134,890"} />
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                  Extra baggage
                  <span className="underline underline-offset-2 text-[14px] font-[500] leading-[18px] -text--primary-gray ml-[6.5px]">
                    Edit
                  </span>
                </span>
                <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
                  PKR 11,890
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-[500] leading-[20px] -text--primary-black flex-center">
                  Add-ons
                  <span className="ml-[10px] translate-y-[1px]">
                    {chevrondownward}
                  </span>
                </span>
                <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                  PKR 4000
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-[20px] py-[15px] px-[19.5px] border-y -border--devide-line-clr">
              <div className="flex-center gap-[5px]">
                <p className="text-[18px] leading-[23px] font-[700] -text--primary-black">
                  Total you paid
                </p>
                <span className="w-[16px] flex-center h-[16px] rounded-full bg-[#12CC46] [&_svg]:fill-white">
                  {check}
                </span>
              </div>
              <span className="-text--success-1 text-[16px] font-[500] leading-[20px]">
                PKR 140,900
              </span>
            </div>
            <div className="pt-[14px] pl-[20px] pr-[20px] flex flex-col">
              <p className="text-[18px] font-[500] leading-[23px] -text--primary-black">
                Payment method
              </p>
              <div className="flex items-center justify-between">
                <div className="flex-center">
                  <span>{masterCard}</span>
                  <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                    Mastercard
                  </span>
                </div>
                <button className="w-[124px] h-[38px] rounded-[8px] -bg--light-gray border -border--devide-line-clr text-[16px] font-[500] leading-[20px] -text--primary-black">
                  Order Recipt
                </button>
              </div>
              <div className="flex flex-col mt-[6px] gap-[3px]">
                <span className="text-[12px] leading-[15px] font-[500] -text--primary-gray">
                  transaction ID.
                </span>
                <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
                  PKRD 3948543543453
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[34px] flex flex-col">
            <h5 className="text-[26px] font-[500] leading-[33px] -text--primary-black">
              Add-ons Invoice
            </h5>
            <div className="mt-[19px] flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[12px] font-[500] leading-[15px] -text--primary-black">
                  Total You Pay
                </span>
                <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
                  PKR 34,790
                </span>
              </div>
              <button className="w-[106px] h-[45px] rounded-[8px] -bg--success-1 text-white font-[500] text-[16px] leading-[20px]">
                Pay Now
              </button>
            </div>
          </div>
          <AddonsBt />
          <div className="flex items-center gap-[10px] mt-[19px] pb-[5px]">
            <CheckBox />
            <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
              Do you have a Voucher or Promo code?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;

const Ticket = () => {
  return (
    <div className="w-full flex-center h-[295px]">
      <div
        style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
        className="max-w-[467px] w-full h-full flex flex-col rounded-[12px] border -border--devide-line-clr border-r-[0] overflow-hidden relative "
      >
        <div className="flex items-center gap-[13px] pt-[13px] pb-[11px] bg-[#CF181F] px-[21px]">
          <span>{airlineWhite}</span>
          <h3 className="font-[400] text-[16px] text-white leading-[22px] font-ticket">
            TURKISH AIRLINE
          </h3>
        </div>
        <div className="w-full pt-[14px] pl-[19px] pr-[22px] flex flex-col">
          <div className="flex items-center justify-between pb-[5px] border-b -border--devide-line-clr">
            <TicketDet name={"PASSENGER"} val={"JAMSHED ALI"} />
            <div className="flex items-center justify-between">
              <TicketDet
                name={"BAGGAGE"}
                val={"45KG"}
                className={"mr-[68px]"}
              />
              <TicketDet name={"F. FLYER NUMBER"} val={"2452432"} />
            </div>
          </div>
          <div className="flex border-b -border--devide-line-clr items-center py-[8px] gap-[59px]">
            <TicketDet
              det={"JINNAH INTERNATINAL AIRPORT"}
              name={"DEPARTURE"}
              val={"KHI"}
            />
            <TicketDet det={"MONDAY 13 AUG"} val={"6:35 PM"} />
          </div>
          <div className="flex border-b -border--devide-line-clr items-center py-[8px] gap-[65px]">
            <TicketDet
              det={"DUBAI INTERNATINAL AIRPORT"}
              name={"ARRIVAL"}
              val={"DXB"}
            />
            <TicketDet det={"MONDAY 13 AUG"} val={"6:35 PM"} />
          </div>
          <div className="flex justify-between  border-b -border--devide-line-clr items-center pt-[10px] pb-[13px]">
            <TicketDet name={"FLIGHT"} val={"KL09876"} />
            <TicketDet name={"CLASS"} val={"ECONOMY"} />
            <TicketDet name={"SEAT"} val={"74-A"} />
            <TicketDet name={"GATE"} val={"3"} />
            <TicketDet name={"ZONE"} val={"C"} />
          </div>
        </div>
        <span className="h-[270px] absolute top-[50%] translate-y-[-50%] right-[-0.95px] -border--devide-line-clr border border-dashed" />
      </div>
      <div
        style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
        className="max-w-[152px] w-full h-full rounded-[12px] border -border--devide-line-clr border-l-[0] overflow-hidden relative"
      >
        <div className="w-full pt-[19px] pb-[16px] flex-center bg-[#CF181F] ">
          <p className="text-[16px] font-[400] leading-[22px] text-white">
            KHI-DXB
          </p>
        </div>
        <div className="px-[16px] pt-[15px] pb-[10px] flex flex-col">
          <TicketDet name={"PESSENGER"} val={"JAMSHED ALI"} sm={true} />
          <div className="flex items-center justify-between gap-[11px] mt-[5px]">
            <TicketDet name={"FLIGHT"} val={"KL09876"} sm={true} />
            <TicketDet name={"CLASS"} val={"ECONOMY"} sm={true} />
          </div>
          <div className="flex mt-[7px] mb-[5px] gap-[6px]">
            <div className="flex flex-col justify-between items-center w-[56px] h-[50px] border -border--primary-black">
              <span className="font-[400] leading-[22px] text-[16px] -text--primary-black">
                SEAT
              </span>
              <span className="font-[400] leading-[22px] text-[16px] -text--primary-black">
                74-A
              </span>
            </div>
            <div className="flex flex-col justify-between w-[56px] h-[50px] border -border--primary-black pl-[9px]">
              <span className="font-[400] leading-[22px] text-[16px] -text--primary-black">
                23
              </span>
              <span className="font-[400] leading-[22px] text-[16px] -text--primary-black">
                SEP
              </span>
            </div>
          </div>
          <div className="flex mt-[13px] pl-[8.3px] relative ">
            <span>{QRCode}</span>
            <span className="text-[12px] font-ticket rotate-[-90deg] leading-[17px] font-[400] -text--primary-black absolute right-[0] top-[50%] translate-y-[-50%] ">
              QR CODE
            </span>
          </div>
        </div>
        <span className="h-[270px] absolute top-[50%] translate-y-[-50%] left-[-0.95px] -border--devide-line-clr border border-dashed" />
      </div>
    </div>
  );
};

const TicketDet = ({ name, val, det, className, sm }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {name && (
        <span className="text-[9px] leading-[12px] font-[400] -text--primary-gray font-ticket">
          {name}
        </span>
      )}
      <p
        className={`text-[16px] font-[400] leading-[22px] -text--primary-black font-ticket ${
          sm ? "!text-[12px] !leading-[17px]" : ""
        }`}
      >
        {val}
      </p>
      {det && (
        <span className="text-[11px] font-[400] leading-[13px] -text--primary-black font-ticket">
          {det}
        </span>
      )}
    </div>
  );
};

const OpnerComp = ({ children, name, zIndex, spanText }) => {
  const [scope, animate] = useAnimate(false);
  const [opened, setopened] = useState(false);

  const AnimateFunc = async () => {
    setopened(!opened);
    if (opened) {
      animate(
        scope.current,
        { zIndex: zIndex },
        { duration: 0.5, ease: "easeInOut" }
      );
      animate(
        scope.current,
        { height: 118 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animate(
        "#anim-dect",
        { opacity: 0 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animate(
        "#anim-dect",
        { display: "none" },
        { duration: 0.5, ease: "easeInOut" }
      );
    } else {
      await animate("#anim-dect", { display: "flex" }, { duration: 0.1 });
      animate(
        scope.current,
        { height: scope.current.scrollHeight + 47 },
        { duration: 0.5, ease: "easeInOut" }
      );
      animate(
        "#anim-dect",
        { opacity: 1 },
        { duration: 1.5, ease: "easeInOut" }
      );
      animate(scope.current, { zIndex: 200 }, { delay: 0.5 });
    }
  };

  return (
    <div
      ref={scope}
      style={{ zIndex: zIndex }}
      className="w-full h-[118px] flex justify-start flex-col border-b -border--devide-line-clr bg-white "
    >
      <div
        onClick={AnimateFunc}
        className="flex items-center justify-between w-full min-h-[118px] cursor-pointer select-none"
      >
        <div className="relative flex flex-col">
          <h4 className="text-[26px] leading-[33px] -text--primary-black font-[500]">
            {name}
          </h4>
          <AnimatePresence>
            {spanText && opened && (
              <motion.span
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`text-[16px] font-[400] leading-[20px] -text--primary-gray absolute bottom-[-20px] w-full whitespace-nowrap`}
              >
                {spanText}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <span
          className={`${
            opened ? "rotate-[180deg] " : ""
          }  transition-all duration-100`}
        >
          {chevrondownward}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, display: "none" }}
        id="anim-dect"
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

const TicketSpan = ({ name, val }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[16px] font-[500] leading-[20px] -text--primary-black">
        {name}
      </span>
      <span className="text-[16px] font-[400] leading-[20px] -text--primary-black">
        {val}
      </span>
    </div>
  );
};

const AddonsBt = () => {
  const [scope, animate] = useAnimate();
  const [openedAddons, setopenedAddons] = useState(false);
  return (
    <motion.div
      ref={scope}
      className="h-[119px] flex flex-col border-y -border--devide-line-clr mt-[12px] gap-[10px] overflow-hidden"
    >
      <div
        onClick={() => {
          if (openedAddons) {
            animate(
              scope.current,
              { height: 119 },
              { duration: 0.7, ease: "easeInOut" }
            );
            animate(
              "#sp-add",
              { opacity: 1 },
              { duration: 1.2, ease: "easeInOut" }
            );
          } else {
            animate(
              scope.current,
              { height: 48 },
              { duration: 0.7, ease: "easeInOut" }
            );
            animate(
              "#sp-add",
              { opacity: 0 },
              { duration: 0.7, ease: "easeInOut" }
            );
          }
          setopenedAddons(!openedAddons);
        }}
        className="flex justify-between mt-[13px] mb-[6px] cursor-pointer"
      >
        <span className="text-[16px] font-[700] leading-[20px] -text--primary-black">
          Add-ons
        </span>
        <span
          className={`${
            openedAddons ? "[&_svg]:rotate-[180deg]" : ""
          } transition-all`}
        >
          {chevrondownward}
        </span>
      </div>
      <div id="sp-add" className="flex flex-col gap-[10px]">
        <TicketSpan name={"Base fare (1x Adult)"} val={"PKR 134,890"} />
        <TicketSpan name={"Base fare (1x Adult)"} val={"PKR 134,890"} />
      </div>
    </motion.div>
  );
};

const FlightDetails = () => {
  return (
    <OpnerComp name={"Flight details"} zIndex={5}>
      <div className="flex flex-col gap-[16px]">
        <CardPart dep={true} />
        <CardPart dep={false} />
      </div>
    </OpnerComp>
  );
};

const CardPart = ({ dep }) => {
  return (
    <div
      style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
      className="flex flex-col w-full overflow-hidden rounded-[12px] h-[205px] border -border--devide-line-clr "
    >
      <div className="-bg--light-gray flex py-[11px] pl-[15px] pr-[13px] items-center border-b -border--devide-line-clr justify-between h-[55px]">
        <div className="flex-center gap-[8px] ">
          <span className="w-[33px] h-[33px] rounded-full [&_svg]:w-[31px] [&_svg]:h-[31px]">
            {airline}
          </span>
          <span className="text-[16px] ml-[3px] leading-[20px] font-[500] -text--primary-black">
            TURKISH AIRLINES
          </span>
          <span className="w-[121px] h-[25px] text-[12px] font-[500] leading-[15px] -text--primary-black -border--devide-line-clr border rounded-[5px] flex-center bg-white">
            Boeing 488-100TR
          </span>
        </div>
        {dep ? (
          <span className="-text--success-1 text-[12px] leading-[12px] font-[500]">
            Departure
          </span>
        ) : (
          <span className="text-[#D72C0D] text-[12px] leading-[12px] font-[500]">
            Return
          </span>
        )}
      </div>

      <div className="flex items-center justify-between px-[19px] mt-[11px]">
        <span className="text-[18px] font-[500] leading-[23px] -text--primary-black">
          4:40 AM
        </span>
        <span className="text-[15px] flex-center justify-between items-center gap-[10px] font-[400] leading-[19px] -text--primary-black ">
          {borderBig}
          21h 37m
          {borderBig}
        </span>
        <span className="text-[18px] font-[500] leading-[23px] -text--primary-black">
          6:40 AM
        </span>
      </div>

      <div className="flex items-center px-[19px] mt-[6px] justify-between [&_svg]:text-[14px] [&_svg]:font-[400] [&_svg]:leading-[18px] [&_svg]:-text--primary-black">
        <span>Karachi (KHI)</span>
        <span>(Non-stop)</span>
        <span>Dubai (DXB)</span>
      </div>

      <div className="mt-[12px] flex items-center justify-start border-t -border--devide-line-clr w-full">
        <button className="flex items-center -text--primary-black gap-[5px] text-[14px] leading-[18px] [&_svg]:w-[13px] h-[37px] w-[155px] flex-center">
          {bag}
          Total: 20kg Pcs 1
        </button>
        <button className="flex items-center -text--primary-black gap-[5px] border-x -border--devide-line-clr text-[14px] leading-[18px] [&_svg]:w-[17px] h-[37px] w-[155px] flex-center">
          {meal} ML Included
        </button>
        <button className="flex items-center -text--primary-black gap-[5px] text-[14px] leading-[18px] [&_svg]:w-[13px] h-[37px] w-[155px] flex-center">
          {classtype} Economy
        </button>
        <button className="flex items-center -text--primary-black gap-[5px] border-l -border--devide-line-clr text-[14px] leading-[18px] [&_svg]:w-[13px] h-[37px] w-[155px] flex-center">
          {seatsSvg} Seat 45R
        </button>
      </div>

      <div className="flex items-center justify-between -bg--light-gray h-[37px] border-t -border--devide-line-clr">
        <button className="text-[12px] font-[500] leading-[15px] -text--primary-black underline underline-offset-2 w-[155px] h-[37px]">
          Change Baggage
        </button>
        <button className="text-[12px] font-[500] leading-[15px] -text--primary-black underline underline-offset-2 w-[155px] h-[37px] border-x -border--devide-line-clr ">
          Add Meal Prefensess
        </button>
        <button className="text-[12px] font-[500] leading-[15px] -text--primary-black underline underline-offset-2 w-[155px] h-[37px]">
          Change class
        </button>
        <button className="text-[12px] font-[500] leading-[15px] -text--primary-black underline underline-offset-2 w-[155px] h-[37px] border-l -border--devide-line-clr ">
          Select seat
        </button>
      </div>
    </div>
  );
};

const InfoCard = () => {
  return (
    <div
      style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
      className="max-w-[619px] w-full h-[431px] flex flex-col rounded-[12px] bg-white border -border--devide-line-clr"
    >
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex-center px-[45px] max-w-[233px] w-full h-full border-r -border--devide-line-clr gap-[11px] flex-col">
          <Image
            src={"/userImg.png"}
            alt="user"
            width={92}
            height={92}
            className="rounded-full"
          />
          <p className="text-[18px] font-[500] leading-[23px] -text--primary-black">
            Mr. Jamshed Ali
          </p>
          <span className="-text--primary-gray w-[74px] h-[22px] -bg--light-gray rounded-[50px] text-[12px] font-[500] leading-[15px] flex-center">
            Travler 01
          </span>
        </div>
        <div className="flex flex-col px-[12px] w-full">
          <Card
            type={"Intro"}
            detName={"Name"}
            detName2={"DOB"}
            detValue={"Jamshed Ali"}
            detValue2={"23 Sep, 2000"}
          />
          <Card
            type={"Contact"}
            detName={"Phone"}
            detName2={"Email"}
            detValue={"0331 7777722"}
            detValue2={"Jamshedali@gmail.com"}
          />
          <Card
            type={"Passport"}
            detName={"Number"}
            detName2={"Expiry"}
            detValue={"4220178791182"}
            detValue2={"23 Aug, 2028"}
            borderBNone={true}
          />
        </div>
      </div>

      <div className="flex items-center justify-between py-[20px] border-t -border--devide-line-clr pl-[29px] pr-[24px]">
        <div className="flex-center gap-[23px]">
          <span>{EmergencySvg}</span>
          <div className="flex flex-col">
            <p className="med-16">Add Emergency Contact</p>
            <span className="text-[15px] leading-[19px] font-[500] -text--primary-black">
              Tell us who contact in case of an emergency
            </span>
          </div>
        </div>
        <button className="w-[124px] h-[36px] -text--primary-black border text-[14px] leading-[18px] -border--devide-line-clr rounded-[32px]">
          Add Contact
        </button>
      </div>
    </div>
  );
};

const Card = ({
  type,
  detName,
  detValue,
  extended,
  detName2,
  detValue2,
  borderBNone,
}) => {
  return (
    <div
      className={`flex flex-col gap-[9px] px-[12px] py-[20px] border-b -border--devide-line-clr ${
        borderBNone ? "border-b-0" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="med-16">{type}</h3>
        <button className="underline med-16 underline-offset-2">Edit</button>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] font-[500] leading-[19px] -text--primary-black">
          {detName}: <span className="font-[400] ">{detValue}</span>
        </span>
        <span className="text-[15px] font-[500] leading-[19px] -text--primary-black">
          {detName2}: <span className="font-[400] ">{detValue2}</span>
        </span>
      </div>
    </div>
  );
};

const AddonCard = ({
  children,
  selected,
  svg,
  clr,
  title,
  details,
  setsideBarDaialog,
  setselectedLi,
  btn,
  Moredetails,
}) => {
  return (
    <div
      style={{ boxShadow: "0px 42.66px 56.93px 0px #00000015" }}
      className="flex flex-col border -border--devide-line-clr rounded-[12px] bg-white"
    >
      <div className="flex items-center justify-between pl-[9px] pr-[19px] py-[9px] ">
        <div className="flex gap-[17px]">
          <span
            style={{ background: clr }}
            className="w-[67px] h-[66px] rounded-[11px] flex-center"
          >
            {svg}
          </span>
          <div className="flex justify-center flex-col gap-[5px]">
            <h5 className="text-[16px] font-[500] leading-[20px] -text--primary-black">
              {title}
            </h5>
            <p className="text-[15px] leading-[19px] font-[400] -text--primary-black">
              {details}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setselectedLi(title);
            setsideBarDaialog(true);
          }}
          className={`w-[133px] h-[36px] border -border--primary-black rounded-[32px] text-[14px] font-[400] leading-[18px] hover:-bg--primary-black hover:text-white ${
            selected || btn === "blue"
              ? "text-white -bg--brand-clr !-border--brand-clr hover:!-border--primary-black"
              : "-text--primary-black"
          } `}
        >
          {selected ? "Change options" : "Select options"}
        </button>
      </div>
      {Moredetails && (
        <div className="w-full h-[49px] pl-[15px] border-t -border-r--devide-line-clr  flex items-center gap-[10px]">
          {children}
        </div>
      )}
    </div>
  );
};

export { AddonCard };
