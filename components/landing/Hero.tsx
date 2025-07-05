'use client';
import React from 'react';
import { motion } from 'motion/react';
import hourglass from '@/assests/hoursglassdark.png';
import { libre_baskerville, libre_caslon_display } from '@/lib/fonts';
import Image from 'next/image';
const questions = [
  {
    q: 'What is Hustlers Alliance ?',
    a: 'Hustlers Alliance is a 63-day system designed to help you build discipline, clarity, and momentum one day at a time.'
  },
  {
    q: 'Why Hustlers Alliance ?',
    a: 'Consistency is harder than motivation. Most challenges are loud at the start and dead by Day 5. Planning doesn\'t mean progress. And hustle without structure burns out.'
  },
  {
    q: 'What\'s special with Hustlers Alliance ?',
    a: 'Hustlers Alliance isn\'t just a planner it\'s a structured journey. We\'ve divided the entire experience into 3 powerful phases, each lasting 21 days. Every phase is designed to progressively challenge you, build momentum, and sharpen your mindset.'
  }
];

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[60vh] bg-[#E9E5D8] dark:bg-[#292929] px-16 mt-40 pt-8 pb-0 overflow-hidden">
      <div className="flex-1 flex flex-col gap-8 z-10 max-w-2xl pt-8">
        {questions.map((item, idx) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="mb-2"
          >
            <div className={`italic text-3xl md:text-4xl mb-2 ${libre_caslon_display.className} text-[#292929] dark:text-[#E9E5D8]`}>{item.q}</div>
            <div className={`text-base md:text-lg ${libre_baskerville.className} text-[#292929] dark:text-[#E9E5D8]`}>{item.a}</div>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 flex items-end justify-end relative">
        <Image
          src={hourglass}
          alt="Hourglass"
          className="w-3/4 max-w-lg top-30 -left-52 pacity-90 pointer-events-none select-none right-0 bottom-0"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
}
