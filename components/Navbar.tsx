"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { libre_baskerville } from "@/lib/fonts";
import { Button } from "./ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";
import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./auth/Logout-button";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About Us", target: "about-us" },
  { label: "Reviews", target: "reviews" },
  { label: "Purchase", target: "purchase" },
  { label: "Contact Us", target: "contact_us" },
];

export function Navbar({ id }: { id?: string }) {
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const routeTo = ({ href }: { href: string }) => {
    router.push(href);
    setIsMobileMenuOpen(false);
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
      className={`${libre_baskerville.className} fixed top-0 z-50 w-full bg-[#E9E5D8] dark:bg-[#292929] shadow-sm`}
    >
      <nav className="mx-auto flex h-16 sm:h-20 md:h-24 lg:h-36 w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight select-none"
        >
          <span className="block sm:inline">Hustlers</span>
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline">Alliance</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {links.map((l) => (
            <motion.div
              key={l.target}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="underline"
                onClick={() => scrollToSection({ element_id: l.target })}
                className="text-lg xl:text-[30px] leading-8"
              >
                {l.label}
              </Button>
            </motion.div>
          ))}

          {user ? (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground hidden xl:block">
                Hey, {user.email}!
              </span>
              <LogoutButton />
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 xl:gap-4"
            >
              <Button
                variant="solid"
                className="px-4 py-2 text-sm xl:text-[30px] leading-8 w-20 xl:w-28 h-8 xl:h-10"
                onClick={() => routeTo({ href: "/auth/login" })}
              >
                Login
              </Button>
              <Button
                className="px-4 py-2 text-sm xl:text-[30px] leading-8 w-24 xl:w-32 h-8 xl:h-10"
                onClick={() => routeTo({ href: "/auth/sign-up" })}
              >
                Signup
              </Button>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#292929] dark:text-[#E9E5D8]" />
          ) : (
            <Menu className="h-6 w-6 text-[#292929] dark:text-[#E9E5D8]" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#E9E5D8] dark:bg-[#292929] border-t border-[#292929] dark:border-[#E9E5D8]"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {links.map((l, index) => (
                <motion.div
                  key={l.target}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant="underline"
                    onClick={() => {
                      scrollToSection({ element_id: l.target });
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg w-full justify-start"
                  >
                    {l.label}
                  </Button>
                </motion.div>
              ))}

              {/* Mobile Auth Section */}
              {user ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-[#292929] dark:border-[#E9E5D8]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      Hey, {user.email}!
                    </span>
                  </div>
                  <LogoutButton />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-[#292929] dark:border-[#E9E5D8] space-y-3"
                >
                  <Button
                    variant="solid"
                    className="w-full text-lg"
                    onClick={() => routeTo({ href: "/auth/login" })}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full text-lg"
                    onClick={() => routeTo({ href: "/auth/sign-up" })}
                  >
                    Signup
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
