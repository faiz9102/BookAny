import React from "react";
import { Bronze, Elite, Gold, Platinum, Silver } from "./Tires";

function TireLevels() {
  return (
    <div className="flex flex-col mt-[40px] gap-[12px] pb-[10px]">
      <Card
        level={"Entry-Level (Basic)"}
        points={[
          "Earn points and access basic rewards like free flight redemptions.",
        ]}
        btns={[<Bronze />]}
      />
      <Card
        level={"Mid-Tier (Silver/Gold)"}
        points={[
          "Faster points accumulation (e.g., 1.5x or 2x points per flight).",
          "Free checked bags, priority boarding, seat selection.",
          "Access to airport lounges.",
          "Discounted fees for changes or cancellations.",
        ]}
        btns={[<Silver />, <Gold />]}
      />
      <Card
        level={"Top-Tier (Platinum/Elite)"}
        points={[
          "Maximum points multiplier (e.g., 3x points per flight).",
          "Free flight upgrades, premium customer service, exclusive offers.",
          "Guaranteed seats, early access to sales, or special promotions.",
          "Access to premium lounges, priority check-in, security, and boarding.",
        ]}
        btns={[<Platinum />, <Elite />]}
      />
    </div>
  );
}

export default TireLevels;

const Card = ({ level, btns, points }) => {
  return (
    <div className="max-w-[659px] w-full rounded-[15px] border -border--devide-line-clr-2 bg-white pt-[18px] pl-[20px] pr-[19px] pb-[21px]">
      <div className="flex items-center justify-between">
        <h1 className="med-18">{level}</h1>
        <div className="flex-center gap-[8px]">
          {btns.map((it) => {
            return it;
          })}
        </div>
      </div>
      <ul className="mt-[11px]">
        {points.map((it) => (
          <li className="flex items-center bk-14">
            <span className="border-[1px] -border--primary-black rounded-[5px] mr-[10px]" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};
