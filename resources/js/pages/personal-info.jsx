import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

// ✅ Relative imports (Laravel-safe)
import {
  DateSelector,
  InputComponent,
} from "../components/BookingComponents/ContactComp";

function AccountProfile() {
  const [opened, setopened] = useState(null);
  const [blur, setblur] = useState(false);
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
          loading={loading}
          setloading={setloading}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Name",
      value: userData.name,
      openState:
        "This is the name on your travel document, which could be a license or a passport.",
      children: (
        <NameComponent
          loading={loading}
          setloading={setloading}
          username={userData.name}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Email address",
      value: userData.email,
      openState: "Use an address you’ll always have access to.",
      children: (
        <Email
          loading={loading}
          setloading={setloading}
          useremail={userData.email}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Phone",
      value: userData.phone || "Please provide your phone number",
      openState: "For verification and coordination",
      children: (
        <Phone
          loading={loading}
          setloading={setloading}
          userphone={userData.phone}
          setuserData={setuserData}
        />
      ),
    },
    {
      type: "Date of birth",
      value: userData.dob,
      openState: "Enter your date of birth",
      children: (
        <Dob
          loading={loading}
          setloading={setloading}
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
            key={index}
            {...it}
            index={index}
            opened={opened}
            open={opened === index}
            setopened={setopened}
            blur={blur}
            setblur={setblur}
          >
            {it.children}
          </Editcomponent>
        ))}
      </div>
    </div>
  );
}

export default AccountProfile;


const ImageSec = ({ userData }) => {
  return (
    <div className="flex items-center gap-[27px]">
      <div className="border-[5px] rounded-full flex-center">
        <img
          src={userData.url}
          alt="profile"
          className="w-[157px] h-[157px] rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[22px] font-[500]">
          {userData.name}
        </h1>

        <button className="text-[16px] w-[137px] h-[41px] bg-gray-100 border rounded-[7px]">
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
    setopened(opened === index ? null : index);

    animate(scope.current, {
      height: !open ? scope.current.scrollHeight : 88,
    });
  };

  return (
    <motion.div
      ref={scope}
      animate={{ opacity: blur ? (open ? 1 : 0.3) : 1 }}
      className="flex h-[85px] max-w-[594px] flex-col overflow-hidden border-b"
    >
      <div className="flex justify-between pt-3">
        <div>
          <h2 className="text-[16px]">{type}</h2>
          <p className="text-[14px] text-gray-500">
            {open ? openState : value}
          </p>
        </div>

        <button
          onClick={openAnimate}
          disabled={blur && !open}
          className="underline"
        >
          {open ? "Cancel" : "Edit"}
        </button>
      </div>

      <motion.div animate={{ opacity: open ? 1 : 0 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
