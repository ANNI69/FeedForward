"use client";

import { GlobeDemo } from "./home/page";
import { MeteorsDemo } from "../components/Cards";

export default function Home() {
  const cardsData = [
    {
      title: "Are You A NGO?",
      description:
        "Join our mission to transform surplus food into hope. Register your NGO with us today and become a part of a growing community dedicated to ending hunger and reducing food waste. Together, we can make a difference—one meal at a time.",
      buttonText: "Register",
    },
    {
      title: "Join Our Composting Alliance",
      description:
        "Embrace sustainability and enrich the earth. Register your composting organization with us and connect with a network committed to turning food waste into resourceful compost. Lets collaborate for a greener tomorrow and a meaningful impact on our planet.",
      url: "/register/reciever",
      buttonText: "Sign Up",
    },
    {
      title: "Energy Revolution: Power the Future",
      description:
        "Transform organic waste into renewable energy by joining our pioneering network of biogas plants. Collaborate with us to fuel a cleaner, sustainable future, and turn waste challenges into energy solutions",
      url: "/register/reciever",
      buttonText: "Sign Up",
    },
  ];

  return (
    <>
      <div>
        <GlobeDemo />
        <div className="p-10 bg-black flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-screen mt-6 sm:w-full">
            {cardsData.map((meteor, index) => (
              <MeteorsDemo
                key={index}
                title={meteor.title}
                description={meteor.description}
                buttonText={meteor.buttonText}
                meteorsNumber={0}
              />
            ))}
          </div>
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
      </div>
    </>
  );
}
