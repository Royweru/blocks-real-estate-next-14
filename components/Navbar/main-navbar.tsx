import React from "react";
import MiniNavbar from "./mini-navbar";
import UserAvatar from "./user-avatar";
export const Navbar = () => {
  return (
    <div className=" flex justify-between w-full  bg-slate-500  px-1 shadow-lg  items-center">
      <MiniNavbar />
      <UserAvatar />
    </div>
  );
};
