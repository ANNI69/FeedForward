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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Register from "../register/page";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerReset = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    handleChange;
    if (formData.email === "" || formData.password === "") {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log(formData);
    } else {
      try {
        const response = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (!response?.error) {
          router.push("/reciever/dashboard");
          router.refresh();
        }
      } catch (error) {}
    }
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-auto md:py-12 ">
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
              className="bg-green-700 hover:bg-green-900 text-white"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </CardFooter>
          <CardContent>
            <div className="flex pl-30">
              {" "}
              Dont have an account?{" "}
              <a className="bg-blue hover-pointer">
                <Register />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
