"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckBtn } from "../SearchBar";
import {
  chevrondownward,
  discover,
  easypaisa,
  explamatoryInp,
  flyerWallet,
  hbl,
  jazzCash,
  masterCard,
  VisaCard,
  visaSvg,
} from "@/consonants";
import { motion, useAnimate } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import { InputComponent } from "./ContactComp";

function PaymentComp() {
  const [selectedPaymentMethod, setselectedPaymentMethod] = useState(0);
  return (
    <div className="flex flex-col w-full ">
      <div className="flex-center mt-[28px]">
        <PaymentCard svg={flyerWallet} text={"Flyer Wallet"} />
      </div>
      <div className="flex flex-col mt-[29px]">
        <h2 className="text-[16px] font-[500] leading-[20px] -text--primary-black">
          Other options
        </h2>
        <PaymentsDrops
          selectedPaymentMethod={selectedPaymentMethod}
          setselectedPaymentMethod={setselectedPaymentMethod}
        />
      </div>
    </div>
  );
}

export default PaymentComp;

const PaymentsDrops = ({ selectedPaymentMethod, setselectedPaymentMethod }) => {
  return (
    <div className="flex flex-col gap-[16px] mt-[16px]">
      <DebitCard
        selectedPaymentMethod={selectedPaymentMethod}
        setselectedPaymentMethod={setselectedPaymentMethod}
      />
      <EasypaisaCard
        selectedPaymentMethod={selectedPaymentMethod}
        setselectedPaymentMethod={setselectedPaymentMethod}
      />
      <JazzCashCard
        selectedPaymentMethod={selectedPaymentMethod}
        setselectedPaymentMethod={setselectedPaymentMethod}
      />

      <HblDirect
        selectedPaymentMethod={selectedPaymentMethod}
        setselectedPaymentMethod={setselectedPaymentMethod}
      />
    </div>
  );
};

const PaymentCard = ({
  children,
  checkShow,
  svg,
  text,
  mr,
  ml,
  selectedPaymentMethod,
  setselectedPaymentMethod,
  height,
  easyShower,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (selectedPaymentMethod) {
      if (selectedPaymentMethod === text) {
        animate(
          scope.current,
          { height: height },
          { duration: 0.5, ease: "easeInOut" }
        );
      } else {
        animate(
          scope.current,
          { height: "85px" },
          { duration: 0.5, ease: "easeInOut" }
        );
      }
    }
  }, [selectedPaymentMethod]);

  return (
    <div
      ref={scope}
      style={{ boxShadow: "5px 5px 50px #00000020" }}
      id="payem-card"
      className={`flex flex-col w-full h-[85px] border -border--devide-line-clr rounded-[12px] bg-white overflow-hidden hover:-border--primary-black ${
        selectedPaymentMethod === text ? "-border--primary-black" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between pl-[14px] pr-[23px] min-h-[85px] max-w-[619px] w-full ${
          selectedPaymentMethod === text
            ? "border-b -border--devide-line-clr"
            : ""
        }`}
      >
        <div className="flex-center ">
          {checkShow && (
            <CheckBtn
              val={selectedPaymentMethod === text}
              clickFunc={() => {
                setselectedPaymentMethod(text);
              }}
            />
          )}
          <span style={{ marginRight: mr, marginLeft: ml }}>{svg}</span>
          <p className="text-[18px] font-[500] leading-[23px] -text--primary-black">
            {text}
          </p>
          {easyShower && (
            <span className="-text--brand-clr ml-[21px] bg-[#007BFF1A] rounded-[50px] w-[135px] h-[29px] text-[14px] font-[500] leading-[18px] flex-center">
              Save PKR 34,000
            </span>
          )}
        </div>
        {!checkShow && (
          <button className="w-[81px] h-[41px] rounded-[8px] -bg--primary-black border text-[16px] font-[400] leading-[20px] text-white -border--primary-black">
            Login
          </button>
        )}
      </div>
      {children}
      <div
        className={`flex items-center justify-between gap-[52px] pt-[20px] border-t -border--devide-line-clr pl-[25px] pr-[22px] ${
          selectedPaymentMethod === text ? "" : "hidden"
        }`}
      >
        <span className={`max-w-[395px] w-full text-[12px] font-[400] `}>
          By selecting to complete this booking, I acknowledge that I have read
          and accept the above Policy section containing Fare Rules &
          Restrictions,{" "}
          <span className="underline cursor-pointer -text--brand-clr underline-offset-2">
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer -text--brand-clr underline-offset-2">
            Privacy Policy.
          </span>
        </span>
        <button className="text-white w-[125px] h-[50px] rounded-[8px] -bg--brand-clr">
          Pay Now
        </button>
      </div>
    </div>
  );
};

