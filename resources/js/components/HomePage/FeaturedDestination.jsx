import React from "react";

function FeaturedDestination() {
  const DestArr = [
    {
      text: "Karachi to Dubai",
      toImg: "dubai",
    },
    {
      text: "Karachi to Sudia",
      toImg: "sudia",
    },
    {
      text: "Karachi to Islamabad",
      toImg: "islamabad",
    },
    {
      text: "Karachi to Lahore",
      toImg: "lahore",
    },
    {
      text: "Karachi to Canada",
      toImg: "canada",
    },
    {
      text: "Karachi to Skardu",
      toImg: "skardu",
    },
  ];

  return (
    <section className="pt-[140px] w-full">
      <div className="flex-center flex-col gap-[49px] max-w-[1130px] w-full m-auto">
        <h2 className="h2-cl">Featured Destinations</h2>
        <div className="flex flex-wrap items-center justify-between gap-[17px]">
          {DestArr.map((it, index) => (
            <DestinationCard text={it.text} toImg={it.toImg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestination;

const DestinationCard = ({ text, toImg }) => {
  return (
    <div
      style={{
        boxShadow:
          "0px 118px 47px rgba(0, 0, 0, 0.01), 0px 66px 40px rgba(0, 0, 0, 0.02), 0px 29px 29px rgba(0, 0, 0, 0.04), 0px 7px 16px rgba(0, 0, 0, 0.04)",
      }}
      className="w-[365px] h-[294px] rounded-[10px] border -border-l--devide-line-clr flex flex-col items-center overflow-hidden"
    >
      <div className="flex h-[217px] w-full relative overflow-hidden">
        <img
          src={"/destination/karachi.png"}
          alt="karachi"
          width={212}
          height={217}
          className="max-w-[212px] w-full h-auto absolute left-0 top-0 border-b -border--devide-line-clr z-[5]"
        />
        <img
          src={`/destination/${toImg}.png`}
          alt="dubai"
          width={210}
          height={217}
          className="max-w-[210px] w-full h-auto absolute right-0 top-0 border-b -border--devide-line-clr"
        />
      </div>
      <div className="flex-center h-[77px]">
        <p className="med-22">{text}</p>
      </div>
    </div>
  );
};
