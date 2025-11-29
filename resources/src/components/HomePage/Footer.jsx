import { SocailIcons } from "@/consonants";
import Image from "next/image";
import React from "react";

function Footer() {
  const PaymentSvgs = [
    { name: "visa" },
    { name: "mastercard" },
    { name: "easypaisa" },
    { name: "jazzcash" },
    { name: "hbl" },
  ];

  return (
    <footer className="w-full border-t -border--devide-line-clr mt-[78px]">
      <div className="flex justify-between items-start max-w-[1137px] w-full pb-[37px] pt-[51px] m-auto">
        <div className="flex flex-col max-w-[407px]">
          <p className="bk-15">
            Office No:- 308, 3rd Floor Madina City Mall, Abdullah Haroon Rd,
            Saddar Karachi, Karachi City, Sindh 74400
          </p>

          <a href="phone:021 45632322" className="bk-15 mt-[16px]">
            Call: 021 45632322
          </a>
          <div className="flex items-center gap-[4px] mt-[34px]">
            {PaymentSvgs.map((it, index) => (
              <div className="w-[53px] h-[30px] flex-center">
                <img src={`/payments/${it.name}.png`} alt={it.name} />
              </div>
            ))}
          </div>
        </div>

        <ul className="flex flex-col gap-[19px]">
          <li className="bk-15">Airline Ticket</li>
          <li className="bk-15">Hotel Booking</li>
          <li className="bk-15">Car Rental</li>
          <li className="bk-15">Visa</li>
        </ul>

        <ul className="flex flex-col gap-[19px]">
          <li className="bk-15">About</li>
          <li className="bk-15">Contact us</li>
          <li className="bk-15">About us</li>
          <li className="bk-15">Flyer Int</li>
        </ul>

        <ul className="flex flex-col gap-[19px]">
          <li className="bk-15">FAQ</li>
          <li className="bk-15">Privacy Policy</li>
          <li className="bk-15">Terms & Condition</li>
        </ul>
      </div>
      <SmFooter />
    </footer>
  );
}

export default Footer;

const SmFooter = () => {
  return (
    <div className="w-full border-t -border--devide-line-clr">
      <div className="h-[72px] max-w-[1137px] m-auto w-full flex justify-between items-center">
        <p className="bk-14">
          Copyright 2024 Bookany Private Limited. All rights reserved.
        </p>
        <div className="flex-center gap-[8px]">
          {Object.keys(SocailIcons).map((it) => (
            <span>{SocailIcons[it]}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
