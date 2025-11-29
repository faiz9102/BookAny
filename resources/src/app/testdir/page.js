"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useMemo, useRef, useState } from "react";

const page = ({ slug }) => {
  const [tempState, settempState] = useState(0);
  const btn = useRef(null);
  const res = useMemo(() => {
    console.log("Running!");
    let temp = 0;
    for (let i = 0; i < 100; i++) {
      temp += i;
    }
    return temp;
  }, []);

  useEffect(() => {
    console.log(tempState);
    console.log(btn.current);
    console.log(res);
  }, [tempState]);

  const setstate = async () => {
    const pr1 = new Promise((res, rej) => {
      setTimeout(() => {
        res("resloved!");
      }, 500);
    });
    console.log(await pr1);
    settempState(tempState + 1);
  };

  return (
    <div ref={btn} className="w-full h-full ">
      <button
        onClick={setstate}
        className="border border-black w-[130px] h-[30px] rounded-[10px]"
      >
        btn : {tempState}
      </button>
    </div>
  );
};

export default page;
