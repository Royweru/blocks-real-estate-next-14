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
    <Card className=" bg-white col-span-1 md:col-span-2">
      <CardHeader>
        <div className=" h-[64px] w-full ">
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
          this is a card and this and that and that when we give you out andd
          out
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This here is the shit and this here ris the shit and shit and shit and
          shit when we came together of all pple and that when we ocoe toghether
          who ew arre
        </p>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
