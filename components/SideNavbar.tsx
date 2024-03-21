/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { Sign } from "crypto";
import { signOut } from "next-auth/react";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/donor/dashboard/",
            icon: LayoutDashboard,
            variant: "ghost",
          },
          {
            title: "NGOs",
            href: "/donor/dashboard/ngos",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Compost",
            href: "/donor/dashboard/composting",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Signout",
            href: "/login",
            icon: LogOut,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
