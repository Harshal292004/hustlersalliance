import React from 'react'
import {motion} from 'framer-motion';
import { libre_caslon_display } from '@/lib/fonts';
import { createClient } from '@/lib/supabase/client';
import { useSupabaseUser } from '@/lib/hooks/useSupabaseUser';
type leader_user={
  name:string
  current_rank:number
  points: number
  level: string
}

const leader_row=({user,key}:{user:leader_user,key:number}):React.ReactNode=>{
  return (
    <motion.div className='rounded-md border-[#292929] flex-row justify-between' key={key}>
      <motion.p>
        {user.current_rank}
      </motion.p>
      <motion.p>
        {user.name}
      </motion.p>
      <motion.p>
        {user.points}
      </motion.p>
      <motion.p>
        {user.level}
      </motion.p>
    </motion.div>
  )
}
const page = () => {

  const leaderboard:[leader_user]=[
    {
      name:"",
      current_rank: 3,
      points: 100,
      level: ""
    }
  ];

  const {user,error,loading}= useSupabaseUser();

  return (
    <div className='flex flex-col m-0 p-0'>

     <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`mt-40 flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
        LEADERBOARD
      </motion.div>
      <motion.div>
        <motion.p>
          BestRank
        </motion.p>

        <motion.p>
          {user?.current_rank}
        </motion.p>

        <motion.p>
          Current Rank
        </motion.p>
        <motion.p>
          {user?.best_rank}
        </motion.p>
      </motion.div>


      <motion.div className=' border-[#292929] rounded-md p-3'>
        {
          leaderboard.map(
            (lu,index)=>{
              return (
                <leader_row user={lu} key={index}></leader_row>
              )
            }
          )
        }
      </motion.div>

    </div>
    
  )
}

export default page