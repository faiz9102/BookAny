import React from "react";

function AccountPage() {
  const Data = [
    {
      svg: (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <path
            d="M7 19C10.3137 19 13 17.2091 13 15C13 12.7909 10.3137 11 7 11C3.68629 11 1 12.7909 1 15C1 17.2091 3.68629 19 7 19Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 8C8.933 8 10.5 6.433 10.5 4.5C10.5 2.567 8.933 1 7 1C5.067 1 3.5 2.567 3.5 4.5C3.5 6.433 5.067 8 7 8Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Personal Info",
      link: "/account/personal-info",
      des: "Provide and edit your personal details",
    },
    {
      title: "Booking Management",
      link: "/account/booking-management",
      des: "Provide and edit your personal details",
      svg: null,
    },
    // rest unchanged
  ];

  return (
    <section className="pt-[84px] w-full max-w-[1023px] px-[10px] m-auto pb-[30px]">
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-[27px]">
          {Data.map((it, index) => (
            <AccountCard
              key={index}
              svg={it.svg}
              title={it.title}
              des={it.des}
              link={it.link}
            />
          ))}
        </div>

        <a
          href="/"
          className="text-[20px] mt-[42px] leading-[26px] font-[500] underline underline-offset-2"
        >
          Logout
        </a>
      </div>
    </section>
  );
}

export default AccountPage;

const AccountCard = ({ svg, title, des, link }) => {
  return (
    <a
      href={link}
      className="flex hover:shadow-lg flex-col pt-[24px] pb-[9px] pl-[24px]
      w-[316px] h-[180px] border rounded-[15px] gap-[23px]"
    >
      <span className="w-[45px] h-[45px] bg-[#F9F9F9] rounded-[10px] flex items-center justify-center">
        {svg}
      </span>

      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[20px] font-[500]">
          {title}
        </h1>

        <p className="text-[16px] text-[#707070] max-w-[255px]">
          {des || "Provide and edit your personal details"}
        </p>
      </div>
    </a>
  );
};
