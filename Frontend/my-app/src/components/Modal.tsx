// components/Modal.js
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Switch } from "./ui/switch";
import Datepicker from "react-tailwindcss-datepicker";

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

const Modal = ({ show, onClose }: ModalProps) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    unit: "",
    isEdible: false,
    expirationDate: { startDate: null, endDate: null },
    category: "",
    storageCondition: "",
    source: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/fooditems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
      console.log("Form submitted successfully");
      onClose(); // Close the modal on success
    } else {
      // Handle error
      console.error("Form submission failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleValueChange = (newValue: { startDate: null; endDate: null }) => {
    setFormData((prevData) => ({
      ...prevData,
      expirationDate: newValue,
    }));
  };

  return (
    <div className="fixed inset-0 bg-opacity-0 w-full flex items-center justify-center z-50">
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-50 sm:px-6 lg:px-8 w-screen">
        <div>
          <Card className="mx-auto max-w-screen">
            <CardHeader>
              <CardTitle className="text-3xl">Donate Food</CardTitle>
              <CardDescription>Enter your Food Information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Eg. Rice"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="Quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Input
                      id="unit"
                      placeholder="Eg. Kg, Liters, Pieces"
                      required
                      value={formData.unit}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="isEdible">Is Edible?</Label>
                    <div className="flex gap-2 items-center">
                      <span>Yes</span>
                      <Switch
                        id="isEdible"
                        checked={formData.isEdible}
                        onChange={() => {
                          handleChange;
                        }}
                      />
                      <span>No</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expirationDate">Expiration Date</Label>
                    <Datepicker
                      onChange={() => {
                        handleValueChange;
                      }}
                      primaryColor={"lime"}
                      value={formData.expirationDate}
                      showShortcuts={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="Eg. Perishable, Non-Perishable"
                      required
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storageCondition">Storage Condition</Label>
                    <Input
                      id="storageCondition"
                      placeholder="Eg. refrigerated, frozen, room temperature"
                      required
                      value={formData.storageCondition}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source">Source</Label>
                    <Input
                      id="source"
                      placeholder="Source"
                      required
                      value={formData.source}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <button onClick={onClose} className="absolute top-2 right-2 text-black">
        &times;
      </button>
    </div>
  );
};

export default Modal;
