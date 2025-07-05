"use client";
import { motion } from "framer-motion";
import clock from "@/assests/clock.png";
import { libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";

export const Chapter2 = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-4 sm:px-6 md:px-8 lg:px-16 mt-20 sm:mt-24 md:mt-32 lg:mt-40 pt-8 pb-0">
      <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[770px] flex-1 relative overflow-visible order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={clock}
            alt="clock"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto lg:absolute lg:w-[80%] lg:max-w-none lg:-top-72 lg:-left-[350px] pointer-events-none select-none z-0"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-4 sm:gap-6 lg:gap-6 order-1 lg:order-2`}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          CHAPTER 2
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          You vs You
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug"
        >
          It's not them. It's not life. It's not luck.
          <br />
          It's you.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug mt-2 sm:mt-4"
        >
          Your doubt. Your delay. Your choice.
          <br />
          No one's in the way except you.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4"
        >
          SO MOVE.
          <br />
          OR STAY THE SAME.
        </motion.h1>
      </motion.div>
    </div>
  );
};
