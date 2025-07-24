"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import z from "zod";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { libre_baskerville, libre_caslon_display } from "@/lib/fonts";

const codeRegex = /^[ABCDEFGHJKMNPQRSTUVWXY]{3}-[2-9]{2}[ABCDEFGHJKMNPQRSTUVWXY]$/;
const nameRegex = /^[A-Za-z\s]+$/;
const usernameRegex = /^[a-z0-9_]+$/;
const passwordRegex = /^[A-Za-z0-9]{6,}$/;

const schema = z
  .object({
    bookCode: z.string().regex(codeRegex, "Enter a valid book code"),
    name: z.string().regex(nameRegex, "Name can only contain letters"),
    username: z.string().regex(usernameRegex, "Invalid username"),
    email: z.string().email("Invalid email"),
    password: z.string().regex(passwordRegex, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export function SignUpForm() {
  const [bookCode, setBookCode] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      bookCode,
      name,
      username,
      email,
      password,
      confirmPassword,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("User data", parsed.data);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-2 text-[#292929] dark:text-[#E9E5D8]">
        <motion.h1
          className={`${libre_baskerville.className} text-4xl md:text-5xl text-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Begin Your 63-Day Journey.
        </motion.h1>
        <motion.p
          className={`${libre_caslon_display.className} font-thin text-4xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Build discipline. Build you.
        </motion.p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full max-w-2xl text-[#292929] dark:text-[#E9E5D8] mt-2"
      >
        <div className={`${libre_baskerville.className} text-center text-[40px]`}>
          Sign Up
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="bookCode"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Book Code
              </label>
              <input
                id="bookCode"
                type="text"
                placeholder="AOP-42I"
                required
                value={bookCode}
                onChange={(e) => setBookCode(e.target.value.toUpperCase())}
                className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md placeholder-[#292929]/30 dark:placeholder-[#E9E5D8]/30`}
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md placeholder-[#292929]/30 dark:placeholder-[#E9E5D8]/30`}
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="john_doe"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md placeholder-[#292929]/30 dark:placeholder-[#E9E5D8]/30`}
              />
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="email"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="mail@xyz.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md placeholder-[#292929]/30 dark:placeholder-[#E9E5D8]/30`}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className={`${libre_caslon_display.className} font-extrabold block mb-2 text-4xl`}
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${libre_caslon_display.className} font-bold w-full px-5 py-4 text-3xl border-[3px] bg-[#E9E5D8] dark:bg-[#292929] border-[#292929] dark:border-[#E9E5D8] rounded-md`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <Button
          className="w-full py-4 !text-2xl !font-semibold shadow-lg"
          variant="underline"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Continue"}
        </Button>
        <div className={`${libre_caslon_display.className} text-center text-2xl`}>
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
