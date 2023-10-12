"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
  const handleHamburgerClick = () => {
    console.log("Hamburger clicked");
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  return (
    <>
      <header className="fixed flex ml-0 h-25 px-4 bg-[#282a36] z-40 lg:ml-72 items-center justify-center min-w-0 border-b border-solid border-[#323442] w-full lg:w-[calc(100%-288px)]">
        <div className="fixed block top-8 left-3 lg:hidden text-center z-50">
          <Icon
            icon={"ci:hamburger-lg"}
            width={30}
            height={30}
            onClick={handleHamburgerClick}
          />
        </div>
        <Image
          width="100"
          height="100"
          alt="Polletto logo"
          src="/logo-polletto-removebg-preview.png"
        />
      </header>
      {isHamburgerOpen && <div>sdsadasd</div>}
    </>
  );
};

export default Header;
