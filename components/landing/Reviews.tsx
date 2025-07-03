"use client";
import { motion } from 'motion/react';
import { Title } from './Title';

const reviews = [
  { name: 'TheHustler', rating: 4.8, text: 'I finished the challenge. My discipline shot up. The information is gold.' },
  { name: 'TheGrinder', rating: 4.9, text: 'The best self-discipline book I have ever read. The structure is what I needed.' },
  { name: 'TheAchiever', rating: 4.7, text: 'If you want to change your habits, this is the book. No-nonsense and real.' },
];

export const Reviews = ({id}:{id:string}) => {
  return (
    <section id={id} className="w-full bg-[#F6F0E6] dark:bg-[#292929] px-6 py-16 border-t border-[#292929]/10 dark:border-[#E9E5D8]/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <Title title="REVIEWS" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-[#292929] dark:bg-[#E9E5D8] text-[#E9E5D8] dark:text-[#292929] rounded-lg p-6 shadow-lg"
            >
              <div className="font-bold text-lg mb-2">{review.name}</div>
              <div className="mb-2">Rating: {review.rating} / 5</div>
              <div className="italic">{review.text}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

