"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import zod from 'zod';

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 sm:gap-6 w-full max-w-md mx-auto")}>
      <form onSubmit={handleLogin} className="w-full">
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
            <div className="flex items-center">
              <Link
                href="/auth/forgot-password"
                className="ml-auto inline-block text-xs sm:text-sm underline-offset-4 hover:underline text-[#292929] dark:text-[#E9E5D8] transition-all"
              >
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#292929] dark:border-[#E9E5D8] rounded-md bg-[#E9E5D8] dark:bg-[#292929] text-[#292929] dark:text-[#E9E5D8] placeholder-[#292929] dark:placeholder-[#E9E5D8] focus:outline-none focus:ring-2 focus:ring-[#292929] dark:focus:ring-[#E9E5D8] transition-all"
            />
          </div>
          {error && <p className="text-xs sm:text-sm text-red-500">{error}</p>}
          <Button className="w-full text-sm sm:text-base py-2 sm:py-3" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </div>
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8]">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="underline underline-offset-4 hover:no-underline transition-all"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
