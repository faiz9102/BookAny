"use client";
import WithdrawAmountComp from "@/components/AccountComponents/WithdrawAmountComp";
import WithdrawDetails from "@/components/AccountComponents/WithdrawDetails";
import { errorIcon } from "@/consonants";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter();
  const [screen, setscreen] = useState(0);
  const [authError, setauthError] = useState(false);
  const [loading, setloading] = useState(false);
  const [verified, setverified] = useState(false);
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

  const Screens = {
    0: (
      <OTP_Page
        screen={screen}
        setscreen={setscreen}
        authError={authError}
        userData={userData}
        verified={verified}
        loading={loading}
        otp={true}
      />
    ),
    1: <WithdrawAmountComp screen={screen} setscreen={setscreen} />,
    2: <WithdrawDetails />,
  };

  return (
    <div className="flex flex-col mt-[75px] ">
      {Screens[screen]}
      <button
        onClick={() => {
          screen < 2
            ? setscreen((e) => e + 1)
            : router.push("/account/flyer-wallet/withdraw/review");
        }}
        className="w-[173px] h-[55px] rounded-[8px] !text-white med-16 -bg--brand-clr"
      >
        Continue
      </button>
    </div>
  );
}

export default page;

const OTP_Page = ({
  otp,
  userData,
  loading,
  otpForm,
  VerifyEmail,
  authError,
  setauthError,
  sendMail,
  verified,
  setscreen,
}) => {
  const [timerStated, settimerStated] = useState(false);

  return (
    <motion.div
      animate={{ opacity: otp ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`flex flex-col ${verified ? "hidden small:flex" : ""}`}
    >
      <form
        ref={otpForm}
        action={"#"}
        className="flex w-full max-w-[300px] flex-col small:max-w-[100%]"
      >
        <h1 className="text-[26px] font-[500] leading-[33px] small:hidden -text--primary-black">
          Confirm Your number
        </h1>
        <div className="flex-col hidden w-full gap-3 small:flex-center pt-7">
          <div className="flex-center h-[130px] w-[130px] rounded-full border border-[#02720033] bg-[#F0FFF0] p-3">
            <iframe
              width={105}
              height={105}
              src="https://lottie.host/embed/1d1fe85b-ea26-4d47-8ae1-f5104149e74b/pwUWBKAu9j.json"
            ></iframe>
          </div>
          <h1 className="text-[17px] font-[700]">Check mail box</h1>
        </div>
        <div className="mt-[21px] flex flex-col text-[15px] text-[#707070] small:mt-6">
          <p>Enter the code we’ve sent by OTP to </p>
          <div className="flex gap-1 ">
            <p>{/* {userData?.email} */} 0331***7722</p>
            <span className="underline border-none outline-none text text-pmRed underline-offset-2 -text--brand-clr">
              edit number
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-8 pb-5 border-b">
          <p className="font-[600]">Enter 4-digit otp</p>
          <FourNumInput authError={authError} setauthError={setauthError} />
        </div>
        <div className="flex flex-col gap-1 mt-5 mb-[62px]">
          <div className="flex gap-1 text-[15px] text-[#707070]">
            <p>Haven't received an OTP?</p>
            <span
              onClick={(e) => {
                if (!timerStated) {
                  let time = 60;
                  settimerStated(true);
                  const interval = setInterval(() => {
                    if (time === 0) {
                      clearInterval(interval);
                      e.target.innerText = `Send again`;
                      settimerStated(false);
                    } else {
                      e.target.innerText = `0:${
                        time.toString().length === 2
                          ? time
                          : "0" + time.toString()
                      } Sec`;
                      time--;
                    }
                  }, [1000]);
                  //   sendMail();
                }
              }}
              className="underline border-none outline-none cursor-pointer text text-pmRed underline-offset-2 text-[#EA0000]"
            >
              Send again
            </span>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
const AuthError = ({ authError }) => {
  return (
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
};

const FourNumInput = ({ authError, setauthError }) => {
  const nextInput = (e) => {
    authError && setauthError(null);
    e.target.value = e.target.value.toString().slice(0, 1);
    if (e.target.value !== "") {
      e.target.nextElementSibling.focus();
    }
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
        return;
      }
    });
  };
  return (
    <div id="otp-inp" className="flex gap-2 mt-2">
      <input
        type="number"
        className="w-5 border-b-2 border-[#707070] text-center outline-none "
        onInput={nextInput}
        onKeyUp={remover}
        onClick={focusFunc}
        required
      />
      <input
        type="number"
        className="w-5 border-b-2 border-[#707070] text-center outline-none "
        onInput={nextInput}
        onKeyUp={remover}
        required
        onClick={focusFunc}
      />
      <input
        type="number"
        className="w-5 border-b-2 border-[#707070] text-center outline-none "
        onInput={nextInput}
        onKeyUp={remover}
        required
        onClick={focusFunc}
      />
      <input
        type="number"
        className="w-5 border-b-2 border-[#707070] text-center outline-none "
        onInput={(e) =>
          (e.target.value = e.target.value.toString().slice(0, 1))
        }
        onKeyUp={remover}
        required
        onClick={focusFunc}
      />
    </div>
  );
};

export { FourNumInput };
