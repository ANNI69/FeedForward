/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "@/Constants";

// ...
type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "organizationName",
    header: "Organization Name",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
];

export default function UsersPage({}: Props) {
  const [data, setData] = useState<Payment[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getUser);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
        <SideNavbar />
        <div className="p-8 w-full">
          <div className="flex flex-col gap-5  w-full">
            <PageTitle title="Users" />
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
