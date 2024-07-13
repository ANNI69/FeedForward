"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/components/ui/use-toast";

import { useState } from "react";
import { userRegister } from "@/utils/services";

export default function Component() {
  const [data, setData] = useState({});

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await userRegister(data);

      if (res.status === 201) {
        toast({
          title: "Account created successfully",
          description: "You have successfully created an account",
          action: <ToastAction altText={"Okay"}>Okay</ToastAction>,
        });
        console.log("Account created successfully");
      }
      console.log(res);
    } catch (error) {
      console.log("Error creating account");
      toast({
        title: "Error creating account",
        description: "An error occurred while creating an account",
        action: <ToastAction altText={"Okay"}>Okay</ToastAction>,
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
          <Card className="bg-black w-[60rem]">
            {" "}
            {/* Increase the max-w-md value */}
            <CardHeader>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your information below to create an account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input
                    id="type"
                    onChange={handleChange}
                    placeholder="Enter your type"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onChange={handleChange}
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organizationType">Organization Type</Label>
                  <Input
                    onChange={handleChange}
                    id="organizationType"
                    placeholder="Enter your organization type"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <Input
                    onChange={handleChange}
                    id="organizationName"
                    placeholder="Enter your organization name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    onChange={handleChange}
                    id="address"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    onChange={handleChange}
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} className="w-full">
                Create Account
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
