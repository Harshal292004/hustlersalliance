"use client";

import { Button } from "@/components/ui/Button";
import { Laptop, Moon, Sun } from "lucide-react";
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

  const ICON_SIZE = 16;

  return (
    <Button onClick={(e)=>{e.preventDefault(); setTheme(prev=> prev==="dark"?"light":"dark")}}>
      {theme === "light" ? (
        <Sun key="light" size={ICON_SIZE} className={"text-muted-foreground"} />
      ) : theme === "dark" ? (
        <Moon key="dark" size={ICON_SIZE} className={"text-muted-foreground"} />
      ) : (
        <Laptop
          key="system"
          size={ICON_SIZE}
          className={"text-muted-foreground"}
        />
      )}
    </Button>
  );
};

export { ThemeSwitcher };
