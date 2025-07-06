"use client";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import z from "zod";
import { libre_baskerville, libre_caslon_display } from "@/lib/fonts";

const schema = z.object({
  identifier: z
    .string()
    .refine(
      (v) =>
        /^[a-z0-9_]+$/.test(v) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      {
        message:
          "Enter a valid email or a username",
      }
    ),
  password: z.string().min(1, "Password required"),
});


export function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ identifier, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    const supabase = createClient();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      });
      if (error) throw error;
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-2 text-[#292929] dark:text-[#E9E5D8] ">
        <motion.h1
          className={`${libre_baskerville.className} text-5xl md:text-6xl text-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome back, Hustler
        </motion.h1>
        <motion.p
          className={`${libre_caslon_display.className} font-thin text-4xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stay Consistent. One day at a time.
        </motion.p>
      </div>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-8 w-[90%] max-w-md text-[#292929] dark:text-[#E9E5D8] mt-2"
      >
        <div className={`${libre_baskerville.className} text-center text-5xl`}>
          Login
        </div>
        <div className="flex flex-col gap-6 mt-2">
          <div>
            <label
              htmlFor="identifier"
              className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
            >
              Email / Username
            </label>
            <input
              id="identifier"
              type="text"
              placeholder="mail@xyz.com or abc_098"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className={` ${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md placeholder-[#292929]/30 dark:placeholder-[#E9E5D8]/30`}
            />
          </div>

          <div>
            <div
              className={`${libre_caslon_display.className} font-extrabold text-4xl flex justify-between items-center mb-2`}
            >
              <label htmlFor="password">Password</label>
              <Link href="/auth/forgot-password" className="text-2xl underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={show ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={` ${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            className="w-full py-4 !text-2xl !font-semibold shadow-lg"
            variant="underline"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Continue"}
          </Button>
        </div>

        <div className={`${libre_caslon_display.className} text-center text-2xl`}>
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="font-medium underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
