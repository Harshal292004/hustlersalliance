'use client';
import React from 'react'
import { motion } from 'motion/react'
import { libre_caslon_display } from '@/lib/fonts'

export const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`flex flex-col items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-32 md:h-40 text-5xl md:text-7xl`}
    >
      <span>{title}</span>
      {subtitle && (
        <span className="text-lg md:text-2xl mt-2 text-[#E9E5D8]/80 dark:text-[#292929]/80">{subtitle}</span>
      )}
    </motion.div>
  )
}
