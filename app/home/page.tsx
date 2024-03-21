"use client";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/theme-button";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/navbar";
import MeteorsDemo from "./3rdSection";
import cardsData from "@/utils/staticData.js";
export default function Homepage() {
  const images = [
    "https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/zero-food-waste.jpg",
  ];

  return (
    <>
      <Navbar />
      <ImagesSlider className="h-[90vh]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-8xl text-cente bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 font-[Nova]">
            <br /> Turning Leftovers into Opportunities
          </motion.p>
          <button className="px-10 py-4 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>
              {" "}
              <a href="/login">Start →</a>
            </span>
            {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
          </button>
        </motion.div>
      </ImagesSlider>
      <div className="h-[30vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h2 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Donate From Here.
          </h2>
        </div>
        <BackgroundBeams />
      </div>
      <div className=" bg-black flex flex-wrap justify-center space-x-2 ml-5 mr-5 gap-10">
        {cardsData &&
          cardsData.map((value, index) => {
            return <MeteorsDemo key={index} {...value} />;
          })}
      </div>

      <footer className=" w-[100vw]bg-black rounded-lg shadow dark:bg-black">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.ibb.co/ZJqRPny/Vector-1.png" //https://i.ibb.co/51tdNjH/Container-261.png, https://i.ibb.co/ZJqRPny/Vector-1.png
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FeedForward
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              FeedForward
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
