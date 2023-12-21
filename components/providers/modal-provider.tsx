"use client";
import { CreateListingModal } from "@/components/modals/create-listing-modal";
import React, { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <CreateListingModal />
    </>
  );
};

export default ModalProvider;
