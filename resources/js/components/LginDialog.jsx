import { close, emailSvg } from "@/consonants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
const LoginDialog = ({ setOpenedLoginDialog }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 w-full flex-center z-[400] -bg--primary-backdrop-clr"
    >
      <div className="flex flex-col w-[486px] h-[426px] pt-[21px] pb-[46px] pl-[40px] pr-[19px] bg-white border -border--devide-line-clr cs-shadow rounded-[16px]">
        <div className="flex justify-end">
          <button
            onClick={() => setOpenedLoginDialog(false)}
            className="border-none outline-none "
          >
            {close}
          </button>
        </div>
        <span className="w-[99px] h-[99px] bg-[#FFDD501A] rounded-[11px] mt-[2px] flex-center ">
          {emailSvg}
        </span>
        <p className="text-[26px] font-[500] leading-[33px] -text--primary-black mt-[18px]">
          Sign in or create an account for faster bookings!
        </p>
        <ul className="flex flex-col gap-[3px] mt-[16px]">
          <li className="flex items-center gap-[8px]">
            <span className="w-[3px] h-[3px] rounded-full -bg--primary-black" />
            Auto fill your travel details
          </li>
          <li className="flex items-center gap-[8px]">
            <span className="w-[3px] h-[3px] rounded-full -bg--primary-black" />
            Book faster and easier with passenger quick pick
          </li>
          <li className="flex items-center gap-[8px]">
            <span className="w-[3px] h-[3px] rounded-full -bg--primary-black" />
            Use vuocher and get amazing discount.
          </li>
        </ul>
        <Link
          href={"/"}
          className="w-[81px] mt-[28px] flex-center -bg--primary-black h-[41px] rounded-[8px] border -border--primary-black text-white text-[16px] leading-[20px] font-[400] "
        >
          Login
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginDialog;
