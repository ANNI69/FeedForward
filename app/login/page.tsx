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

export default function login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    type: "",
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
      username: "",
      password: "",
      type: "",
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    handleChange
    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.type === ""
    ) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.log(formData)
    } else {
      toast({
        title: "Login Success",
        description: "You have successfully logged in.",
        action: <ToastAction altText="Dashboard">Dashboard</ToastAction>,
      });
    }
    e.preventDefault();
  }
  
  return (
      <>
        <div className="flex justify-center items-center h-screen md:py-12">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Username</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Password" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="type">Login Type</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="donor">Donor</SelectItem>
                        <SelectItem value="reciever">Reciever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handlerReset} variant="outline">
                Clear
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  };
