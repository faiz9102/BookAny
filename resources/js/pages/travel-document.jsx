import React, { useState } from "react";
import { CustomSelect } from "../AccountComponents/WithdrawDetails";
import {
  DateSelector,
  InputComponent,
  PassengerForm,
} from "../BookingComponents/ContactComp";
import { addicon } from "../consonants";

function TravelDocuments() {
  const [passengers, setPassengers] = useState([1]);

  return (
    <form id="travel-doc" className="flex flex-col pt-[51px] pb-10">
      <div className="flex flex-col max-w-[900px] w-full gap-[40px]">
        <HeadinComp text="Passport Information">
          <div className="flex flex-col">
            <div className="flex flex-col gap-[28px]">
              {passengers.map((it, index) => (
                <PassengerForm key={index} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPassengers((p) => [...p, p.length + 1])}
              className="flex gap-[13px] items-center mt-[25px] cursor-pointer w-max"
            >
              {addicon}
              <span className="underline underline-offset-2 -text--primary-gray text-[16px] font-[400] leading-[20px]">
                Add another Passenger
              </span>
            </button>
          </div>
        </HeadinComp>

        <HeadinComp text="Visa information" inps>
          <InputComponent placeholder="Visa Number" />
          <CustomSelect
            bottom="-40px"
            placeholder="Visa Type"
            list={["temp_data"]}
          />
          <DateSelector name="Visa expiry" />
        </HeadinComp>

        <HeadinComp text="National ID Information" inps>
          <InputComponent placeholder="National ID number" />
          <InputComponent placeholder="Insurance Provider" />
        </HeadinComp>

        <HeadinComp text="Travel Insurance Document" inps>
          <InputComponent placeholder="Insurance Policy Number" />
          <CustomSelect
            bottom="-40px"
            placeholder="Region"
            list={["temp_data"]}
          />
          <DateSelector name="Insurance expiry" />
        </HeadinComp>

        <HeadinComp text="Emergency Contact Information" inps>
          <InputComponent placeholder="Contact Name" />
          <InputComponent placeholder="Contact Phone Number" />
          <CustomSelect
            bottom="-40px"
            placeholder="Relationship"
            list={["temp_data"]}
          />
        </HeadinComp>
      </div>

      <button
        type="submit"
        className="med-16 !text-white w-[173px] h-[55px] mt-[52px] rounded-[8px] -bg--brand-clr"
      >
        Save Details
      </button>
    </form>
  );
}

export default TravelDocuments;

const HeadinComp = ({ text, children, inps }) => (
  <div className="flex flex-col gap-[28px]">
    <h1 className="h1-cl">{text}</h1>
    {inps ? (
      <div className="flex flex-wrap gap-[16px] w-full gap-y-[18px]">
        {children}
      </div>
    ) : (
      children
    )}
  </div>
);
