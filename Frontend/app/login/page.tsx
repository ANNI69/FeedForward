"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import axios from "axios";
import Link from "next/link";
import Toast from "@/utils/Toast";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlerReset = () => {
    setData({
      email: "",
      password: "",
    });
  };

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/login", data);
      if (response.status === 200) {
        Toast({
          title: "Login successful",
          description: "You have successfully logged in",
          actionText: "Okay",
          actionAltText: "Cancel",
        });
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: "/",
        });
      }
    } catch (error) {
      Toast({
        title: "Login failed",
        description: "Please check your credentials",
        actionText: "Okay",
        actionAltText: "Cancel",
      });
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h- md:py-12 ">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="name"
                    type="email"
                    placeholder="Name of your username"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handlerReset} variant="outline">
              Clear
            </Button>
            <Button
              variant={"default"}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </CardFooter>
          <CardContent>
            <div className="flex pl-30">
              Dont have an account?
              <Link href="/register">
                <span className="bg-blue hover-pointer"> Register</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
