"use client";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import theme from "tailwindcss/defaultTheme";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        variant={"default"}
        className="p-2 rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default ModeSwitch;
