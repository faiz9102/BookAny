"use client";
import {
  DateSelector,
  InputComponent,
} from "@/components/BookingComponents/ContactComp";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function page() {
  const [opened, setopened] = useState(null);
  const [blur, setblur] = useState(false);

  const [open, setopen] = useState(false);

  const [loading, setloading] = useState(false);
  const [userData, setuserData] = useState({
    url: "/userImg.png",
    name: "Mr. Jamshed Ali",
    email: "testemail@gamil.com",
    phone: "+92 331-7777722",
    dob: "12 June,2024",
  });
  const values = [
    {
      type: "Title",
      value: "Mr.",
      openState: "Enter your Title",
      children: (
        <Title
          changeName={() => {}}
          loading={loading}
          setloading={setloading}
          username={userData?.name}
          //   notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Name",
      value: userData?.name,
      openState:
        "This is the name on your travel document, which could be a license or a passport.",
      children: (
        <NameComponent
          changeName={() => {}}
          loading={loading}
          setloading={setloading}
          username={userData?.name}
          //   notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Email address",

      value: userData?.email,
      openState: "Use an address you’ll always have access to.",
      children: (
        <Email
          changeEmail={() => {}}
          loading={loading}
          setloading={setloading}
          useremail={userData?.email}
          //   notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Phone",
      value:
        userData?.phone === ""
          ? "Please provide your phone number"
          : userData?.phone,
      openState: "For Verification and conrdination",
      children: (
        <Phone
          changePhone={() => {}}
          loading={loading}
          setloading={setloading}
          userphone={userData?.phone}
          userotherphone={userData?.otherphone}
          //   notificationCaller={notificationCaller}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Date of birth",
      value: userData?.dob,
      openState: "Enter Your Date of Birth.",
      children: (
        <Dob
          changeDob={() => {}}
          loading={loading}
          setloading={setloading}
          userAddress={userData?.dob}
          setuserData={setuserData}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col mt-[51px]">
      <ImageSec userData={userData} />
      <div className="flex flex-col mt-[43px]">
        {values.map((it, index) => (
          <Editcomponent
            type={it.type}
            value={it.value}
            key={index}
            openState={it.openState}
            index={index}
            setopened={setopened}
            opened={opened}
            open={opened === index}
            setblur={setblur}
            blur={blur}
          >
            {it.children}
          </Editcomponent>
        ))}
      </div>
    </div>
  );
}

export default page;

const ImageSec = ({ userData }) => {
  return (
    <div className="flex items-center gap-[27px]">
      <div className="border-[5px] rounded-full flex-center -border--devide-line-clr ">
        <Image src={userData.url} alt="profile" width={157} height={157} />
      </div>
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[22px] font-[500] leading-[28px] -text--primary-black">
          {userData.name}
        </h1>
        <button className="text-[16px] font-[500] leading-[20px] w-[137px] h-[41px] -bg--light-gray border -border--devide-line-clr -text--primary-black rounded-[7px]">
          Change Photo
        </button>
      </div>
    </div>
  );
};

const Editcomponent = ({
  children,
  type,
  value,
  openState,
  index,
  setopened,
  opened,
  open,
  setblur,
  blur,
}) => {
  const [scope, animate] = useAnimate();

  const openAnimate = () => {
    setblur(!blur);
    opened === null ? setopened(index) : setopened(null);
    !open
      ? animate(scope.current, {
          height: scope.current.scrollHeight + "px",
        })
      : animate(scope.current, { height: "88px" });
  };

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: blur ? (open ? 1 : 0.3) : 1 }}
      className="flex h-[85px] w-full max-w-[594px] flex-col overflow-hidden border-b"
    >
      <div className="flex items-start justify-between w-full pt-3 ">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[16px] font-[400] leading-[20px] -text--primary-black">
            {type}
          </h2>
          <p className="text-[14px] text-[#707070]">
            {open ? openState : value}
          </p>
        </div>
        <div>
          <button
            onClick={openAnimate}
            className="border-none text-[16px] font-[500] underline underline-offset-2 outline-none leading-[20px] -text--primary-black "
            disabled={blur && !open}
          >
            {open ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
      <motion.div animate={{ opacity: open ? 1 : 0 }}>{children}</motion.div>
    </motion.div>
  );
};

const NameComponent = ({
  changeName,
  loading,
  setloading,
  username,
  notificationCaller,
  setuserData,
}) => {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const name =
        document.querySelector("#fir-name-chn").value +
        " " +
        document.querySelector("#sec-name-chn").value;
      if (name === username) {
        seterror("Entered name is same as previous name!");
        // notificationCaller(false, "Entered name is same as previous name!");
      } else {
        const success = await changeName(name);

        // notificationCaller(
        //   success,
        //   success ? "Name successfully changed!" : "Some error occured!"
        // );
        setuserData((e) => {
          return { ...e, name: name };
        });
      }
      setloading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6">
      <div className="flex w-full gap-3">
        <InputComponent placeholder={"First Name"} />
        <InputComponent placeholder={"Second Name"} />
      </div>
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
};

function Title({
  useremail,
  setloading,
  notificationCaller,
  setuserData,
  changeEmail,
  loading,
}) {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const email = document.querySelector("#email-chn").value;

      if (email === useremail) {
        seterror("Entered email is same as previous email!");
        notificationCaller(false, "Entered email is same as previous email!");
      } else {
        const success = await changeEmail(email);
        notificationCaller(
          success,
          success ? "Email successfully changed!" : "Some error occured!"
        );
        setuserData((e) => {
          return { ...e, email: email, verification: false };
        });
      }
      setloading(false);
    }
  };
  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6 pb-[30px]">
      <InputComponent placeholder={"Title"} />
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

function Email({
  useremail,
  setloading,
  notificationCaller,
  setuserData,
  changeEmail,
  loading,
}) {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const email = document.querySelector("#email-chn").value;

      if (email === useremail) {
        seterror("Entered email is same as previous email!");
        notificationCaller(false, "Entered email is same as previous email!");
      } else {
        const success = await changeEmail(email);
        notificationCaller(
          success,
          success ? "Email successfully changed!" : "Some error occured!"
        );
        setuserData((e) => {
          return { ...e, email: email, verification: false };
        });
      }
      setloading(false);
    }
  };
  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6 pb-[30px]">
      <InputComponent placeholder={"Email"} />
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

function Phone({
  userphone,
  userotherphone,
  setloading,
  loading,
  notificationCaller,
  setuserData,
  changePhone,
}) {
  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);
      const phone = document.querySelector("#phone-chn").value;
      const otherphone = document.querySelector("#other-chn").value;

      if (phone == userphone) {
        seterror("Entered phone number is same as previous phone number!");
        notificationCaller(
          false,
          "Entered phone number is same as previous phone number!"
        );
      } else {
        const success = await changePhone(phone, otherphone);
        notificationCaller(
          success,
          success ? "Phone number successfully changed!" : "Some error occured!"
        );
        setuserData((e) => {
          return { ...e, phone: phone, otherphone: otherphone };
        });
      }
      setloading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-[0.33rem] py-6">
      <div className="flex w-full gap-3">
        <InputComponent placeholder={"Phone"} />
        <InputComponent placeholder={"Add Other"} />
      </div>
      <span className="flex h-[18px] items-center">
        {error && <ErrorP error={error} />}
      </span>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

function Dob({
  changeDob,
  setloading,
  notificationCaller,
  setuserData,
  changeAddress,
  loading,
}) {
  const [country, setcountry] = useState({ iso2: "PK" });
  const [states, setstates] = useState();

  useEffect(() => {
    document
      .querySelectorAll(".stdropdown-input input")
      .forEach((it) => (it.required = true));
  }, []);

  const formRef = useRef(null);
  const [error, seterror] = useState(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      seterror(null);

      const address =
        document.querySelector("#st-address").value +
        " " +
        document.querySelector("#city-chn").value +
        ` ${country.name} ${states.name} ` +
        document.querySelector("#zip-chn").value;
      if (address === changeDob) {
        seterror("Entered address is same as previous address!");
        notificationCaller(
          false,
          "Entered address is same as previous address!"
        );
      } else {
        const success = await changeAddress(address);
        console.log(success);
        notificationCaller(
          success,
          success ? "Address successfully changed!" : "Some error occured!"
        );
        setuserData((e) => {
          return { ...e, address: address };
        });
      }

      setloading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-3 py-5 pb-20">
      <div className="flex flex-col mb-[10px]">
        <DateSelector name={"Date of Birth"} />
      </div>
      <BtnAccount Submit={Submit} loading={loading} />
    </form>
  );
}

const BtnAccount = ({ Submit, loading, name }) => {
  return (
    <button
      onClick={Submit}
      disabled={loading}
      className={`w-max rounded-[10px] -bg--brand-clr px-6 py-2.5 text-white disabled:bg-gray-300 ${
        name ? "py-3" : ""
      }`}
    >
      {name ? name : "Save"}
    </button>
  );
};

export { Editcomponent, BtnAccount };
