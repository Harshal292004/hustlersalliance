"use client";
import React from "react";
import { libre_caslon_display } from "@/lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import flame from "@/assests/fire.png";

const Chapter3 = () => {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`font-bold flex items-center justify-start ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-24 sm:h-32 md:h-40 lg:h-48 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ml-4 sm:ml-8 md:ml-12 lg:ml-16"
        >
          CHAPTER 3
        </motion.h1>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-4 sm:px-6 md:px-8 lg:px-16 pt-8 pb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1`}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            The Beast Mode
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug"
          >
            42 days in. The excuses are gone.
            <br />
            The doubt is quiet. The discipline is built.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug mt-4 sm:mt-6"
          >
            This chapter isn't about starting. It's about domination.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug mt-4 sm:mt-6"
          >
            Everything from here is output.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-6 sm:mt-8"
          >
            YOU DON'T TRY ANYMORE.
            <br />
            YOU JUST DO IT.
          </motion.h1>
        </motion.div>

        <div className="flex-1 relative overflow-visible order-1 lg:order-2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src={flame}
              alt="flame"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto lg:absolute lg:w-[80%] lg:max-w-none lg:-top-[360px] lg:left-[500px] pointer-events-none select-none z-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Chapter3 };
