"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { check, card, trash } from "@/consonants";
import BasicDateCalendar from "../BasicDateCalender";

const Cross = ({ clickFunc }) => {
  return (
    <div className="absolute right-[1.4rem] top-[1.1rem] z-[501] flex cursor-pointer small:right-0 small:w-full small:justify-end small:border-b small:pb-[15px] small:[&_svg]:translate-x-[-20px] ">
      <svg
        onClick={clickFunc}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5L19 19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 5L5 19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const CustomCheckbox = ({
  text,
  setOuter,
  fontSize,
  admin,
  type,
  textColor,
  borderGray,
  def,
}) => {
  const [checked, setchecked] = useState(def);
  useEffect(() => {
    setOuter && setOuter(checked);
  }, [checked]);

  return (
    <label
      onClick={() => setchecked(!checked)}
      style={{ color: textColor && textColor }}
      className={`flex w-full items-center ${
        admin ? "flex-row-reverse" : ""
      } cursor-pointer justify-start gap-4 text-[1.05rem] font-[500] text-black 
         larger:text-[0.8rem] small:text-[0.9rem] ${
           fontSize === "sm" ? "!gap-2 text-[14px]" : ""
         } `}
    >
      <span
        className={`flex h-[1.3rem] w-[1.3rem] items-center 
          justify-center ${checked && "bg-black"} border ${
          checked
            ? "border-black"
            : borderGray
            ? "border-[#707070]"
            : "border-[#E5E5E5]"
        }  rounded-[5px]  ${admin ? "border-gray-300" : ""} ${
          type === "small" ? "!h-[0.95rem] !w-[0.9rem]" : ""
        }  `}
      >
        <span
          className={`flex w-[1.1rem] [&_svg]:fill-white ${
            type === "small" ? "!w-[0.9rem]" : ""
          } `}
        >
          {checked ? check : ""}
        </span>
      </span>
      {text}
    </label>
  );
};

function PaymentMethod() {
  const [userData, setuserData] = useState({
    _id: "6656c9747ca9136dfd9192d4",
    name: "Muhammad  Jawad",
    phone: "03143084805",
    email: "jawadedu125@gmail.com",
    orders: [
      {
        status: "Processing",
        active: true,
        unpaidAmount: "168.00",
        product: {
          reviews: [],
          sideImages: [],
          _id: "6662dfdb5b2f69e210505677",
          productName: "Cap",
          productPrice: 14,
          productCategory: "Team & Sports",
          productDescription:
            "Made from durable materials, our cap offers both style and functionality. Its adjustable strap ensures a perfect fit, while its classic design adds a touch of sophistication to any outfit. Whether you're heading to the gym or meeting friends for coffee, our cap is the perfect accessory.",
          productHeading:
            "Complete your casual look with our versatile cap, suitable for any occ",
          productImg:
            "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755866/thdmikxtgr1rpiiy6rbj.png",
          productColors: ["", "", "", ""],
          productSizes: ["XS", "2XL", "XL", "3XL"],
          slug: "cap",
          __v: 0,
          materials: ["Lather", "Cotton"],
          requiredDays: 5,
          salePercent: '{"100":"6","200":"7","300":"8","400":"9","500":"10"}',
          jsonID: "10b23275-5d8e-4672-a327-454e31dc5da8",
        },
        deliveryDate: "July 20, 2024",
        orderFiles: [],
        email: "TestJawad@gmail.com",
        phone: "+9264565",
        county: "Afghanistan",
        firstName: "j.",
        fullName: "Muhammad Jawad",
        Address: "house no 1 Badghis 2240",
        payType: "now",
        method: {
          name: "paypal",
          cvc: "546",
          cardNumber: "5456",
          expiryDate: "June 30, 2024",
        },
        productMaterial: "Lather",
        productInstruction: "",
        productSizes: [
          {
            type: "XS",
            val: "6",
          },
          {
            type: "2XL",
            val: "6",
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        orderID: "fa192cf8-bbdb-400e-aa01-3f7c95a51c62",
        orderDate: " Jun 30 2024",
        deliveryCharges: "0",
        trackingID: "",
      },
      {
        status: "Shipped",
        active: true,
        unpaidAmount: "1015.00",
        product: {
          reviews: [],
          sideImages: [],
          _id: "6662dfa55b2f69e210505675",
          productName: "Hood",
          productPrice: 29,
          productCategory: "Brand Appeal",
          productDescription:
            "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
          productHeading:
            "Stay warm and stylish with our hood, perfect for any outdoor adventure",
          productImg:
            "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
          productColors: [
            "rgb(248, 231, 28)",
            "rgb(65, 117, 5)",
            "rgb(95, 95, 95)",
            "rgb(144, 19, 254)",
            "rgb(131, 114, 146)",
          ],
          productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
          slug: "hood",
          __v: 0,
          materials: ["Lather", "Cotton"],
          requiredDays: 5,
          salePercent: '{"100":"6","200":"7","300":"8","400":"9","500":"10"}',
          jsonID: "10b23275-5d8e-4672-a327-454e31dc5da8",
        },
        deliveryDate: "August 31, 2024",
        orderFiles: [
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719689266/v4lepwwleqf94lodahwp.png",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719689267/xmhcbkzijryhcktyazai.png",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719689268/cf4sagnk2g25unoieckb.png",
        ],
        email: "asdasdas@asd",
        phone: "+92464654646465",
        county: "Afghanistan",
        firstName: "asdddd",
        fullName: "dddddddddd",
        Address: "ddddddddddddd Badakhshan dddddddddd",
        payType: "now",
        method: {
          name: "paypal",
          cvc: "45445454545454545455",
          cardNumber: "45454545454545",
          expiryDate: "July 31, 2024",
        },
        productMaterial: "Lather",
        productInstruction: "make it quick!",
        productSizes: [
          {
            type: "XS",
            val: "5",
          },
          {
            type: "SM",
            val: "5",
          },
          {
            type: "MD",
            val: "5",
          },
          {
            type: "2XL",
            val: "5",
          },
          {
            type: "XL",
            val: "5",
          },
          {
            type: "LG",
            val: "5",
          },
          {
            type: "3XL",
            val: "5",
          },
        ],
        orderID: "dce63049-a4d8-4425-b8ee-23156a406ece",
        orderDate: " Jun 29 2024",
        deliveryCharges: "50",
        trackingID: "654654654654",
      },
      {
        status: "Delivered",
        active: true,
        unpaidAmount: "290.00",
        product: {
          reviews: [],
          sideImages: [],
          _id: "6662dfa55b2f69e210505675",
          productName: "Hood",
          productPrice: 29,
          productCategory: "Brand Appeal",
          productDescription:
            "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
          productHeading:
            "Stay warm and stylish with our hood, perfect for any outdoor adventure",
          productImg:
            "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
          productColors: [
            "rgb(248, 231, 28)",
            "rgb(65, 117, 5)",
            "rgb(95, 95, 95)",
            "rgb(144, 19, 254)",
            "rgb(131, 114, 146)",
          ],
          productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
          slug: "hood",
          __v: 0,
          materials: ["Lather", "Cotton"],
          requiredDays: 5,
          salePercent: '{"100":"6","200":"7","300":"8","400":"9","500":"10"}',
          jsonID: "10b23275-5d8e-4672-a327-454e31dc5da8",
        },
        deliveryDate: "July 31, 2024",
        orderFiles: [
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719739890/pl65wd7qi4ryb5vzrcvo.webp",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719739890/ssqlxqxxlkremoigzjzw.webp",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719749403/ldfuzmusrhohfrypj6jq.png",
          "",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719749760/vjc05yb1kbtsa4ygz9el.png",
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719749761/zxrae1kceanunxkjb6tx.png",
          "",
        ],
        email: "TestJawad@gmail.com",
        phone: "+925448465465464",
        county: "Afghanistan",
        firstName: "j.",
        fullName: "Muhammad Jawad",
        Address: "house no 1 Badghis 2240",
        payType: "now",
        method: {
          name: "paypal",
          cvc: "45",
          cardNumber: "4345456",
          expiryDate: "July 31, 2024",
        },
        productMaterial: "Lather",
        productInstruction: "make it quick!",
        productSizes: [
          {
            type: "XS",
            val: "5",
          },
          {
            type: "SM",
            val: "5",
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: 0,
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        orderID: "b6b8ed3f-b673-4b53-9b54-8b912ec1d5e7",
        orderDate: " Jun 30 2024",
        deliveryCharges: 0,
        trackingID: "",
      },
      {
        status: "Canceled",
        active: true,
        unpaidAmount: "140.00",
        product: {
          reviews: [],
          sideImages: [],
          _id: "6662dfdb5b2f69e210505677",
          productName: "Cap",
          productPrice: 14,
          productCategory: "Team & Sports",
          productDescription:
            "Made from durable materials, our cap offers both style and functionality. Its adjustable strap ensures a perfect fit, while its classic design adds a touch of sophistication to any outfit. Whether you're heading to the gym or meeting friends for coffee, our cap is the perfect accessory.",
          productHeading:
            "Complete your casual look with our versatile cap, suitable for any occ",
          productImg:
            "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755866/thdmikxtgr1rpiiy6rbj.png",
          productColors: ["", "", "", ""],
          productSizes: ["XS", "2XL", "XL", "3XL"],
          slug: "cap",
          __v: 0,
          materials: ["Lather", "Cotton"],
          requiredDays: 5,
          salePercent: '{"100":"6","200":"7","300":"8","400":"9","500":"10"}',
          jsonID: "10b23275-5d8e-4672-a327-454e31dc5da8",
        },
        deliveryDate: "July 31, 2024",
        orderFiles: [
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719749762/ux5mie7zjpnzkmprw7qa.png",
          "",
        ],
        email: "TestJawad@gmail.com",
        phone: "+925448465465464",
        county: "Afghanistan",
        firstName: "j.",
        fullName: "Muhammad Jawad",
        Address: "house no 1 Badghis 2240",
        payType: "now",
        method: {
          name: "paypal",
          cvc: "45",
          cardNumber: "4345456",
          expiryDate: "July 31, 2024",
        },
        productMaterial: "Lather",
        productInstruction: "make it quick!",
        productSizes: [
          {
            type: "XS",
            val: "5",
          },
          {
            type: "2XL",
            val: "5",
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        orderID: "0ee56c68-c285-4182-af26-ccbb593e202d",
        orderDate: " Jun 30 2024",
        deliveryCharges: 0,
        trackingID: "",
      },
      {
        status: "Active Orders",
        active: true,
        unpaidAmount: "145.00",
        product: {
          reviews: [],
          sideImages: [],
          _id: "6662dfa55b2f69e210505675",
          productName: "Hood",
          productPrice: 29,
          productCategory: "Brand Appeal",
          productDescription:
            "Our hood is crafted from high-quality materials to keep you warm during chilly days. It features a comfortable fit and a stylish design, making it a must-have for your wardrobe. Whether you're hitting the slopes or running errands in the city, our hood will keep you cozy and fashionable.",
          productHeading:
            "Stay warm and stylish with our hood, perfect for any outdoor adventure",
          productImg:
            "http://res.cloudinary.com/dsqtzewyx/image/upload/v1717755810/snibmn5n09uxrlcpzeld.png",
          productColors: [
            "rgb(248, 231, 28)",
            "rgb(65, 117, 5)",
            "rgb(95, 95, 95)",
            "rgb(144, 19, 254)",
            "rgb(131, 114, 146)",
          ],
          productSizes: ["XS", "SM", "MD", "2XL", "XL", "LG", "3XL"],
          slug: "hood",
          __v: 0,
          materials: ["Lather", "Cotton"],
          requiredDays: 5,
          salePercent: '{"100":"6","200":"7","300":"8","400":"9","500":"10"}',
          jsonID: "10b23275-5d8e-4672-a327-454e31dc5da8",
        },
        deliveryDate: "July 27, 2024",
        orderFiles: [],
        email: "TestJawad@gmail.com",
        phone: "+9265465465465465",
        county: "Afghanistan",
        firstName: "j.",
        fullName: "Muhammad Jawad",
        Address: "house no 1 Badghis 2240",
        payType: "now",
        method: {
          name: "paypal",
          cvc: "sad",
          cardNumber: "asdasd",
          expiryDate: "July 31, 2024",
        },
        productMaterial: "Lather",
        productInstruction: "",
        productSizes: [
          {
            type: "XS",
            val: "5",
          },
          {
            type: "SM",
            val: 0,
          },
          {
            type: "MD",
            val: 0,
          },
          {
            type: "2XL",
            val: 0,
          },
          {
            type: "XL",
            val: 0,
          },
          {
            type: "LG",
            val: 0,
          },
          {
            type: "3XL",
            val: 0,
          },
        ],
        orderID: "5731aca5-1c3e-4a72-9747-3a5b0eaf9597",
        orderDate: " Jun 30 2024",
        checkoutFiles: [
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1719750762/th3tvh0iyybhkxp28nxs.png",
          "liknkaskldjklasjdlasd",
        ],
      },
    ],
    Date: "Wed May 29 2024",
    paymentMethods: [
      {
        name: "Muhammad Jawad",
        cvc: "465465",
        cardNumber: "4656 5656 5656 5656 ",
        expiryDate: "June 1, 2024",
        def: true,
        bankName: "Meezan",
      },
    ],
    __v: 0,
    otp: null,
    verification: true,
    otherphone: "",
    address: "house no 1 rawalpindi Afghanistan Badakhshan 2240",
    wishlist: [
      {
        productName: "SHOES 0120409",
        productImg:
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718639386/yndssv2d6wlrwqanug8j.png",
        slug: "shoes-0120409",
        customizable: true,
      },
      {
        productName: "test2",
        productImg:
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1718728621/mvjloxslwxlhph0ms8bb.png",
        slug: "test2",
        customizable: true,
      },
      {
        productName: "test3",
        productImg:
          "http://res.cloudinary.com/dsqtzewyx/image/upload/v1722611934/cmc0h2bnkbumzkzujud8.jpg",
        slug: "test3",
        customizable: true,
      },
    ],
  });

  const [cardAdder, setcardAdder] = useState(false);

  return (
    <div className="m-auto mt-10 flex w-full flex-col gap-[37px] pb-10 small:mt-2 small:pb-16">
      <AnimatePresence>
        {cardAdder && (
          <CardAdder
            setcardAdder={setcardAdder}
            paymentAdder={() => {}}
            setuserData={setuserData}
          />
        )}
      </AnimatePresence>
      <h2 className="text-[26px] -text--primary-black font-[700] small:hidden leading-[33px]">
        Payment methods
      </h2>
      <div className="flex flex-wrap w-full gap-[30px] small:flex-center">
        {userData &&
          userData?.paymentMethods?.map((it, index) => (
            <CardDetails
              bankName={it.bankName}
              cardNumber={it.cardNumber}
              def={it.def}
              expiryDate={it.expiryDate}
              name={it.name}
              key={index}
              paymentDele={() => {}}
              setuserData={setuserData}
            />
          ))}

        <div
          style={{ borderStyle: "dashed" }}
          id="br-das"
          onClick={() => setcardAdder(!cardAdder)}
          className="flex-center h-[241px] w-full max-w-[400px] cursor-pointer flex-col rounded-[10px]"
        >
          <div className="flex-col gap-2 flex-center">
            <span className="flex-center h-[56px] w-[56px] rounded-full border border-[#E5E5E5]">
              {card}
            </span>
            <p className="text-[20px] leading-[26px] font-[400] -text--primary-black">
              Add new card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;

const CardDetails = ({
  bankName,
  def,
  cardNumber,
  name,
  expiryDate,
  paymentDele,
  setuserData,
}) => {
  return (
    <div
      style={{ boxShadow: "2px 4px 8px 0px #0000000D" }}
      className="flex w-full max-w-[416px] flex-col rounded-[10px] border border-[#E5E5E5] pr-[24px] pl-[35px] h-[264px] pt-[22px] pb-[27px]"
    >
      <div className="flex items-center justify-between">
        <p className="text-[20px] leading-[26px] -text--primary-black font-[400]">
          {bankName}
        </p>
        <div className="gap-2 flex-center">
          {def && (
            <span className="w-[78px] flex-center h-[31px] rounded-[7px] bg-black text-[14px] leading-[18px] text-white">
              Default
            </span>
          )}
          <span
            onClick={async () => {
              setuserData((e) => {
                let paymentMethods = e.paymentMethods;
                paymentMethods.forEach((it, index) => {
                  if (it.cardNumber === cardNumber) {
                    paymentMethods.splice(index, 1);
                  }
                });
                return { ...e, paymentMethods };
              });
              const result = await paymentDele(cardNumber);
              //   notificationCaller(
              //     result.success,
              //     result.success
              //       ? "Payment method removed!"
              //       : "Some error occured!",
              //     toast
              //   );
            }}
            className="flex-center h-[31px] w-[31px] cursor-pointer rounded-[7px] bg-[#F9F9F9]"
          >
            {trash}
          </span>
        </div>
      </div>

      <div className="flex items-center mt-[62px] gap-[23px]">
        <Blank />
        <Blank />
        <Blank />
        <p className="text-[26px] leading-[33px] font-[400]">
          {cardNumber?.slice(-4)}
        </p>
      </div>

      <div className="flex items-center justify-between mt-[49px]">
        <div className="flex gap-11">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-[500] leading-[15px] -text--primary-black ">
              Name
            </span>
            <p className="text-[16px] font-[400] leading-[20px] -text--primary-black ">
              {name}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-[500] leading-[15px] -text--primary-black">
              Expire Date
            </span>
            <p className="text-[16px] font-[400] leading-[20px] -text--primary-black">
              {expiryDate.slice(0, 3) +
                expiryDate.slice(expiryDate.indexOf(" "))}
            </p>
          </div>
        </div>
        <span>{cards.mastercard}</span>
      </div>
    </div>
  );
};

const Blank = () => {
  return (
    <div className="flex gap-[5px] [&_span]:h-[5px] [&_span]:w-[5px] [&_span]:rounded-full [&_span]:bg-black">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

function detectCardType(number) {
  var re = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (var key in re) {
    if (re[key].test(number)) {
      return key;
    }
  }
}

const cards = {
  electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
  maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
  dankort: /^(5019)\d+$/,
  interpayment: /^(636)\d+$/,
  unionpay: /^(62|88)\d+$/,
  visa: (
    <svg
      width="54"
      height="18"
      viewBox="0 0 54 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9476 5.76376C27.9168 8.20753 30.108 9.57134 31.7586 10.3821C33.4546 11.2141 34.0242 11.7476 34.0177 12.4915C34.0048 13.6301 32.6649 14.1326 31.4107 14.1522C29.2819 14.1855 28.0202 13.5903 27.0219 13.1193L26.9394 13.0804L26.1513 16.7982C27.166 17.2697 29.0448 17.6808 30.9932 17.6987C35.5664 17.6987 38.5586 15.423 38.5748 11.8944C38.5854 9.21544 36.3843 8.0504 34.6229 7.11811C33.44 6.49201 32.4554 5.97088 32.4723 5.16669C32.4869 4.55982 33.0613 3.91218 34.3204 3.74741C34.9434 3.66421 36.6636 3.60059 38.6136 4.50599L39.3791 0.908859C38.3304 0.523861 36.9824 0.155176 35.3043 0.155176C30.9997 0.155176 27.9719 2.46191 27.9476 5.76376ZM46.7339 0.464825C45.8988 0.464825 45.1949 0.95586 44.8809 1.70955L38.348 17.4341H42.918L43.8274 14.9007L49.4121 14.9007L49.9397 17.4341H53.9675L50.4527 0.464825H46.7339ZM48.6927 11.421L47.3738 5.0489L45.0807 11.421L48.6927 11.421ZM22.4065 0.464825L18.8042 17.4341H23.159L26.7596 0.464825H22.4065ZM11.4316 12.0148L15.9644 0.464825H20.5376L13.482 17.4341H8.87959L5.40677 3.89229C5.19639 3.05867 5.01353 2.75198 4.37269 2.40124C3.32567 1.827 1.59735 1.29029 0.0761719 0.957493L0.179741 0.464825H7.58982C8.53328 0.464825 9.38287 1.09779 9.5981 2.19406L11.4316 12.0148Z"
        fill="url(#paint0_linear_3343_4383)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3343_4383"
          x1="0.170104"
          y1="5.5511"
          x2="15.4031"
          y2="-15.9023"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#222357" />
          <stop offset="1" stopColor="#254AA5" />
        </linearGradient>
      </defs>
    </svg>
  ),
  mastercard: (
    <svg
      width="51"
      height="33"
      viewBox="0 0 51 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.9627 16.7049C50.9627 25.4226 43.909 32.4897 35.2078 32.4897C26.5066 32.4897 19.4529 25.4226 19.4529 16.7049C19.4529 7.98724 26.5066 0.920166 35.2078 0.920166C43.909 0.920166 50.9627 7.98724 50.9627 16.7049Z"
        fill="#F79F1A"
      />
      <path
        d="M31.5267 16.7049C31.5267 25.4226 24.473 32.4897 15.7718 32.4897C7.07056 32.4897 0.0168457 25.4226 0.0168457 16.7049C0.0168457 7.98724 7.07056 0.920166 15.7718 0.920166C24.473 0.920166 31.5267 7.98724 31.5267 16.7049Z"
        fill="#EA001B"
      />
      <path
        d="M25.4898 4.27905C21.8138 7.16873 19.4541 11.6591 19.4541 16.7034C19.4541 21.7478 21.8138 26.2416 25.4898 29.1313C29.1658 26.2416 31.5255 21.7478 31.5255 16.7034C31.5255 11.6591 29.1658 7.16873 25.4898 4.27905Z"
        fill="#FF5F01"
      />
    </svg>
  ),
  amex: /^3[47][0-9]{13}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
};

const InputCard = ({ name, center, onKeyDown, id }) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <p className="text-[12px] font-[600] leading-[14px] -text--primary-black">
        {name}
      </p>
      <input
        id={id}
        onKeyDown={onKeyDown && onKeyDown}
        required
        className={`w-full rounded-[10px] border border-[#E5E5E5] px-4 py-3 outline-none ${
          center ? "text-center" : ""
        }`}
        maxLength={name === "Card number" ? 19 : undefined}
        minLength={name === "Card number" ? 19 : undefined}
      />
    </div>
  );
};

const CardAdder = ({ setcardAdder, paymentAdder, setuserData }) => {
  const [defaultCard, setdefaultCard] = useState(false);
  const [loading, setloading] = useState(false);
  const [Date, setDate] = useState(false);
  const [show, setshow] = useState(false);
  const formRef = useRef(null);
  const Submit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      const paymentMethod = {
        name: document.querySelector("#name-card").value,
        cvc: document.querySelector("#cvc").value,
        cardNumber: document.querySelector("#card-number").value,
        expiryDate: Date,
        def: defaultCard,
        bankName: document.querySelector("#bank-name").value,
      };
      const result = await paymentAdder(paymentMethod);
      if (result.success) {
        // notificationCaller(true, "Payment method added Successfully!", toast);
        setcardAdder(false);
        setuserData((e) => {
          return { ...e, paymentMethods: [...e.paymentMethods, paymentMethod] };
        });
      }
    }
    setloading(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="flex-center fixed inset-0 left-0 top-0 bg-[#00000066] px-5 z-[400] small:items-end small:justify-end small:px-0"
    >
      <form
        ref={formRef}
        id="scroll-none"
        className="relative flex w-full max-w-[380px] scroll-m-0 flex-col gap-5 rounded-[21px] bg-white px-[1.3rem] pb-5 pt-16 small:max-h-screen small:max-w-[100%] small:overflow-y-scroll small:rounded-none small:rounded-t-[15px]"
      >
        <p className="absolute -text--primary-black left-[50%] top-[1.2rem] hidden translate-x-[-50%] text-[17px] font-[700] leading-[22px] small:flex">
          Payment method
        </p>
        <hr className="absolute left-0 top-[3.6rem] hidden w-full small:flex" />
        <Cross clickFunc={() => setcardAdder(false)} />

        <h3 className="text-[21px] font-[700] leading-[21px] small:mt-5 -text--primary-black">
          Add card details
        </h3>
        <div className="flex items-center gap-1.5 py-3 pt-2.5">
          <span className="flex-center h-[34px] w-[54px] rounded-[5px] bg-[#FF5F011A] [&_svg]:w-[33px] -text--primary-black">
            {cards["mastercard"]}
          </span>
          <span className="flex-center h-[34px] w-[54px] rounded-[5px] bg-[#253D8B1A] [&_svg]:w-[37px] -text--primary-black">
            {cards["visa"]}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <InputCard name={"Bank name"} id={"bank-name"} />
          <InputCard name={"Name on card"} id={"name-card"} />
          <InputCard
            onKeyDown={(e) => {
              if (
                (e.keyCode > 47 && e.keyCode < 58) ||
                (e.keyCode > 96 && e.keyCode < 106) ||
                e.key === "Backspace"
              ) {
                if (
                  (e.target.value.length + 1) % 5 === 0 &&
                  e.key !== "Backspace"
                ) {
                  e.target.value += " ";
                }
              } else {
                e.preventDefault();
              }
            }}
            name={"Card number"}
            id={"card-number"}
          />
          <div className="flex w-[180px] gap-2">
            <div className="flex w-full flex-col gap-1.5">
              <p className="text-[12px] font-[600] leading-[14px] -text--primary-black">
                Expiry date
              </p>
              <div
                onClick={() => {
                  setshow(true);
                }}
                className={`flex-center relative h-full w-full cursor-pointer rounded-[10px] border border-[#E5E5E5] px-2 text-[12px]`}
              >
                {Date && Date.slice(0, 3) + Date.slice(Date.indexOf(" "))}
                {show && (
                  <motion.div
                    animate={{ opacity: 1, x: "-50%", scale: 0.85 }}
                    initial={{ opacity: 0, x: "-50%", scale: 0.85 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute bottom-6  left-[50%] w-[336px] scale-[0.9] select-none"
                  >
                    <BasicDateCalendar
                      setselectedDate={setDate}
                      setshow={setshow}
                    />
                  </motion.div>
                )}
              </div>
            </div>
            <InputCard name={"CVC"} id={"cvc"} />
          </div>
        </div>
        <CustomCheckbox
          text={"Set as default payment"}
          type={"sm"}
          fontSize={"sm"}
          borderGray={true}
          setOuter={setdefaultCard}
        />
        <button
          onClick={Submit}
          disabled={loading}
          className="w-full rounded-[10px] border-none bg-black py-3 text-[17px] font-[500] text-white outline-none transition-all duration-300 disabled:bg-gray-300"
        >
          Done
        </button>
      </form>
    </motion.div>
  );
};
