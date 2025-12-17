import React, { useState } from "react";

// use normal relative imports
import WalletNav from "../flyer-wallet/WalletNav";
import Bookings from "../../components/AccountComponents/Bookings";
import PastTrips from "../../components/AccountComponents/PastTrips";
import CanceledBookings from "../../components/AccountComponents/CanceledBookings";

function BookingPage() {
  const [selectedComp, setSelectedComp] = useState(0);

  const Navs = {
    0: <Bookings />,
    1: <PastTrips />,
    2: <CanceledBookings />,
  };

  return (
    <div className="flex flex-col pt-[51px] pb-10">
      <WalletNav
        selectedComp={selectedComp}
        setselectedComp={setSelectedComp}
        navItems={[
          "Upcoming Trips",
          "Past Trips",
          "Canceled Bookings",
        ]}
        gap={37}
      />

      {Navs[selectedComp]}
    </div>
  );
}

export default BookingPage;
