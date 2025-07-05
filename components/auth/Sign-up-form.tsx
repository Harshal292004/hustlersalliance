"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto", className)} {...props}>
      <form onSubmit={handleSignUp} className="w-full">
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
          <div className="grid gap-2">
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#292929] dark:border-[#E9E5D8] rounded-md bg-[#E9E5D8] dark:bg-[#292929] text-[#292929] dark:text-[#E9E5D8] placeholder-[#292929] dark:placeholder-[#E9E5D8] focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] transition-all"
            />
          </div>
          <div className="grid gap-2">
            <input
              id="repeat-password"
              type="password"
              placeholder="Confirm Password"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#292929] dark:border-[#E9E5D8] rounded-md bg-[#E9E5D8] dark:bg-[#292929] text-[#292929] dark:text-[#E9E5D8] placeholder-[#292929] dark:placeholder-[#E9E5D8] focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] transition-all"
            />
          </div>
          {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3" disabled={isLoading}>
            {isLoading ? "Creating an account..." : "Sign up"}
          </Button>
        </div>
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8]">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline underline-offset-4 hover:no-underline transition-all">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
