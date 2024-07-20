import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import React from "react";
import Dashboard from "../Dashboard";

export default function ChatsPage() {
  return (
    <>
      <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
        <SideNavbar />
        <div className="p-8 w-full">
          <Chat />
        </div>
      </div>
    </>
  );
}

function Chat() {
    return (
        <>
        <div className="flex flex-col w-full h-full ">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center gap-2">
                    <img
                        className="h-10 w-10"
                        src="https://api.dicebear.com/7.x/lorelei/svg?seed=John Doe"
                        alt="user-image"
                    />
                    <p>John Doe</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-red-500 text-white">Delete</button>
                    <button className="p-2 rounded-lg bg-blue-500 text-white">Edit</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex gap-2">
                    <p className="font-semibold">Email:</p>
                    <p>
                        <a href="mailto:codebyaniii@gmail.com">
                        Hie
                        </a>
                    </p>
                </div>
                <div className="flex gap-2">
                    <p className="font-semibold">Phone:</p>
                    <p>+91 1234567890</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-semibold">Message:</p>
                    <p>Hi, How are you?</p>
                </div>
            </div>
            <div className="flex space-x-2 items-center justify-between p-4 border-t">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-lg border"
                />
                <button className="p-2 rounded-lg bg-blue-500 text-white">Send</button>
            </div>
        </div>
        </>
    );
}