const PaymentInput = ({ placeholder, cardText, imgName }) => {
  const [scope, animate] = useAnimate();

  const focused = () => {
    animate(
      "#placeholder-inp",
      {
        left: 12,
        top: "-7px",
        y: 0,
        fontSize: "12px",
        lineHeight: "15px",
        backgroundColor: "white",
      },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  const blured = () => {
    animate(
      "#placeholder-inp",
      {
        left: 19,
        top: "50%",
        fontSize: "16px",
        lineHeight: "20px",
        backgroundColor: "white",
      },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  return (
    <div
      ref={scope}
      className="w-full h-[55px] hover:-border--primary-black flex items-center border -border--devide-line-clr rounded-[8px] pr-[11px] relative "
    >
      <motion.span
        id="placeholder-inp"
        initial={{ y: "-50%" }}
        animate={{ y: "-50%" }}
        className="text-[16px] font-[400] leading-[20px] -text--primary-gray absolute top-[50%] left-[19px] pointer-events-none "
      >
        {placeholder}
      </motion.span>
      <input
        type="text"
        onFocus={focused}
        onBlur={blured}
        className="w-full h-full pl-[19px] placeholder:-text--primary-gray rounded-[8px] outline-none text-[16px]"
      />
      <span
        onPointerEnter={(e) => {
          e.target.closest("#payem-card").classList.remove("overflow-hidden");
          console.log(e.target.closest("#payem-card"));
        }}
        onPointerLeave={(e) => {
          e.target.closest("#payem-card").classList.add("overflow-hidden");
        }}
        className=" relative cursor-pointer [&_#exp-card]:hover:!flex [&_svg]:hover:-fill--success-1 [&_svg]:hover:stroke-white *:pointer-events-none "
      >
        {explamatoryInp}
        <span
          id="exp-card"
          className="absolute z-[30] hidden -border--primary-black top-[-150px] left-[50%] translate-x-[-50%] w-[199px] h-[143px] flex-col px-[15px] pr-[0] py-[11px] bg-white rounded-[12px] border shadow-xl "
        >
          <p className="font-[500] text-[14px] -text--primary-black leading-[18px]">
            {cardText}
          </p>
          <span className="text-[12px] mt-[3px] font-[400] leading-[15px] -text--primary-gray">
            Your card number 16 digit long.
          </span>
          <div className="flex-center pr-[15px] mt-[6px]">
            <img src={`/cards/${imgName}.svg`} alt="card" />
          </div>
        </span>
      </span>
    </div>
  );
};

const DebitCard = ({ selectedPaymentMethod, setselectedPaymentMethod }) => {
  return (
    <PaymentCard
      text={"Debit / Credit Card"}
      checkShow={true}
      selectedPaymentMethod={selectedPaymentMethod}
      setselectedPaymentMethod={setselectedPaymentMethod}
      svg={VisaCard}
      mr={"14px"}
      ml={"3px"}
      height={"427px"}
    >
      <div className="flex h-[252px] w-full">
        <div className="flex flex-col w-[260px] pl-[23px] pr-[17px] pt-[21px] border-r -border--devide-line-clr">
          <span className="text-[14px] leading-[18px] font-[400] -text--primary-gray">
            All information is encrypted and we do not <br /> store your card
            details.
          </span>
          <div className="flex flex-col mt-[17px]">
            <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
              We accept
            </p>
            <div className="flex items-center gap-[4px] mt-[7px]">
              <span className="h-[34px] -bg--light-gray rounded-[4px] flex-center">
                {visaSvg}
              </span>
              <span className="h-[34px] -bg--light-gray rounded-[4px] flex-center">
                {masterCard}
              </span>
              <span className="h-[34px] -bg--light-gray rounded-[4px] px-[9px] flex-center">
                {discover}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[356px] px-[29px] flex flex-col gap-[12px] pt-[26px]">
          <PaymentInput
            placeholder={"Name on card"}
            cardText={"Name on card"}
            imgName={"nameCard"}
          />
          <PaymentInput
            placeholder={"Card number"}
            cardText={"Card number"}
            imgName={"numberCard"}
          />
          <div className="flex-center gap-[12px]">
            <PaymentInput
              placeholder={"Expiry"}
              cardText={"Expiry date"}
              imgName={"expiryCard"}
            />
            <PaymentInput
              placeholder={"CVC"}
              cardText={"CVC"}
              imgName={"cvcCard"}
            />
          </div>
        </div>
      </div>
    </PaymentCard>
  );
};

const EasypaisaCard = ({ selectedPaymentMethod, setselectedPaymentMethod }) => {
  return (
    <PaymentCard
      text={"Easypaisa"}
      checkShow={true}
      selectedPaymentMethod={selectedPaymentMethod}
      setselectedPaymentMethod={setselectedPaymentMethod}
      svg={easypaisa}
      mr={"15px"}
      ml={"5px"}
      height={"427px"}
      easyShower={true}
    >
      <motion.div className="h-[252px] w-full flex">
        <div className="flex border-r -border--devide-line-clr flex-col pt-[21px] w-full max-w-[259px] pl-[23px] pr-[17px] ">
          <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
            Follow Steps
          </p>
          <span className="text-[14px] mt-[8px] leading-[18px] font-[400] -text--primary-gray">
            Please make sure that your Easypaisa account is active and has
            sufficient balance.
          </span>
          <span className="text-[14px] mt-[15px] leading-[18px] font-[400] -text--primary-gray">
            Please enter your account's 5-digit PIN when prompted on your
            Easypaisa app.
          </span>
        </div>
        <div className="flex flex-col w-full pt-[21px] px-[28px] gap-[21px]">
          <p className="text-[14px] font-[500] -text--primary-black leading-[18px]">
            Enter your Mobile Number as registered on Easypaisa
          </p>
          <Phone />
        </div>
      </motion.div>
    </PaymentCard>
  );
};

const JazzCashCard = ({ selectedPaymentMethod, setselectedPaymentMethod }) => {
  return (
    <PaymentCard
      text={"Jazz Cash"}
      checkShow={true}
      selectedPaymentMethod={selectedPaymentMethod}
      setselectedPaymentMethod={setselectedPaymentMethod}
      svg={jazzCash}
      mr={"18px"}
      ml={"9px"}
      height={"427px"}
    >
      <div className="h-[252px] w-full flex">
        <div className="flex border-r -border--devide-line-clr flex-col pt-[21px] w-full max-w-[259px] pl-[23px] pr-[17px] ">
          <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
            Follow Steps
          </p>
          <span className="text-[14px] mt-[8px] leading-[18px] font-[400] -text--primary-gray">
            Please make sure that your Easypaisa account is active and has
            sufficient balance.
          </span>
          <span className="text-[14px] mt-[15px] leading-[18px] font-[400] -text--primary-gray">
            Enter your Mobile Number as registered on Jazz Cash
          </span>
        </div>
        <div className="flex flex-col w-full pt-[21px] px-[28px] gap-[21px]">
          <p className="text-[14px] font-[500] -text--primary-black leading-[18px]">
            Enter your Mobile Number as registered on Jazz Cash
          </p>
          <Phone />
        </div>
      </div>
    </PaymentCard>
  );
};

const HblDirect = ({ selectedPaymentMethod, setselectedPaymentMethod }) => {
  return (
    <PaymentCard
      text={"HBL Direct Transfer"}
      checkShow={true}
      selectedPaymentMethod={selectedPaymentMethod}
      setselectedPaymentMethod={setselectedPaymentMethod}
      svg={hbl}
      mr={"16px"}
      ml={"15px"}
      height={"427px"}
    >
      <div className="h-[252px] w-full flex">
        <div className="flex border-r -border--devide-line-clr flex-col pt-[21px] w-full max-w-[259px] pl-[23px] pr-[17px] ">
          <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
            Follow Steps
          </p>
          <span className="text-[14px] mt-[8px] leading-[18px] font-[400] -text--primary-gray">
            Please make sure that your Easypaisa account is active and has
            sufficient balance.
          </span>
          <span className="text-[14px] mt-[15px] leading-[18px] font-[400] -text--primary-gray">
            Enter your Mobile Number as registered on Jazz Cash
          </span>
        </div>
        <div className="flex flex-col w-full pt-[21px] px-[28px] gap-[21px]">
          <div className="flex flex-col gap-[13px]">
            <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
              Please enter your 13 digit CNIC number
            </p>
            <PaymentInput
              placeholder={"CNIC number"}
              cardText={"CNIC"}
              imgName={"numberCard"}
            />
          </div>
          <div className="flex flex-col gap-[13px]">
            <p className="text-[14px] font-[500] leading-[18px] -text--primary-black">
              Please enter your HBL Account Number
            </p>
            <InputComponent placeholder={"Account number"} />
          </div>
        </div>
      </div>
    </PaymentCard>
  );
};

const Phone = ({ placeholder, required, widthFull }) => {
  const [value, setValue] = useState();
  const phoneInp = useRef(null);

  useEffect(() => {
    document.querySelector(".phone-inp input").required = required;
  }, [required]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        document.querySelector("#payment-sec select").click();
      }}
      id="payment-sec"
      className={`${widthFull ? "w-full" : "w-[302px]"} h-[55px] flex relative`}
    >
      <PhoneInput
        ref={phoneInp}
        placeholder={placeholder ? placeholder : "Enter phone number"}
        value={value}
        onChange={setValue}
        className="cursor-pointer phone-inp"
        require={true}
      />
      <span className="absolute top-[50%] translate-y-[-50%] left-[54px]">
        {chevrondownward}
      </span>
    </div>
  );
};

export { PaymentsDrops, Phone };
