import React, { useState } from "react";
import { AddonCard } from "../thank-you-for-your-booking/page";
import { addons } from "../consonants";

function Page() {
  const [selectedLi, setselectedLi] = useState("Additional Baggage");
  const [sideBarDaialog, setsideBarDaialog] = useState(false);

  const MoreDetails = {
    "Additional Baggage": <Valspan name="Additional baggage:" text="30kg" />,
    "Special Requests": (
      <>
        <Valspan name="Mobility:" text="Wheel-chair" />
        <Valspan name="Medical:" text="Oxygen supply" />
      </>
    ),
    "Meal Preferences": (
      <>
        <Valspan name="Break-Fast:" text="Standard" />
        <Valspan name="Dinner:" text="Gluten Free" />
      </>
    ),
    "Seat Selection": (
      <>
        <Valspan name="Departure:" text="Window - 149C" />
        <Valspan name="Return:" text="Window - 200F" />
      </>
    ),
    "Travel Insurance": <Valspan name="Applied by:" text="EFU Insurance" />,
    "Donate for charity": <Valspan name="Donate:" text="PKR 500" />,
  };

  return (
    <div className="flex flex-col mt-[30px] max-w-[619px] w-full gap-[11px] pb-[10px]">
      {addons.map((it, index) => (
        <AddonCard
          key={index}
          btn="blue"
          clr={it.clr}
          details={it.details}
          selected={it.selected}
          svg={it.svg}
          title={it.title}
          sideBarDaialog={sideBarDaialog}
          setsideBarDaialog={setsideBarDaialog}
          setselectedLi={setselectedLi}
          Moredetails
        >
          {MoreDetails[it.title]}
        </AddonCard>
      ))}
    </div>
  );
}

export default Page;

const Valspan = ({ text, name }) => (
  <div className="flex items-center gap-[10px]">
    <p className="med-16">{name}</p>
    <span className="bk-15 px-[10px] py-[7px] -bg--light-gray rounded-[6px]">
      {text}
    </span>
  </div>
);
