import Image from "next/image";
import React from "react";

function LoyalityCard() {
  return (
    <div className="hover-shadow max-w-[659px] w-full h-[317px] mt-[40px] pl-[34px] flex justify-between items-center pt-[25px] pb-[32px] border -border--devide-line-clr-2 rounded-[15px]">
      <div className="flex flex-col w-full pr-[56px]">
        <div className="flex flex-col gap-[27px]">
          <h1 className="med-22">Loyality Status</h1>
          <div className="flex gap-[15px] items-center ">
            <div className="w-[99px] h-[99px] rounded-full border-[3px] -border--devide-line-clr">
              <Image src={"/userImg.png"} width={99} height={99} alt="user" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="med-14">Current Level</p>
              <span
                style={{
                  background:
                    "linear-gradient(254deg, #C58200 1.76%, #8F4916 33.01%, #D7882C 65.41%, #AF611A 104.85%)",
                }}
                className="w-[69px] h-[31px] rounded-[8px] med-14 !text-white flex-center"
              >
                Bronze
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[21px] mt-[19px] border-t -border--devide-line-clr ">
          <p className="med-14 mb-[16px]">Next Tire Progress</p>
          <Tire progress={200} />
          <div className="flex mt-[5px] items-center justify-between">
            <p className="med-14">1890/4000</p>
            <span
              style={{
                background:
                  "linear-gradient(254deg, #FFF6C6 1.76%, #E1B43F 33.01%, #F1E815 60.29%, #EAC503 104.85%)",
              }}
              className="w-[45px] flex-center med-14 h-[23px] rounded-[4px]"
            >
              Gold
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-[268px] flex-center flex-col pt-[18px] pb-[10px] w-full border-l -border--devide-line-clr h-full">
        <div className="flex-col flex-center">
          <RoundedTire />

          <p className="font-[500] mt-[16px] text-[10px] leading-[13px] -text--primary-black">
            Points Expiry:{" "}
            <span className="-text--primary-red">23 Sep, 2024</span>
          </p>
        </div>
        <button className="med-14 -bg--brand-clr !text-white w-[127px] h-[38px] mt-[25px] rounded-[8px]">
          Redeem Points
        </button>
      </div>
    </div>
  );
}

export default LoyalityCard;

const Tire = ({ progress }) => {
  return (
    <div className="w-[300px] h-[5px] rounded-[25px] -bg--light-gray flex">
      <span
        style={{
          width: progress + "px",
          background:
            "linear-gradient(89.65deg, #FFF50A 0.3%, #FF9900 101.43%)",
        }}
        className="rounded-[25px] h-[5px] inline-block max-w-[300px]"
      ></span>
    </div>
  );
};

const RoundedTire = () => {
  let rad = 2 * 3.14 * 65;
  return (
    <div className="flex-center rounded-full w-[137px] h-[137px] rotate-[-90deg] relative ">
      <svg
        width={137}
        height={137}
        viewBox="0 0 137 137"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className=""
      >
        <circle
          cx={68}
          cy={68}
          r={65}
          className="stroke-[7px] -stroke--devide-line-clr fill-none"
        ></circle>
        <circle
          cx={68}
          cy={68}
          r={65}
          strokeDasharray={rad - 0.5 * rad}
          strokeLinecap="round"
          className="fill-none stroke-[#D72C0D] stroke-[7px]"
        ></circle>
      </svg>
      <div className="flex-center flex-col gap-[1px] absolute rotate-[90deg] left-[30px]">
        <p className="text-[10px] font-[500] leading-[13px] -text--primary-black">
          Loyalty Points
        </p>
        <span className="bd-20">8000</span>
      </div>
    </div>
  );
};
