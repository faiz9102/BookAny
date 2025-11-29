"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Three_Btns() {
  const [currentStateBtn, setcurrentStateBtn] = useState(0);

  const btnTexts = {
    0: { text: "Oneway", pos: 4.5 },
    1: { text: "Return", pos: "112.5px" },
    2: { text: "Multi City", pos: "220.5px" },
  };

  return (
    <div className="w-full h-[48px] flex-center">
      <div className="max-w-[334px] w-full h-[48px] flex -bg--light-gray relative border -border--devide-line-clr flex-center rounded-full ">
        <motion.button
          initial={{ left: 4.5 }}
          animate={{ left: btnTexts[currentStateBtn].pos }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-[108px] shadow-md rounded-[40px] -text--primary-black absolute left-1 top-[3px] h-[40px] text-[14px] font-[400] leading-[18px] bg-white border -border--devide-line-clr "
        >
          {btnTexts[currentStateBtn].text}
        </motion.button>
        <Slide_Button text={"Oneway"} func={() => setcurrentStateBtn(0)} />
        <Slide_Button text={"Return"} func={() => setcurrentStateBtn(1)} />
        <Slide_Button text={"Multi City"} func={() => setcurrentStateBtn(2)} />
      </div>
    </div>
  );
}

export default Three_Btns;

const Slide_Button = ({ text, func }) => {
  return (
    <button
      onClick={() => func()}
      className="w-[108px] h-[40px] text-[14px] font-[400] leading-[18px] rounded-[40px] cursor-pointer -text--primary-black"
    >
      {text}
    </button>
  );
};
