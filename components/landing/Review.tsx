import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { libre_baskerville, libre_caslon_display } from "@/lib/fonts";

const Review = ({
  src,
  name,
  review,
  ratings,
}: {
  src?: string;
  name: string;
  review: string;
  ratings: number;
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-3 sm:gap-4 rounded-xl border-2 border-[#292929] dark:border-[#E9E5D8] p-4 sm:p-6 text-[#292929] dark:text-[#E9E5D8] w-full max-w-md bg-[#E9E5D8] dark:bg-[#292929] shadow-sm"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {src ? (
          <Image
            alt={`review-${name}`}
            src={src}
            width={32}
            height={32}
            className="rounded-full w-6 h-6 sm:w-8 sm:h-8 object-cover"
          />
        ) : (
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#292929] dark:bg-[#E9E5D8] rounded-full" />
        )}
        <p className={`${libre_baskerville.className} text-sm sm:text-base font-medium`}>
          {name}
        </p>
        <span className="text-lg sm:text-2xl">•</span>
        <p className="text-sm sm:text-base">{ratings}/5</p>
      </div>
      <p
        className={`${libre_caslon_display.className} text-sm sm:text-base lg:text-lg leading-relaxed font-light`}
      >
        {review}
      </p>
    </motion.div>
  );
};

export default Review;
