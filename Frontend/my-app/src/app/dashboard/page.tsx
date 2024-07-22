"use client";
import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// import { cookies } from "next/headers";
interface User {
  id: string;
  token: string;
}
interface Data {
  id?: string;
  token?: string;
  email?: string;
}
// const cookieStore = cookies();

export default function Home() {
  const [data, setData] = useState<Data>({});
  const router = useRouter();

  useEffect(() => {
    // Fetch the user cookie
    // const userCookie = cookieStore.get('user')?.value;
    
    // if (!userCookie) {
    //   // Handle case where user cookie is not found
    //   console.error('User cookie not found');
    //   router.push('/login'); // Redirect to login if user not authenticated
    //   return;
    // }
    
    // // Parse the user cookie
    // const user: User = JSON.parse(userCookie);

    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(`/api/dashboard/${user.id}`, {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     });
    //     setData(res.data);
    //   } catch (error) {
    //     console.error('Error fetching dashboard data:', error);
    //     // Optionally handle errors such as redirecting to an error page
    //   }
    // }

    // fetchData();
  }, []);

  return (
    <>
      <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
        <SideNavbar />
        {/* {data.name} */}
        <div className="p-8 w-full">
          <Dashboard  />
        </div>
      </div>
    </>
  );
}
