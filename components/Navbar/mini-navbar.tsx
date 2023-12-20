import { UserButton, currentUser } from "@clerk/nextjs";
import React, { useState, useCallback } from "react";

import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

const MiniNavbar = async () => {
  const user = await currentUser();
  if (user) {
    return (
      <div className=" flex justify-center items-center w-full relative gap-x-5 ">
        <Button
          variant="destructive"
          className=" flex  justify-between w-2/5 items-center "
        >
          <div>
            Create listing
          </div>
          <PlusCircle className=" w-5 h-5" />
        </Button>
       <UserButton afterSignOutUrl=""/>
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
     Sign up
   </Button>
    </div>
  );
};

export default MiniNavbar;
