import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <ThemeProvider>
      {" "}
      {/* Ensure the ThemeProvider wraps the components that use theme values. */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Home</h1>
        {/* Ensure your images are correctly served. If "/vercel.svg" is static, place it in the public folder. */}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>{" "}
        {/* Added for theme toggling */}
      </div>
    </ThemeProvider>
  );
}
