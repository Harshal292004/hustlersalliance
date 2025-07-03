"use client";
import { motion } from 'motion/react';
import { Title } from './Title';

export const Purchase = ({id}:{id:string}) => {
  return (
    <section id={id} className="w-full bg-[#F6F0E6] dark:bg-[#292929] px-6 py-16 border-t border-[#292929]/10 dark:border-[#E9E5D8]/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Title title="PURCHASE" />
        <div className="mt-6 flex flex-col items-center gap-4 text-lg md:text-2xl text-[#292929] dark:text-[#E9E5D8]">
          <div>🛒 Amazon</div>
          <div>✉️ <a href="mailto:firstrule@gmail.com" className="underline">firstrule@gmail.com</a></div>
          <div>📞 87884603309</div>
        </div>
      </motion.div>
    </section>
  );
}

