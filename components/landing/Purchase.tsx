"use client";
import { motion } from "motion/react";
import { libre_caslon_display } from "@/lib/fonts";

export const Purchase = ({ id }: { id: string }) => {
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
        PURCHASE
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${libre_caslon_display.className} font-light mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#292929] dark:text-[#E9E5D8] p-4 sm:p-6 md:p-8`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center sm:text-left"
        >
          🛒 Amazon
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center sm:text-left"
        >
          ✉️ <a href="mailto:firstrule@gmail.com" className="underline hover:no-underline transition-all">firstrule@gmail.com</a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center sm:text-left"
        >
          📞 87884603309
        </motion.div>
      </motion.div>
    </div>
  );
};






