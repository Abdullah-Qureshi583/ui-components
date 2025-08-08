"use client"
import Header from "@/components/custom/Header";
import React from "react";
import { usePathname } from "next/navigation";


const Carousellayout = ({ children }) => {
    const tabs = ["a", "b", "c"];
  const pathname = usePathname();

  return (
    <div>
      <Header currentPath={pathname} tabs={tabs} />
      {children}
    </div>
  );
};

export default Carousellayout;
