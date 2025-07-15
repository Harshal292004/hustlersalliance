"use client";
import { motion } from "framer-motion";
import clock from "@/assests/clock.png";
import { libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";
import gear from "@/assests/gears.png";
export const DashHero = () => {
  return (
    <div className="flex p-4 justify-start  w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-4 sm:px-6 md:px-8 lg:px-16  pt-8 pb-0">
      <Image
        className="absolute top-96  -right-56 w-[28%] overflow-hidden"
        src={gear}
        alt="gear-1"
      ></Image>
      <Image
        className="absolute -bottom-[500px]  -right-56 w-[25%] overflow-hidden"
        src={gear}
        alt="gear-2"
      ></Image>
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
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Your Chapter
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          The Mirror
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Latest Test Score
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          Nil
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Best Test Score
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          Nil
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Leader Board Rank
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          5/100
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Best Rank
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"
        >
          3/200
        </motion.h2>
      </motion.div>
    </div>
  );
};
