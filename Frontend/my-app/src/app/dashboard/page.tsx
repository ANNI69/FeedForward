"use client";
import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";
import { getDashboardData } from "@/utils/services";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { AuthProvider } from "@/context/AuthContext";

interface User {
  id: string;
  token: string;
}
interface Data {
  id?: string;
  token?: string;
  email?: string;
}

export default function Home() {
  const [data, setData] = useState<Data>({});
  const router = useRouter();

  useEffect(() => {
    // Get user cookie
    const userCookie = getCookie("user");
    if (userCookie) {
      const user: User = JSON.parse(userCookie);
      setData(user);
      console.log("User cookie found", user);
    } else {
      router.push("/login"); // Redirect to login if no user cookie is found
      console.log("No user cookie found");
    }

    const fetchData = async () => {
      if (data.id && data.token) {
        getDashboardData(data.id, data.token).then((res) => {
          console.log("Dashboard data", res.data);
        });
      }
    };

    fetchData();
  }, [data.id, data.token]);

  return (
    <AuthProvider>
      <ProtectedRoute>
        {" "}
        {/* Wrap content in ProtectedRoute */}
        <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
          <SideNavbar />
          <div className="p-8 w-full">
            <Dashboard />
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
