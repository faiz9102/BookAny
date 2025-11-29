import React from "react";
import { inArrow, outArrow } from "@/consonants";

function TransactionHis({ text, mt }) {
  const payments = [
    {
      received: true,
      amount: "+PKR 34,000",
      time: "2:56 PM",
      task: "Add Fund",
      date: "19 August, 2024",
    },
    {
      received: false,
      amount: "-PKR 34,000",
      time: "2:56 PM",
      task: "Purchased",
      date: "19 August, 2024",
    },
    {
      received: true,
      amount: "+PKR 34,000",
      time: "2:56 PM",
      task: "Add Fund",
      date: "19 August, 2024",
    },
  ];

  const TransationDet = ({ received, amount, time, task, date }) => {
    const clrs = {
      "Add Fund": "#007BFF",
      Purchased: "#D72C0D",
      Refund: "#04B101",
    };
    return (
      <div className="flex items-center justify-between py-[15px] border-b -border--devide-line-clr max-w-[514px] w-full h-[88px]">
        <div className="flex gap-[17px]">
          <span
            className={`w-[58px] h-[58px] flex-center rounded-[20px] ${
              received ? "bg-[#0080601A]" : "bg-[#D72C0D1A]"
            }`}
          >
            {received ? inArrow : outArrow}
          </span>
          <div className="flex flex-col gap-[1px]">
            <p
              className={`bd-16  ${
                received ? "!-text--success-1" : "!-text--primary-red"
              }`}
            >
              {amount}
            </p>
            <span className="-text--primary-gray text-[15px] leading-[19px] font-[400]">
              {time}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[4px]">
          <span
            style={{ background: clrs[task] }}
            className="w-[94px] h-[30px] rounded-[7px] med-15 !text-[#F7F7F7] flex-center"
          >
            {task}
          </span>
          <span className="bk-15 !-text--primary-gray ">{date}</span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: mt + "px" }} className="flex flex-col">
      <p className="text-[26px] leading-[33px] -text--primary-black font-[500] ">
        {text}
      </p>
      {payments.map((it) => (
        <TransationDet
          amount={it.amount}
          date={it.date}
          received={it.received}
          task={it.task}
          time={it.time}
        />
      ))}
    </div>
  );
}

export default TransactionHis;
