import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ use relative path (Laravel friendly)
import { check } from "../consonants";

function NotificationSettings() {
  const arrSettings = [
    { name: "Flight Status Notifications" },
    { name: "Check-in Reminders" },
    { name: "Payment and Billing Notifications" },
    { name: "Special Offers and Promotions" },
    { name: "Loyalty Program Notifications" },
    { name: "Travel Insurance Alerts" },
    { name: "Seat Selection Updates" },
    { name: "Baggage Allowance and Changes" },
    { name: "Security & Account Activity" },
  ];

  return (
    <div className="flex flex-col max-w-[594px] w-full mt-[31px]">
      {arrSettings.map((it, index) => (
        <div
          key={index}
          className="border-b -border-x--devide-line-clr-2 h-[71px] flex justify-between items-center"
        >
          <p className="text-[16px] leading-[20px] -text--primary-black font-[400]">
            {it.name}
          </p>

          <RoundCheck />
        </div>
      ))}
    </div>
  );
}

export default NotificationSettings;

const RoundCheck = () => {
  const [open, setopen] = useState(false);

  return (
    <motion.div
      animate={{ backgroundColor: open ? "#222222" : "#DDDDDD" }}
      onClick={() => setopen(!open)}
      className={`w-[44px] h-[29px] rounded-[100px] relative cursor-pointer ${
        open ? "-bg--primary-black" : "bg-[#DDDDDD]"
      }`}
    >
      <motion.div
        initial={{ left: 3 }}
        animate={{ left: !open ? 3 : "unset", right: open ? 3 : "unset" }}
        className="w-[25px] h-[25px] rounded-full bg-white absolute top-[2px] flex-center"
      >
        {open && check}
      </motion.div>
    </motion.div>
  );
};

export { RoundCheck };
