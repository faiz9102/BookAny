import React from "react";
import TransactionHis from "./TransactionHis";

function WalletHis() {
  return (
    <div className="flex flex-col pb-[10px] gap-[30px] mt-[40px]">
      <TransactionHis text={"September, 2024"} />
      <TransactionHis text={"August, 2024"} />
    </div>
  );
}

export default WalletHis;
