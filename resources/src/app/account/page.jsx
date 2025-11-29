import Link from "next/link";
import React from "react";

function page() {
  const Data = [
    {
      svg: (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 19C10.3137 19 13 17.2091 13 15C13 12.7909 10.3137 11 7 11C3.68629 11 1 12.7909 1 15C1 17.2091 3.68629 19 7 19Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 8C8.933 8 10.5 6.433 10.5 4.5C10.5 2.567 8.933 1 7 1C5.067 1 3.5 2.567 3.5 4.5C3.5 6.433 5.067 8 7 8Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Personal Info",
      link: "account/personal-info",
      des: "Provide and edit your personal details",
    },
    {
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.12891 15.6302L4.49891 17.0002L6.96891 14.5302L5.60891 13.1602"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 9L1.5 16"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 10C14.4853 10 16.5 7.98528 16.5 5.5C16.5 3.01472 14.4853 1 12 1C9.51472 1 7.5 3.01472 7.5 5.5C7.5 7.98528 9.51472 10 12 10Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Booking Management",
      link: "account/booking-management",
      des: "Provide and edit your personal details",
    },
    {
      svg: (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13.8932V8.11324C18.9993 7.41179 18.8141 6.72286 18.4631 6.11557C18.112 5.50827 17.6075 5.00397 17 4.65324L12.88 2.27324C12.0047 1.76672 11.0113 1.5 10 1.5C8.98871 1.5 7.9953 1.76672 7.12 2.27324L3 4.65324C2.39253 5.00397 1.88796 5.50827 1.53692 6.11557C1.18589 6.72286 1.00072 7.41179 1 8.11324V13.8932C1.00072 14.5947 1.18589 15.2836 1.53692 15.8909C1.88796 16.4982 2.39253 17.0025 3 17.3532L7.11 19.7332C7.989 20.2396 8.9856 20.5061 10 20.5061C11.0144 20.5061 12.011 20.2396 12.89 19.7332L17 17.3532C17.6075 17.0025 18.112 16.4982 18.4631 15.8909C18.8141 15.2836 18.9993 14.5947 19 13.8932Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 20.5039V11.0039"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.53125 6.125L2.00125 6.395L6.00125 8.695L10.0013 11.005L14.0013 8.695L18.0012 6.395L18.4712 6.125"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Payment & Billing",
      link: "account/Payment-&-Billing",
      des: "",
    },
    {
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.56 16.92C10.1948 17.0301 9.80521 17.0301 9.44 16.92C6.83 16 1 12.32 1 6C1 4.95059 1.33019 3.92778 1.94379 3.07645C2.55739 2.22512 3.4233 1.58844 4.41886 1.25658C5.41442 0.92473 6.48916 0.914531 7.49084 1.22743C8.49252 1.54033 9.37035 2.16047 10 3C10.6296 2.16047 11.5075 1.54033 12.5092 1.22743C13.5108 0.914531 14.5856 0.92473 15.5811 1.25658C16.5767 1.58844 17.4426 2.22512 18.0562 3.07645C18.6698 3.92778 19 4.95059 19 6C19 12.32 13.17 16 10.56 16.92Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Loyality Program",
      link: "account/loyality-program",
      des: "",
    },
    {
      svg: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H16C17.6569 15 19 13.6569 19 12V4C19 2.34315 17.6569 1 16 1Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 6H19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 11H9.5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 11H5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Notifications & Alert",
      link: "account/notifications-&-alert",
      des: "",
    },
    {
      svg: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00172 11.9995C10.6531 11.9995 11.9917 10.6609 11.9917 9.00953C11.9917 7.3582 10.6531 6.01953 9.00172 6.01953C7.35039 6.01953 6.01172 7.3582 6.01172 9.00953C6.01172 10.6609 7.35039 11.9995 9.00172 11.9995Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 9C17 14.49 11 19 9 19C7 19 1 14.5 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Special Requests",
      link: "account/special-requests",
      des: "",
    },
    {
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.56 16.92C10.1948 17.0301 9.80521 17.0301 9.44 16.92C6.83 16 1 12.32 1 6C1 4.95059 1.33019 3.92778 1.94379 3.07645C2.55739 2.22512 3.4233 1.58844 4.41886 1.25658C5.41442 0.92473 6.48916 0.914531 7.49084 1.22743C8.49252 1.54033 9.37035 2.16047 10 3C10.6296 2.16047 11.5075 1.54033 12.5092 1.22743C13.5108 0.914531 14.5856 0.92473 15.5811 1.25658C16.5767 1.58844 17.4426 2.22512 18.0562 3.07645C18.6698 3.92778 19 4.95059 19 6C19 12.32 13.17 16 10.56 16.92Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Travel Documents",
      link: "account/travel-documents",
      des: "",
    },
    {
      svg: (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.56 16.92C10.1948 17.0301 9.80521 17.0301 9.44 16.92C6.83 16 1 12.32 1 6C1 4.95059 1.33019 3.92778 1.94379 3.07645C2.55739 2.22512 3.4233 1.58844 4.41886 1.25658C5.41442 0.92473 6.48916 0.914531 7.49084 1.22743C8.49252 1.54033 9.37035 2.16047 10 3C10.6296 2.16047 11.5075 1.54033 12.5092 1.22743C13.5108 0.914531 14.5856 0.92473 15.5811 1.25658C16.5767 1.58844 17.4426 2.22512 18.0562 3.07645C18.6698 3.92778 19 4.95059 19 6C19 12.32 13.17 16 10.56 16.92Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Security Settings",
      link: "account/security-settings",
      des: "",
    },
    {
      svg: (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H16C17.6569 15 19 13.6569 19 12V4C19 2.34315 17.6569 1 16 1Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 6H19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 11H9.5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 11H5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Support & Help",
      link: "account/Support-&-Help",
      des: "",
    },
  ];

  return (
    <section className="pt-[84px] w-full h-max max-w-[1023px] px-[10px] m-auto pb-[30px]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-[27px]">
            {Data.map((it) => (
              <AccountCard
                des={it.des}
                svg={it.svg}
                title={it.title}
                link={it.link}
              />
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className="text-[20px] mt-[42px] leading-[26px] font-[500] -text--primary-black underline underline-offset-2"
        >
          Logout
        </Link>
      </div>
    </section>
  );
}

export default page;

const AccountCard = ({ svg, title, des, link }) => {
  return (
    <Link
      href={link}
      className="flex hover:shadow-lg flex-col pt-[24px] pb-[9px] pl-[24px] w-[316px] h-[180px] border -border--devide-line-clr-2 rounded-[15px] gap-[23px]"
    >
      <span className="w-[45px] h-[45px] bg-[#F9F9F9] rounded-[10px] flex-center">
        {svg}
      </span>
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[20px] leading-[26px] font-[500] -text--primary-black">
          {title}
        </h1>
        <p className="text-[16px] leading-[20px] text-[#707070] font-[400] max-w-[255px]">
          {des !== "" ? des : "Provide and edit your personal details"}
        </p>
      </div>
    </Link>
  );
};
