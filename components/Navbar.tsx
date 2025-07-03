"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { libre_baskerville } from "@/lib/fonts";
import { Button } from "./ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./auth/Logout-button";

const links = [
  { label: "About Us", target: "about-us" },
  { label: "Reviews", target: "reviews" },
  { label: "Purchase", target: "purchase" },
  { label: "Contact Us", target: "contact_us" },
];

export function Navbar({ id }: { id?: string }) {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user ? { email: user.email } : null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_evt, session) => {
        setUser(session?.user ? { email: session.user.email } : null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Hey, {user.email}!
        </span>
        <LogoutButton />
      </div>
    );
  }

  return (
    <motion.header
      id={id}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`${libre_baskerville.className} fixed top-0 z-50 w-full bg-[#E9E5D8] dark:bg-[#292929]`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-around p-12">
        <div className="text-2xl font-bold leading-tight select-none">
          Hustlers
          <br />
          Alliance
        </div>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Button
              variant="underline"
              onClick={() => scrollToSection({ element_id: l.target })}
              className="transition-colors"
            >
              {l.label}
            </Button>
          ))}
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">Signup</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
