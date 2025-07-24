"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { libre_caslon_display } from '@/lib/fonts';
import Copyright from '@/components/Copyright';
import { useSupabaseUser } from '@/lib/hooks/useSupabaseUser';

type leader_user={
  name:string
  current_rank:number
  points: number
  level: string
}

const LeaderRow = ({ user, rowKey }: { user: leader_user; rowKey: number }) => {
  return (
    <motion.div
      className={`grid grid-cols-4 items-center px-4 py-3 rounded-lg ${
        rowKey % 2 === 0
          ? "bg-[#f5f5f5] dark:bg-[#232323]"
          : "bg-[#e9e5d8]/60 dark:bg-[#292929]/60"
      } hover:scale-[1.01] transition-transform`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: rowKey * 0.05 }}
    >
      <span className="font-bold text-lg text-[#292929] dark:text-[#E9E5D8] text-center">{user.current_rank}</span>
      <span className="font-semibold text-[#292929] dark:text-[#E9E5D8] text-center">{user.name || "—"}</span>
      <span className="text-[#292929] dark:text-[#E9E5D8] text-center">{user.points}</span>
      <span className="text-[#292929] dark:text-[#E9E5D8] text-center">{user.level || "—"}</span>
    </motion.div>
  );
};

const page = () => {
  const leaderboard: [leader_user] = [
    {
      name: "",
      current_rank: 3,
      points: 100,
      level: ""
    }
  ];

  const { user, error, loading } = useSupabaseUser();

  return (
    <div className="flex flex-col min-h-screen bg-[#E9E5D8] dark:bg-[#292929]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`mt-20 mb-8 flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        LEADERBOARD
      </motion.div>

      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-8 text-xl">
          <div>
            <span className="font-semibold">Best Rank:</span>{" "}
            <span className="font-bold">{user?.best_rank ?? "—"}</span>
          </div>
          <div>
            <span className="font-semibold">Current Rank:</span>{" "}
            <span className="font-bold">{user?.current_rank ?? "—"}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto bg-white dark:bg-[#232323] rounded-xl shadow-lg p-0 overflow-hidden">
        <div className="grid grid-cols-4 bg-[#292929] dark:bg-[#E9E5D8] text-[#E9E5D8] dark:text-[#292929] font-extrabold text-lg py-3 px-4">
          <span className="text-center">Rank</span>
          <span className="text-center">Name</span>
          <span className="text-center">Points</span>
          <span className="text-center">Level</span>
        </div>
        <div>
          {leaderboard.map((lu, index) => (
            <LeaderRow user={lu} rowKey={index} key={index} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Copyright />
      </div>
    </div>
  );
};

export default page;