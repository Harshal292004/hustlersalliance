"use client";
import { motion } from "motion/react";
import clock from "@/assests/clock.png";
import { libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";

export const Chapter2 = () => {
  return (
    <div className="border-t-8 border-black  flex flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-16 mt-40 pt-8 pb-0 overflow-hidden">
       <div className="flex-1 relative">
        <Image
          src={clock}
          alt="clock"
          className="absolute w-[90%] max-w-none -top-72 -left-[500px] pointer-events-none select-none z-0"
        />
      </div>
      <div className="flex-1 flex flex-col gap-16 z-10 max-w-2xl pt-8">
        {/* chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${libre_caslon_display.className} tracking-wide  flex flex-col gap-8`}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-8xl"
          >
            CHAPTER 2
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-7xl"
          >
            You vs You
          </motion.h2>
          <motion.p className="font-light text-6xl leading-snug">
            It's not them. It's not life. It's not luck. It's you.
            <br />
            Your doubt. Your delay. Your choice. No one’s in the way except you.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-8xl mt-4"
          >
            SO MOVE.
            <br/>
            OR STAY THE SAME.
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};
