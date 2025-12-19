import React from "react";
import AccountNav from "../../components/AccountComponents/AccountNav"; // adjust path as needed

const AccountLayout = ({ children }) => {
  return (
    <section className="w-full h-max max-w-[1029px] m-auto">
      <AccountNav />
      {children}
    </section>
  );
};

export default AccountLayout;
