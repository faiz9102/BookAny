"use client";
import { CheckBox } from "../../../src/app/search/page";
import { motion, useAnimate } from "framer-motion";
import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { getCountryCode } from "countries-list";
import { addicon, check, chevrondownward } from "@/consonants";
import PhoneInput from "react-phone-number-input";

function ContactComp() {
  const [Passengers, setPassengers] = useState([""]);
  const [Inp, setInp] = useState(false);
  const [scopeRef, animate] = useAnimate();

  const AnimFunc = () => {
    if (Inp) {
      animate(".inp-comp", { opacity: 0 }, { duration: 0.5 });
      animate(scopeRef.current, { height: 80 }, { duration: 0.5 });
    } else {
      animate(
        scopeRef.current,
        { height: scopeRef.current.scrollHeight },
        { duration: 0.5 }
      );
      animate(".inp-comp", { opacity: 1 }, { duration: 1.5 });
    }
  };

  return (
    <form className="flex flex-col w-full mt-[28px] ">
      <div className="flex-center gap-[15px]">
        <InputComponent placeholder={"Email address"} />
        <PhoneInputComp placeholder={"Phone Number"} />
      </div>
      <div className="flex flex-col mt-[17px] gap-[12px] border-b -border--devide-line-clr">
        <TermsAccept
          text={"I agree to receive travel related information and deals"}
        />
        <motion.div
          ref={scopeRef}
          initial={{ height: 80 }}
          className="flex flex-col overflow-hidden pb-[40px]"
        >
          <TermsAccept
            clickFunc={() => {
              AnimFunc();
              setInp(!Inp);
            }}
            showInp={true}
          >
            <p className="text-[16px] leading-[20px] -text--primary-gray  mb-[24px]">
              <a href={"/"} className="-text--brand-clr">
                Create an account
              </a>{" "}
              with{" "}
              <span className="-text--primary-black">
                jamshedali@gmail.com 
              </span>{" "}
              to manage your bookings more conveniently and get Rewards, Set
              your password shortly.
            </p>
          </TermsAccept>
        </motion.div>
      </div>
      <div className="flex flex-col mt-[34px] gap-[28px]">
        <h2 className="text-[26px] leading-[33px] font-[500] -text--primary-black">
          Passenger details
        </h2>
        {Passengers.map((it, key) => (
          <PassengerForm key={key} />
        ))}
      </div>
      <button
        onClick={() => {
          setPassengers((e) => [...e, ""]);
        }}
        className="flex gap-[13px] items-center mt-[25px] cursor-pointer w-max"
      >
        {addicon}
        <span className="underline underline-offset-2  -text--primary-gray text-[16px] font-[400] leading-[20px]">
          Add another Passenger
        </span>
      </button>
    </form>
  );
}

export default ContactComp;

const InputComponent = ({ placeholder, minWidth }) => {
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
        opacity: 1,
      },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  const blured = () => {
    if (scope.current.lastChild.value) {
      animate("#placeholder-inp", { opacity: 0 });
    } else {
      animate(
        "#placeholder-inp",
        {
          left: 19,
          top: "50%",
          y: 0,
          y: "-50%",
          fontSize: "16px",
          lineHeight: "20px",
          backgroundColor: "white",
        },
        { duration: 0.3, ease: "easeOut" }
      );
    }
  };

  return (
    <div
      ref={scope}
      style={{ minWidth: minWidth }}
      className={`${minWidth ? "" : "max-w-[302px]"} h-[55px] w-full relative`}
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
        className="w-full pl-[19px] h-[55px] border -border--devide-line-clr hover-shadow hover:-border--primary-black rounded-[8px] outline-none active:-text--primary-black"
      />
    </div>
  );
};

const TermsAccept = ({ children, text, showInp, clickFunc }) => {
  return (
    <>
      <div className="flex gap-[10px] ">
        <span>
          <CheckBox clickFunc={clickFunc} />{" "}
        </span>
        {children ? (
          children
        ) : (
          <p className="text-[16px] leading-[20px] -text--primary-gray">
            {text}
          </p>
        )}
      </div>
      {showInp && (
        <motion.div initial={{ opacity: 0 }} className="inp-comp">
          <InputComponent placeholder={"Password"} />
        </motion.div>
      )}
    </>
  );
};

const PassengerForm = () => {
  return (
    <div className="flex flex-wrap gap-[15px] gap-y-[18px]">
      <InputComponent placeholder={"First name"} />
      <InputComponent placeholder={"Sur name"} />
      <NationalityInput />
      <DateSelector name={"Date of Birth"} />
      <InputComponent placeholder={"Passport number"} />
      <DateSelector name={"Passport expiry"} />
      <InputComponent placeholder={"Select gender"} />
      <InputComponent placeholder={"Frequent Flyer Number (optional)"} />
    </div>
  );
};

