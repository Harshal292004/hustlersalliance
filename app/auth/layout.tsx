"use client";
import { motion } from "framer-motion";
import { libre_baskerville } from "@/lib/fonts";

// layout.tsx
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`${libre_baskerville.className} flex justify-start p-5 fixed top-0 w-full z-50 bg-transparent`}
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight select-none p-8"
        >
          Hustlers <br /> Alliance
        </motion.div>
      </motion.header>

      {children}
    </>
  );
};

export default layout;
