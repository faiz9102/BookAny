"use client";
import { usePathname } from "next/navigation";
import { chevronRight } from "@/consonants";
import Link from "next/link";
import React from "react";

function AccountNav() {
  const pathname = usePathname();
  const arr = pathname.split("/");

  const UpperCaser = (stri) => {
    if (stri.includes("-")) {
      let striF = stri.slice(0, stri.indexOf("-"));
      striF = striF.slice(0, 1).toUpperCase() + striF.slice(1);
      let striS = stri.slice(stri.indexOf("-") + 1);
      striS = striS.slice(0, 1).toUpperCase() + striS.slice(1);
      return striF + " " + striS;
    } else {
      return stri.slice(0, 1).toUpperCase() + stri.slice(1);
    }
  };

  const nameGiver = () => {
    let nameH1 = pathname.slice(pathname.lastIndexOf("/") + 1);
    if (nameH1.includes("-")) {
      let val = UpperCaser(nameH1);
      val = val.includes("-") ? UpperCaser(val) : val;
      return val;
    } else {
      return nameH1.slice(0, 1).toUpperCase() + nameH1.slice(1);
    }
  };

  const LinkGiver = (ind) => {
    let link = "";
    arr.map((it, index) => {
      if (index < ind && it !== "") {
        link += "/" + it;
      }
    });
    return link;
  };

  return (
    <div className="flex flex-col mt-[40px] gap-[9px]">
      <div className="flex items-center gap-[16px]">
        {arr.map(
          (it, index) =>
            it !== "" &&
            (index !== arr.length - 1 ? (
              <>
                <Link
                  href={LinkGiver(index + 1)}
                  className="text-[14px] font-[500] hover:underline underline-offset-2 leading-[18px] -text--primary-black"
                >
                  {UpperCaser(it)}
                </Link>
                <span className="[&_svg]:w-[15px] [&_svg]:h-[15px] flex-center">
                  {chevronRight}
                </span>
              </>
            ) : (
              <>
                <p className="text-[14px] font-[500] hover:underline underline-offset-2 leading-[18px] -text--brand-clr">
                  {nameGiver()}
                </p>
              </>
            ))
        )}
      </div>
      <h1 className="text-[34px] font-[700] leading-[44px] -text--primary-black">
        {nameGiver()}
      </h1>
    </div>
  );
}

export default AccountNav;
