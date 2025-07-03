"use client";
import { motion } from 'motion/react';
import { Title } from './Title';

export const AboutUs = ({id}:{id:string}) => {
  return (
    <section id={id} className="w-full bg-[#F6F0E6] dark:bg-[#292929] px-6 py-16 border-t border-[#292929]/10 dark:border-[#E9E5D8]/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Title title="ABOUT US" />
        <p className="mt-6 text-lg md:text-2xl text-[#292929] dark:text-[#E9E5D8]">
          Just a fellow hustler
        </p>
      </motion.div>
    </section>
  );
}

