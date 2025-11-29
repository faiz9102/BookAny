import React from "react";

function FareRules({ review }) {
  const rules = [
    "Book with confidence.",
    "Fare is non-refundable, name change is not permitted and ticket is non-transferable.",
    "Date changes will incur penalty and fees (airline penalty plus any fare difference plus our processing service fee) and is based on availability of flight at the time of change.",
    "Date change after departure must be done by the airline directly (airline penalty plus any fare difference will apply and is based on availability of flight at the time of change).",
    "Routing change will incur penalty and fees (airline penalty plus any fare difference plus our processing service fee will apply and is based on availability of flight at the time of change).",
    "Contact 8:00am to 2:00am our customer service to make any changes.",
    "Prior to completing the booking in the 'terms and conditions' link, you should review our service fees for exchanges, changes, refunds and cancellations.",
    "Compassion Exception Policy: (CEP) - In certain documented cases, we will waive all our fees for changes and exchanges only, airline penalties, fees and fare difference will still apply and generally cannot be waived. See CEP policy for details.",
    "Ticket price as defined includes Air fare, our service fees, govt. taxes and fees and all ancillaries and extra services like seats, bags, support packages, insurance, price drop assurance, flight watcher, traveler assist and others, all of which are non-refundable.",
    "All our service fees for tickets, hotels, car rentals, packages and all ancillaries and extra services as well as post ticketing service fees are non-refundable.",
  ];
  return (
    <div
      className={`w-full flex flex-col gap-[19px] ${
        review ? "" : "px-[47px] py-[36px]"
      }`}
    >
      <p
        className={`${
          review ? "text-[16px]" : "text-[32px]"
        } font-[500] leading-[41px] -text--primary-black`}
      >
        Turkish Airline
      </p>
      <ul className="flex flex-col ">
        {rules.map((it, index) => (
          <li
            key={index}
            className="text-[14px] font-[400] -text--primary-black leading-[28px]"
          >
            {index + 1}. {it}
          </li>
        ))}
      </ul>
      <p className="text-[14px] font-[400] -text--primary-black leading-[28px]">
        Please note that our Service fees are in addition to any Airline refund
        penalty, exchange fees and/or fare difference. Please refer to our fees
      </p>
    </div>
  );
}

export default FareRules;
