"use client";
import React, { useRef, useState } from "react";
import { BtnAccount, Editcomponent } from "../personal-info/page";

function page() {
  const formRef = useRef();
  const [userData, setuserData] = useState({
    url: "/userImg.png",
    name: "Mr. Jamshed Ali",
    email: "testemail@gamil.com",
    phone: "+92 331-7777722",
    dob: "12 June,2024",
  });
  const [opened, setopened] = useState(null);
  const [open, setopen] = useState(false);
  const [blur, setblur] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col">
      <Editcomponent
        openState={""}
        opened={opened}
        setopened={setopened}
        open={opened === 0}
        type={"Password"}
        value={"*************"}
        blur={blur}
        setblur={setblur}
        index={0}
      >
        <form ref={formRef} className="mt-1.5 flex flex-col gap-4">
          {!userData?.verification && (
            <div className="flex flex-col gap-1.5">
              <InputC
                name={"Current password"}
                id={"curr-pass"}
                seterror={seterror}
              />
              <p className="text-[13px] text-pmRed">Need a new password?</p>
            </div>
          )}
          <div className="mt-4 flex flex-col gap-[0.7rem]">
            <InputC
              name={"New password"}
              id={"new-pass"}
              error={error}
              seterror={seterror}
            />
            <InputC
              name={"Confirm password"}
              id={"conf-pass"}
              seterror={seterror}
            />
          </div>
          <BtnAccount
            Submit={Submit}
            loading={loading}
            name={"Update password"}
          />
        </form>
      </Editcomponent>
    </div>
  );
}

export default page;

const InputC = ({ name, id, error, seterror }) => {
  return (
    <div className="gap-1.2 flex flex-col gap-2.5">
      <div className="flex gap-3">
        <p className="text-[14px] leading-[18px] text-[#707070] ">{name}</p>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex gap-1"
          >
            {errorIcon}
            <p className="text-[13px] leading-[18px] text-pmRed ">{error}</p>
          </motion.span>
        )}
      </div>

      <input
        id={id}
        type="password"
        required
        className="rounded-[10px] border border-[#E5E5E5] px-3 py-3.5 outline-none hover:border-black focus:border-black"
        onInput={() => {
          seterror && seterror(null);
        }}
      />
    </div>
  );
};
