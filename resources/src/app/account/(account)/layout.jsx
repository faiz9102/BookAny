import AccountNav from "@/components/AccountComponents/AccountNav";

import React from "react";

function layout({ children }) {
  return (
    <section className="w-full h-max max-w-[1029px] m-auto">
      <AccountNav />
      {children}
    </section>
  );
}

export default layout;
