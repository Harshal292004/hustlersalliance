"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { libre_baskerville } from "@/lib/fonts";

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onDragOver"
    | "onDragEnter"
    | "onDragLeave"
    | "onDrop"
    | "draggable"
  > {
  variant?: "solid" | "outline" | "ghost" | "underline";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      type,
      size,
      children,
      onClick,
      tabIndex,
      disabled,
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] focus:ring-offset-2 focus:ring-offset-[#E9E5D8] dark:focus:ring-offset-[#292929]";

    const variants: Record<string, string> = {
      solid:
        "rounded-lg bg-[#292929] text-[#E9E5D8] dark:bg-[#E9E5D8] dark:text-[#292929] hover:bg-[#1a1a1a] dark:hover:bg-[#f5f5f0] shadow-sm",
      outline: "rounded-md border-2 border-[#292929] dark:border-[#E9E5D8] text-[#292929] dark:text-[#E9E5D8] hover:bg-[#292929] hover:text-[#E9E5D8] dark:hover:bg-[#E9E5D8] dark:hover:text-[#292929]",
      ghost:
        "rounded-md text-[#292929] dark:text-[#E9E5D8] hover:bg-[#292929]/10 dark:hover:bg-[#E9E5D8]/10",
      underline: "relative text-[#292929] dark:text-[#E9E5D8] group hover:text-[#1a1a1a] dark:hover:text-[#f5f5f0]",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3 text-xs sm:text-sm",
      md: "h-10 px-4 text-sm sm:text-base",
      lg: "h-12 px-6 text-base sm:text-lg",
      xl: "h-14 px-8 text-lg sm:text-xl",
      icon: "h-10 w-10",
    };

    const _variant = variant ? variants[variant] : variants["solid"];
    const _size = size ? sizes[size] : sizes["md"];
    
    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        tabIndex={tabIndex}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(libre_baskerville.className, base, _variant, _size, className)}
      >
        <span className="relative inline-block">
          {children}
          {variant === "underline" && (
            <span
              className="pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 rounded-full bg-current transition-transform duration-300 group-hover:scale-x-100"
            />
          )}
        </span>
      </motion.button>
    );
  }
);
