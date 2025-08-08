"use client";
import Header from "@/components/custom/Header";
import { usePathname } from "next/navigation";
import React from "react";

const Carousellayout = ({ children }) => {
  //   const a = usePathname();
  const currentPage = "carousel";

  const tabs = ["a", "b", "c", "d"];

  return (
    <div className="">
      <Header currentPage={currentPage} tabs={tabs} />
      {children}
    </div>
  );
};

export default Carousellayout;
