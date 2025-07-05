"use client";
import { motion } from "motion/react";
import { libre_caslon_display ,libre_baskerville } from "@/lib/fonts";
export const AboutUs = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="w-full bg-[#E9E5d8] dark:bg-[#292929] mt-10 mb-1"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-40 text-8xl`}
      >
        About Us
      </motion.div>
      <p className={` ${libre_caslon_display.className}  p-14  flex items-center justify-center font-light mt-6 text-4xl text-[#292929] dark:text-[#E9E5D8]`}>
        Just a fellow hustler
      </p>
    </div>
  );
};
