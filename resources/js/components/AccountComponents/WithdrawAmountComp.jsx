import { Amountshower } from "@/app/account/(account)/flyer-wallet/add-fund/page";
import React from "react";
import ReportProblem from "./ReportProblem";

function WithdrawAmountComp() {
  return (
    <div className="flex flex-col">
      <Amountshower
        amount={"230,000.00"}
        width={"516px"}
        text={"Current Wallet Balance"}
      />
      <div className="flex flex-col mt-[31px] gap-[21px]">
        <h2 className="-text--primary-black font-[500] text-[26px] leading-[33px] ">
          Enter Withdraw Amount
        </h2>
        <span className="!-text--primary-gray bk-16 w-full ">
          Your withdrawal request has been received. Our team will review it,{" "}
          <br />
          which may take up to 2 hours. Your payment will be processed within 2
          hours
        </span>
      </div>
      <div className="flex flex-col mt-[45px] mb-[62px]">
        <p className="-text--primary-black text-[16] font-[500] leading-[17px]">
          Enter Amount
        </p>
        <input
          type="number"
          className="w-[345px] ml-[1px] h-[32px] border-b -border--devide-line-clr-2 px-[5px] outline-none mt-[35px]"
        />
        <ReportProblem />
      </div>
    </div>
  );
}

export default WithdrawAmountComp;
