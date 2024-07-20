import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import React from "react";
import Dashboard from "../Dashboard";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col h-full">
        <header className="flex items-center justify-between px-4 py-2 border-b">
          <h1 className="text-lg font-semibold">Chat Room</h1>
          <Button className="text-white" variant="outline" size="sm">
            Leave Chat
          </Button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-end space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-white">U</AvatarFallback>
            </Avatar>
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className=" text-white text-sm">Hello everyone!</p>
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-white">U</AvatarFallback>
            </Avatar>
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className=" text-white text-sm">How's it going?</p>
            </div>
          </div>
          <div className="flex items-end justify-end space-x-2">
            <div className="p-2 rounded-lg bg-blue-500 text-white">
              <p className="text-sm">
                Hello! It's going well, thanks for asking.
              </p>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-white">U</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-end justify-end space-x-2">
            <div className="p-2 rounded-lg bg-blue-500 text-white">
              <p className=" text-white text-sm">What about you?</p>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-white">U</AvatarFallback>
            </Avatar>
          </div>
        </main>
        <footer className="flex items-center space-x-2 p-2 border-t">
          <Input className="flex-1" placeholder="Type a message" />
          <Button className="text-white" variant="outline" size="sm">
            Send
          </Button>
        </footer>
      </div>
    </>
  );
}
