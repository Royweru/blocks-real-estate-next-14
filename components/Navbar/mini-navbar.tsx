import { UserButton, currentUser } from "@clerk/nextjs";
import React, { useState, useCallback } from "react";


import { Button } from "../ui/button";

import { CreateButton } from "../create-button";

const MiniNavbar = async () => {
  const user = await currentUser();
  
  if (user) {
    return (
      <div className=" flex justify-center items-center w-full relative gap-x-5 ">
       <CreateButton />
       <UserButton afterSignOutUrl="/" showName />
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
