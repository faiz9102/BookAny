"use client";
import { AddonCard } from "@/app/thank-you-for-your-booking/page";
import { addons } from "@/consonants";
import React, { useState } from "react";

function page() {
  const [selectedLi, setselectedLi] = useState("Additional Baggage");
  const [sideBarDaialog, setsideBarDaialog] = useState(false);

  const MoreDetails = {
    "Additional Baggage": (
      <>
        <Valspan name={"Additional baggage:"} text={"30kg"} />
      </>
    ),
    "Special Requests": (
      <>
        <Valspan name={"Mobilty:"} text={"Wheel-chair"} />
        <Valspan name={"Medical:"} text={"Oxygen supply"} />
      </>
    ),
    "Meal Preferences": (
      <>
        <Valspan name={"Break-Fast:"} text={"Standard"} />
        <Valspan name={"Dinner:"} text={"Gluten Free"} />
      </>
    ),
    "Seat Selection": (
      <>
        <Valspan name={"Departure:"} text={"Window - 149C"} />
        <Valspan name={"Return:"} text={"Gluten FreeWindow - 200F"} />
      </>
    ),
    "Travel Insurance": (
      <>
        <Valspan name={"Applied by"} text={"EFU Insurance"} />
      </>
    ),
    "Donate for charity": (
      <>
        <Valspan name={"Donate:"} text={"PKR 500"} />
      </>
    ),
  };

  return (
    <div className="flex flex-col mt-[30px]  max-w-[619px] w-full gap-[11px] pb-[10px]">
      {addons.map((it) => (
        <AddonCard
          btn="blue"
          clr={it.clr}
          details={it.details}
          selected={it.selected}
          svg={it.svg}
          title={it.title}
          sideBarDaialog={sideBarDaialog}
          setsideBarDaialog={setsideBarDaialog}
          setselectedLi={setselectedLi}
          Moredetails={true}
        >
          {MoreDetails[it.title]}
        </AddonCard>
      ))}
    </div>
  );
}

export default page;

const Valspan = ({ text, name }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <p className="med-16">{name}</p>
      <span className="bk-15 px-[10px] py-[7px] -bg--light-gray rounded-[6px]">
        {text}
      </span>
    </div>
  );
};
