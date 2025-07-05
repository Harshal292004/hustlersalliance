"use client";
import { motion } from "framer-motion";
import clock from "@/assests/clock.png";
import { libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";

export const Chapter2 = () => {
  return (
    <div className="flex flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-16 mt-40 pt-8 pb-0 ">
      <div className="min-h-[770px] flex-1 relative overflow-visible">
        <Image
          src={clock}
          alt="clock"
          className="absolute w-[80%] max-w-none -top-72 -left-[350px] pointer-events-none select-none z-0"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-6`}
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
          className="font-light text-7xl"
        >
          You vs You
        </motion.h2>

        <motion.p className="font-light text-4xl leading-snug">
          It's not them. It's not life. It's not luck.
          <br />
          It's you.
        </motion.p>

        <motion.p className="font-light text-4xl leading-snug mt-4">
          Your doubt. Your delay. Your choice.
          <br />
          No one's in the way except you.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-7xl mt-4"
        >
          SO MOVE.
          <br />
          OR STAY THE SAME.
        </motion.h1>
      </motion.div>
    </div>
  );
};
