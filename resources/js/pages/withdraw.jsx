import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import WithdrawAmountComp from "../AccountComponents/WithdrawAmountComp";
import WithdrawDetails from "../AccountComponents/WithdrawDetails";
import { errorIcon } from "../../consonants";

function WithdrawPage({ onNavigate }) {
  const [screen, setscreen] = useState(0);
  const [authError, setauthError] = useState(false);
  const [loading, setloading] = useState(false);
  const [verified, setverified] = useState(false);

  const Screens = {
    0: (
      <OTPPage
        authError={authError}
        setauthError={setauthError}
        verified={verified}
      />
    ),
    1: <WithdrawAmountComp screen={screen} setscreen={setscreen} />,
    2: <WithdrawDetails />,
  };

  return (
    <div className="flex flex-col mt-[75px]">
      {Screens[screen]}
      <button
        onClick={() => {
          if (screen < 2) {
            setscreen((s) => s + 1);
          } else {
            onNavigate && onNavigate("/account/flyer-wallet/withdraw/review");
          }
        }}
        className="w-[173px] h-[55px] rounded-[8px] !text-white med-16 -bg--brand-clr"
      >
        Continue
      </button>
    </div>
  );
}

export default WithdrawPage;

const OTPPage = ({ authError, setauthError, verified }) => {
  const [timerStarted, setTimerStarted] = useState(false);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`flex flex-col ${verified ? "hidden small:flex" : ""}`}
    >
      <form className="flex w-full max-w-[300px] flex-col small:max-w-[100%]">
        <h1 className="text-[26px] font-[500] leading-[33px] small:hidden -text--primary-black">
          Confirm Your number
        </h1>

        <div className="flex flex-col gap-3 py-8 pb-5 border-b">
          <p className="font-[600]">Enter 4-digit OTP</p>
          <FourNumInput authError={authError} setauthError={setauthError} />
        </div>

        <div className="flex flex-col gap-1 mt-5 mb-[62px]">
          <div className="flex gap-1 text-[15px] text-[#707070]">
            <p>Haven't received an OTP?</p>
            <span
              onClick={(e) => {
                if (!timerStarted) {
                  let time = 60;
                  setTimerStarted(true);
                  const interval = setInterval(() => {
                    if (time === 0) {
                      clearInterval(interval);
                      e.target.innerText = "Send again";
                      setTimerStarted(false);
                    } else {
                      e.target.innerText = `0:${
                        time.toString().length === 2
                          ? time
                          : "0" + time.toString()
                      } Sec`;
                      time--;
                    }
                  }, 1000);
                }
              }}
              className="underline cursor-pointer text-[#EA0000] underline-offset-2"
            >
              Send again
            </span>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export const AuthError = ({ authError }) => (
  <div className="h-[16px]">
    <AnimatePresence>
      {authError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-center w-max gap-1.5"
        >
          {errorIcon}
          <p className="max-w-[16rem] whitespace-nowrap text-[13px] leading-[16px] text-pmRed">
            {authError}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FourNumInput = ({ authError, setauthError }) => {
  const nextInput = (e) => {
    authError && setauthError(null);
    e.target.value = e.target.value.toString().slice(0, 1);
    if (e.target.value !== "") e.target.nextElementSibling?.focus();
  };

  const remover = (e) => {
    if (e.key === "Backspace") {
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
        e.target.value = "";
      }
    }
  };

  const focusFunc = () => {
    let skip = false;
    document.querySelectorAll("#otp-inp input").forEach((it) => {
      if (skip) return;
      if (it.value === "") {
        it.focus();
        skip = true;
      }
    });
  };

  return (
    <div id="otp-inp" className="flex gap-2 mt-2">
      {[...Array(4)].map((_, i) => (
        <input
          key={i}
          type="number"
          className="w-5 border-b-2 border-[#707070] text-center outline-none"
          onInput={nextInput}
          onKeyUp={remover}
          onClick={focusFunc}
          required
        />
      ))}
    </div>
  );
};
