"use client";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button 
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.preventDefault(); 
          setTheme(prev => prev === "dark" ? "light" : "dark");
        }}
        className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? (
            <Moon size={20} className="sm:w-7 sm:h-7 text-[#292929] dark:text-[#E9E5D8]" />
          ) : (
            <Sun size={20} className="sm:w-7 sm:h-7 text-[#E9E5D8] dark:text-[#292929]" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export { ThemeSwitcher };