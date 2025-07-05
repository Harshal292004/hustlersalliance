"use client";
import React from "react";
import { motion } from "framer-motion";
import hourglass from "@/assests/hoursglassdark.png";
import { libre_baskerville, libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";

const questions = [
  {
    q: "What is Hustlers Alliance ?",
    a: "Hustlers Alliance is a 63-day system designed to help you build discipline, clarity, and momentum one day at a time.",
  },
  {
    q: "Why Hustlers Alliance ?",
    a: "Consistency is harder than motivation. Most challenges are loud at the start and dead by Day 5. Planning doesn't mean progress. And hustle without structure burns out.",
  },
  {
    q: "What's special with Hustlers Alliance ?",
    a: "Hustlers Alliance isn't just a planner it's a structured journey. We've divided the entire experience into 3 powerful phases, each lasting 21 days. Every phase is designed to progressively challenge you, build momentum, and sharpen your mindset.",
  },
];

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-4 sm:px-6 md:px-8 lg:px-16 mt-16 sm:mt-20 md:mt-24 lg:mt-40 pt-8 pb-0 overflow-hidden">
      <div className="flex-1 flex flex-col gap-8 sm:gap-12 lg:gap-16 z-10 max-w-2xl pt-4 lg:pt-8">
        {/* questions */}
        {questions.map((item, idx) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="mb-4"
          >
            <div
              className={`tracking-wider italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 ${libre_baskerville.className} font-medium text-[#292929] dark:text-[#E9E5D8] leading-[1.15]`}
            >
              {item.q}
            </div>
            <div
              className={`tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${libre_caslon_display.className} font-light text-[#292929] dark:text-[#E9E5D8] leading-tight`}
            >
              {item.a}
            </div>
          </motion.div>
        ))}
        
        {/* chapter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-4 sm:gap-6 lg:gap-8`}
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            CHAPTER 1
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            The Mirror
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug"
          >
            Look in the mirror...<br /> 
            That's the only person between where you are and where you want to be.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug"
          >
            It's not your boss. Not your parents. Not the people who doubted you.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2"
          >
            JUST. YOU.
          </motion.h1>
        </motion.div>
      </div>
      
      <div className="flex-1 relative mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={hourglass}
            alt="Hourglass"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto lg:absolute lg:w-[110%] lg:max-w-none lg:top-36 lg:-right-[500px] pointer-events-none select-none z-0"
          />
        </motion.div>
      </div>
    </div>
  );
};