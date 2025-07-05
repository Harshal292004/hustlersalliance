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
    <div className="flex flex-row w-full h-auto bg-[#E9E5D8] dark:bg-[#292929] px-16 mt-40 pt-8 pb-0 overflow-hidden">
      <div className="flex-1 flex flex-col gap-16 z-10 max-w-2xl pt-8">
        {/* questions */}
        {questions.map((item, idx) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="mb-4"
          >
            <div
           className={`tracking-wider italic text-6xl mb-6 ${libre_baskerville.className} font-medium text-[#292929] dark:text-[#E9E5D8] leading-[1.15]`}
           >
              {item.q}
            </div>
            <div
              className={`tracking-wide text-4xl ${libre_caslon_display.className} font-light text-[#292929] dark:text-[#E9E5D8] leading-tight`}
            >
              {item.a}
            </div>
          </motion.div>
        ))}
        
        {/* chapter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${libre_caslon_display.className} tracking-wide flex flex-col gap-8`}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-8xl"
          >
            CHAPTER 1
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-light text-7xl"
          >
            The Mirror
          </motion.h2>
          <motion.p className="font-light text-4xl leading-snug">
            Look in the mirror...<br /> 
            That's the only person between where you are and where you want to be.
          </motion.p>
          <motion.p className="font-light text-4xl leading-snug">
            It's not your boss. Not your parents. Not the people who doubted you.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-8xl mt-2"
          >
            JUST. YOU.
          </motion.h1>
        </motion.div>
      </div>
      
      <div className="flex-1 relative">
        <Image
          src={hourglass}
          alt="Hourglass"
          className="absolute w-[110%] max-w-none top-36 -right-[500px] pointer-events-none select-none z-0"
        />
      </div>
    </div>
  );
};