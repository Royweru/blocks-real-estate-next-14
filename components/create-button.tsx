"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import useCreateListingModal from "@/hooks/use-create-listing-modal";
import { Button } from "./ui/button";
export const CreateButton = () => {
  const { onOpen } = useCreateListingModal();
  return (
    <Button
      variant="destructive"
      className=" flex  justify-between w-2/5 items-center "
      onClick={onOpen}
    >
      <div>Create listing</div>
      <PlusCircle className=" w-5 h-5" />
    </Button>
  );
};
