// Import necessary components and hooks
"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/components/ui/use-toast";
import { userLogin } from "@/utils/services"; // Ensure this is correctly implemented
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function Login() {
  const [data, setData] = useState<{ email?: string; password?: string }>({});
  const router = useRouter();

  // Handle input changes
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await userLogin(data); // Ensure userLogin returns the expected response
      if (res.status === 200) {
        const userData = res.data; // Assuming the user data is in res.data
        setCookie("user", JSON.stringify(userData));
        toast({
          title: "Login successful",
          description: "You have successfully logged in",
          action: <ToastAction altText={"Okay"}>Okay</ToastAction>,
        });
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        action: <ToastAction altText={"Okay"}>Okay</ToastAction>,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
        <Card className="bg-black mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <p className="text-sm text-end text-white font-sans">
                Don't have an account?{" "}
                <span className="text-sm hover:underline font-sans">
                  <a href="/register">Register</a>
                </span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
