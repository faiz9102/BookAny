"use server";
import { cookies } from "next/headers";

const test = async () => {
  let data = await fetch("http://localhost:3000/api/test", {
    method: "Post",
    headers: {
      Cookie: cookies().toString(),
      "x-csrf-token": cookies().get("_crsf_token").value,
    },
  });
  data = await data.json();
  console.log(data);
};

export { test };
