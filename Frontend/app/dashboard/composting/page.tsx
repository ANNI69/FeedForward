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

type Props = {};
type Payment = {
  ngoName: string;
  email: string;
  distance: any;
  listedDate: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "ngoName",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "ngoName"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("ngoName")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "listedDate",
    header: "Listed Date"
  },
  {
    accessorKey: "distance",
    header: "distance"
  }
];

const data: Payment[] = 
[
  {
    ngoName: "EcoCompost Solutions",
    email: "john@example.com",
    distance: 10,
    listedDate: "2022-05-15"
  },
  {
    ngoName: "BioCycle Innovations",
    email: "alice@example.com",
    distance: 20,
    listedDate: "2022-06-20"
  },
  {
    ngoName: "GreenWaste Energy",
    email: "bob@example.com",
    distance: 30,
    listedDate: "2022-07-25"
  },
  {
    ngoName: "Biogas Solutions Inc.",
    email: "emma@example.com",
    distance: 40,
    listedDate: "2022-08-30"
  },
  {
    ngoName: "CompostWorks Corporation",
    email: "michael@example.com",
    distance: 50,
    listedDate: "2022-09-15"
  },
  {
    ngoName: "Renewable Resources Ltd.",
    email: "sophia@example.com",
    distance: 45,
    listedDate: "2022-10-10"
  },
  {
    ngoName: "OrganicPower Solutions",
    email: "liam@example.com",
    distance: 35,
    listedDate: "2022-11-05"
  },
  {
    ngoName: "BiogasTech Group",
    email: "olivia@example.com",
    distance: 15,
    listedDate: "2022-12-10"
  },
  {
    ngoName: "EcoFuel Innovations",
    email: "noah@example.com",
    distance: 5,
    listedDate: "2023-01-15"
  },
  {
    ngoName: "Waste2Energy Solutions",
    email: "ava@example.com",
    distance: 25,
    listedDate: "2023-02-20"
  },
  {
    ngoName: "BioEnergy Partners",
    email: "elijah@example.com",
    distance: 47,
    listedDate: "2023-03-25"
  },
  {
    ngoName: "CompostTech Inc.",
    email: "mia@example.com",
    distance: 38,
    listedDate: "2023-04-30"
  },
  {
    ngoName: "GreenEnergy Solutions",
    email: "james@example.com",
    distance: 13,
    listedDate: "2023-05-15"
  },
  {
    ngoName: "BioCycle Systems",
    email: "charlotte@example.com",
    distance: 42,
    listedDate: "2023-06-20"
  },
  {
    ngoName: "CompostRenew Solutions",
    email: "benjamin@example.com",
    distance: 8,
    listedDate: "2023-07-25"
  }
]




;

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
