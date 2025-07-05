"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // The url which will be included in the email. This URL needs to be configured in your redirect URLs in the Supabase dashboard at https://supabase.com/dashboard/project/_/auth/url-configuration
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto", className)} {...props}>
      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-semibold text-[#292929] dark:text-[#E9E5D8] mb-2">
              Check Your Email
            </div>
            <div className="text-sm sm:text-base text-[#292929] dark:text-[#E9E5D8] mb-4">
              Password reset instructions sent
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8] text-center">
              If you registered using your email and password, you will receive
              a password reset email.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <div className="text-xl sm:text-2xl font-semibold text-[#292929] dark:text-[#E9E5D8] mb-2">
              Reset Your Password
            </div>
            <div className="text-sm sm:text-base text-[#292929] dark:text-[#E9E5D8]">
              Type in your email and we&apos;ll send you a link to reset your
              password
            </div>
          </div>
          <div>
            <form onSubmit={handleForgotPassword} className="w-full">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="grid gap-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#292929] dark:border-[#E9E5D8] rounded-md bg-[#E9E5D8] dark:bg-[#292929] text-[#292929] dark:text-[#E9E5D8] placeholder-[#292929] dark:placeholder-[#E9E5D8] focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] transition-all"
                  />
                </div>
                {error && <p className="text-xs sm:text-sm text-red-500 text-center">{error}</p>}
                <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset email"}
                </Button>
              </div>
              <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8]">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4 hover:no-underline transition-all"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
