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
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function acceptorRegister() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    registerNumber: "",
    address: "",
    estDate: "",
    email: "",
    contact: "",
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
      name: "",
      type: "",
      registerNumber: "",
      address: "",
      estDate: "",
      email: "",
      contact: "",
      password: "",
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    if (
      formData.name === "" ||
      formData.type === "" ||
      formData.registerNumber === "" ||
      formData.address === "" ||
      formData.estDate === "" ||
      formData.email === "" ||
      formData.contact === "" ||
      formData.password === ""
    ) {
      toast({
        variant: "destructive",
        title: "Please fill all the fields",
        description: "There was a problem with your request.",
        action: <Button>Okay</Button>,
      });
    } else {
      toast({
        title: "Successfully Registered!",
        description: "Dashboard",
        action: (
          <a href="/reciever/dashboard">
            <Button onClick={() => console.log("Redirect to Dash")}>
              Go to Dashboard
            </Button>
          </a>
        ),
      });
    }
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[950px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Please Fill The Details Below</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name of your Org"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="typeOfOrg">Type of Organization</Label>
                <Select
                  name="type"
                  value={formData.type}
                  onValueChange={(value) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger id="typeOfOrg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="ngo">NGO</SelectItem>
                    <SelectItem value="compost">
                      Composting Firm - Post Process
                    </SelectItem>
                    <SelectItem value="biogas">
                      Biogas Plant - Post Process
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="registerNumber">Register Number</Label>
                <Input
                  id="registerNumber"
                  name="registerNumber"
                  placeholder="Register Number"
                  onChange={handleChange}
                  value={formData.registerNumber}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="estDate">Establishment Date</Label>
                <Input
                  id="estDate"
                  name="estDate"
                  type="date"
                  onChange={handleChange}
                  value={formData.estDate}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  name="contact"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  value={formData.contact}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handlerReset} variant="outline">
              Reset{" "}
            </Button>
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
