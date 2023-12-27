import { UserButton, currentUser } from "@clerk/nextjs";
import React from "react";


import { Button } from "../ui/button";
interface MiniNavbarProps{
  user:any
}

const MiniNavbar:React.FC<MiniNavbarProps> = ({
  user
}) => {
 
  if (user) {
    return (
      <div className=" flex justify-center items-center w-full relative gap-x-5 ">
       <div>
        Logged in
       </div>
       <UserButton afterSignOutUrl="/" />
      </div>
    );
  }
  return (
    <div className=" relative flex justify-center items-center gap-x-4 w-full">
   <Button variant="destructive">
     <a href="/sign-in">
      Sign In
     </a>
   </Button>
   <Button variant="outline">
     <a href="/sign-up">
      Sign Up
     </a>
   </Button>
    </div>
  );
};

export default MiniNavbar;
