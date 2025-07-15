import React from "react";
import {motion} from 'framer-motion';
const Copyright = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 border-t border-[#292929] dark:border-[#E9E5D8] text-center"
    >
      <p className="text-base sm:text-lg text-[#292929] dark:text-[#E9E5D8] italic">
        © 2025 Hustlers Alliance. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Copyright;
