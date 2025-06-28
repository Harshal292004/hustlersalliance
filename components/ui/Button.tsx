import React from "react";
import { libre_baskerville } from "@/lib/fonts";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot"
const buttonVariants = cva(
  // Moved font class out of the main string template
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-[#292929] dark:bg-[#E9E5D8] text-[#E9E5D8] dark:text-[#292929] hover:bg-[#292929]/90 dark:hover:bg-[#E9E5D8]/90 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg",
        outline:
          "rounded-md border border-[#292929] dark:border-[#E9E5D8] text-[#292929] dark:text-[#E9E5D8] hover:bg-[#292929]/10 dark:hover:bg-[#E9E5D8]/10 hover:scale-[1.03] active:scale-[0.98]",
        underline:
          "underline-offset-4 hover:underline text-[#292929] dark:text-[#E9E5D8] hover:text-opacity-80 active:text-opacity-60",
        ghost:
          "rounded-md text-[#292929] dark:text-[#E9E5D8] dark:hover:bg-[#E9E5D8]/10 hover:bg-[#292929]/10 hover:scale-[1.03] active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2 text-base",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = 
React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size,asChild = false,...props  }
    , 
    ref
  ) => {

    const Comp= asChild ?Slot :"button"
    return (
      <Comp
        className={cn(
          libre_baskerville.className,
          buttonVariants({ variant, size }),
          className
        )}
        ref={ref}

        {...props}
      />
    );

  }
);

export { Button, buttonVariants };
