import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

// ✅ Relative imports (Laravel + Vite)
import AddonComp from "../components/BookingComponents/AddonComp";
import ContactComp from "../components/BookingComponents/ContactComp";
import PaymentComp from "../components/BookingComponents/PaymentComp";
import ReviewComp from "../components/BookingComponents/ReviewComp";
import { DetailsCard } from "../components/FlightsCard/Flights";
import LoginDialog from "../components/LoginDialog";
import { ContextSearch } from "../components/MainStateSearchBar/MainStateSearchBar";

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
} from "../constants";

function BookingPage() {
  const { selectedWindow, setselectedWindow } = useContext(ContextSearch);
  const [OpenedLoginDialog, setOpenedLoginDialog] = useState(false);

  const windows = {
    0: { name: "Review", compon: <ReviewComp /> },
    1: { name: "Add-ons", compon: <AddonComp /> },
    2: { name: "Contact details", compon: <ContactComp /> },
    3: { name: "Payment", compon: <PaymentComp /> },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenedLoginDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-[1173px] w-full m-auto">
      <AnimatePresence>
        {OpenedLoginDialog && (
          <LoginDialog setOpenedLoginDialog={setOpenedLoginDialog} />
        )}
      </AnimatePresence>

      <div className="flex items-start gap-[125px]">
        <div className="max-w-[620px] w-full flex flex-col pt-[78px] pb-[10px]">
          <div className="relative flex items-center justify-between">

            {/* ✅ Pure anchor tag */}
            <a
              href="/"
              className="absolute left-[-45px] w-[41px] h-[41px] rounded-full flex-center hover:-bg--light-gray"
            >
              {chevronleft}
            </a>

            <h1 className="leading-[33px] text-[26px] font-[500]">
              {windows[selectedWindow].name === "Review"
                ? "Review your trip"
                : windows[selectedWindow].name}
            </h1>

            <span className="text-[16px] text-gray-500">
              Finish booking in{" "}
              <span className="text-red-500 font-[500]">03:58:48</span>
            </span>
          </div>

          {windows[selectedWindow].compon}

          {selectedWindow < 3 ? (
            <button
              onClick={() => setselectedWindow((prev) => prev + 1)}
              className="w-[173px] h-[55px] rounded-[8px] bg-blue-600 text-white mt-[45px]"
            >
              Continue
            </button>
          ) : (
            <a
              href="/thank-you-for-your-booking"
              className="w-[173px] h-[55px] rounded-[8px] bg-blue-600 text-white mt-[45px] flex-center"
            >
              Continue
            </a>
          )}
        </div>

        <PriceCalculation selectedWindow={selectedWindow} />
      </div>
    </section>
  );
}

export default BookingPage;
