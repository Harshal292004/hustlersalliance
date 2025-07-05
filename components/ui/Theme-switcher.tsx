"use client";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button 
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.preventDefault(); 
        setTheme(prev => prev === "dark" ? "light" : "dark");
      }}
      className="rounded-full w-12 h-12 flex items-center justify-center"
    >
      {theme === "light" ? (
        <Moon size={28} className="text-[#292929]" />
      ) : (
        <Sun size={28} className="text-[#E9E5D8]" />
      )}
    </Button>
  );
};

export { ThemeSwitcher };