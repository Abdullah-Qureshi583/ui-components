"use client";
import Header from "@/components/custom/Header";
import { usePathname } from "next/navigation";
import React from "react";


const Carousellayout = ({ children }) => {
    const a = usePathname()
  const tabs = ["CarouselA", "b", "c"];
  const currentPage = "carousel";

  return (
    <div className="">
      <Header currentPage={a} tabs={tabs} />
      {children}
    </div>
  );
};

export default Carousellayout;
