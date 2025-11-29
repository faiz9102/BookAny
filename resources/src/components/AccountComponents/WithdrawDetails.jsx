import Image from "next/image";
import React, { useState } from "react";
import { InputComponent } from "../BookingComponents/ContactComp";
import { chevrondownward } from "@/consonants";
import { useAnimate } from "framer-motion";
import ReportProblem from "./ReportProblem";

function WithdrawDetails() {
  const [selectedSt, setselectedSt] = useState("Bank Account");
  const Banks = [
    {
      src: "/payments/bank.png",
      text: "Bank Account",
    },
    {
      src: "/payments/jazzcash.png",
      text: "Jazz Cash",
    },
    {
      src: "/payments/easypaisa.png",
      text: "Easypaisa",
    },
  ];

  return (
    <div className="flex flex-col mb-[62px]">
      <div className="flex flex-col gap-[35px]">
        <h2 className="text-[26px] leading-[33px] font-[500] -text--primary-black">
          Choose How You Want to Receive Your Payment?
        </h2>
        <div className="flex gap-[10px]">
          {Banks.map((it, index) => (
            <BankSelector
              src={it.src}
              text={it.text}
              key={index}
              selectedSt={selectedSt}
              setselectedSt={setselectedSt}
            />
          ))}
        </div>
        <form className="flex flex-wrap max-w-[618px] w-full gap-[14px]">
          {selectedSt === "Bank Account" ? (
            <CustomSelect placeholder={"Select Bank"} list={["HBL", "UBL"]} />
          ) : (
            <InputComponent placeholder={selectedSt} />
          )}
          <InputComponent placeholder={"Account Title"} />
          <InputComponent placeholder={"Account number"} />
          <InputComponent
            placeholder={
              selectedSt === "Bank Account" ? "IBAN" : "IBAN (Optional)"
            }
          />
        </form>
      </div>
      <ReportProblem />
    </div>
  );
}

export default WithdrawDetails;

const BankSelector = ({ src, selectedSt, text, setselectedSt }) => {
  return (
    <button
      onClick={() => setselectedSt(text)}
      className={`h-[52px] rounded-[15px] border -border--devide-line-clr-2 pl-[13px] pr-[19px] gap-[16px] flex items-center hover:shadow-xl ${
        selectedSt === text ? "-border--primary-black" : ""
      } `}
    >
      <Image src={src} alt="bank" className="" width={32} height={32} />
      <span className="med-16">{text}</span>
    </button>
  );
};

const CustomSelect = ({ placeholder, list, bottom }) => {
  const [selected, setselected] = useState(placeholder);
  const [opened, setopened] = useState();

  return (
    <div
      onClick={() => setopened(!opened)}
      className={`flex w-[302px] pl-[19px] relative cursor-pointer pr-[16px] h-[55px] items-center border -border--devide-line-clr rounded-[8px] hover-shadow hover:-border--primary-black justify-between ${
        opened ? "-border--primary-black" : ""
      }`}
    >
      <p className="bk-16 !-text--primary-gray">{selected}</p>
      <span>{chevrondownward}</span>
      {opened && (
        <ul
          id="scroll-none"
          style={{ bottom: bottom && bottom }}
          className="absolute left-[-1px] flex flex-col w-[302px] rounded-b-[8px] overflow-y-scroll max-h-[300px] bg-white z-[99] border pt-[20px] pb-[5px] -border--primary-black bottom-[-56px] border-t-0"
        >
          {list.map((it, index) => (
            <li
              onClick={() => setselected(it)}
              key={index}
              className="w-full px-5 med-16 "
            >
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { CustomSelect };
