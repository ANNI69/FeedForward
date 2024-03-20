import Register from "@/app/register/page";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.ibb.co/ZJqRPny/Vector-1.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FeedForward
            </span>
          </a>
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="flex flex-col w-full p-4">
            <Register />
            {/* Adjust according to your implementation */}
            <a href="/login" className="w-full">
              <Button>Login</Button>{" "}
              {/* Assuming <Button> is styled similarly */}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
