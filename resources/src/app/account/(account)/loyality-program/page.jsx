"use client";
import React, { useState } from "react";
import { WalletNav } from "../flyer-wallet/page";
import LoyalityCard from "@/components/AccountComponents/LoyalityCard";
import TireLevels from "@/components/AccountComponents/TireLevels";

function page() {
  const [selectedComp, setselectedComp] = useState(0);
  const NavItems = {
    0: <LoyalityCard />,
    1: <TireLevels />,
  };

  return (
    <div className="flex flex-col pt-[51px]">
      <WalletNav
        selectedComp={selectedComp}
        setselectedComp={setselectedComp}
        navItems={["Loyalty Status", "Tire Levels", "Points Redemption"]}
        gap={47}
      />
      {NavItems[selectedComp]}
    </div>
  );
}

export default page;
