import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <div className={cn("min-h-screen w-full bg-white text-black flex ")}>
        <SideNavbar />
        <div className="p-8 w-full">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
