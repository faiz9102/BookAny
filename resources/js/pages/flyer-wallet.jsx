import React, { useLayoutEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

import Coins from "../AccountComponents/Coins";
import PaymentMethod from "../AccountComponents/PaymentMethod";
import WalletBalance from "../AccountComponents/WalletBalance";
import WalletHis from "../AccountComponents/WalletHis";

function WalletPage() {
  const [selectedComp, setselectedComp] = useState(0);

  const Components = {
    0: <WalletBalance />,
    1: <PaymentMethod />,
    2: <WalletHis />,
    3: <Coins />,
  };

  return (
    <div className="flex flex-col mt-[51px]">
      <WalletNav
        selectedComp={selectedComp}
        setselectedComp={setselectedComp}
        navItems={[
          "Wallet Balance",
          "Payment methods",
          "Wallet History",
          "Redeem coins",
        ]}
        gap={47}
      />

      {Components[selectedComp]}
    </div>
  );
}

export default WalletPage;


const WalletNav = ({ selectedComp, setselectedComp, navItems, gap }) => {
  const [scope, animate] = useAnimate();

  const AnimFunc = (index) => {
    let left = 0;

    for (let i = 0; i < index; i++) {
      left += document.querySelector(`#btn-nav-${i}`).scrollWidth + gap;
    }

    animate(
      scope.current,
      {
        width:
          document.querySelector(`#btn-nav-${index}`).scrollWidth - 16 + "px",
        left: left + 6 + "px",
      },
      { duration: 0.5, ease: "easeInOut" }
    );
  };

  useLayoutEffect(() => {
    AnimFunc(0);
  }, []);

  return (
    <div className="relative flex flex-col items-start w-full">
      <div style={{ gap: gap }} className="flex items-center">
        {navItems.map((it, index) => (
          <button
            id={`btn-nav-${index}`}
            key={index}
            onClick={() => {
              setselectedComp(index);
              AnimFunc(index);
            }}
            className={`text-[16px] font-[500] leading-[20px] text-[#707070]
              hover:-bg--light-gray hover:-text--primary-black
              px-2 py-1.5 rounded-[5px]
              ${
                selectedComp === index
                  ? "!-text--primary-black hover:bg-white"
                  : ""
              }`}
          >
            {it}
          </button>
        ))}
      </div>

      <motion.span
        ref={scope}
        initial={{ left: 8 }}
        className="absolute bottom-0 h-[2px] w-[109px] -bg--primary-black"
      />

      <span className="w-full h-[1px] bg-[#E5E5E5] mt-[11px] ml-2"></span>
    </div>
  );
};

export { WalletNav };
