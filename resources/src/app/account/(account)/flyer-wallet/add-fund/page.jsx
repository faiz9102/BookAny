"use client";
import ReportProblem from "@/components/AccountComponents/ReportProblem";
import { PaymentsDrops } from "@/components/BookingComponents/PaymentComp";
import { CheckBtn } from "@/components/SearchBar";
import { close, masterCard } from "@/consonants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function page() {
  const [confirm, setconfirm] = useState(false);

  return confirm ? (
    <AddedPage />
  ) : (
    <div className="flex flex-col pt-[78px]">
      <div className="w-[516px] h-[108px] rounded-[15px] border border-[#E5E5E5] bg-white py-[28px] px-[31px] hover:shadow-lg">
        <h1 className="med-12">Current Wallet Balance</h1>
        <h2 className="text-[26px] font-[700] leading-[33px] -text--primary-black">
          Rs 230,000.00
        </h2>
      </div>
      <div className="flex flex-col mt-[40px]">
        <span className="text-[16px] font-[500] leading-[17px] -text--primary-black">
          Enter Amount
        </span>
        <div className="flex w-[345px] gap-[5px] items-center border-b border-[#E5E5E5] pb-[8px] mt-[26px] pl-[7px]">
          <span className="text-[26px] leading-[33px] font-[700] -text--primary-black">
            PKR
          </span>
          <input
            type="number"
            className="text-[26px] leading-[33px] font-[700] -text--primary-black outline-none border-none"
          />
        </div>
        <ReportProblem />
      </div>
      <button
        onClick={() => setconfirm(true)}
        className="w-[173px] rounded-[8px] h-[55px] -bg--brand-clr med-16 !text-white mt-[62px]"
      >
        Continue
      </button>
    </div>
  );
}

export default page;

const AddedPage = () => {
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState(0);
  const [addedShow, setaddedShow] = useState(false);

  return (
    <div className="flex flex-col pt-[78px] max-w-[619px] w-full pb-10">
      <AnimatePresence>
        {addedShow && <AddedFund setaddedShow={setaddedShow} />}
      </AnimatePresence>
      <div className="flex items-center gap-[10px]">
        <Amountshower
          text={"Current Wallet Balance"}
          amount={"230,000.00"}
          black={false}
        />
        <Amountshower text={"Add amount"} amount={"2000"} black={true} />
      </div>
      <div className="flex flex-col mt-[33px] pb-[27px] border-b -border--devide-line-clr">
        <h1 className="text-[26px] font-[500] leading-[33px] -text--primary-black">
          Select payment methods
        </h1>
        <div className="mt-[33px] flex flex-col ">
          <h2 className="text-[18px] font-[500] leading-[23px] -text--primary-black mb-[17px]">
            Saved methods
          </h2>
          <PrevPayCard />
          <button
            onClick={() => setaddedShow(true)}
            className="med-16 !text-white w-[173px] h-[55px] -bg--brand-clr mt-[27px] rounded-[8px]"
          >
            Pay now
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-[27px]">
        <p className="text-[18px] font-[500] leading-[23px] -text--primary-black">
          Select other methods
        </p>
        <PaymentsDrops
          selectedPaymentMethod={selectedPaymentMethod}
          setselectedPaymentMethod={setselectedPaymentMethod}
        />
      </div>
    </div>
  );
};

const PrevPayCard = () => {
  return (
    <div className="cs-shadow flex items-center w-[619px] h-[85px] rounded-[12px] border -border--devide-line-clr bg-white pl-[23px]">
      <CheckBtn />
      <span className="ml-[7px]">{masterCard}</span>
      <div className="flex items-center gap-[52px]">
        <div className="flex flex-col gap-[2px] ml-[17px]">
          <span className="text-[12px] leading-[15px] -text--primary-black font-[500]">
            Debit
          </span>
          <p className="text-[16px] leading-[20px] font-[400] -text--primary-black">
            Mastercard
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-[12px] leading-[15px] -text--primary-black font-[500]">
            Number
          </span>
          <p className="flex gap-[4px] items-center text-[16px] leading-[20px] font-[400] -text--primary-black">
            <SpanHidden /> 1789
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-[12px] leading-[15px] -text--primary-black font-[500]">
            Holder
          </span>
          <p className="text-[16px] leading-[20px] font-[400] -text--primary-black">
            Jamshed ali
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-[12px] leading-[15px] -text--primary-black font-[500]">
            Expire Date
          </span>
          <p className="text-[16px] leading-[20px] font-[400] -text--primary-black">
            03/28
          </p>
        </div>
      </div>
    </div>
  );
};

const SpanHidden = () => {
  return (
    <span className="flex items-center gap-[4px]">
      <span className="w-[5px] h-[5px] rounded-full -bg--primary-black" />
      <span className="w-[5px] h-[5px] rounded-full -bg--primary-black" />
      <span className="w-[5px] h-[5px] rounded-full -bg--primary-black" />
      <span className="w-[5px] h-[5px] rounded-full -bg--primary-black" />
    </span>
  );
};

const AddedFund = ({ setaddedShow }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed -bg--primary-backdrop-clr inset-0 flex-center z-[400]"
    >
      <div className="w-[375px] h-[397px] bg-white rounded-[14px] flex-center flex-col relative">
        <button
          className="w-[13px] h-[13px] absolute top-[25px] right-[22px]"
          onClick={() => setaddedShow(false)}
        >
          {close}
        </button>
        <img src="/checkGif.gif" alt="fund-added" width={139} height={139} />
        <div className="flex-center flex-col gap-[5px]">
          <h4 className="text-[18px] leading-[20px] font-[500] -text--primary-black">
            Fund Added
          </h4>
          <p className="text-[32px] font-[700] leading-[32px] text-[#242424]">
            Successfully
          </p>
        </div>
        <p className="max-w-[324px] w-full bk-16 !-text--primary-gray text-center">
          Your withdrawal request has been received. Our team will review it.
        </p>
        <button
          onClick={() => setaddedShow(false)}
          className="text-[18px] font-[500] leading-[20px] underline underline-offset-2 mt-[44px]"
        >
          Got it.
        </button>
      </div>
    </motion.div>
  );
};

const Amountshower = ({ text, amount, black, width }) => {
  return (
    <div
      style={{ width: width && width }}
      className={`flex justify-center hover:shadow-lg flex-col w-[305px] h-[108px] py-[28px] px-[31px] rounded-[15px] border -border--devide-line-clr-2 ${
        black ? "!-border--primary-black" : ""
      }`}
    >
      <h1 className="med-12">{text}</h1>
      <h2 className="text-[26px] font-[700] leading-[33px] -text--primary-black">
        Rs {amount}
      </h2>
    </div>
  );
};

export { Amountshower };
