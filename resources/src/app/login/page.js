"use client";
import { test } from "@/actions";
import React from "react";

async function route() {
  // let data = await fetch("http://localhost:3000/api/test", {
  //   method: "Post",
  //   headers: { "X-custom-header": "a465465465asdasd54" },
  // });
  // data = await data.json();

  return (
    <form action={test} className="flex-col flex-center">
      <label>
        Email
        <input
          className="h-[40px] w-[400px] border -border--devide-line-clr shadow-lg mt-[10px] rounded-[10px] outline-none "
          name="email"
          type="email"
        />
      </label>
      <label>
        Password
        <input
          className="h-[40px] w-[400px] border -border--devide-line-clr shadow-lg mt-[10px] rounded-[10px] outline-none "
          name="password"
          type="password"
        />
      </label>
      <button>Sign In</button>
    </form>
  );
}

export default route;