const NationalityInput = () => {
  const [country, setcountry] = useState("Pakistan");

  return (
    <div className="flex border relative -border--devide-line-clr max-w-[302px] h-[55px] w-full rounded-[8px] overflow-hidden  hover-shadow hover:-border--primary-black cursor-pointer">
      <span className="h-[55px] flex-center pr-[14px] pl-[16px]">
        <img
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryCode(
            country
          )}.svg`}
          width={"36px"}
          height={"25px"}
          alt={`flag-${country}`}
          className="rounded-[3px] border -border--primary-black w-[46px]"
        />
      </span>
      {country.length < 13 && (
        <span
          className={`absolute text-[12px] font-[400] leading-[11px] right-[50px] top-[50%] translate-y-[-50%] -text--primary-gray pointer-events-none`}
        >
          (Nationality)
        </span>
      )}
      <div className="relative w-full rounded-lg">
        <CountryDropdown
          defaultOptionLabel="Nationality"
          onChange={(val) => setcountry(val)}
          value={country}
          className="bg-transparent w-full pl-[16px] h-[53px] outline-none mr-[16.5px] border-l -border--devide-line-clr cursor-pointer"
        />
        <span className="absolute bg-white w-[50px] h-[30px] flex-center top-[50%] translate-y-[-50%] right-[0px] pointer-events-none">
          {chevrondownward}
        </span>
      </div>
    </div>
  );
};

const DateSelector = ({ name }) => {
  const [month, setmonth] = useState("January");
  const [active, setactive] = useState(false);
  const [openedMonths, setopenedMonths] = useState(false);
  const [dateval, setdateval] = useState(false);
  const [yearval, setyearval] = useState(false);

  const [selDate, setselDate] = useState(false);

  const Arrmonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      id="selector-date"
      onClick={() => setactive(true)}
      className={`flex-center w-[302px] h-[55px] rounded-[8px] border -border--devide-line-clr relative hover-shadow ${
        active ? "" : "hover:-border--primary-black"
      }`}
    >
      <div className={`${active ? "flex-center" : "hidden"} w-full h-full`}>
        <input
          type="number"
          onInput={(e) => setdateval(e.target.value)}
          placeholder="DD"
          className="w-[87px] h-full text-center border-r -border--devide-line-clr rounded-l-lg outline-none hover:-border--primary-black border border-transparent"
        />

        <div
          onClick={() => setopenedMonths(true)}
          className={`w-full relative h-full hover:border hover:-border--primary-black flex justify-between items-center pl-[13px] pr-[10px] border border-transparent ${
            openedMonths ? "!-border--primary-black border-b-transparent" : ""
          }`}
        >
          <span className="text-[16px] font-[400] leading-[20px] -text--primary-gray">
            {month}
          </span>
          <span>{chevrondownward}</span>
          {openedMonths && (
            <div className="flex flex-col z-[100] pb-[10px] w-[126px] absolute rounded-b-[8px] border -border--primary-black left-[-1px] top-[52px] bg-white border-t-[0]">
              {Arrmonths.map((it) => (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setmonth(it);
                    setopenedMonths(false);
                  }}
                  className="w-full cursor-pointer text-[15px] leading-[20px] font-[400] -text--primary-gray hover:-text--primary-black px-[14px]"
                >
                  {it}
                </span>
              ))}
            </div>
          )}
        </div>

        <input
          type="number"
          onInput={(e) => setyearval(e.target.value)}
          placeholder="Year"
          className="w-[87px] h-full text-center border-l -border--devide-line-clr rounded-r-lg outline-none hover:-border--primary-black border border-transparent"
        />
      </div>
      <div
        className={`items-center justify-between w-full h-full pl-[19px] pr-[17px] ${
          active ? "hidden" : "flex"
        }`}
      >
        <span
          className={` ${
            selDate
              ? "!text-[16px] !font-[500] !-text--primary-black !leading-[20px]"
              : "med-16 !font-[400] !-text--primary-gray"
          }`}
        >
          {selDate ? selDate : name}
        </span>
        <span className="">{chevrondownward}</span>
      </div>
      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setactive(false);
            setselDate(dateval + " " + month + ", " + yearval);
          }}
          disabled={!dateval || !yearval}
          className="w-[28px] h-[28px] rounded-full absolute right-[-42px] disabled:cursor-not-allowed disabled:hover:-bg--primary-gray hover:-bg--success-1 bg-[#E6F8F3] [&_path]:-fill--success-1 [&_path]:hover:fill-white cursor-pointer flex-center [&_svg]:w-[20px] [&_svg]:h-[20px] "
        >
          {check}
        </button>
      )}
    </div>
  );
};

const PhoneInputComp = ({ placeholder }) => {
  const [val, setval] = useState();
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
        opacity: 1,
      },
      { duration: 0.3, ease: "easeOut" }
    );
  };

  const blured = () => {
    if (val) {
      animate("#placeholder-inp", { opacity: 0 });
    } else {
      animate(
        "#placeholder-inp",
        {
          left: 19,
          top: "50%",
          y: 0,
          y: "-50%",
          fontSize: "16px",
          lineHeight: "20px",
          backgroundColor: "white",
        },
        { duration: 0.3, ease: "easeOut" }
      );
    }
  };

  return (
    <div
      ref={scope}
      id="phone-inp-payment"
      className="flex-center w-[302px] h-[55px] relative "
    >
      <motion.span
        id="placeholder-inp"
        initial={{ y: "-50%" }}
        animate={{ y: "-50%" }}
        className="text-[16px] font-[400] leading-[20px] -text--primary-gray absolute top-[50%] left-[19px] pointer-events-none "
      >
        {placeholder}
      </motion.span>
      <span className="absolute right-[14px]">{chevrondownward}</span>
      <PhoneInput
        value={val}
        onChange={(e) => {
          setval(e);
        }}
        onFocus={focused}
        onBlur={blured}
        className="hover-shadow hover:!-border--primary-black"
      />
    </div>
  );
};

export { InputComponent, DateSelector, PassengerForm };
