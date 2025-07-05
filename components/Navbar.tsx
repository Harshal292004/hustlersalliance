"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { libre_baskerville } from "@/lib/fonts";
import { Button } from "./ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";

import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./auth/Logout-button";
import { useRouter } from "next/navigation";
const links = [
  { label: "About Us", target: "about-us" },
  { label: "Reviews", target: "reviews" },
  { label: "Purchase", target: "purchase" },
  { label: "Contact Us", target: "contact_us" },
];

export function Navbar({ id }: { id?: string }) {
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const routeTo = ({ href }: { href: string }) => {
    router.push(href);
  };

  useEffect(() => {
    setMounted(true);
    const supabase = createClient();

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user ? { email: user.email } : null);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_evt, session) => {
      setUser(session?.user ? { email: session.user.email } : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      id={id}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`${libre_baskerville.className} fixed top-0 z-50 w-full bg-[#E9E5D8] dark:bg-[#292929]`}
    >
      <nav className="mx-auto flex h-40 w-full items-center justify-around">
        <div className="text-5xl font-bold leading-tight select-none">
          Hustlers <br /> Alliance
        </div>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Button
              key={l.target}
              variant="underline"
              onClick={() => scrollToSection({ element_id: l.target })}
              className="text-2xl"
            >
              {l.label}
            </Button>
          ))}

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Hey, {user.email}!
              </span>
              <LogoutButton />
            </div>
          ) : (
            <>
              <Button
                variant="solid"
                className="p-6 text-2xl w-24 h-10"
                onClick={() => {
                  routeTo({ href: "/auth/login" });
                }}
              >
                Login
              </Button>
              <Button
                className="p-6 text-2xl w-28 h-10"
                onClick={() => {
                  routeTo({ href: "/auth/sign-up" });
                }}
              >
                Signup
              </Button>
            </>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
