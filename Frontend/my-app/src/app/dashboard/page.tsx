"use client";
import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import Dashboard from "./Dashboard";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import axios from "axios";
import { getDashboard } from "@/Constants";

export default function Home() {
  const [data, setData] = useState<{ name: string } | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = localStorage.getItem('token');
  //     const res = await axios.get(getDashboard, {
  //       headers: {
  //         'x-auth-token': token,
  //       },
  //     });
  //     setData(res.data);
  //   };

  //   fetchData();
  // }, []);

  // if (!data) return <div>Loading...</div>;
  return (
    <>
      <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
        <SideNavbar />
        {/* {data.name} */}
        <div className="p-8 w-full">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
