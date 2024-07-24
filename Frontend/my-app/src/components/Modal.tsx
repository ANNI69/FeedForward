import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import axios from "axios";
import { getFoodUrl } from "@/Constants"; // Ensure this URL points to "http://localhost:5000/api/fooditems"
import { sendFoodData } from "@/utils/services";
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
    expirationDate: "",
    category: "",
    storageCondition: "",
    source: "",
    donatedBy: "anii", // Add this line to include the donatedby field in the form
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Log form data to check its structure
    sendFoodData(formData, "token", "userId") // Replace "token" and "userId" with actual values
      .then((res) => {
        console.log(res.data);
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
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
                            setFormData((prevData) => ({
                              ...prevData,
                              isEdible: !prevData.isEdible,
                            }));
                          }}
                        />
                        <span>No</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expirationDate">Expiration Date</Label>
                      <Input
                        id="expirationDate"
                        type="date"
                        required
                        value={formData.expirationDate}
                        onChange={handleChange}
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
                      <Label htmlFor="storageCondition">
                        Storage Condition
                      </Label>
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
    </>
  );
};

export default Modal;
