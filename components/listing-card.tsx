"use client "

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./ui/card";
import Image from "next/image";

const ListingCard = () => {
  return (
    <Card className=" bg-white col-span-1 md:col-span-2 ">
      <CardHeader>
        <div className=" w-full h-[400px] ">
          <div className=" relative aspect-square">
            <Image
              src={"/images/bg1.jpeg"}
              alt=""
              fill
              className=" rounded-lg bg-cover bg-center"
            />
          </div>
        </div>
        <CardDescription>
          $5,999,443.3
        </CardDescription>
      </CardHeader>
      <CardContent className=" font-bold text-xl gap-y-2">
       <div>
        House along th 
       </div>
       <div className=" text-xs font-light text-neutral-500">
        Make sure to check the deal before its tool late
       </div>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
