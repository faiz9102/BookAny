import React, { useState, Suspense } from "react";
import { motion, useAnimate } from "framer-motion";

// ✅ Relative imports (Laravel-compatible)
import Flights from "../components/FlightsCard/Flights";

import {
  airline,
  ArrowsBoth,
  bag,
  borderSmall,
  check,
  chevrondownward,
  classtype,
  dashedLine,
  elipse,
  filter,
  meal,
} from "../consonants";

function SearchPage() {
  return (
    <section className="w-full">
      <Suspense fallback={null}>
        <SuspenseModel />
      </Suspense>
    </section>
  );
}

export default SearchPage;

//Updated Suspense Model
const SuspenseModel = () => {
  const params = new URLSearchParams(window.location.search);

  const prices = [
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
    { dateString: "27 Jul - 13 Aug", price: "132,987" },
  ];

  return (
    <div className="flex flex-col">
      <PricesShower prices={prices} />
      <Filters />

      <div className="flex flex-col w-full">
        {params.get("return") && (
          <ReturnCard
            fromLoc="Karachi (KHI)"
            fromDate="Mon 13, Aug"
            toLOc="Islamabad (ISL)"
            toDate="Fri 21, Dec"
            flightTime="21h 37m"
            departTime="4:40 AM"
            offTime="6:40 AM"
          />
        )}

        <Flights returnPage={params.get("return")} />
      </div>
    </div>
  );
};
