import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";



export default function Third(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; url: string | undefined; button: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) {
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
              {props.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {props.description}
            </p>
            <a href={props.url}>
              <Button variant="outline">{props.button}</Button>
            </a>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
  );
}
