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
  size?: "sm" | "md" | "lg" | "icon";
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
      "inline-flex items-center justify-center gap-2 font-medium transition-colors";

    const variants: Record<string, string> = {
      solid:
        "rounded-lg bg-[#292929] text-[#E9E5D8] dark:bg-[#E9E5D8] dark:text-[#292929]",
      outline: "rounded-md border border-current text-current",
      ghost:
        "rounded-md text-current hover:bg-current/10 dark:hover:bg-current/10",
      underline: "relative text-current group",
    };

    const sizes: Record<string, string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-4 px-3 text-xl",
      lg: "h-12 px-8 text-lg",
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
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(libre_baskerville.className,base, _variant, _size, className)}
      >
        <span className="relative inline-block">
          {children}
          {variant == "underline" && (
            <span
              className="pointer-events-none absolute left-0 right-0 -bottom-1 h-1 w-full origin-left scale-x-0 rounded-full bg-current transition-transform duration-1000 group-hover:scale-x-100"
            />
          )}
        </span>
      </motion.button>
    );
  }
);
