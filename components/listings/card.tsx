import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Badge } from "../ui/badge";
const Card = () => {
  return (
   <div className=" col-span-1 cursor-pointer group bg-slate-200  rounded">
       <div className=" flex flex-col gap-y-2">
           <div 
            className="
              w-full aspect-square relative overflow-hidden rounded-xl
            "
           >
             <Image
              fill
              src={"/images/bg2.webp"}
              alt=""
              className="
               h-full
               w-full
               bg-cover
               bg-center
                transition
              "
              />
              <div className=" absolute w-4 h-4 right-2">
                <Heart />
              </div>
           </div>
           <div className=" font-bold font-sans text-orange-400">
               The hill gardens
           </div>
           <div className=" flex justify-between items-center gap-x-2 w-full">
              <div className=" font-bold text-sm font-mono">
                  188.99$
              </div>
              <Badge variant="destructive">
                50% off
              </Badge>
           </div>
       </div>
   </div>
  );
};

export default Card;
