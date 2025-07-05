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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={` font-bold flex items-center justify-start  ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full  h-48  text-8xl`}
      >
        <motion.h1 className="ml-16">CHAPTER 3</motion.h1>
      </motion.div>
      <div className="flex flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-16 pt-8 pb-0 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-8`}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-light text-7xl"
          >
            The Beast Mode
          </motion.h2>

          <motion.p className="font-light text-4xl leading-snug">
            42 days in. The excuses are gone.
            <br />
            The doubt is quiet. The discipline is built.
          </motion.p>

          <motion.p className="font-light text-4xl leading-snug mt-6">
            This chapter isn't about starting. It's about domination.
          </motion.p>

          <motion.p className="font-light text-4xl leading-snug mt-6">
            Everything from here is output.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-7xl mt-8"
          >
            YOU DON'T TRY ANYMORE.
            <br />
            YOU JUST DO IT.
          </motion.h1>
        </motion.div>

        <div className="flex-1 relative overflow-visible">
          <Image
            src={flame}
            alt="flame"
            className="absolute w-[80%] max-w-none -top-[360px] left-[500px] tpointer-events-none select-none z-0"
          />
        </div>
      </div>
    </div>
  );
};

export { Chapter3 };
