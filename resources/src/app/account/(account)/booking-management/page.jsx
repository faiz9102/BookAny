"use client";
import React, { useState } from "react";
import { WalletNav } from "../flyer-wallet/page";
import Bookings from "@/components/AccountComponents/Bookings";
import PastTrips from "@/components/AccountComponents/PastTrips";
import CanceledBookings from "@/components/AccountComponents/CanceledBookings";

function page() {
  const [selectedComp, setselectedComp] = useState(0);
  const Navs = {
    0: <Bookings />,
    1: <PastTrips />,
    2: <CanceledBookings />,
  };

  return (
    <div className="flex flex-col pt-[51px] pb-10">
      <WalletNav
        selectedComp={selectedComp}
        setselectedComp={setselectedComp}
        navItems={["Upcoming Trips", "Past Trips", "Canceled Bookings"]}
        gap={37}
      />
      {Navs[selectedComp]}
    </div>
  );
}

export default page;
