/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

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
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";

import { useEffect, useState } from "react";
import axios from "axios";
import { getFoodUrl } from "@/Constants";

type Props = {};
type Payment = {
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Food Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "expired" || row.getValue("status") === "disposed",
            "bg-orange-200": row.getValue("status") === "available",
            "bg-green-200": row.getValue("status") === "donated",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "donatedBy",
    header: "Donated By",
  },
  {
    accessorKey: "source",
    header: "Source",
  },
];


// ...


// ...

export default function OrdersPage({}: Props) {
  const [data, setData] = useState<Payment[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getFoodUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
      <>
        <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
          <SideNavbar />
          <div className="p-8 w-full">
            <div className="flex flex-col gap-5  w-full">
              <PageTitle title="Orders" />
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
