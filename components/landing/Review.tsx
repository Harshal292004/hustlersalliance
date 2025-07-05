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
    <motion.div className="flex flex-col gap-4 rounded-xl border-2 border-[#292929]  p-6 text-[#292929] w-full max-w-md">
      <div className="flex items-center gap-4">
        {src ? (
          <Image
            alt={`review-${name}`}
            src={src}
            width={32}
            height={32}
            className="rounded-full w-8 h-8 object-cover"
          />
        ) : (
          <div className="w-8 h-8 bg-[#292929] rounded-full" />
        )}
        <p className={`${libre_baskerville.className} text-base font-medium`}>
          {name}
        </p>
        <span className="text-2xl">•</span>
        <p className="text-base">{ratings}/5</p>
      </div>
      <p
        className={`${libre_caslon_display.className} text-lg leading-relaxed font-light`}
      >
        {review}
      </p>
    </motion.div>
  );
};

export default Review;
