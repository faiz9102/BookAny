import React from "react";
import { BookingCard } from "./Bookings";

function CanceledBookings() {
  return (
    <div className="flex flex-wrap gap-[17px] mt-[39px] w-full">
      <BookingCard
        airlineName={"KHI - ISB"}
        status={{ name: "Canceled", clr: "#D72C0D", bg: "#D72C0D1A" }}
      />
    </div>
  );
}

export default CanceledBookings;
