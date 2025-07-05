"use client";
import { motion } from "motion/react";
import { libre_caslon_display } from "@/lib/fonts";
import Review from "./Review";

const reviews = [
  {
    name: "TheHustler",
    ratings: 4.8,
    review:
      "I finished the challenge. My discipline shot up. The information is gold.",
  },
  {
    name: "TheGrinder",
    ratings: 4.9,
    review:
      "The best self-discipline book I have ever read. The structure is what I needed.",
  },
  {
    name: "TheAchiever",
    ratings: 4.7,
    review:
      "If you want to change your habits, this is the book. No-nonsense and real.",
  },
  {
    name: "TheClimber",
    ratings: 4.6,
    review:
      "Every day felt more focused. Hustlers gave me a roadmap I didn't have before.",
  },
  {
    name: "TheThinker",
    ratings: 5,
    review:
      "It stripped away fluff and left me with pure, useful insight. Rare these days.",
  },
  {
    name: "TheDoer",
    ratings: 4.85,
    review:
      "It finally clicked. Habits, goals, identity — all aligned after this.",
  },
];

export const Reviews = ({ id }: { id: string }) => {
  return (
    <div id={id} className="w-full bg-[#E9E5D8] dark:bg-[#292929] mb-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        REVIEWS
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-6 pb-8 sm:pb-10 md:pb-12"
      >
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Review {...review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
