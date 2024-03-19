import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Third() {
  return (
    <div className=" bg-black flex flex-wrap justify-between space-x-2 ml-5 mr-5">
      <MeteorsDemo1st />
      <MeteorDemo2nd />
      <MeteorDemo3rd />
    </div>
  );
}

function MeteorsDemo1st() {
  return (
    <div className="bg-black">
      <div className=" m-2 m-2 w-full relative max-w-xs">
        <div className="" />
        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Are You A NGO?
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Join our mission to transform surplus food into hope. Register your
            NGO with us today and become a part of a growing community dedicated
            to ending hunger and reducing food waste. Together, we can make a
            difference—one meal at a time.
          </p>
          <a href="/register/reciever">
            <Button variant="outline">Register</Button>
          </a>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

function MeteorDemo2nd() {
  return (
    <>
      <div className="bg-black">
        <div className=" m-2 w-full relative max-w-xs">
          <div className="" />
          <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Join Our Composting Alliance
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Embrace sustainability and enrich the earth. Register your
              composting organization with us and connect with a network
              committed to turning food waste into resourceful compost. Lets
              collaborate for a greener tomorrow and a meaningful impact on our
              planet.
            </p>

            <Button variant="outline" className="ml-4">
              <a href="/register/reciever">Sign Up</a>
            </Button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
}

function MeteorDemo3rd() {
  return (
    <>
      <div className="bg-black">
        <div className=" m-2 w-full relative max-w-xs">
          <div className="" />
          <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Energy Revolution: Power the Future
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Transform organic waste into renewable energy by joining our
              pioneering network of biogas plants. Collaborate with us to fuel a
              cleaner, sustainable future, and turn waste challenges into energy
              solutions
            </p>

            <Button variant="outline" className="ml-4">
              Sign Up
            </Button>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
}
