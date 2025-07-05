"use client";
import { motion } from "motion/react";
import { libre_caslon_display, libre_baskerville } from "@/lib/fonts";

export const AboutUs = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="w-full bg-[#E9E5d8] dark:bg-[#292929] mt-10 mb-1"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        About Us
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${libre_caslon_display.className} p-6 sm:p-8 md:p-10 lg:p-14 flex items-center justify-center font-light mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#292929] dark:text-[#E9E5D8]`}
      >
        Just a fellow hustler
      </motion.p>
    </div>
  );
};
