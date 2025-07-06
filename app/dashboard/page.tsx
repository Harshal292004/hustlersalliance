"use client";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { libre_caslon_display } from "@/lib/fonts";
import { Button } from "@/components/ui/Button";
import { start_journey } from "@/actions/start_journey.actions";
import { DashHero } from "@/components/Dashhero";
type UserState = { email: string } | null;

export default function ProtectedPage() {
  const [user, setUser] = useState<UserState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const supabase = createClient();

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user && user.email ? { email: user.email } : null);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(
        session?.user && session.user.email
          ? { email: session.user.email }
          : null
      );
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!mounted || user === null) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`mt-40 flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        {!true? (
          <Button variant="ghost" className="" onClick={() => {start_journey()}}></Button>
        ) : (
           " 62 Days 23 hours 59 minutes 59 seconds"
        )}
      </motion.div>
      <DashHero></DashHero>
    </>
  );
}
