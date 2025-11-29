import Image from "next/image";
import React from "react";

function Additionalservices() {
  const CardArr = [
    {
      src: "/services/booking.png",
      text: "Hotel Bookings",
      pText: "Integrate hotel booking services or display partner hotel deals.",
    },
    {
      src: "/services/carRental.png",
      text: "Car Rentals",
      pText: "Offer car rental options with quick booking links.",
    },
  ];

  return (
    <section className="pt-[147px] w-full">
      <div className="flex-center flex-col gap-[56px] max-w-[1130px] w-full m-auto">
        <h2 className="h2-cl">Additional Services</h2>
        <div className="flex gap-[24px] w-full">
          {CardArr.map((it, index) => (
            <AddtionalCard
              key={index}
              pText={it.pText}
              src={it.src}
              text={it.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Additionalservices;

const AddtionalCard = ({ src, text, pText }) => {
  return (
    <div className="flex flex-col gap-[16px] max-w-[551px] w-full">
      <Image
        src={src}
        alt="hotel-book"
        width={551}
        height={498}
        className="max-w-[551px] w-full h-auto rounded-[21px]"
      />
      <div className="flex flex-col gap-[3px]">
        <div className="flex items-center gap-[15px]">
          <h4 className="h2-cl ml-[1px]">{text}</h4>
          <span className="w-[139px] h-[29px] rounded-[50px] bg-[#CF181F1A] med-16 !-text--primary-red flex-center">
            Cooming Soon
          </span>
        </div>
        <p className="bk-16">{pText}</p>
      </div>
    </div>
  );
};
