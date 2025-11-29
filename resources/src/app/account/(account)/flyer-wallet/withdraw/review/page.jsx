"use client";
import { close } from "@/consonants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [submitted, setsubmitted] = useState(false);

  return (
    <div className="flex flex-col mt-[67px]">
      <AnimatePresence>
        {submitted && <ReviewDialog setsubmitted={setsubmitted} />}
      </AnimatePresence>
      <h2 className="text-[22px] leading-[28px] font-[500] -text--primary-black">
        Withdarw Details
      </h2>
      <div className="flex flex-col gap-[4px] mt-[21px]">
        <div className="flex items-center gap-[5px]">
          <p>PKR 100,000</p>
          <Link
            href={"/account/flyer-wallet/withdraw"}
            className="!-text--brand-clr med-16 underline underline-offset-2"
          >
            Edit
          </Link>
        </div>
        <span className="bk-16">Easypaisa</span>
        <span className="bk-16">Jamshed Ail</span>
        <span className="bk-16">PKHHB 0998 3435 3453 3452</span>
      </div>
      <p className="bk-16 mt-[40px] !-text--primary-gray max-w-[492px] w-full">
        Your withdrawal request has been received. Our team will review it,
        which may take up to 2 hours. Your payment will be processed within 2
        hours
      </p>
      <button
        onClick={() => setsubmitted(true)}
        className="mt-[37px] rounded-[8px] -bg--brand-clr w-[173px] h-[55px] !text-white med-16"
      >
        Submit Request
      </button>
    </div>
  );
}

export default page;

const ReviewDialog = ({ setsubmitted }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 w-full flex-center -bg--primary-backdrop-clr z-[400]"
    >
      <div className="flex-center pt-[66px] pb-[54px] max-w-[375px] relative px-[26px] h-[440px] flex-col bg-white rounded-[14px]">
        <Link
          href={"/"}
          onClick={() => setsubmitted(false)}
          className="absolute top-[25px] right-[22px] outline-none"
        >
          {close}
        </Link>
        <Image src={"/reviewGif.gif"} width={78} height={78} alt="Reviewing" />
        <h3 className="-text--primary-black text-center text-[18px] font-[500] leading-[20px] mt-[18px]">
          Withdrawal in <br />
          <span className="leading-[39px] font-[700] text-[32px]">
            Under Review
          </span>
        </h3>
        <p className="bk-16 !-text--primary-gray mt-[12px] text-center">
          Your withdrawal request has been received.
          <br /> Our team will review it,
          <br /> which may take up to 2 hours. Your payment will be processed
          within 2 hours
        </p>
        <Link
          href={"/"}
          className="text-[18px] mt-[44px] font-[500] leading-[20px] text-center  -text--primary-black underline underline-offset-2"
        >
          Got it
        </Link>
      </div>
    </motion.div>
  );
};
