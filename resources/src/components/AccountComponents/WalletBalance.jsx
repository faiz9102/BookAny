import Link from "next/link";
import React from "react";
import TransactionHis from "./TransactionHis";

function WalletBalance() {
  return (
    <div className="flex flex-col w-full pb-[10px] mt-[51px]">
      <div className="flex flex-col w-[516px] h-[170px] border -border--devide-line-clr pt-[27px] pb-[30px] pl-[31px] pr-[28px] rounded-[15px] hover:shadow-lg cursor-pointer">
        <div className="flex flex-col">
          <h2 className="med-12">Wallet Balance</h2>
          <span className="text-[26px] leading-[33px] font-[700] -text--primary-black">
            Rs 230,000.00
          </span>
        </div>
        <div className="flex items-end justify-between mt-[17px]">
          <Link
            href={"/account/flyer-wallet/add-fund"}
            className="med-16 !text-white w-[114px] h-[45px] -bg--success-1 rounded-[8px] flex-center"
          >
            Add Func
          </Link>
          <Link
            href={"/account/flyer-wallet/withdraw"}
            className="underline !-text--primary-red med-16 underline-offset-2"
          >
            Withdarw Request
          </Link>
        </div>
      </div>

      <TransactionHis text={"Recent Transactions"} mt={35} />
    </div>
  );
}

export default WalletBalance;
