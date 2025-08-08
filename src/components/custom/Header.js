import Link from "next/link";
import React from "react";


const Header = ({currentPage, tabs}) => {
  return (
    <ul class="flex border-b">
      {tabs.map((tab, idx) => (
        <li key={idx} class="mr-1">
          <Link
            class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
            href={`${currentPage}/${tab}`}
            // href={`/components/carousel/a`}
          >
            Tab
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
