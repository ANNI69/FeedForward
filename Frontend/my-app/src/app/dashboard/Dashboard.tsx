/** @format */

import PageTitle from "@/components/PageTitle";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Modal from "@/components/Modal";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "",
    icon: Activity,
  },
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-5  w-full">
        <div className="flex justify-between items-center">
          <PageTitle title="Dashboard" />
          <Button
            onClick={() => {
              handleOpenModal();
            }}
            variant="ghost"
          >
            Add Food +{" "}
          </Button>
          <Modal show={showModal} onClose={handleCloseModal} />
        </div>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              discription={d.discription}
              icon={d.icon}
              label={d.label}
            />
          ))}
        </section>
        <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>

            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made 265 sales this month.
              </p>
            </section>
            {uesrSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent>

          {/*  */}
        </section>
      </div>
    </>
  );
}
