import React, { useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

// ✅ RELATIVE IMPORTS
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
} from "../consonants";

import SideBar from "../components/ThankYou/Sidebar";
import { CheckBox } from "../search/page";



function Page() {
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

          {/* SUCCESS */}
          <div className="flex-col w-full flex-center">
            <img src="/success.gif" alt="success" width={186} height={186} />
            <h1 className="text-[26px] font-[500]">Thank you, Jamshed Ali!</h1>
            <p>Your booking is confirmed!</p>
          </div>

          {/* BACK */}
          <div className="w-full flex gap-[12px] mt-[68px]">
            <a
              href="/"
              className="flex-center text-white -bg--brand-clr w-[173px] h-[55px] rounded-[8px]"
            >
              Back To Home
            </a>

            <button className="border w-[173px] h-[55px] rounded-[8px]">
              Manage booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
