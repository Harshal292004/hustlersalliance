'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import fire from '@/assests/fire.png';

export const Chapter3 = () => {
  const fireRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fireRef.current) {
      gsap.fromTo(
        fireRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[40vh] w-full bg-[#F6F0E6] dark:bg-[#292929] px-6 py-12 overflow-hidden border-t border-[#292929]/10 dark:border-[#E9E5D8]/10">
      <div ref={textRef} className="z-10 max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-[#292929] dark:text-[#E9E5D8]"
        >
          CHAPTER 3
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-[#292929] dark:text-[#E9E5D8] mb-2"
        >
          The Beast Mode
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-lg text-[#292929] dark:text-[#E9E5D8]"
        >
          42 days in. The excuses are gone. The doubt is quiet. The discipline is built. This chapter isn't about starting. It's about domination. Everything from here is output. You don't try anymore. You just do it.
        </motion.p>
      </div>
      <img
        ref={fireRef}
        src={fire.src}
        alt="Fire"
        className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-80 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
    </section>
  );
}
