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
    ngoName: "Education for All",
    email: "john@example.com",
    distance: 10,
    listedDate: "2022-05-15"
  },
  {
    ngoName: "Green Earth Foundation",
    email: "alice@example.com",
    distance: 20,
    listedDate: "2022-06-20"
  },
  {
    ngoName: "Food for Needy",
    email: "bob@example.com",
    distance: 30,
    listedDate: "2022-07-25"
  },
  {
    ngoName: "Healthcare Initiative",
    email: "emma@example.com",
    distance: 40,
    listedDate: "2022-08-30"
  },
  {
    ngoName: "Animal Welfare Society",
    email: "michael@example.com",
    distance: 50,
    listedDate: "2022-09-15"
  },
  {
    ngoName: "Children's Shelter",
    email: "sophia@example.com",
    distance: 45,
    listedDate: "2022-10-10"
  },
  {
    ngoName: "Clean Water Project",
    email: "liam@example.com",
    distance: 35,
    listedDate: "2022-11-05"
  },
  {
    ngoName: "Elderly Care Foundation",
    email: "olivia@example.com",
    distance: 15,
    listedDate: "2022-12-10"
  },
  {
    ngoName: "Disaster Relief Fund",
    email: "noah@example.com",
    distance: 5,
    listedDate: "2023-01-15"
  },
  {
    ngoName: "Empowerment Initiative",
    email: "ava@example.com",
    distance: 25,
    listedDate: "2023-02-20"
  },
  {
    ngoName: "Housing Assistance Program",
    email: "elijah@example.com",
    distance: 47,
    listedDate: "2023-03-25"
  },
  {
    ngoName: "Youth Development Center",
    email: "mia@example.com",
    distance: 38,
    listedDate: "2023-04-30"
  },
  {
    ngoName: "Environmental Conservation Society",
    email: "james@example.com",
    distance: 13,
    listedDate: "2023-05-15"
  },
  {
    ngoName: "Women's Empowerment Network",
    email: "charlotte@example.com",
    distance: 42,
    listedDate: "2023-06-20"
  },
  {
    ngoName: "Community Development Foundation",
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
