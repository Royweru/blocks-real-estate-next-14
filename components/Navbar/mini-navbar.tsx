

import { currentUser } from "@clerk/nextjs";
import React, { useState, useCallback } from "react";
import UserAvatar from "./user-avatar";



const MiniNavbar =async () => {
const user = await currentUser()
  if(user){
    return(
      <UserAvatar />
    )
  }
  return (
   <div className=" relative flex justify-center items-center gap-x-4">
       
   </div>
  );
};

export default MiniNavbar;
