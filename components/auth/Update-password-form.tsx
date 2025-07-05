"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto", className)} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <div className="text-xl sm:text-2xl font-semibold text-[#292929] dark:text-[#E9E5D8] mb-2">
            Update Your Password
          </div>
          <div className="text-sm sm:text-base text-[#292929] dark:text-[#E9E5D8]">
            Enter your new password below
          </div>
        </div>
        <form onSubmit={handleForgotPassword} className="w-full">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="grid gap-2">
              <input
                id="password"
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#292929] dark:border-[#E9E5D8] rounded-md bg-[#E9E5D8] dark:bg-[#292929] text-[#292929] dark:text-[#E9E5D8] placeholder-[#292929] dark:placeholder-[#E9E5D8] focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] transition-all"
              />
            </div>
            {error && <p className="text-xs sm:text-sm text-red-500 text-center">{error}</p>}
            <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save new password"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
