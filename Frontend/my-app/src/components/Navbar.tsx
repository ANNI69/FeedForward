"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ModeSwitch from "./ModeSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" bg-black border-gray-200 backdrop-blur sticky top-0 z-40">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between  p-4 ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/ZJqRPny/Vector-1.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FeedForward
          </span>
        </a>
        <div className="space-x-4 flex items-center">
          <ModeSwitch />
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
          {/* <Register/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
