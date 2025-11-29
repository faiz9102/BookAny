import React from "react";
import { BookingCard } from "./Bookings";

function PastTrips() {
  return (
    <div className="flex flex-wrap gap-[17px] mt-[39px] w-full">
      <BookingCard
        airlineName={"KHI - ISB"}
        status={{ name: "Confirmed", clr: "#008060", bg: "#0080601A" }}
      />
    </div>
  );
}

export default PastTrips;
