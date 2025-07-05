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
      "Every day felt more focused. Hustlers gave me a roadmap I didn’t have before.",
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-40 text-8xl`}
      >
        REVIEWS
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
        {reviews.map((review, i) => (
          <Review {...review} key={i} />
        ))}
      </div>
    </div>
  );
};
