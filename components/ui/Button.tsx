"use client";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { libre_baskerville } from "@/lib/fonts";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-medium transition-colors",
  {
    variants: {
      variant: {
        solid:
          "rounded-lg bg-[#292929] text-[#E9E5D8] dark:bg-[#E9E5D8] dark:text-[#292929]",
        outline:
          "rounded-md border border-current dark:border-current text-current",
        ghost:
          "rounded-md text-current hover:bg-current/10 dark:hover:bg-current/10",
        underline: "text-current",
      },
      size: {
        default: "h-8 px-3 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragOver' | 'onDragEnter' | 'onDragLeave' | 'onDrop' | 'draggable'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, type, onClick, disabled, tabIndex, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(
            libre_baskerville.className,
            buttonVariants({ variant, size }),
            className
          )}
          {...props}
        >
          {children}
        </Slot>
      );
    }
    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        tabIndex={tabIndex}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          libre_baskerville.className,
          buttonVariants({ variant, size }),
          className
        )}
      >
        {children}
        {variant === "underline" && (
          <motion.span
            aria-hidden
            className="absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left bg-current"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
