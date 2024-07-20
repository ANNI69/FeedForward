// components/Modal.js
import React, { useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

const Modal = ({ show, onClose }: ModalProps) => {
  if (!show) return null;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-opacity-0 w-full flex items-center justify-center z-50 mt-10`}
      >
        <div className="flex min-h-screen items-center justify-center bg-muted px-4 py-12 sm:px-6 lg:px-8 m-10 w-screen bg-opacity-50">
          <div className="w-full max-w-md space-y-8">
            <div>
              <div>
                <Button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
