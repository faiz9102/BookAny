import React, { useEffect, useState } from "react";
import { Phone } from "./BookingComponents/PaymentComp";
import { close, google } from "@/consonants";
import { motion, useAnimate } from "framer-motion";
// import { FourNumInput } from "@/app/account/(account)/flyer-wallet/withdraw/page";

function LoginDialog({ setopenLoginDialog }) {
  const [submitted, setsubmitted] = useState(false);
  const router = useRouter() ?? {};
  const SubmitNum = (e) => {
    if (e.target.form.checkValidity()) {
      e.preventDefault();
      setsubmitted(true);
      if (submitted) router.push("/account");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 top-0 w-full flex-center -bg--primary-backdrop-clr z-[500]"
    >
      <div className="flex w-[878px] h-[628px] rounded-[21px] bg-white relative border -border--devide-line-clr-2 overflow-hidden">
        <button
          onClick={() => setopenLoginDialog(false)}
          className="absolute top-[30px] right-[30px]"
        >
          {close}
        </button>
        <ImageShower />
        <div
          className={`w-full pt-[87px] flex flex-col justify-between pl-[34px] pr-[37px]`}
        >
          {submitted ? (
            <ConfirmOTP
              setsubmitted={setsubmitted}
              router={router}
              setopenLoginDialog={setopenLoginDialog}
            />
          ) : (
            <LoginAccount SubmitNum={SubmitNum} />
          )}
          <div className="pt-[16px] pb-[32px] border-t -border--devide-line-clr-2">
            <p className="bk-12 max-w-[340px]">
              We'll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginDialog;

const ConfirmOTP = ({ setsubmitted, router, setopenLoginDialog }) => {
  return (
    <div className="flex flex-col">
      <h1 className="H1">Confirm Your number</h1>
      <div className="flex flex-col mt-[38px]">
        <p className="bk-16 !-text--primary-gray">
          Enter the code we’ve sent by OTP to
        </p>
        <div>
          <span className="bk-16 !-text--primary-gray">0331***7722</span>
          <button
            onClick={() => {
              setsubmitted(false);
            }}
            className="ml-[5px] underline underline-offset-2 text-[16px] font-[400] leading-[17px] -text--brand-clr"
          >
            edit number
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-[47px] pb-[22px] border-b -border--devide-line-clr-2 max-w-[345px] w-full">
        <h2 className="text-[16px] font-[50] leading-[17px] -text--primary-black">
          Enter 4 digit otp
        </h2>
        {/*<FourNumInput />*/}
      </div>
      <div className="gap-[7px] flex items-center mt-[26px]">
        <span className="text-[16px] font-[400] leading-[17px] text-[#707070]">
          Haven't received an OTP?
        </span>
        <button className="outline-none text-[16px] leading-[17px] font-[400] text-[#EA0000] underline underline-offset-2">
          Send again
        </button>
      </div>
      <button
        onClick={() => {
          router.push("/account");
          setopenLoginDialog(false);
        }}
        className="mt-[62px] w-[144px] h-[55px] -bg--primary-black rounded-[8px] !text-white med-16 "
      >
        Confirm
      </button>
    </div>
  );
};

const LoginAccount = ({ SubmitNum }) => {
  return (
    <div className="flex flex-col">
      <h1 className="H1">Login to account</h1>
      <div className="flex flex-col mt-[83px]">
        <h2 className="med-22">Enter your Phone number</h2>
        <form id="login-form" className="flex flex-col mt-[18px]">
          <Phone placeholder={"+92 3XX XXXXXXX"} required={true} />
          <p className="bk-12 mt-[14px] max-w-[340px]">
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </p>
          <div className="flex mt-[30px] gap-[11px]">
            <button
              form="login-form"
              onClick={SubmitNum}
              className="w-[144px] h-[55px] rounded-[8px] -bg--primary-black !text-white med-16 "
            >
              Get OTP
            </button>
            <button className="w-[69px] flex-center h-[55px] rounded-[10px] border -border--devide-line-clr-2 ">
              {google}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ImageShower = () => {
  const [scope, animate] = useAnimate();
  const [imageSt, setimageSt] = useState(0);

  const ImgButton = ({ imageSt, index, clickFunc }) => {
    return (
      <motion.button
        onClick={clickFunc}
        initial={{ opacity: imageSt === index ? 1 : 0.5 }}
        animate={{ opacity: imageSt === index ? 1 : 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-[95px] h-[5px] rounded-[10px] bg-white `}
      />
    );
  };

  const AnimateFunc = async () => {
    animate(
      `.imag-anim-all`,
      { opacity: 0, zIndex: 5 },
      { duration: 0.6, ease: "easeInOut" }
    );
    animate(
      `#img-anim-${imageSt}`,
      { opacity: 1, zIndex: 10 },
      { duration: 0.6, ease: "easeInOut" }
    );
  };

  useEffect(() => {
    AnimateFunc();
  }, [imageSt]);
  useEffect(() => {
    setInterval(() => {
      setimageSt((e) => (e > 1 ? 0 : e + 1));
    }, 3000);
  }, []);
  const ImagesAnim = [
    "/loginPage-1.png",
    "/loginPage-2.png",
    "/loginPage-3.png",
  ];

  return (
    <div
      ref={scope}
      className="max-w-[395px] w-full h-full relative flex items-end justify-center"
    >
      {ImagesAnim.map((it, index) => (
        <img
          key={index}
          id={`img-anim-` + index}
          src={it}
          width={500}
          height={500}
          className="w-[395px] h-full absolute inset-0 imag-anim-all"
          alt="plane"
        />
      ))}

      <div className="flex-center gap-[16px] z-[20] mb-[33px]">
        {[0, 1, 2].map((it) => (
          <ImgButton
            clickFunc={() => setimageSt(it)}
            key={it}
            imageSt={imageSt}
            index={it}
          />
        ))}
      </div>
    </div>
  );
};
