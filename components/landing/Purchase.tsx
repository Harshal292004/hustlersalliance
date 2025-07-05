"use client";
import { motion } from "motion/react";
import { libre_caslon_display  } from "@/lib/fonts";

export const Purchase = ({ id }: { id: string }) => {
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
        PURCHASE
      </motion.div>
      <div className={` ${libre_caslon_display.className} font-light mt-6 flex flex-row  items-center justify-center gap-4 text-4xl text-[#292929] dark:text-[#E9E5D8] p-8`}>
          <div>🛒 Amazon</div>
          <div>✉️ <a href="mailto:firstrule@gmail.com" className="underline">firstrule@gmail.com</a></div>
          <div>📞 87884603309</div>
        </div>

    </div>
  );
};






